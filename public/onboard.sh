#!/usr/bin/env bash
# Lobster Computer — new-machine seed.
#
#   curl -fsSL https://lobstercomputer.com/onboard.sh | bash
#
# This is the ONE thing that lives outside the ocean monorepo, because a
# factory-fresh Mac can't read the private repo until it authenticates.
# It is deliberately MINIMAL: only what's needed to reach the repo. The bulk of
# the install — Brewfile, runtimes, every tool you actually work with — lives in
# ocean/onboarding/bootstrap.sh and runs AFTER the clone, versioned with the code.
# No secrets here; `gh auth login` is the access gate.
set -euo pipefail

# 1. git (Xcode Command Line Tools) — GUI dialog on a fresh Mac.
if ! xcode-select -p >/dev/null 2>&1; then
  xcode-select --install
  echo "→ Finish the Xcode Command Line Tools dialog, then re-run this command."
  exit 0
fi

# 2. Homebrew.
if ! command -v brew >/dev/null 2>&1; then
  NONINTERACTIVE=1 /bin/bash -c \
    "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi
eval "$(/opt/homebrew/bin/brew shellenv)"

# 3. gh — the only tool the seed installs.
command -v gh >/dev/null 2>&1 || brew install gh

# 4. Authenticate. THIS is the gate — only lobsterco org members get past it.
gh auth status >/dev/null 2>&1 || gh auth login

# 5. Ask where to clone — interactive and required, no default.
#    Reads from /dev/tty so the prompt works under `curl ... | bash`.
OCEAN_DIR="${OCEAN_DIR:-}"
while [ -z "$OCEAN_DIR" ]; do
  [ -r /dev/tty ] || { echo "No TTY: re-run with OCEAN_DIR=/path set." >&2; exit 1; }
  read -r -p "Where should I clone ocean? (e.g. ~/work/ocean) " OCEAN_DIR </dev/tty || true
done
OCEAN_DIR="${OCEAN_DIR/#\~/$HOME}"   # expand a leading ~

# 6. Clone the monorepo and hand off to the real installer (the bulk lives there).
[ -d "$OCEAN_DIR" ] || gh repo clone lobsterco/ocean "$OCEAN_DIR"
exec "$OCEAN_DIR/onboarding/bootstrap.sh"

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

# 2. Homebrew. Reuse an existing install (any prefix); otherwise install
#    interactively so it can prompt for your sudo password via /dev/tty.
#    (Don't use NONINTERACTIVE=1 — it needs already-cached sudo and fails on a
#    fresh Mac with "needs to be an Administrator".)
if command -v brew >/dev/null 2>&1; then :
elif [ -x /opt/homebrew/bin/brew ]; then eval "$(/opt/homebrew/bin/brew shellenv)"
elif [ -x /usr/local/bin/brew ]; then eval "$(/usr/local/bin/brew shellenv)"
else
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" </dev/tty
  [ -x /opt/homebrew/bin/brew ] && eval "$(/opt/homebrew/bin/brew shellenv)"
fi

# 3. gh — the only tool the seed installs.
command -v gh >/dev/null 2>&1 || brew install gh

# 4. Authenticate. THIS is the gate — only lobsterco org members get past it.
gh auth status >/dev/null 2>&1 || gh auth login

# 5. Ask where to clone — prompt with a default (Enter accepts).
#    Reads from /dev/tty so the prompt works under `curl ... | bash`.
DEFAULT_DIR="$HOME/work/ocean"
if [ -z "${OCEAN_DIR:-}" ] && [ -r /dev/tty ]; then
  read -r -p "Clone ocean where? [$DEFAULT_DIR] " OCEAN_DIR </dev/tty || true
fi
OCEAN_DIR="${OCEAN_DIR:-$DEFAULT_DIR}"
OCEAN_DIR="${OCEAN_DIR/#\~/$HOME}"   # expand a leading ~

# 6. Clone the monorepo and hand off to the real installer (the bulk lives there).
if [ ! -d "$OCEAN_DIR" ]; then
  mkdir -p "$(dirname "$OCEAN_DIR")"   # create missing parent dirs, e.g. ~/work
  gh repo clone lobsterco/ocean "$OCEAN_DIR"
fi
exec "$OCEAN_DIR/onboarding/bootstrap.sh"

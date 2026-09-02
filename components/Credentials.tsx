// Provenance band — its own section above the team. Brand logos, optically
// balanced by per-mark height.
// dy: per-mark vertical nudge (px, +down) for optical centering. Apple's
// visual-mass centroid sits below the other marks' (its heavy rounded body
// pulls weight down while the thin leaf adds little), so it needs a small
// upward nudge to line its center of mass up with the rest of the row.
// Value measured: with dy=0 Apple's centroid renders ~1.6px below the median
// of the other four marks.
const BRANDS = [
  { name: "Apple", file: "brands/apple.svg", h: 25, dy: -1.6 },
  { name: "Facebook", file: "brands/facebook.svg", h: 24 },
  { name: "Uber", file: "brands/uber.svg", h: 32 },
  { name: "Airbnb", file: "brands/airbnb.svg", h: 26 },
  { name: "Y Combinator", file: "brands/ycombinator.svg", h: 19 },
  { name: "Reddit", file: "brands/reddit.svg", h: 23 },
];

export default function Credentials() {
  return (
    <section className="creds">
      <div className="creds-row">
        <div className="creds-label">Previously at</div>
        <div className="creds-logos creds-logos-brands">
          {BRANDS.map((b) => (
            <img
              key={b.name}
              src={b.file}
              alt={b.name}
              style={{
                height: b.h,
                transform: b.dy ? `translateY(${b.dy}px)` : undefined,
              }}
            />
          ))}
          <span className="creds-more">&amp; more</span>
        </div>
      </div>
      <div className="creds-row">
        <div className="creds-label">Backed by</div>
        <div className="creds-logos creds-logos-backer">
          <a
            className="backer-name"
            href="https://offline.vc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Offline Holdings
          </a>
        </div>
      </div>
      <div className="creds-row">
        <div className="creds-label">Supporting</div>
        <div className="creds-logos creds-logos-backer">
          <a
            className="backer-name"
            href="https://openclaw.ai/blog/introducing-openclaw-foundation"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenClaw Foundation
          </a>
        </div>
      </div>
    </section>
  );
}

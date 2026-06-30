// Provenance band — its own section above the team. Brand logos, optically
// balanced by per-mark height. Replace/extend with the full list.
// per-mark heights tuned for equal optical weight (the YC solid square reads
// heavy at a given height; the Uber wordmark reads light)
// per-mark heights tuned for equal optical weight (the Uber wordmark reads
// light, so it runs taller; the YC solid square reads heavy, so it runs shorter)
const BRANDS = [
    { name: "Apple", file: "brands/apple.svg", h: 25 },
    { name: "Uber", file: "brands/uber.svg", h: 32 },
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
                        <img key={b.name} src={b.file} alt={b.name} style={{ height: b.h }} />
                    ))}
                    <span className="creds-more">&amp; more</span>
                </div>
            </div>
            <div className="creds-row">
                <div className="creds-label">Backed by</div>
                <div className="creds-logos creds-logos-backer">
                    <a className="backer-name" href="https://offline.vc/" target="_blank" rel="noopener noreferrer">
                        Offline Ventures
                    </a>
                </div>
            </div>
        </section>
    );
}

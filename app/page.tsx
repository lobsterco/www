import Credentials from "@/components/Credentials";
import Team from "@/components/Team";
import { TEAM } from "@/data/team";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lobster Computer",
  legalName: "Lobster Computer Inc.",
  url: "https://lobstercomputer.com",
  email: "hello@lobstercomputer.com",
  description:
    "An engineering studio specializing in the harmony of intelligence, complex systems, and usability.",
  logo: "https://lobstercomputer.com/icon.svg",
  founder: TEAM.filter((m) => m.role === "Co-founder").map((m) => ({
    "@type": "Person",
    name: m.name,
    sameAs: m.linkedin,
  })),
};

export default function Home() {
  return (
    <div className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <div className="topbar">
        <span>Lobster Computer INC.</span>
      </div>

      <div className="layout">
        <main>
          <h1>
            <span className="w obs">obsessed</span>
            <br />
            <span className="w">engineering</span>
          </h1>

          <div className="blocks">
            <section>
              <p className="balance">
                Obsessed with beautiful products and emergent behaviors, we are
                an engineering studio specializing in the harmony of
                intelligence, complex systems, and usability.
              </p>
            </section>
          </div>
        </main>

        <Credentials />
        <Team />
      </div>

      <footer>
        <span>© 2026 Lobster Computer</span>
        <span className="note"></span>
        <a href="mailto:hello@lobstercomputer.com">hello@lobstercomputer.com</a>
      </footer>
    </div>
  );
}

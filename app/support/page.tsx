import type { Metadata } from "next";
import DocPage from "@/components/DocPage";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Reef and its integrations, including the Reef app for Zoom, from Lobster Computer Inc.",
  alternates: { canonical: "/support" },
};

export default function Support() {
  return (
    <DocPage title="Support" updated="July 15, 2026">
      <p className="lede">
        Need help with Reef or one of its integrations? We’re a small team and
        read every message.
      </p>

      <h2>Contact us</h2>
      <p>
        Email{" "}
        <a href="mailto:hello@lobstercomputer.com">hello@lobstercomputer.com</a>{" "}
        with your question and, where relevant, the connected service (e.g.
        Zoom) and a description of what you were trying to do. We aim to respond
        within two business days.
      </p>

      <h2>The Reef app for Zoom</h2>
      <p>
        For setup, usage, and removal instructions for the Zoom integration, see
        the <a href="/reef/zoom">Reef for Zoom guide</a>. Common requests:
      </p>
      <ul>
        <li><strong>Connect Zoom:</strong> open Reef → Settings → Connections → Connect Zoom, and approve the requested permissions.</li>
        <li><strong>Disconnect Zoom:</strong> Reef → Settings → Connections → Disconnect, or remove Reef from the Zoom App Marketplace under Manage → Added Apps.</li>
        <li><strong>Something isn’t working:</strong> email us the account and the action attempted, and we’ll investigate.</li>
      </ul>

      <h2>Privacy &amp; terms</h2>
      <p>
        See our <a href="/privacy">Privacy Policy</a> and{" "}
        <a href="/terms">Terms of Use</a> for how we handle your data and the
        terms that govern the service.
      </p>
    </DocPage>
  );
}

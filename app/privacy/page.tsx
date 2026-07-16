import type { Metadata } from "next";
import DocPage from "@/components/DocPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Reef, by Lobster Computer Inc., collects, uses, stores, and protects your data, including data from connected services such as Zoom.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <DocPage title="Privacy Policy" updated="July 15, 2026">
      <p className="lede">
        This policy explains how Lobster Computer Inc. (“Lobster Computer,” “we,”
        “us”) collects, uses, stores, shares, and protects personal information
        in connection with Reef and its integrations, including the Reef app for
        Zoom. It applies to anyone who authorizes or uses Reef.
      </p>

      <h2>Who we are</h2>
      <p>
        Reef is an AI assistant operated by Lobster Computer Inc. When you
        connect a third-party account (such as Zoom) to Reef, your Reef agent
        can act within that service on your behalf. You can reach us any time at{" "}
        <a href="mailto:hello@lobstercomputer.com">hello@lobstercomputer.com</a>.
      </p>

      <h2>Information we collect</h2>
      <h3>Account information</h3>
      <p>
        When you create a Reef account we collect your name and email address
        and an authentication identifier from your identity provider (e.g.
        Google). We use this to sign you in and associate your data with your
        account.
      </p>
      <h3>Connected-service credentials</h3>
      <p>
        When you connect a third-party service, we receive and store the OAuth
        access and refresh tokens that service issues. For Zoom, these tokens
        are scoped to the permissions you approve and let Reef call the Zoom API
        as you. We never receive or store your Zoom password.
      </p>
      <h3>Service data accessed on your behalf</h3>
      <p>
        When you ask your Reef agent to perform a task, Reef reads only the data
        needed to complete it. For the Zoom integration this may include your
        basic Zoom profile (to identify the connected account) and your own
        meetings and their details (to list, create, update, or cancel them at
        your request). Reef accesses only the authorizing user’s own data and
        does not access other users’ data.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To operate your Reef agent and carry out the actions you request.</li>
        <li>To authenticate you and secure your account.</li>
        <li>To maintain, debug, and improve the reliability of the service.</li>
        <li>To communicate with you about the service and respond to support requests.</li>
      </ul>
      <p>
        We do not sell your personal information, and we do not use your Zoom
        content for advertising.
      </p>

      <h2>How your data is stored and protected</h2>
      <p>
        Reef runs on Google Cloud Platform. OAuth tokens are encrypted at the
        application layer before storage — wrapped with a key managed in Google
        Cloud Key Management Service (KMS) — and held in a PostgreSQL database on
        Google Cloud SQL, which is additionally encrypted at rest. Tokens are
        decrypted only in memory, at the moment they are used, and are never
        written to logs. Access to the database and encryption keys is
        restricted to the Reef service account via Google IAM. All network
        traffic uses TLS 1.2 or above.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain your connected-service tokens until you disconnect the service
        or delete your account, after which they are revoked and deleted. We do
        not retain the content of your meetings beyond what is needed to fulfill
        a request you have made.
      </p>

      <h2>Sharing and subprocessors</h2>
      <p>
        We share data only with service providers that help us run Reef, under
        agreements that limit their use of it:
      </p>
      <ul>
        <li><strong>Google Cloud Platform</strong> — hosting, database, and key management.</li>
        <li><strong>Anthropic</strong> — large-language-model inference that powers your agent.</li>
        <li>The third-party services you choose to connect (e.g. <strong>Zoom</strong>), which receive API requests Reef makes on your behalf.</li>
      </ul>
      <p>
        We may also disclose information if required by law or to protect the
        rights, safety, and security of our users and the service.
      </p>

      <h2>Your choices and rights</h2>
      <p>
        You can disconnect any connected service at any time from Reef’s
        settings, and you may request access to, correction of, or deletion of
        your personal information by emailing{" "}
        <a href="mailto:hello@lobstercomputer.com">hello@lobstercomputer.com</a>.
        Disconnecting Zoom revokes Reef’s access; you can also remove Reef from
        the Zoom App Marketplace under Manage → Added Apps.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Material changes will be
        reflected by the “last updated” date above.
      </p>

      <h2>Contact</h2>
      <p>
        Lobster Computer Inc. —{" "}
        <a href="mailto:hello@lobstercomputer.com">hello@lobstercomputer.com</a>.
      </p>
    </DocPage>
  );
}

import type { Metadata } from "next";
import DocPage from "@/components/DocPage";

export const metadata: Metadata = {
  title: "Reef for Zoom",
  description:
    "How to add, use, and remove the Reef app for Zoom, the permissions it requests, and how your data is handled.",
  alternates: { canonical: "/reef/zoom" },
};

export default function ReefZoom() {
  return (
    <DocPage title="Reef for Zoom" updated="July 15, 2026">
      <p className="lede">
        Reef is an AI assistant by Lobster Computer Inc. Connecting your Zoom
        account lets your Reef agent manage your own meetings on your behalf —
        listing, creating, updating, and canceling them from a normal
        conversation. This guide covers adding, using, and removing the
        integration.
      </p>

      <h2>What it does</h2>
      <p>
        Once connected, you can ask your Reef agent to do things like “what
        meetings do I have tomorrow?”, “schedule a 30-minute Zoom with the team
        Thursday at 2pm,” or “cancel my 4pm.” Reef translates the request into
        Zoom API calls made as you, and acts only on your own Zoom data.
      </p>

      <h2>Adding the app</h2>
      <ol>
        <li>Open Reef and go to <strong>Settings → Connections</strong>.</li>
        <li>Click <strong>Connect Zoom</strong>.</li>
        <li>
          You’ll be redirected to Zoom to sign in and review the permissions
          Reef requests. Click <strong>Allow</strong> to authorize.
        </li>
        <li>
          Zoom returns you to Reef with the connection active. Your agent can
          now manage your meetings on request.
        </li>
      </ol>

      <h2>Permissions requested</h2>
      <p>Reef requests only the scopes it needs to manage your meetings:</p>
      <ul>
        <li><strong>user:read:user</strong> — read your basic Zoom profile to identify the connected account.</li>
        <li><strong>meeting:read:meeting</strong> and <strong>meeting:read:list_meetings</strong> — read and list your meetings.</li>
        <li><strong>meeting:write:meeting</strong> — create and update meetings you ask for.</li>
        <li><strong>meeting:delete:meeting</strong> — cancel meetings you ask to cancel.</li>
      </ul>

      <h2>Using the app</h2>
      <ul>
        <li><strong>List / read:</strong> ask about your upcoming or past meetings and their details.</li>
        <li><strong>Create:</strong> ask Reef to schedule a meeting; it returns the join details.</li>
        <li><strong>Update:</strong> ask to change the time, title, or settings of a meeting you own.</li>
        <li><strong>Cancel:</strong> ask to cancel a meeting; Reef deletes it from your Zoom account.</li>
      </ul>

      <h2>How your data is handled</h2>
      <p>
        Reef accesses only the authorizing user’s own Zoom data. OAuth tokens are
        encrypted at rest (application-layer encryption with a Google Cloud KMS
        key, stored in Google Cloud SQL), decrypted only in memory when used, and
        never logged. Reef does not retain the content of your meetings beyond
        fulfilling the request you made. Full details are in our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>Removing the app</h2>
      <p>You can revoke Reef’s access to Zoom in either place:</p>
      <ul>
        <li>
          <strong>From Reef:</strong> Settings → Connections →{" "}
          <strong>Disconnect</strong> next to Zoom.
        </li>
        <li>
          <strong>From Zoom:</strong> sign in to the Zoom App Marketplace, go to{" "}
          <strong>Manage → Added Apps</strong>, find Reef, and click{" "}
          <strong>Remove</strong>.
        </li>
      </ul>
      <p>
        Removing the app revokes the OAuth tokens; Reef deletes the stored
        credentials for that connection.
      </p>

      <h2>Support</h2>
      <p>
        Questions or issues? Email{" "}
        <a href="mailto:hello@lobstercomputer.com">hello@lobstercomputer.com</a>{" "}
        or see our <a href="/support">support page</a>.
      </p>
    </DocPage>
  );
}

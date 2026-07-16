import type { Metadata } from "next";
import DocPage from "@/components/DocPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms governing your use of Reef and its integrations, provided by Lobster Computer Inc.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <DocPage title="Terms of Use" updated="July 15, 2026">
      <p className="lede">
        These Terms of Use (“Terms”) govern your access to and use of Reef and
        its integrations, provided by Lobster Computer Inc. (“Lobster Computer,”
        “we,” “us”). By authorizing or using Reef, you agree to these Terms.
      </p>

      <h2>The service</h2>
      <p>
        Reef is an AI assistant that, once you connect a third-party account
        such as Zoom, can perform actions within that service on your behalf —
        for example listing, creating, updating, or canceling your own meetings.
        Reef acts only within the permissions you grant and only on your own
        data.
      </p>

      <h2>Your account and connected services</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account
        and for the activity that occurs under it. You must have the right to
        connect any third-party account you link to Reef, and your use of those
        services remains subject to their own terms — including, for the Zoom
        integration, Zoom’s Terms of Service.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use Reef in violation of any applicable law or third-party terms.</li>
        <li>Attempt to access data that is not your own or that you are not authorized to access.</li>
        <li>Interfere with, disrupt, or attempt to gain unauthorized access to the service or its infrastructure.</li>
        <li>Use the service to send unlawful, harmful, or abusive content.</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        Reef, including its software and branding, is owned by Lobster Computer
        Inc. These Terms do not grant you any right in our intellectual property
        except the limited right to use the service as intended.
      </p>

      <h2>Disclaimers</h2>
      <p>
        Reef is provided “as is” and “as available.” Because Reef acts through an
        AI agent, its output and actions may contain errors; you are responsible
        for reviewing actions taken on your behalf. To the fullest extent
        permitted by law, we disclaim all warranties, express or implied,
        including merchantability, fitness for a particular purpose, and
        non-infringement.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Lobster Computer Inc. will not be
        liable for any indirect, incidental, special, consequential, or punitive
        damages, or for any loss of data, profits, or revenue, arising from your
        use of the service.
      </p>

      <h2>Termination</h2>
      <p>
        You may stop using Reef and disconnect any connected service at any time.
        We may suspend or terminate access if these Terms are violated or as
        needed to protect the service and its users.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these Terms from time to time. Material changes will be
        reflected by the “last updated” date above; continued use after a change
        constitutes acceptance.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms? Email{" "}
        <a href="mailto:hello@lobstercomputer.com">hello@lobstercomputer.com</a>.
      </p>
    </DocPage>
  );
}

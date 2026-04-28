import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security — Soniccora Trust & Compliance" },
      {
        name: "description",
        content:
          "How Soniccora protects your data: SOC2 Type II, encryption in transit and at rest, per-tenant keys, and a private bug bounty.",
      },
      { property: "og:title", content: "Soniccora Security" },
      {
        property: "og:description",
        content: "Our approach to security, compliance, and responsible disclosure.",
      },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="SECURITY"
      title="SECURITY IS AN ENGINEERING DISCIPLINE."
      intro="We hold ourselves to the standards our enterprise customers expect: SOC2 Type II, encryption everywhere, per-tenant key isolation, and an active bug bounty program."
      sections={[
        {
          heading: "Compliance",
          body: "We're SOC2 Type II certified, GDPR and CCPA compliant, and complete annual penetration tests by an independent third party. The latest reports are available under NDA at trust.soniccora.com.",
          bullets: [
            "SOC2 Type II — annual audit",
            "GDPR + CCPA + DPA on request",
            "ISO 27001 in progress (target Q4 2026)",
          ],
        },
        {
          heading: "Encryption",
          body: "All traffic is encrypted in transit with TLS 1.3. Data at rest is encrypted with AES-256-GCM. Enterprise customers can bring their own KMS-managed keys.",
        },
        {
          heading: "Tenant Isolation",
          body: "Each tenant has logically isolated data stores, per-tenant encryption keys, and dedicated cache namespaces. Enterprise plans support fully dedicated GPU pools.",
        },
        {
          heading: "Access Control",
          body: "All employee access requires hardware-backed SSO with phishing-resistant WebAuthn. Production access is time-bounded, peer-approved, and fully audit-logged.",
        },
        {
          heading: "Bug Bounty",
          body: "We run a private bug bounty program with rewards from $250 for low-severity issues to $25,000 for critical findings. Email connect@soniccora.com to request an invite.",
        },
        {
          heading: "Responsible Disclosure",
          body: "Report vulnerabilities to connect@soniccora.com. PGP key 0xA4F2 9C81 B7D3 5E60. We acknowledge within 24h and aim to remediate within 30 days.",
        },
      ]}
      ctaHref="mailto:connect@soniccora.com"
      ctaLabel="Contact Security"
      showCTA={false}
    />
  ),
});

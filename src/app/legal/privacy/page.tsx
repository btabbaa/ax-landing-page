import type { Metadata } from "next";
import Navbar         from "@/components/ui/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Footer         from "@/components/ui/Footer";
import PageHero       from "@/components/ui/PageHero";
import LegalContent, { type LegalSection } from "@/components/ui/LegalContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Atlantic Xchange",
  description:
    "How Atlantic Xchange collects, uses, and protects your personal information.",
};

const sections: LegalSection[] = [
  {
    heading: "1. Information We Collect",
    body: [
      "We collect information you provide directly, such as your name, email, phone number, address, government-issued ID, and payment details required to process transfers.",
      "We also collect technical data automatically, including device information, IP address, and usage patterns, to secure and improve our services.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    body: [
      "Your information is used to process transactions, verify your identity, comply with legal obligations, prevent fraud, and provide customer support.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    heading: "3. Identity Verification (KYC)",
    body: [
      "As a licensed money services business, we are legally required to verify your identity. This involves collecting and validating identity documents in line with FinCEN and state regulations.",
    ],
  },
  {
    heading: "4. Data Sharing",
    body: [
      "We may share information with banking partners, payment processors, regulators, and law enforcement where required to complete transfers or comply with applicable laws.",
      "All partners are bound by confidentiality and data protection obligations.",
    ],
  },
  {
    heading: "5. Data Security",
    body: [
      "We protect your data using 256-bit SSL encryption, secure servers, and strict access controls. While no system is completely secure, we take reasonable measures to safeguard your information.",
    ],
  },
  {
    heading: "6. Data Retention",
    body: [
      "We retain your information for as long as your account is active and as required by financial regulations, typically at least five years after your last transaction.",
    ],
  },
  {
    heading: "7. Your Rights",
    body: [
      "Depending on your jurisdiction, you may have the right to access, correct, or request deletion of your personal data. Contact us to exercise these rights.",
    ],
  },
  {
    heading: "8. Changes to This Policy",
    body: [
      "We may update this Privacy Policy periodically. Material changes will be communicated through our platform or by email.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Legal"
          title="Privacy Policy"
          subtitle="Your privacy matters. Here's how we handle and protect your personal data."
          accentColor="teal"
        />
        <LegalContent lastUpdated="July 1, 2026" sections={sections} />
      </main>
      <Footer />
    </>
  );
}

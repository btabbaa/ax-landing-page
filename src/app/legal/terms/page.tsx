import type { Metadata } from "next";
import Navbar         from "@/components/ui/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Footer         from "@/components/ui/Footer";
import PageHero       from "@/components/ui/PageHero";
import LegalContent, { type LegalSection } from "@/components/ui/LegalContent";

export const metadata: Metadata = {
  title: "Terms & Conditions — Atlantic Xchange",
  description:
    "The terms and conditions governing your use of Atlantic Xchange money transfer services.",
};

const sections: LegalSection[] = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      "By creating an account or using any Atlantic Xchange service, you agree to be bound by these Terms & Conditions. If you do not agree, you may not use our services.",
      "These terms apply to all users, including individuals and businesses sending or receiving funds through our platform.",
    ],
  },
  {
    heading: "2. Eligibility",
    body: [
      "You must be at least 18 years old and legally able to enter into a binding contract. You must reside in a jurisdiction where Atlantic Xchange is authorized to operate.",
      "You are required to complete identity verification (KYC) before initiating transfers, in accordance with US federal law.",
    ],
  },
  {
    heading: "3. Services & Fees",
    body: [
      "Atlantic Xchange facilitates international money transfers. A flat fee of $2.99 applies per transfer unless otherwise stated. Exchange rates are displayed before you confirm each transaction.",
      "We reserve the right to modify fees and available services. Any changes will be communicated in advance where required by law.",
    ],
  },
  {
    heading: "4. Transfer Limits",
    body: [
      "Verified individual accounts may send up to $10,000 per transaction and $50,000 per month. Business accounts may qualify for higher limits subject to additional review.",
    ],
  },
  {
    heading: "5. Cancellations & Refunds",
    body: [
      "You may cancel a transfer within 30 minutes of submission provided it has not yet been processed. Refund requests are handled in accordance with applicable consumer protection regulations.",
    ],
  },
  {
    heading: "6. Prohibited Use",
    body: [
      "You may not use Atlantic Xchange for any unlawful purpose, including money laundering, fraud, or financing of illegal activities. Violations may result in account suspension and reporting to authorities.",
    ],
  },
  {
    heading: "7. Limitation of Liability",
    body: [
      "Atlantic Xchange is not liable for delays or losses caused by inaccurate recipient information, third-party banks, or events beyond our reasonable control.",
    ],
  },
  {
    heading: "8. Changes to These Terms",
    body: [
      "We may update these Terms & Conditions from time to time. Continued use of our services after changes take effect constitutes acceptance of the revised terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Legal"
          title="Terms & Conditions"
          subtitle="Please read these terms carefully before using Atlantic Xchange services."
          accentColor="teal"
        />
        <LegalContent lastUpdated="July 1, 2026" sections={sections} />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar         from "@/components/ui/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Footer         from "@/components/ui/Footer";
import PageHero       from "@/components/ui/PageHero";
import LegalContent, { type LegalSection } from "@/components/ui/LegalContent";

export const metadata: Metadata = {
  title: "Terms Of Use — Atlantic Xchange",
  description:
    "The rules and guidelines for using the Atlantic Xchange website and platform.",
};

const sections: LegalSection[] = [
  {
    heading: "1. Website Use",
    body: [
      "This website is provided to help you learn about and access Atlantic Xchange services. By accessing the site, you agree to use it only for lawful purposes and in accordance with these Terms Of Use.",
    ],
  },
  {
    heading: "2. Account Responsibility",
    body: [
      "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately of any unauthorized access.",
    ],
  },
  {
    heading: "3. Intellectual Property",
    body: [
      "All content on this website — including logos, text, graphics, and software — is the property of Atlantic Xchange and protected by intellectual property laws. You may not reproduce or distribute it without permission.",
    ],
  },
  {
    heading: "4. Acceptable Conduct",
    body: [
      "You agree not to interfere with the website's operation, attempt unauthorized access, introduce malicious code, or scrape data without written consent.",
    ],
  },
  {
    heading: "5. Third-Party Links",
    body: [
      "Our website may contain links to third-party sites. We are not responsible for the content or practices of those external sites and encourage you to review their policies.",
    ],
  },
  {
    heading: "6. Disclaimer",
    body: [
      "The website is provided \"as is\" without warranties of any kind. We do not guarantee that the site will be uninterrupted, error-free, or free of harmful components.",
    ],
  },
  {
    heading: "7. Governing Law",
    body: [
      "These Terms Of Use are governed by the laws of the United States and the state in which Atlantic Xchange is registered, without regard to conflict of law principles.",
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Legal"
          title="Terms Of Use"
          subtitle="Guidelines for using the Atlantic Xchange website and platform."
          accentColor="teal"
        />
        <LegalContent lastUpdated="July 1, 2026" sections={sections} />
      </main>
      <Footer />
    </>
  );
}

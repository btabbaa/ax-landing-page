import type { Metadata } from "next";
import Navbar         from "@/components/ui/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Footer         from "@/components/ui/Footer";
import PageHero       from "@/components/ui/PageHero";
import LegalContent, { type LegalSection } from "@/components/ui/LegalContent";

export const metadata: Metadata = {
  title: "Privacy Disclosure — Atlantic Xchange",
  description:
    "Atlantic Xchange privacy disclosure covering children's privacy, health privacy, consumer privacy, data security, and applicable US privacy frameworks.",
};

const sections: LegalSection[] = [
  {
    heading: "Children's Privacy",
    body: [
      "The Children's Online Privacy Protection Act (COPPA) gives parents control over what information websites can collect from their kids. The COPPA Rule puts additional protections in place and streamlines other procedures that companies covered by the rule need to follow.",
      "The COPPA FAQs can help keep your company COPPA compliant. Learn about the COPPA Safe Harbor Program and about organizations the FTC has approved to implement safe harbor programs. You can also get information about ways to get verifiable parental consent — including new methods the Commission has approved — and the process for seeking approval for new methods.",
    ],
  },
  {
    heading: "Health Privacy",
    body: [
      "Consumers care about the privacy and security of their health-related information. If your company makes privacy promises — either expressly or by implication — the FTC Act requires you to live up to those claims.",
      "In addition, even if you don't make specific claims, you still have an obligation to maintain security that's appropriate in light of the nature of the data you possess. Also, if you experience a data breach, the Health Breach Notification Rule may apply to your business. Companies covered by the Rule must take specific steps following a breach.",
    ],
  },
  {
    heading: "Consumer Privacy",
    body: [
      "Think your company doesn't make any privacy claims? Think again — and reread your privacy policy to make sure you're honoring the promises you've pledged. Consumers care about the privacy of their personal information, and savvy businesses understand the importance of being clear about what you do with their data.",
    ],
  },
  {
    heading: "Credit Reporting",
    body: [
      "Does your business use consumer reports or credit reports to evaluate customers' creditworthiness? Do you consult reports when evaluating applications for jobs, leases, or insurance? The Fair Credit Reporting Act and other laws describe your responsibilities when using, reporting, and disposing of information in those reports.",
    ],
  },
  {
    heading: "Data Security",
    body: [
      "Many companies keep sensitive personal information about customers or employees in their files or on their network. Having a sound security plan in place to collect only what you need, keep it safe, and dispose of it securely can help you meet your legal obligations to protect that sensitive data. The FTC has free resources for businesses of any size.",
    ],
  },
  {
    heading: "Gramm-Leach-Bliley Act",
    body: [
      "The Gramm-Leach-Bliley Act requires financial institutions — companies that offer consumers financial products or services like loans, financial or investment advice, or insurance — to explain their information-sharing practices to their customers and to safeguard sensitive data.",
    ],
  },
  {
    heading: "Red Flags Rule",
    body: [
      "The Red Flags Rule (sometimes referred to as one of the Fair Credit Reporting Act's Identity Theft Rules, and appearing in the Code of Federal Regulations as \"Detection, Prevention, and Mitigation of Identity Theft\") requires many businesses and organizations to implement a written Identity Theft Prevention Program designed to detect the warning signs — or red flags — of identity theft in their day-to-day operations.",
    ],
  },
  {
    heading: "Data Privacy Framework",
    body: [
      "If you work for a business looking to transfer data between the EU and the United States, the FTC has resources to point you in the right direction. On July 17, 2023, the European Commission issued an adequacy decision on the EU-U.S. Data Privacy Framework (DPF).",
      "This voluntary Framework, which replaces the Privacy Shield program, provides a mechanism for companies to transfer personal data from the EU to the United States in a privacy-protective way consistent with EU law. To join, a company must self-certify to the Department of Commerce that it complies with the Data Privacy Framework Principles. A participating company's failure to comply with the Principles may violate Section 5 of the FTC Act's prohibition on unfair and deceptive acts.",
    ],
  },
  {
    heading: "Privacy Shield",
    body: [
      "On July 16, 2020, the European Court of Justice issued a judgment declaring invalid the European Commission's Decision 2016/1250/EC of July 12, 2016 on the adequacy of the EU-U.S. Privacy Shield Framework.",
      "We continue to expect companies to comply with their ongoing obligations with respect to transfers made under the Privacy Shield Framework. We also encourage companies to continue to follow robust privacy principles and to review their privacy policies to ensure they describe their privacy practices accurately, including with regard to international data transfers. Updated on July 21st, 2020.",
    ],
  },
  {
    heading: "U.S.-EU Safe Harbor Framework",
    body: [
      "On October 6, 2015, the European Court of Justice issued a judgment declaring invalid the European Commission's July 26, 2000 decision on the legal adequacy of the U.S.-EU Safe Harbor Framework.",
      "On July 12, 2016, the European Commission issued an adequacy decision on the EU-U.S. Privacy Shield Framework, which replaced the Safe Harbor program and provides a legal mechanism for companies to transfer personal data from the EU to the United States. We continue to expect companies to comply with their ongoing obligations with respect to data previously transferred under the Safe Harbor Framework. Updated on July 25th, 2016.",
    ],
  },
  {
    heading: "Tech",
    body: [
      "If your company designs, develops, or sells mobile apps, smartphones, or other tech tools, the FTC has resources to help you consider the privacy and security implications of your products and services. In addition, the FTC sponsors conferences and issues reports about consumer protection issues on the technology horizon.",
    ],
  },
];

export default function PrivacyDisclosurePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Legal"
          title="Privacy Disclosure"
          subtitle="Atlantic Xchange is committed to protecting your personal information in accordance with applicable US privacy laws and regulatory frameworks."
          accentColor="teal"
        />
        <LegalContent lastUpdated="July 1, 2026" sections={sections} />
      </main>
      <Footer />
    </>
  );
}

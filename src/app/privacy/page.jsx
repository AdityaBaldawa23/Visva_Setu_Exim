"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* ------------------------------------------------------------------ */
/*  Business details – replace these once, they are used everywhere    */
/* ------------------------------------------------------------------ */
const BUSINESS = {
  legalName: "[INSERT EXACT NAME AS PER REGISTRATION]",
  address: "[INSERT VERIFIED BUSINESS ADDRESS]",
  website: "[INSERT WEBSITE URL]",
  email: "[INSERT MONITORED PRIVACY EMAIL]",
  phone: "[INSERT BUSINESS PHONE]",
  lastUpdated: "16 October 2026",
};

const SECTIONS = [
  {
    title: "1. Who We Are",
    blocks: [
      {
        type: "p",
        text: "This Privacy Policy explains how Vishvasetu Exim (“Vishvasetu Exim”, “we”, “us” or “our”) collects, uses, stores, shares and protects personal data when you visit our website, submit an enquiry or quotation request, communicate with us, or otherwise interact with our business.",
      },
      {
        type: "ul",
        items: [
          `Legal entity / registered business name: ${BUSINESS.legalName}`,
          `Business address: ${BUSINESS.address}`,
          `Website: ${BUSINESS.website}`,
          `Privacy contact email: ${BUSINESS.email}`,
          `Phone: ${BUSINESS.phone}`,
        ],
      },
      {
        type: "p",
        text: "Vishvasetu Exim is engaged in import/export and trade-related activities, including enquiries concerning agricultural and food products such as fresh produce and other products listed on our website. The products actually offered may change over time.",
      },
    ],
  },
  {
    title: "2. Scope of This Policy",
    blocks: [
      {
        type: "p",
        text: "This Policy applies to personal data collected through our website, enquiry and Request for Quotation (RFQ) forms, email, telephone, messaging channels linked from the website, business correspondence, and related customer/supplier interactions. It does not replace separate terms in a signed sales contract, purchase order, shipping document or other agreement; those documents may govern the relevant transaction.",
      },
      {
        type: "p",
        text: "This Policy does not automatically govern third-party websites or services that we do not control. Please review their own privacy notices.",
      },
    ],
  },
  {
    title: "3. Personal Data We May Collect",
    blocks: [
      {
        type: "p",
        text: "Depending on how you interact with us, we may collect the following categories, limited to what is reasonably needed for the relevant purpose:",
      },
      { type: "h", text: "A. Contact and business identity details" },
      {
        type: "p",
        text: "Name, job title, company or organisation, business email address, telephone/WhatsApp number, business address, country, and other contact details you choose to provide.",
      },
      { type: "h", text: "B. Enquiry, RFQ and transaction details" },
      {
        type: "p",
        text: "Product or commodity of interest, grade/specification, quantity, packaging, destination country or port, preferred shipment date, delivery requirements, messages, quotation history, purchase orders, and related commercial correspondence.",
      },
      { type: "h", text: "C. Trade and logistics information" },
      {
        type: "p",
        text: "Where needed for a business transaction, details in shipping, customs, tax, invoicing, payment, delivery or compliance documents. Such records may contain personal data relating to sole traders, authorised representatives or other individuals.",
      },
      { type: "h", text: "D. Technical and usage information" },
      {
        type: "p",
        text: "Depending on our website configuration, server logs, IP address, browser/device information, pages viewed, approximate location derived from IP, referral source, and cookie or analytics identifiers.",
      },
      { type: "h", text: "E. Information you choose to send" },
      {
        type: "p",
        text: "Any information or attachments you include in a message or form. Please do not send passwords, full payment-card details, government ID numbers, health information or other sensitive data unless we specifically request it through an appropriate and secure process.",
      },
    ],
  },
  {
    title: "4. How We Collect Data",
    blocks: [
      {
        type: "p",
        text: "We collect data directly from you when you complete a form, request a quote, contact us, subscribe to updates (if offered), or conduct business with us. We may also receive business contact information from your organisation, a trade fair, a referral, a logistics/service partner, or a publicly available business source where lawful. Technical data may be collected automatically by our website hosting, security and analytics tools, if enabled.",
      },
    ],
  },
  {
    title: "5. Purposes and Legal Basis",
    blocks: [
      {
        type: "p",
        text: "We use personal data only for relevant, stated business purposes, which may include:",
      },
      {
        type: "ul",
        items: [
          "Responding to enquiries and preparing quotations or product specifications",
          "Assessing sourcing, availability, packaging, shipment and delivery requirements",
          "Negotiating, performing and documenting contracts, orders, payments and logistics",
          "Communicating service updates, changes, complaints and after-sales matters",
          "Maintaining accounting, tax, customs, audit, recordkeeping and other legally required records",
          "Preventing fraud, protecting website and business security, and handling disputes",
          "Operating, maintaining and improving the website and understanding its use, where analytics are enabled",
          "Sending marketing or product updates where permitted and, where required, with your consent",
        ],
      },
      {
        type: "p",
        text: "Where applicable law requires consent, we will seek it in an appropriate manner and provide a way to withdraw it. We may also process data where necessary for a requested service or transaction, compliance with law, or another lawful basis available under applicable law. We will not treat an enquiry as consent to unrelated marketing.",
      },
    ],
  },
  {
    title: "6. Cookies, Analytics and Similar Technologies",
    blocks: [
      {
        type: "p",
        text: "Our website may use essential cookies or similar technologies needed for security and core functionality. If we use analytics, advertising, embedded maps, videos, social-media widgets or other non-essential technologies, those providers may collect technical information according to their own terms. The actual cookies depend on the website configuration.",
      },
    ],
  },
  {
    title: "7. When We Share Personal Data",
    blocks: [
      {
        type: "p",
        text: "We do not sell personal data as a standalone data product. We may share limited data where reasonably necessary with:",
      },
      {
        type: "ul",
        items: [
          "Website hosting, IT, security, email, CRM and form service providers",
          "Professional advisers, auditors, insurers, banks and payment service providers, as relevant",
          "Freight forwarders, transporters, customs brokers, inspection/certification providers and other trade partners involved in a requested shipment",
          "Buyers, suppliers or their authorised representatives where needed to negotiate or perform a transaction",
          "Government, regulatory, tax, customs, law-enforcement or judicial authorities when required or permitted by law",
          "A successor or transaction counterparty in connection with a business reorganisation, subject to appropriate safeguards",
        ],
      },
      {
        type: "p",
        text: "Service providers should receive only the information reasonably necessary for their task and be subject to appropriate confidentiality, security and data-handling obligations. We do not authorise third parties to use personal data for their own unrelated purposes.",
      },
    ],
  },
  {
    title: "8. International Data Transfers",
    blocks: [
      {
        type: "p",
        text: "Because import/export transactions and online service providers may operate across borders, relevant data may be accessed or processed outside India. Any such transfer will be handled subject to applicable Indian law and any restrictions or safeguards that apply to the relevant data and destination. Trade documents may also be shared with overseas buyers, logistics partners or authorities when needed to carry out a shipment or meet legal requirements.",
      },
    ],
  },
  {
    title: "9. Data Retention",
    blocks: [
      {
        type: "p",
        text: "We keep personal data only for as long as reasonably necessary for the purposes described in this Policy, including responding to enquiries, maintaining business relationships, completing transactions, resolving disputes, protecting our rights and meeting applicable accounting, tax, customs and other legal obligations. Retention periods vary by record type. When data is no longer required, we will take reasonable steps to delete it, anonymise it or securely dispose of it, unless retention is required by law or needed for a legitimate legal claim.",
      },
    ],
  },
  {
    title: "10. Security",
    blocks: [
      {
        type: "p",
        text: "We use reasonable technical, organisational and administrative safeguards appropriate to the nature of the data and the risks involved. Depending on our systems, safeguards may include access controls, strong authentication, software updates, backups, secure transmission, staff awareness and vendor controls. No website, email transmission or storage system can be guaranteed completely secure. Please contact us promptly if you suspect that information sent to us has been misused.",
      },
    ],
  },
  {
    title: "11. Your Choices and Privacy Rights",
    blocks: [
      {
        type: "p",
        text: "Subject to applicable law, you may contact us to request access to information about personal data we hold about you, correction or updating of inaccurate information, deletion where permitted, withdrawal of consent where processing relies on consent, or assistance with a privacy complaint. We may need to verify your identity or authority before acting. Some records may need to be retained to comply with law, complete a transaction or establish, exercise or defend legal claims.",
      },
      {
        type: "p",
        text: `To make a request, email ${BUSINESS.email} with the subject line “Privacy Request” and explain what you are requesting. We will respond within the period required by applicable law. If a statutory grievance or appeal route applies, you may use the route described by the relevant law or official authority.`,
      },
    ],
  },
  {
    title: "12. Children",
    blocks: [
      {
        type: "p",
        text: "Our website and services are intended for business users and are not directed at children. We do not knowingly seek to collect children’s personal data through the website. If you believe a child has provided personal data to us, contact us so we can assess and take appropriate action in accordance with applicable law.",
      },
    ],
  },
  {
    title: "13. Third-Party Links and Embedded Services",
    blocks: [
      {
        type: "p",
        text: "Our website may link to third-party websites or embed services such as maps, social-media pages or messaging tools. Those services are operated by others and their privacy practices are governed by their own policies. A link does not mean we endorse or control the third party. Review the applicable terms before submitting personal information to them.",
      },
    ],
  },
  {
    title: "14. Marketing Communications",
    blocks: [
      {
        type: "p",
        text: `If we send commercial updates, we will do so in accordance with applicable law and any consent requirements. You can ask us to stop marketing messages by using any unsubscribe method provided or by contacting ${BUSINESS.email}. We may still send non-promotional messages relating to an active enquiry, order, contract, security matter or legal obligation.`,
      },
    ],
  },
  {
    title: "15. Changes to This Policy",
    blocks: [
      {
        type: "p",
        text: "We may update this Policy to reflect changes in our business, website tools, data practices or applicable law. The latest version will be posted on this page with a revised “Last updated” date. If a change requires notice or consent under applicable law, we will take the required steps.",
      },
    ],
  },
  {
    title: "16. Contact and Grievances",
    blocks: [
      {
        type: "p",
        text: "For privacy questions, requests or complaints, contact:",
      },
      {
        type: "ul",
        items: [
          "Vishvasetu Exim — Privacy Contact",
          `Email: ${BUSINESS.email}`,
          `Postal address: ${BUSINESS.address}`,
          `Phone: ${BUSINESS.phone}`,
        ],
      },
      {
        type: "p",
        text: "We will acknowledge and handle requests in accordance with applicable law and our internal procedure.",
      },
    ],
  },
  {
    title: "17. Legal Framework",
    blocks: [
      {
        type: "p",
        text: "This Policy is intended to support transparent handling of personal data under applicable Indian law, including the Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025, to the extent the relevant provisions are in force and apply to our business. Other laws may also apply depending on the data and activity, including the Information Technology Act, 2000 and applicable rules, as well as tax, customs, consumer, contract and sector-specific requirements.",
      },
    ],
  },
];

const PrivacyPolicyPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
<>
<Navbar />
    <main className="relative min-h-screen w-full">
      {/* Background image – no blur, overlay or effects */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/prod-bg.png')" }}
      />

      <div className="w-full max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 pt-28 sm:pt-36 md:pt-40 pb-16 md:pb-24">
        {/* Heading */}
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12] mb-6 md:mb-8 font-medium tracking-tight text-center text-[#0e3b2c]">
          Privacy Policy
        </h1>

        {/* Intro */}
        <p
          className={`${montserrat.className} text-sm sm:text-base md:text-lg text-[#3a3f3a] leading-relaxed mb-8 md:mb-10`}
        >
          At Vishvasetu Exim, we respect your privacy and are committed to protecting the
          personal data you share with us through our website, enquiry and quotation forms,
          calls, emails and business correspondence. This Privacy Policy explains how we
          collect, use, store, share and protect your information.
        </p>

        {/* Accordion */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {SECTIONS.map((section, i) => {
            const isOpen = openIndex === i;
            const panelId = `policy-panel-${i}`;
            const buttonId = `policy-button-${i}`;

            return (
              <div key={section.title}>
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className={`${montserrat.className} w-full flex items-center justify-between gap-4 text-left rounded-full border border-[#8d7c5d]/60 px-6 sm:px-9 py-4 sm:py-5 text-base sm:text-xl md:text-[22px] font-medium text-[#0e3b2c] hover:border-[#0e3b2c] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e3b2c] focus-visible:ring-offset-2`}
                >
                  <span>{section.title}</span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" strokeWidth={2.5} />
                  ) : (
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" strokeWidth={2.5} />
                  )}
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`${montserrat.className} px-3 sm:px-8 pt-5 pb-4 text-sm sm:text-base md:text-lg text-[#3a3f3a] leading-relaxed space-y-4`}
                    >
                      {section.blocks.map((block, bi) => {
                        if (block.type === "h") {
                          return (
                            <h3
                              key={bi}
                              className="font-semibold text-[#0e3b2c] pt-1"
                            >
                              {block.text}
                            </h3>
                          );
                        }
                        if (block.type === "ul") {
                          return (
                            <ul
                              key={bi}
                              className="list-disc pl-6 space-y-1.5 marker:text-[#a68a56]"
                            >
                              {block.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          );
                        }
                        return <p key={bi}>{block.text}</p>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p
          className={`${montserrat.className} mt-10 text-sm text-[#5a6259] text-center`}
        >
          Last updated: {BUSINESS.lastUpdated}
        </p>
      </div>
    </main>
<Footer />
</>
  );
};

export default PrivacyPolicyPage;
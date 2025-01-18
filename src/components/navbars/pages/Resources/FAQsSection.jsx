import React from "react";
import { ReportCard } from "./ReportCard";

const faqs = [
  {
    question: "Technology",
    answer: "How does SustainLith's technology work?",
  },
  {
    question: "Environmental Benefits",
    answer: "What are the environmental benefits of SustainLith's technology?",
  },
  {
    question: "Water Usage",
    answer: "How is SustainLith addressing the challenge of water usage in lithium extraction?",
  },
  {
    question: "Market Opportunity",
    answer: "What is the market opportunity for sustainable lithium extraction?",
  },
];

export function FAQsSection() {
  return (
    <section className="container mx-auto px-4 mt-16 p-6">
      <h2 className="text-2xl font-semibold mb-6">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <ReportCard
            key={faq.question}
            title={faq.question}
            description={faq.answer}
            showDownload={false} // Pass showDownload as false for FAQs
          />
        ))}
      </div>
    </section>
  );
}

export default FAQsSection;

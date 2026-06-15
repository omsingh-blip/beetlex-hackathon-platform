import { useState } from "react";

const faqs = [
  {
    question: "Who can participate?",
    answer:
      "Students, professionals, and independent developers are welcome.",
  },
  {
    question: "Can I participate solo?",
    answer:
      "Yes. You may register individually or create a team.",
  },
  {
    question: "How many members per team?",
    answer:
      "Up to 4 members are allowed per team.",
  },
  {
    question: "Is participation free?",
    answer:
      "Yes, participation is completely free.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className="mb-4 rounded-xl border border-white/10 bg-zinc-900"
          >
            <button
              onClick={() =>
                setOpenIndex(
                  openIndex === index ? null : index
                )
              }
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <span>{faq.question}</span>
              <span>
                {openIndex === index ? "-" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6 text-zinc-400">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
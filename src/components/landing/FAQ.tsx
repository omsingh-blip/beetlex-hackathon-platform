import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "Who can participate?",
    answer:
      "Students, professionals, freelancers, startup founders, and independent developers are welcome to participate.",
  },
  {
    question: "Can I participate solo?",
    answer:
      "Yes. You may register individually or create a team during the registration process.",
  },
  {
    question: "How many members per team?",
    answer:
      "Teams can have up to 4 members. Solo participation is also allowed.",
  },
  {
    question: "Is participation free?",
    answer:
      "Yes, participation is completely free for all accepted participants.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-lime-400">
            FAQ
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-zinc-400">
            Everything you need to know before joining.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                layout
                whileHover={{
                  scale: 1.01,
                }}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  transition-all
                  hover:border-lime-400/30
                "
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-medium">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{
                      rotate: isOpen ? 45 : 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="text-2xl text-lime-400"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <div className="px-6 pb-6 text-zinc-400">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import type { EventDetails } from "@/types/event";

export const defaultEventDetails: EventDetails = {
  requirements: [
    "Laptop with internet connection",
    "GitHub account",
    "Basic programming knowledge",
  ],

  eligibility: [
    "Open to students",
    "Open to professionals",
  ],

  rules: [
    "Projects must be original",
    "Teams can have up to 4 members",
    "Follow the code of conduct",
  ],

  timeline: [
    {
      id: "1",
      title: "Registration Opens",
      date: "2026-07-01",
    },
    {
      id: "2",
      title: "Registration Closes",
      date: "2026-07-20",
    },
  ],

  faqs: [
    {
      id: "1",
      question: "Can I participate solo?",
      answer: "Yes, solo participation is allowed.",
    },
  ],
};

export const eventDetailsMap: Record<string, EventDetails> = {
  "ai-summit-2026": {
    requirements: [
      "Python knowledge",
      "GitHub account",
    ],

    eligibility: [
      "Students",
      "Developers",
    ],

    rules: [
      "Must build an AI project",
    ],

    timeline: [
      {
        id: "1",
        title: "Registration Opens",
        date: "2026-06-01",
      },
    ],

    faqs: [
      {
        id: "1",
        question: "Do I need AI experience?",
        answer: "Basic knowledge is enough.",
      },
    ],
  },
};
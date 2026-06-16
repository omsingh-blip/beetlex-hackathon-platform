import type { EventFaq as EventFaqType } from "@/types/event";
import  Card  from "@/components/ui/Card";

type EventFaqProps = {
  faqs: EventFaqType[];
};

export function EventFaq({
  faqs,
}: EventFaqProps) {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">
        FAQ
      </h2>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <Card
            key={faq.id}
            className="p-6"
          >
            <h3 className="font-semibold">
              {faq.question}
            </h3>

            <p className="mt-2 text-muted-foreground">
              {faq.answer}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
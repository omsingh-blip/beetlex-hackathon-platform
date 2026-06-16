import  Card  from "@/components/ui/Card";

type EventInfoProps = {
  requirements: string[];
  eligibility: string[];
  rules: string[];
};

export function EventInfo({
  requirements,
  eligibility,
  rules,
}: EventInfoProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <Card className="p-6">
        <h2 className="mb-4 text-xl font-semibold">
          Requirements
        </h2>

        <ul className="space-y-2">
          {requirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Card>

      <Card className="p-6">
        <h2 className="mb-4 text-xl font-semibold">
          Eligibility
        </h2>

        <ul className="space-y-2">
          {eligibility.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Card>

      <Card className="p-6 lg:col-span-2">
        <h2 className="mb-4 text-xl font-semibold">
          Rules
        </h2>

        <ul className="space-y-2">
          {rules.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

type PersonalInfoStepProps = {
  name: string;
  email: string;
  college: string;
  onChange: (
    field: "name" | "email" | "college",
    value: string,
  ) => void;
  onNext: () => void;
};

export function PersonalInfoStep({
  name,
  email,
  college,
  onChange,
  onNext,
}: PersonalInfoStepProps) {
  return (
    <Card className="mx-auto max-w-2xl p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Personal Information
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            onChange("name", e.target.value)
          }
          className="w-full rounded-xl border border-white/10 bg-white/5 p-3"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            onChange("email", e.target.value)
          }
          className="w-full rounded-xl border border-white/10 bg-white/5 p-3"
        />

        <input
          type="text"
          placeholder="College / Organization"
          value={college}
          onChange={(e) =>
            onChange("college", e.target.value)
          }
          className="w-full rounded-xl border border-white/10 bg-white/5 p-3"
        />
      </div>

      <div className="mt-6 flex justify-end">
        <Button onClick={onNext}>
          Continue
        </Button>
      </div>
    </Card>
  );
}
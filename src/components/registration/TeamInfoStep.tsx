import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

type TeamInfoStepProps = {
  teamName: string;
  teamSize: number;
  onChange: (
    field: "teamName" | "teamSize",
    value: string | number,
  ) => void;
  onNext: () => void;
  onBack: () => void;
};

export function TeamInfoStep({
  teamName,
  teamSize,
  onChange,
  onNext,
  onBack,
}: TeamInfoStepProps) {
  return (
    <Card className="mx-auto max-w-2xl p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Team Information
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Team Name"
          value={teamName}
          onChange={(e) =>
            onChange("teamName", e.target.value)
          }
          className="w-full rounded-xl border border-white/10 bg-white/5 p-3"
        />

        <input
          type="number"
          min={1}
          max={10}
          value={teamSize}
          onChange={(e) =>
            onChange(
              "teamSize",
              Number(e.target.value),
            )
          }
          className="w-full rounded-xl border border-white/10 bg-white/5 p-3"
        />
      </div>

      <div className="mt-6 flex justify-between">
        <Button
          variant="secondary"
          onClick={onBack}
        >
          Back
        </Button>

        <Button onClick={onNext}>
          Continue
        </Button>
      </div>
    </Card>
  );
}
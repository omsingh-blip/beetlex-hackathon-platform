import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

type ReviewStepProps = {
  name: string;
  email: string;
  college: string;
  teamName: string;
  teamSize: number;
  onBack: () => void;
  onSubmit: () => void;
};

export function ReviewStep({
  name,
  email,
  college,
  teamName,
  teamSize,
  onBack,
  onSubmit,
}: ReviewStepProps) {
  return (
    <Card className="mx-auto max-w-2xl p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Review Registration
      </h2>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">
            Name
          </p>
          <p>{name}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Email
          </p>
          <p>{email}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            College
          </p>
          <p>{college}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Team Name
          </p>
          <p>{teamName}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Team Size
          </p>
          <p>{teamSize}</p>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <Button
          variant="secondary"
          onClick={onBack}
        >
          Back
        </Button>

        <Button onClick={onSubmit}>
          Submit Registration
        </Button>
      </div>
    </Card>
  );
}
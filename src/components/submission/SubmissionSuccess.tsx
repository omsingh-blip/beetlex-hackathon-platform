import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";

export default function SubmissionSuccess() {
  return (
    <div className="rounded-3xl border border-primary/20 bg-primary/5 p-10 text-center">
      <h2 className="text-3xl font-bold">
        Submission Successful 🚀
      </h2>

      <p className="mt-3 text-muted-foreground">
        Your project has been submitted for evaluation.
      </p>

      <Link to="/dashboard/team">
        <Button className="mt-6">
          Back to Dashboard
        </Button>
      </Link>
    </div>
  );
}
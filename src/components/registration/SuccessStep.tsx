import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export function SuccessStep() {
  return (
    <Card className="mx-auto max-w-2xl p-10 text-center">
      <div className="text-6xl">
        🎉
      </div>

      <h2 className="mt-4 text-3xl font-bold">
        Registration Successful
      </h2>

      <p className="mt-4 text-muted-foreground">
        Your registration has been submitted
        successfully. We look forward to seeing
        you at the hackathon.
      </p>

      <div className="mt-8">
        <Link to="/dashboard/team">
          <Button>
            Go To Dashboard
          </Button>
        </Link>
      </div>
    </Card>
  );
}
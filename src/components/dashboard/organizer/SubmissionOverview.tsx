import Card from "@/components/ui/Card";
import { organizerDashboardData } from "@/mocks/data/organizer";

export default function SubmissionOverview() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Submission Overview
      </h2>

      <Card className="p-5">
        <p className="text-muted-foreground">
          Total Submissions
        </p>

        <h3 className="mt-2 text-4xl font-bold">
          {organizerDashboardData.totalSubmissions}
        </h3>
      </Card>
    </section>
  );
}
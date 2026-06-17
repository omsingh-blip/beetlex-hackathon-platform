import Button from "@/components/ui/Button";
import {ProgressCard} from "@/components/ui/ProgressCard";
import { submissionStatus } from "@/mocks/data/dashboard";
import { Link } from "react-router-dom";

export default function SubmissionStatus() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Submission Status
      </h2>

      <Link to="/submit/hack-ai-2026">
  <Button>Submit Project</Button>
</Link>

      <div className="space-y-4">
        {submissionStatus.map((item) => (
          <ProgressCard
            key={item.id}
            title={item.title}
            progress={item.progress}
          />
        ))}
      </div>
    </section>
  );
}
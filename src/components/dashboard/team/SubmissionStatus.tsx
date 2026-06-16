import {ProgressCard} from "@/components/ui/ProgressCard";
import { submissionStatus } from "@/mocks/data/dashboard";

export default function SubmissionStatus() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Submission Status
      </h2>

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
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import { judgeDashboardData } from "@/mocks/data/judge";

export default function EvaluationQueue() {
  const pendingProjects =
    judgeDashboardData.projects.filter(
      (project) => project.status === "Pending"
    );

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Evaluation Queue
      </h2>

      <div className="space-y-4">
        {pendingProjects.map((project) => (
          <Card
            key={project.id}
            className="p-4"
          >
            <h3 className="font-semibold text-white">
              {project.project}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Team: {project.team}
            </p>

            <p className="text-sm text-muted-foreground">
              Track: {project.track}
            </p>

            <Button
              size="sm"
              className="mt-4 w-full"
            >
              Review Project
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
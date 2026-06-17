import Card from "@/components/ui/Card";
import { organizerDashboardData } from "@/mocks/data/organizer";

export default function RecentActivity() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {organizerDashboardData.activities.map(
          (activity) => (
            <Card
              key={activity.id}
              className="p-4"
            >
              <p>{activity.message}</p>

              <p className="mt-1 text-xs text-muted-foreground">
                {activity.time}
              </p>
            </Card>
          )
        )}
      </div>
    </section>
  );
}
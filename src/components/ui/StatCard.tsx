import type { ReactNode } from "react";
import  Card  from "./Card";

type StatCardProps = {
  label: string;
  value: string | number;
  icon?: ReactNode;
  description?: string;
};

export function StatCard({
  label,
  value,
  icon,
  description,
}: StatCardProps) {
  return (
    <Card className="group p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>

          <h3 className="mt-2 text-3xl font-bold">{value}</h3>

          {description && (
            <p className="mt-2 text-xs text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {icon && (
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}
import type { ReactNode } from "react";
import  Card  from "./Card";

type EmptyStateProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  action?: ReactNode;
};

export function EmptyState({
  title,
  description,
  icon,
  action,
}: EmptyStateProps) {
  return (
    <Card className="flex flex-col items-center p-10 text-center">
      {icon && <div className="mb-4">{icon}</div>}

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {description}
      </p>

      {action && <div className="mt-6">{action}</div>}
    </Card>
  );
}
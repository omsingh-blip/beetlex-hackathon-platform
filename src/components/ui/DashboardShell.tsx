import type { ReactNode } from "react";

type DashboardShellProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function DashboardShell({
  title,
  description,
  children,
}: DashboardShellProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{title}</h1>

        {description && (
          <p className="mt-2 text-muted-foreground">
            {description}
          </p>
        )}
      </header>

      <div className="space-y-8">{children}</div>
    </div>
  );
}
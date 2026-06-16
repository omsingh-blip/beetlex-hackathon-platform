type SectionHeaderProps = {
  title: string;
  description?: string;
  action?: React.ReactNode;
};

export function SectionHeader({
  title,
  description,
  action,
}: SectionHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>

        {description && (
          <p className="mt-2 text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {action}
    </div>
  );
}
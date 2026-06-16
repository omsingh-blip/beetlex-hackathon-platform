import  Card  from "./Card";

type ProgressCardProps = {
  title: string;
  progress: number;
  value?: string;
};

export function ProgressCard({
  title,
  progress,
  value,
}: ProgressCardProps) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{title}</h3>

        <span className="text-sm text-muted-foreground">
          {value ?? `${progress}%`}
        </span>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </Card>
  );
}
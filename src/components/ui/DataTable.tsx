import type { ReactNode } from "react";
import  Card  from "./Card";

export type Column<T> = {
  key: keyof T | string;
  header: string;
  render?: (row: T) => ReactNode;
  className?: string;
};

type DataTableProps<T> = {
  data: T[];
  columns: Column<T>[];
  emptyMessage?: string;
};

export function DataTable<T extends { id: string }>({
  data,
  columns,
  emptyMessage = "No data available.",
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <Card className="p-8 text-center">
        <p className="text-sm text-muted-foreground">
          {emptyMessage}
        </p>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead className="sticky top-0 z-10 backdrop-blur-xl">
            <tr className="border-b border-white/10 bg-white/[0.02]">
              {columns.map((column) => (
                <th
                  key={column.header}
                  className={`px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground ${column.className ?? ""}`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr
                key={row.id}
                className="border-b border-white/5 transition-colors hover:bg-white/[0.02]"
              >
                {columns.map((column) => (
                  <td
                    key={column.header}
                    className={`px-4 py-4 text-sm ${column.className ?? ""}`}
                  >
                    {column.render
                      ? column.render(row)
                      : String(
                          row[
                            column.key as keyof T
                          ] ?? "",
                        )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
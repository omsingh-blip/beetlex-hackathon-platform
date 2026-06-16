export default function UploadSection() {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        Presentation / Assets
      </label>

      <div className="rounded-2xl border border-dashed border-white/20 p-8 text-center">
        <p className="text-sm text-muted-foreground">
          Drag & drop files here
        </p>

        <p className="mt-2 text-xs text-muted-foreground">
          PDF, PPT, ZIP (Mock Upload)
        </p>
      </div>
    </div>
  );
}
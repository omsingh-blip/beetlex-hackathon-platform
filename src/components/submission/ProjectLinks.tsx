export default function ProjectLinks() {
  return (
    <div className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium">
          GitHub Repository
        </label>

        <input
          type="url"
          placeholder="https://github.com/username/project"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Demo URL
        </label>

        <input
          type="url"
          placeholder="https://your-demo.vercel.app"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
        />
      </div>
    </div>
  );
}
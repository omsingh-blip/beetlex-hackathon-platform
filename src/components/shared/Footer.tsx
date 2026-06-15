export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-lime-400">
              BeetleX
            </h3>

            <p className="mt-2 text-zinc-400">
              Developer First. Impact Forever.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">Discord</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
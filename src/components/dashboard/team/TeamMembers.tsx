import { teamMembers } from "@/mocks/data/dashboard";

export default function TeamMembers() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Team Members
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="rounded-2xl border border-white/10 bg-black/30 p-4"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7ff00]/20 text-sm font-bold text-[#d7ff00]">
                {member.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </div>

              <div>
                <h3 className="font-medium text-white">
                  {member.name}
                </h3>

                <p className="text-sm text-zinc-400">
                  {member.role}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#8a2eff]/30 bg-[#8a2eff]/10 px-3 py-1 text-xs text-[#c79cff]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
      {children}
    </div>
  );
}
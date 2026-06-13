import Link from "next/link";

const docs = [
  ["/docs", "Overview"],
  ["/docs/architecture", "Architecture"],
  ["/docs/events", "Events"],
  ["/docs/risks", "Risks"]
];

export default function DocsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="px-5 pb-24 pt-32">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[220px_1fr]">
        <aside className="h-fit rounded-lg border border-border bg-surface/60 p-4 lg:sticky lg:top-24">
          <nav className="flex flex-col gap-2">
            {docs.map(([href, label]) => (
              <Link key={href} href={href} className="rounded-md px-3 py-2 text-sm text-subtle hover:bg-card hover:text-green">
                {label}
              </Link>
            ))}
          </nav>
        </aside>
        <article>{children}</article>
      </div>
    </main>
  );
}

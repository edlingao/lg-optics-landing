import type { ReactNode } from "react";
/** Title block at the top of every inner page. `children` holds its buttons. */
export default function PageHeader({ title, text, children }: { title: string; text?: ReactNode; children?: ReactNode }) {
  return <section className="border-b border-ink/10"><div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 md:py-16 lg:px-8">
    <h1 className="max-w-3xl font-roots text-[2.6rem] text-ink md:text-6xl">{title}</h1>
    {text && <div className="mt-4 max-w-2xl text-lg text-ink/75">{text}</div>}
    {children && <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div>}
  </div></section>;
}

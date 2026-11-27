import type { ReactNode } from "react";
/** Title block at the top of every inner page. `children` holds its buttons. */
export default function PageHeader({ title, text, children }: { title: string; text?: ReactNode; children?: ReactNode }) {
  return <section className="mx-auto max-w-3xl px-5 pb-8 pt-10 text-center md:pb-12 md:pt-16">
    <h1 className="font-roots text-5xl md:text-7xl">{title}</h1>
    {text && <div className="mx-auto mt-4 max-w-xl text-ink/75">{text}</div>}
    {children && <div className="mt-6 flex flex-wrap justify-center gap-2.5">{children}</div>}
  </section>;
}

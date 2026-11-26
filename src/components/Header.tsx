"use client";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, whatsappUrl, business } from "@/lib/business";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const node = dialog.current;
    if (!node) return;
    if (open && !node.open) node.showModal();
    if (!open && node.open) node.close();
    const previous = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  function close() { setOpen(false); trigger.current?.focus(); }
  return <>
    <div className="bg-navy-950 text-white text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex min-h-9 items-center justify-center gap-6 px-4 py-1.5 sm:justify-between sm:px-6 lg:px-8">
        <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">{business.streetAddress}, {business.neighborhood}</a>
        <a href={`tel:${business.phone}`} className="hidden underline-offset-4 hover:underline sm:inline">{business.phoneLabel}</a>
      </div>
    </div>
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="max-w-7xl mx-auto flex h-[72px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="L&G OPTICS, inicio" className="flex-shrink-0 text-navy-900"><span className="logo-mark w-[104px]" /></Link>
        <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-7">
          {navigation.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className="py-3 text-[15px] font-medium text-ink underline-offset-8 hover:underline aria-[current=page]:underline">{item.label}</Link>)}
          <a href={whatsappUrl()} className="btn-whatsapp !min-h-11 !py-2 text-sm"><WhatsAppIcon /><span>WhatsApp</span></a>
        </nav>
        <button ref={trigger} type="button" className="lg:hidden -mr-2 grid h-12 w-12 place-items-center text-ink" aria-label="Abrir menú" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)}>
          <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
      </div>
      <dialog ref={dialog} id="mobile-navigation" aria-label="Menú de navegación" onCancel={close} onClose={close} onClick={event => { if (event.target === event.currentTarget) close(); }} className="fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-none w-80 max-w-[90vw] border-0 bg-cream p-6 text-ink shadow-2xl backdrop:bg-ink/50">
        <button type="button" autoFocus onClick={close} aria-label="Cerrar menú" className="ml-auto grid h-12 w-12 place-items-center">
          <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        <nav aria-label="Navegación móvil" className="mt-4 flex flex-col">
          {navigation.map(item => <Link key={item.href} href={item.href} onClick={close} aria-current={pathname === item.href ? "page" : undefined} className="border-b border-ink/10 py-4 font-roots text-3xl aria-[current=page]:text-navy-900 aria-[current=page]:italic">{item.label}</Link>)}
          <a href={whatsappUrl()} className="btn-whatsapp mt-8"><WhatsAppIcon /><span>WhatsApp</span></a>
          <Link href="/contacto" onClick={close} className="btn-secondary mt-3">Agendar cita</Link>
          <a href={`tel:${business.phone}`} className="py-4 text-center underline underline-offset-4">{business.phoneLabel}</a>
        </nav>
      </dialog>
    </header>
  </>;
}

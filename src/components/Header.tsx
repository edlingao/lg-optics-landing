"use client";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navigation, whatsappUrl, business } from "@/lib/business";

export default function Header() {
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
    <p className="bg-ink px-4 py-2 text-center text-[11px] tracking-wide text-white sm:text-xs">
      <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">{business.streetAddress}, {business.neighborhood}, {business.city}</a>
    </p>
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white">
      <div className="mx-auto grid h-16 max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center px-3 sm:px-6 lg:h-[72px]">
        <div className="flex items-center">
          <button ref={trigger} type="button" className="grid h-11 w-11 place-items-center text-ink lg:hidden" aria-label="Abrir menú" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)}>
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
          <Link href="/contacto" className="hidden text-sm underline-offset-4 hover:underline lg:inline">Agendar cita</Link>
        </div>
        <Link href="/" aria-label="L&G OPTICS, inicio" className="text-navy-900"><span className="logo-mark w-[92px] lg:w-[104px]" /></Link>
        <div className="flex items-center justify-end gap-5">
          <a href={`tel:${business.phone}`} className="hidden text-sm underline-offset-4 hover:underline lg:inline">{business.phoneLabel}</a>
          <a href={whatsappUrl()} aria-label="Escribir por WhatsApp" className="grid h-11 w-11 place-items-center text-ink lg:h-auto lg:w-auto lg:grid-flow-col lg:gap-2 lg:text-sm"><WhatsAppIcon /><span className="hidden underline-offset-4 hover:underline lg:inline">WhatsApp</span></a>
        </div>
      </div>
      <nav aria-label="Navegación principal" className="hidden justify-center gap-8 pb-3 text-sm lg:flex">
        {navigation.map(item => <Link key={item.href} href={item.href} className="underline-offset-8 hover:underline">{item.label}</Link>)}
      </nav>
      <dialog ref={dialog} id="mobile-navigation" aria-label="Menú de navegación" onCancel={close} onClose={close} onClick={event => { if (event.target === event.currentTarget) close(); }} className="fixed inset-y-0 left-0 right-auto m-0 h-dvh max-h-none w-[86vw] max-w-sm border-0 bg-white p-5 text-ink backdrop:bg-black/40">
        <button type="button" autoFocus onClick={close} aria-label="Cerrar menú" className="-ml-2 grid h-11 w-11 place-items-center">
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        <nav aria-label="Navegación móvil" className="mt-4 flex flex-col">
          {navigation.map(item => <Link key={item.href} href={item.href} onClick={close} className="border-b border-ink/10 py-4 font-roots text-3xl">{item.label}</Link>)}
          <a href={whatsappUrl()} className="btn-whatsapp mt-8"><WhatsAppIcon /><span>WhatsApp</span></a>
          <Link href="/contacto" onClick={close} className="btn-secondary mt-3">Agendar cita</Link>
          <a href={`tel:${business.phone}`} className="py-4 text-center text-sm underline underline-offset-4">{business.phoneLabel}</a>
        </nav>
      </dialog>
    </header>
  </>;
}

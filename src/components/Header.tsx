"use client";
import Image from "next/image";
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
  return <header className="sticky top-0 z-40 bg-navy-900 text-white shadow-sm">
    <div className="max-w-7xl mx-auto flex h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
      <Link href="/" aria-label="L&G OPTICS, inicio" className="flex-shrink-0"><Image src="/LG-OPTICS.png" alt="L&G OPTICS" width={1390} height={780} sizes="120px" className="w-[120px] h-auto" /></Link>
      <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-6 font-sans">
        {navigation.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className="py-3 hover:underline aria-[current=page]:underline">{item.label}</Link>)}
        <Link href="/contacto" className="btn-outline-white">Agendar cita</Link>
      </nav>
      <button ref={trigger} type="button" className="lg:hidden min-w-12 min-h-12 text-3xl" aria-label="Abrir menú" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)}>☰</button>
    </div>
    <dialog ref={dialog} id="mobile-navigation" aria-label="Menú de navegación" onCancel={close} onClose={close} onClick={event => { if (event.target === event.currentTarget) close(); }} className="fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-none w-80 max-w-[90vw] border-0 bg-navy-900 p-6 text-white shadow-2xl backdrop:bg-black/50">
      <button type="button" autoFocus onClick={close} aria-label="Cerrar menú" className="ml-auto block min-w-12 min-h-12 text-3xl">×</button>
      <nav aria-label="Navegación móvil" className="flex flex-col gap-2 font-sans mt-6">
        {navigation.map(item => <Link key={item.href} href={item.href} onClick={close} aria-current={pathname === item.href ? "page" : undefined} className="px-3 py-3 rounded hover:bg-white/10 aria-[current=page]:underline">{item.label}</Link>)}
        <Link href="/contacto" onClick={close} className="btn-outline-white text-center mt-3">Agendar cita</Link>
        <a href={whatsappUrl()} className="btn-whatsapp text-center mt-3">WhatsApp</a>
        <a href={`tel:${business.phone}`} className="text-center py-3 underline">{business.phoneLabel}</a>
      </nav>
    </dialog>
  </header>;
}

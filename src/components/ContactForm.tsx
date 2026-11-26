"use client";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { validateContact, serviceLabels, timeLabels, describeRequest, storeToday, type ContactInput } from "@/lib/contact";
import { readSource, tagWhatsappHref } from "@/lib/source";
import { whatsappUrl } from "@/lib/business";
import { trackEvent } from "@/lib/analytics";

const initial: ContactInput = { nombre: "", telefono: "", servicio: "", mensaje: "", dia: "", horario: "", origen: "" };
export default function ContactForm() {
  const [data, setData] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [pending, setPending] = useState(false);
  const started = useRef(false);
  const submitting = useRef(false);
  const [today, setToday] = useState("");
  // Links such as /contacto?servicio=examen preselect the service the visitor was reading about.
  useEffect(() => {
    const servicio = new URLSearchParams(window.location.search).get("servicio") ?? "";
    setToday(storeToday(new Date()));
    if (Object.hasOwn(serviceLabels, servicio)) setData(current => current.servicio ? current : { ...current, servicio });
  }, []);
  // Same request, sent as a WhatsApp chat instead: no waiting for a call back.
  function sendByWhatsapp() {
    // The chat itself carries the visitor's number, so the phone field is not needed here.
    const rest = { ...validateContact(data).errors };
    delete rest.telefono;
    setErrors(rest);
    setStatus(null);
    if (Object.keys(rest).length) return;
    const lines = [`Hola, soy ${data.nombre.trim()}. Quiero agendar una visita en L&G OPTICS.`, ...describeRequest(data), data.mensaje.trim()].filter(Boolean);
    trackEvent("click_whatsapp", data.servicio);
    window.open(tagWhatsappHref(whatsappUrl(lines.join("\n")), readSource()), "_blank", "noopener");
  }
  const field = "w-full rounded-xl border border-ink/20 bg-white px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-navy-900 disabled:bg-sand";
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const validation = validateContact({ ...data, origen: readSource() });
    setErrors(validation.errors);
    setStatus(null);
    if (!validation.data) return;
    submitting.current = true;
    setPending(true);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(validation.data), signal: AbortSignal.timeout(20000) });
      const result = await response.json();
      const success = response.ok && result.success === true;
      setStatus({ success, message: typeof result.message === "string" ? result.message : "No pudimos enviar la solicitud. Intenta de nuevo o usa WhatsApp." });
      trackEvent(success ? "lead_accepted" : "form_error", data.servicio);
      if (success) { setData(initial); started.current = false; }
    } catch {
      setStatus({ success: false, message: "No pudimos confirmar el envío. Puedes intentarlo de nuevo o escribirnos por WhatsApp." });
      trackEvent("form_error", data.servicio);
    } finally { setPending(false); submitting.current = false; }
  }
  return <form onSubmit={submit} className="space-y-5 font-sans" noValidate onFocus={() => { if (!started.current) { trackEvent("form_start"); started.current = true; } }}>
    <p className="text-ink/80">Dinos qué necesitas y cuándo te gustaría venir. La cita queda confirmada cuando nuestro equipo te responde.</p>
    {([['nombre', 'Nombre', 'text', 'name', 100], ['telefono', 'Teléfono', 'tel', 'tel', 20]] as const).map(([id, label, type, autoComplete, maxLength]) => <div key={id}>
      <label htmlFor={id} className="block text-sm font-semibold text-ink mb-2">{label} <span aria-hidden="true">*</span></label>
      <input id={id} name={id} type={type} autoComplete={autoComplete} required maxLength={maxLength} disabled={pending} value={data[id]} onChange={e => setData({ ...data, [id]: e.target.value })} className={field} aria-invalid={!!errors[id]} aria-describedby={errors[id] ? `${id}-error` : undefined} />
      {errors[id] && <p id={`${id}-error`} role="alert" className="text-red-700 text-sm mt-1">{errors[id]}</p>}
    </div>)}
    <div><label htmlFor="servicio" className="block text-sm font-semibold text-ink mb-2">Servicio</label>
      <select id="servicio" name="servicio" value={data.servicio} disabled={pending} onChange={e => setData({ ...data, servicio: e.target.value })} className={field}>
        <option value="">Selecciona un servicio</option>{Object.entries(serviceLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
      </select>
    </div>
    <fieldset className="grid gap-5 sm:grid-cols-2"><legend className="block text-sm font-semibold text-ink mb-2">¿Cuándo te gustaría venir? (opcional)</legend>
      <div><label htmlFor="dia" className="block text-sm text-ink/80 mb-1">Día</label>
        <input id="dia" name="dia" type="date" min={today || undefined} disabled={pending} value={data.dia} onChange={e => setData({ ...data, dia: e.target.value })} className={field} aria-invalid={!!errors.dia} aria-describedby={errors.dia ? "dia-error" : undefined} />
        {errors.dia && <p id="dia-error" role="alert" className="text-red-700 text-sm mt-1">{errors.dia}</p>}</div>
      <div><label htmlFor="horario" className="block text-sm text-ink/80 mb-1">Horario</label>
        <select id="horario" name="horario" disabled={pending} value={data.horario} onChange={e => setData({ ...data, horario: e.target.value })} className={field} aria-invalid={!!errors.horario} aria-describedby={errors.horario ? "horario-error" : undefined}>
          <option value="">Cualquier horario</option>{Object.entries(timeLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>
        {errors.horario && <p id="horario-error" role="alert" className="text-red-700 text-sm mt-1">{errors.horario}</p>}</div>
    </fieldset>
    <div><label htmlFor="mensaje" className="block text-sm font-semibold text-ink mb-2">Mensaje (opcional)</label>
      <textarea id="mensaje" name="mensaje" rows={3} maxLength={2000} disabled={pending} value={data.mensaje} onChange={e => setData({ ...data, mensaje: e.target.value })} className={field} aria-describedby="message-help" />
      <p id="message-help" className="text-sm text-ink/70">No incluyas expedientes ni información médica sensible.</p>
    </div>
    <p className="text-sm text-ink/80">Usamos estos datos para responder a tu solicitud. Consulta cómo tratamos tus datos en nuestro <Link href="/privacidad" className="underline">aviso de privacidad</Link>.</p>
    <div className="grid gap-3">
      <button type="button" disabled={pending} onClick={sendByWhatsapp} className="btn-whatsapp w-full min-h-12 disabled:opacity-60"><WhatsAppIcon /><span>Enviar por WhatsApp</span></button>
      <button type="submit" disabled={pending} className="btn-secondary w-full min-h-12 disabled:opacity-60">{pending ? "Enviando…" : "Pedir que me llamen"}</button>
    </div>
    <p className="text-sm text-ink/70">Por WhatsApp solo necesitas tu nombre. Para que te llamemos, deja también tu teléfono.</p>
    <p className="text-sm text-ink/70">* Campos obligatorios</p>
    {status && <div role={status.success ? "status" : "alert"} className={`rounded-lg p-4 ${status.success ? "bg-green-50 text-green-900" : "bg-red-50 text-red-900"}`}>
      <p>{status.message}</p>{!status.success && <a href={whatsappUrl()} className="inline-flex mt-3 underline font-semibold inline-flex items-center justify-center gap-2"><WhatsAppIcon /><span>Contactar por WhatsApp</span></a>}
    </div>}
  </form>;
}

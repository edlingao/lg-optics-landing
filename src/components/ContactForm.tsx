"use client";
import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { validateContact, serviceLabels, type ContactInput } from "@/lib/contact";
import { whatsappUrl } from "@/lib/business";
import { trackEvent } from "@/lib/analytics";

const initial: ContactInput = { nombre: "", telefono: "", servicio: "", mensaje: "" };
export default function ContactForm() {
  const [data, setData] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [pending, setPending] = useState(false);
  const started = useRef(false);
  const submitting = useRef(false);
  const field = "w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-900 disabled:bg-gray-100";
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const validation = validateContact(data);
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
    <p className="text-gray-700">Déjanos tu teléfono para consultar disponibilidad. La cita se confirma cuando nuestro equipo te contacte.</p>
    {([['nombre', 'Nombre', 'text', 'name', 100], ['telefono', 'Teléfono', 'tel', 'tel', 20]] as const).map(([id, label, type, autoComplete, maxLength]) => <div key={id}>
      <label htmlFor={id} className="block text-sm font-semibold text-navy-900 mb-2">{label} <span aria-hidden="true">*</span></label>
      <input id={id} name={id} type={type} autoComplete={autoComplete} required maxLength={maxLength} disabled={pending} value={data[id]} onChange={e => setData({ ...data, [id]: e.target.value })} className={field} aria-invalid={!!errors[id]} aria-describedby={errors[id] ? `${id}-error` : undefined} />
      {errors[id] && <p id={`${id}-error`} role="alert" className="text-red-700 text-sm mt-1">{errors[id]}</p>}
    </div>)}
    <div><label htmlFor="servicio" className="block text-sm font-semibold text-navy-900 mb-2">Servicio</label>
      <select id="servicio" name="servicio" value={data.servicio} disabled={pending} onChange={e => setData({ ...data, servicio: e.target.value })} className={field}>
        <option value="">Selecciona un servicio</option>{Object.entries(serviceLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
      </select>
    </div>
    <div><label htmlFor="mensaje" className="block text-sm font-semibold text-navy-900 mb-2">Mensaje (opcional)</label>
      <textarea id="mensaje" name="mensaje" rows={3} maxLength={2000} disabled={pending} value={data.mensaje} onChange={e => setData({ ...data, mensaje: e.target.value })} className={field} aria-describedby="message-help" />
      <p id="message-help" className="text-sm text-gray-600">No incluyas expedientes ni información médica sensible.</p>
    </div>
    <p className="text-sm text-gray-700">Usamos estos datos para responder a tu solicitud. Consulta cómo tratamos tus datos en nuestro <Link href="/privacidad" className="underline">aviso de privacidad</Link>.</p>
    <button type="submit" disabled={pending} className="btn-primary w-full min-h-12 disabled:opacity-60">{pending ? "Enviando…" : "Enviar Mensaje"}</button>
    <p className="text-sm text-gray-600">* Campos obligatorios</p>
    {status && <div role={status.success ? "status" : "alert"} className={`rounded-lg p-4 ${status.success ? "bg-green-50 text-green-900" : "bg-red-50 text-red-900"}`}>
      <p>{status.message}</p>{!status.success && <a href={whatsappUrl()} className="inline-block mt-3 underline font-semibold">Contactar por WhatsApp</a>}
    </div>}
  </form>;
}

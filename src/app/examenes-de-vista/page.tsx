import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exámenes de Vista Profesionales en Puebla | L&G OPTICS",
  description: "Exámenes de vista completos con tecnología moderna en Nueva Antequera, Puebla. Optometristas certificados, detección temprana de enfermedades oculares y diagnósticos precisos.",
  keywords: "examen de vista Puebla, optometrista Puebla, examen óptico Nueva Antequera, refracción visual, examen retina Puebla, graduación vista",
  alternates: {
    canonical: "https://www.lg-optics.com/examenes-de-vista",
  },
  openGraph: {
    title: "Exámenes de Vista Profesionales - L&G OPTICS Puebla",
    description: "Cuida tu salud visual con nuestros exámenes completos y tecnología moderna",
    url: "https://www.lg-optics.com/examenes-de-vista",
    images: ["/examenes-og.jpg"],
  },
};

// SVG Icons
const EyeIcon = () => (
  <svg className="w-8 h-8 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-8 h-8 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const ChildIcon = () => (
  <svg className="w-8 h-8 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-8 h-8 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MicroscopeIcon = () => (
  <svg className="w-10 h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-5.338.88a2.25 2.25 0 01-2.597-2.598l.88-5.337c.293-1.717 2.38-2.3 3.611-1.067L19.8 15.3z" />
  </svg>
);

const LightIcon = () => (
  <svg className="w-10 h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>
);

const LensIcon = () => (
  <svg className="w-10 h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PressureIcon = () => (
  <svg className="w-10 h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
  </svg>
);

const MyopiaIcon = () => (
  <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const BookIcon = () => (
  <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const SwirlIcon = () => (
  <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);

const GlassesIcon = () => (
  <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
  </svg>
);

const DropIcon = () => (
  <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const MonitorIcon = () => (
  <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);

const ClipboardIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
  </svg>
);

const ExamIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

interface ExamType {
  name: string;
  duration: string;
  price: string;
  description: string;
  includes: string[];
  ideal: string;
  iconComponent: React.ReactNode;
}

const examTypes: ExamType[] = [
  {
    name: "Examen Visual Completo",
    duration: "45-60 min",
    price: "Desde $350",
    description: "Evaluación integral de tu salud visual y detección temprana de problemas oculares.",
    includes: [
      "Medición de agudeza visual",
      "Refracción computarizada",
      "Examen de fondo de ojo",
      "Evaluación binocular",
      "Detección de enfermedades",
      "Prescripción personalizada"
    ],
    ideal: "Revisión anual, cambio de graduación, síntomas visuales",
    iconComponent: <EyeIcon />
  },
  {
    name: "Examen de Refracción",
    duration: "30 min",
    price: "Desde $250",
    description: "Determinación precisa de tu graduación para lentes oftálmicos perfectos.",
    includes: [
      "Autorefractometría",
      "Refracción subjetiva",
      "Prueba de visión cercana",
      "Prueba de visión lejana",
      "Corrección astigmatismo",
      "Graduación final"
    ],
    ideal: "Renovación de lentes, primera vez usando lentes",
    iconComponent: <SearchIcon />
  },
  {
    name: "Examen Pediátrico",
    duration: "30-45 min",
    price: "Desde $300",
    description: "Evaluación especializada para niños y adolescentes con técnicas adaptadas.",
    includes: [
      "Pruebas adaptadas a la edad",
      "Detección de ambliopía",
      "Evaluación estrabismo",
      "Control miopía infantil",
      "Orientación a padres",
      "Seguimiento desarrollo visual"
    ],
    ideal: "Niños 3-17 años, problemas escolares, antecedentes familiares",
    iconComponent: <ChildIcon />
  },
  {
    name: "Examen Ocupacional",
    duration: "40 min",
    price: "Desde $400",
    description: "Evaluación específica para trabajadores que requieren certificación visual.",
    includes: [
      "Agudeza visual certificada",
      "Visión de colores",
      "Campo visual básico",
      "Visión nocturna",
      "Certificado oficial",
      "Recomendaciones laborales"
    ],
    ideal: "Conductores, pilotos, trabajadores industriales",
    iconComponent: <BriefcaseIcon />
  }
];

const technologies = [
  {
    name: "Autorefractómetro Digital",
    description: "Medición automática y precisa de errores refractivos",
    iconComponent: <MicroscopeIcon />
  },
  {
    name: "Oftalmoscopio LED",
    description: "Examen detallado del fondo de ojo y retina",
    iconComponent: <LightIcon />
  },
  {
    name: "Lensómetro Automático",
    description: "Verificación exacta de graduaciones existentes",
    iconComponent: <LensIcon />
  },
  {
    name: "Tonómetro de Aplanación",
    description: "Medición de presión intraocular para glaucoma",
    iconComponent: <PressureIcon />
  }
];

const conditions = [
  { name: "Miopía", description: "Dificultad para ver de lejos", iconComponent: <MyopiaIcon /> },
  { name: "Hipermetropía", description: "Esfuerzo visual en distancias cercanas", iconComponent: <BookIcon /> },
  { name: "Astigmatismo", description: "Visión borrosa a todas las distancias", iconComponent: <SwirlIcon /> },
  { name: "Presbicia", description: "Dificultad para enfocar de cerca (40+)", iconComponent: <GlassesIcon /> },
  { name: "Ojo Seco", description: "Irritación y molestias oculares", iconComponent: <DropIcon /> },
  { name: "Fatiga Visual", description: "Cansancio por uso de pantallas", iconComponent: <MonitorIcon /> }
];

const processSteps = [
  { step: "1", title: "Cita", description: "Agenda tu cita por teléfono, WhatsApp o en línea", iconComponent: <CalendarIcon /> },
  { step: "2", title: "Llegada", description: "Recepción y registro de información médica", iconComponent: <ClipboardIcon /> },
  { step: "3", title: "Examen", description: "Evaluación completa con nuestro optometrista", iconComponent: <ExamIcon /> },
  { step: "4", title: "Resultados", description: "Explicación detallada y recomendaciones", iconComponent: <ChartIcon /> }
];

export default function ExamenesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Examen de Vista",
            "provider": {
              "@type": "Optician",
              "name": "L&G OPTICS"
            },
            "areaServed": "Puebla",
            "priceRange": "$250 - $400"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8">
              <h1 className="font-roots text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Exámenes de Vista Profesionales en Puebla
              </h1>
              <p className="font-sans text-lg text-gray-200 mb-8">
                Cuida tu salud visual con nuestros exámenes completos realizados por
                optometristas certificados usando tecnología de vanguardia en Nueva Antequera.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="bg-white text-navy-900 hover:bg-gray-100 px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 text-center focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-navy-900"
                >
                  Agendar Examen
                </Link>
                <a
                  href="tel:+522213374152"
                  className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 text-center flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-navy-900"
                >
                  <PhoneIcon />
                  Llamar Ahora
                </a>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/man-holding-glasses.jpeg"
                  alt="Examen de vista profesional en L&G OPTICS Puebla"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Exams */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-roots text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Tipos de Exámenes Disponibles
            </h2>
            <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos diferentes tipos de evaluaciones visuales adaptadas a tus necesidades específicas
            </p>
          </div>

          <ExamCardsClient examTypes={examTypes} />

          {/* Link to pricing */}
          <div className="text-center mt-12">
            <Link
              href="/pricing"
              className="font-sans text-navy-900 hover:text-navy-700 underline font-medium transition-colors"
            >
              Combina tu examen con un paquete de lentes
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-roots text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Tecnología de Vanguardia
            </h2>
            <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Utilizamos equipos modernos para diagnósticos precisos y confiables
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {tech.iconComponent}
                </div>
                <h3 className="font-roots text-base md:text-lg font-bold text-navy-900 mb-2">{tech.name}</h3>
                <p className="font-sans text-gray-600 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-roots text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Condiciones que Detectamos y Tratamos
            </h2>
            <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Identificamos y proporcionamos soluciones para una amplia variedad de problemas visuales
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="shrink-0">
                    {condition.iconComponent}
                  </div>
                  <h3 className="font-roots text-base md:text-lg font-bold text-navy-900">{condition.name}</h3>
                </div>
                <p className="font-sans text-gray-600 text-sm">{condition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-roots text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              ¿Cómo funciona tu examen?
            </h2>
            <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Un proceso sencillo y profesional diseñado para tu comodidad
            </p>
          </div>

          {/* Desktop Horizontal Stepper */}
          <div className="hidden md:block">
            <div className="flex items-start justify-between relative">
              {/* Connecting Line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-navy-200 mx-20"></div>

              {processSteps.map((step, index) => (
                <div key={index} className="text-center flex-1 relative z-10">
                  <div className="w-16 h-16 bg-navy-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.iconComponent}
                  </div>
                  <div className="text-sm font-bold text-navy-900 mb-1">Paso {step.step}</div>
                  <h3 className="font-roots text-lg font-bold text-navy-900 mb-2">{step.title}</h3>
                  <p className="font-sans text-gray-600 text-sm max-w-[180px] mx-auto">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Vertical Stepper */}
          <div className="md:hidden">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-navy-200"></div>

              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-6 relative z-10">
                    <div className="w-16 h-16 bg-navy-900 text-white rounded-full flex items-center justify-center shrink-0">
                      {step.iconComponent}
                    </div>
                    <div className="pt-2">
                      <div className="text-sm font-bold text-navy-900 mb-1">Paso {step.step}</div>
                      <h3 className="font-roots text-lg font-bold text-navy-900 mb-1">{step.title}</h3>
                      <p className="font-sans text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-roots text-3xl md:text-4xl font-bold text-white mb-6">
              Agenda tu Examen de Vista Hoy
            </h2>
            <p className="font-sans text-xl text-gray-200 mb-8">
              No esperes más para cuidar tu salud visual. Nuestros especialistas están listos para atenderte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="bg-white text-navy-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-navy-900"
              >
                Agendar en Línea
              </Link>
              <a
                href="https://wa.me/522213374152?text=Hola, quiero agendar un examen de vista"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:ring-offset-2 focus:ring-offset-navy-900"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>
            <div className="mt-8 space-y-2">
              <p className="font-sans text-gray-300 text-sm">
                Horarios: Lun-Vie 11:00 AM - 6:00 PM | Sáb 11:00 AM - 3:00 PM
              </p>
              <Link
                href="/ubicacion"
                className="font-sans text-white hover:text-gray-200 underline text-sm transition-colors"
              >
                Visítanos en Nueva Antequera, Puebla
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm border-t border-gray-200 md:hidden z-50">
        <Link
          href="/contacto"
          className="block w-full bg-navy-900 hover:bg-navy-800 text-white py-4 rounded-lg text-lg font-semibold text-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-navy-900/50"
        >
          Agendar Examen
        </Link>
      </div>

      {/* Spacer for floating CTA on mobile */}
      <div className="h-20 md:hidden"></div>
    </div>
  );
}

// Client Component for Exam Cards with Accordion State
function ExamCardsClient({ examTypes }: { examTypes: ExamType[] }) {
  return (
    <ExamCardsWrapper examTypes={examTypes} />
  );
}

// This needs to be a client component for the accordion
function ExamCardsWrapper({ examTypes }: { examTypes: ExamType[] }) {
  // Since we can't use useState in a server component, we'll make the accordion work without JS
  // by using CSS :target or details/summary elements
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {examTypes.map((exam, index) => {
        const whatsappMessage = encodeURIComponent(`Hola, quiero agendar un ${exam.name}`);
        const whatsappLink = `https://wa.me/522213374152?text=${whatsappMessage}`;

        return (
          <div key={index} className="backdrop-blur-md bg-white/60 border border-white/30 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-navy-900/5 rounded-xl shrink-0">
                  {exam.iconComponent}
                </div>
                <div className="flex-1">
                  <h3 className="font-roots text-xl md:text-2xl font-bold text-navy-900 mb-1">{exam.name}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="flex items-center gap-1 text-gray-600">
                      <ClockIcon />
                      {exam.duration}
                    </span>
                    <span className="bg-navy-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {exam.price}
                    </span>
                  </div>
                </div>
              </div>

              <p className="font-sans text-gray-600 mb-6">{exam.description}</p>

              {/* Mobile Accordion using details/summary */}
              <details className="md:hidden group">
                <summary className="flex items-center justify-between py-2 text-navy-900 font-semibold cursor-pointer list-none focus:outline-none focus:ring-2 focus:ring-navy-900/20 rounded">
                  <span>Incluye</span>
                  <span className="transform transition-transform duration-200 group-open:rotate-180">
                    <ChevronDownIcon />
                  </span>
                </summary>
                <div className="pt-3">
                  <ul className="space-y-2 mb-4">
                    {exam.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700 font-sans">
                        <span className="w-2 h-2 bg-navy-900 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 font-sans">
                    <strong className="text-navy-900">Ideal para:</strong> {exam.ideal}
                  </p>
                </div>
              </details>

              {/* Desktop Always Visible */}
              <div className="hidden md:block">
                <h4 className="font-semibold text-navy-900 mb-3">Incluye:</h4>
                <ul className="space-y-2 mb-4">
                  {exam.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700 font-sans">
                      <span className="w-2 h-2 bg-navy-900 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 font-sans">
                  <strong className="text-navy-900">Ideal para:</strong> {exam.ideal}
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex justify-center items-center w-full bg-navy-900 hover:bg-navy-800 text-white py-3 rounded-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-navy-900/50 focus:ring-offset-2"
              >
                Agendar
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

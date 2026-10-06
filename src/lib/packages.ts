export const packages = [
  { name: "Básico", price: 1900, material: "CR-39", features: ["Lentes oftálmicos graduados CR-39", "Resistencia a rayones", "Armazón de línea incluido"] },
  { name: "Superior", price: 2900, material: "Consultar material", features: ["Lentes oftálmicos graduados", "Filtro antiblue", "Tratamiento antirreflejante", "Resistencia a rayones", "Armazón de línea incluido"] },
  { name: "Alto índice", price: 3900, material: "Alto índice: confirmar índice según receta", features: ["Lentes de alto índice", "Diseño progresivo disponible: consultar condiciones", "Filtro antiblue", "Tratamiento antirreflejante", "Fotocromático", "Armazón de línea incluido"] },
] as const;
export const packageFaqs = [
  { question: "¿Qué armazón incluye el paquete?", answer: "Los paquetes incluyen un armazón de línea. Consulta los modelos disponibles; un armazón diferente puede modificar el precio final." },
  { question: "¿El examen de vista está incluido?", answer: "El examen se cotiza por separado. Consulta los tipos de examen y sus precios antes de agendar." },
  { question: "¿La graduación cambia la cotización?", answer: "Comparte tu receta para confirmar los materiales, índices y tratamientos compatibles. Solicita el precio final de tu combinación antes de realizar el pedido." },
  { question: "¿Cuándo estarán listos mis lentes?", answer: "El plazo depende del lente y de la disponibilidad. Confirma con el equipo la fecha estimada de entrega de tu pedido." },
  { question: "¿Qué garantía tienen mis lentes?", answer: "Pide las condiciones aplicables al armazón, lentes y tratamientos que elijas antes de comprar. El equipo te indicará cómo solicitar ajustes o seguimiento." },
] as const;

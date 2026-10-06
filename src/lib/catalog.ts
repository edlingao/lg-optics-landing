export const catalog = [
  { id: "prescription", name: "Lentes graduados", description: "Opciones según tu receta, materiales y actividades.", items: [
    { name: "Progresivos", from: 2500, image: "/glasses/prescription-lenses/glasses-1.png", detail: "Consulta diseños para distintas distancias y opciones de adaptación." },
    { name: "Bifocales", from: 1800, image: "/glasses/prescription-lenses/glasses-2.png", detail: "Opciones para visión lejana y cercana en un mismo lente." },
    { name: "Monofocales", from: 1200, image: "/glasses/prescription-lenses/glasses-3.png", detail: "Lentes con una graduación; consulta materiales y tratamientos." },
    { name: "Antirreflejantes", from: 1500, image: "/glasses/prescription-lenses/glasses-4.png", detail: "Consulta tratamientos antirreflejantes para tus lentes graduados." },
    { name: "Fotocromáticos", from: 2200, image: "/glasses/prescription-lenses/glasses-5.png", detail: "Consulta materiales, tonos y condiciones de uso de cada opción." },
    { name: "Alto índice", from: 2800, image: "/glasses/prescription-lenses/glasses-6.png", detail: "Compara índices y espesores según tu graduación y armazón." },
  ] },
  { id: "sunglasses", name: "Lentes de sol", description: "Prueba estilos y consulta las características de protección de cada modelo.", items: [
    { name: "Estilo deportivo polarizado", from: 1500, image: "/glasses/sunglasses/sunglasses-1.png", detail: "Consulta opciones de polarizado y disponibilidad." },
    { name: "Estilo clásico", from: 1200, image: "/glasses/sunglasses/sunglasses-2.png", detail: "Compara colores, ajuste y materiales en tienda." },
    { name: "Estilo aviador", from: 1800, image: "/glasses/sunglasses/sunglasses-3.png", detail: "Consulta tallas y modelos disponibles." },
    { name: "Estilo oversize", from: 1400, image: "/glasses/sunglasses/sunglasses-4.png", detail: "Armazones de mayor tamaño; prueba su ajuste en persona." },
    { name: "Estilo deportivo", from: 1600, image: "/glasses/sunglasses/sunglasses-5.png", detail: "Pregunta por materiales y características para tu actividad." },
    { name: "Estilo vintage", from: 1300, image: "/glasses/sunglasses/sunglasses-6.png", detail: "Consulta opciones de diseño y color." },
  ] },
  { id: "blue-light", name: "Lentes con filtro azul", description: "Consulta opciones de tratamiento y sus características. La elección depende de tus necesidades y receta.", items: [
    { name: "Filtro azul", from: 1600, image: "/glasses/blue-filter-lenses/blue-1.png", detail: "Pregunta por la ficha del material y sus tratamientos." },
    { name: "Estilo oficina", from: 1400, image: "/glasses/blue-filter-lenses/blue-2.png", detail: "Prueba el ajuste del armazón y consulta opciones de graduación." },
    { name: "Estilo gaming", from: 1700, image: "/glasses/blue-filter-lenses/blue-3.png", detail: "Consulta disponibilidad y características del lente." },
    { name: "Estilo diario", from: 1300, image: "/glasses/blue-filter-lenses/blue-4.png", detail: "Compara materiales y diseños para uso cotidiano." },
    { name: "Estilo Night Mode", from: 1500, image: "/glasses/blue-filter-lenses/blue-5.png", detail: "Consulta características de los tratamientos disponibles." },
    { name: "Estilo estudiante", from: 1200, image: "/glasses/blue-filter-lenses/blue-6.png", detail: "Consulta el presupuesto para tu receta y armazón." },
  ] },
] as const;
export const formatPrice = (price: number) => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(price);

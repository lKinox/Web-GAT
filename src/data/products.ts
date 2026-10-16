export type CategoryId = "bujias" | "filtros" | "correas" | "fluidos" | "repuestos";

export type Category = {
  id: CategoryId;
  name: string;
  icon: string;
};

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  image: string;
  gallery?: string[];
  summary: string;
  highlight: string;
  description: string;
  features: string[];
};

export const categories: Category[] = [
  { id: "bujias", name: "Bujías", icon: "/images/icons/bujias.svg" },
  { id: "filtros", name: "Filtros", icon: "/images/icons/filtros.svg" },
  { id: "correas", name: "Correas", icon: "/images/icons/correas.svg" },
  { id: "fluidos", name: "Fluidos", icon: "/images/icons/fluidos.svg" },
  { id: "repuestos", name: "Repuestos", icon: "/images/icons/repuestos.svg" },
];

export const products: Product[] = [
  {
    slug: "filtro-de-aceite",
    name: "Filtro de Aceite",
    category: "filtros",
    image: "/images/products/filtro-aceite.png",
    summary:
      "Filtración de alto rendimiento que protege el motor y prolonga la vida útil del aceite.",
    highlight: "High Performance | Referencia: G-060",
    description:
      "El Filtro de Aceite GAT está diseñado para mantener el lubricante limpio y proteger el motor durante cada intervalo de servicio. Su medio filtrante y su estructura de acero trabajan juntos para retener impurezas sin restringir el flujo de aceite.",
    features: [
      "Rendimiento superior de hasta 8.000 km.",
      "Eficiencia de filtración del 95% para partículas mayores a 20 micrones (estándar TÜV IATF 16949).",
      "Medio filtrante de celulosa y microfibra de vidrio sintético con pliegues profundos.",
      "Estructura en acero de alto calibre con empaque de nitrilo resistente y válvula antidrenaje.",
    ],
  },
  {
    slug: "filtro-de-gasolina",
    name: "Filtro de Gasolina",
    category: "filtros",
    image: "/images/products/filtro-gasolina.jpg",
    summary: "Retiene impurezas del combustible para una inyección limpia y un motor eficiente.",
    highlight: "High Performance | Referencia: G-1409",
    description:
      "El Filtro de Gasolina GAT retiene partículas y sedimentos antes de que lleguen al sistema de inyección. Su elemento plisado mantiene un flujo constante para proteger inyectores, bomba y carburador.",
    features: [
      "Elemento de papel plisado que retiene partículas y sedimentos del combustible.",
      "Carcasa transparente resistente a combustibles con conexiones metálicas.",
      "Flujo constante que protege inyectores, bomba y carburador.",
      "Fabricado bajo certificación TÜV IATF 16949.",
    ],
  },
  {
    slug: "correas",
    name: "Correas",
    category: "correas",
    image: "/images/products/correa-1.png",
    gallery: ["/images/products/correa-2.jpg"],
    summary: "Transmisión silenciosa, confiable y libre de deslizamientos.",
    highlight: "High Performance | Compuesto de EPDM",
    description:
      "Las Correas GAT transmiten la fuerza del motor de forma silenciosa y sin deslizamientos. Su compuesto y sus cuerdas internas están pensados para resistir calor, aceite y tracción continua.",
    features: [
      "Transmisión silenciosa, confiable y libre de deslizamientos.",
      "Compuesto de EPDM resistente al aceite, impurezas y altas temperaturas.",
      "Dientes internos que mejoran la flexibilidad y disipan el calor eficientemente.",
      "Cuerdas de poliéster con tratamiento especial para soportar gran tracción, disponibles en un amplio rango de códigos (variación cada 17 mm).",
    ],
  },
  {
    slug: "liga-de-frenos-dot-3",
    name: "Liga de Frenos DOT 3",
    category: "fluidos",
    image: "/images/products/dot-3.jpg",
    summary: "Formulada para vehículos de uso cotidiano y sistemas de frenado convencionales.",
    highlight: "High Performance | Contenido neto: 290 ml",
    description:
      "La Liga de Frenos GAT DOT 3 Premium es un fluido hidráulico de alto rendimiento, formulado a base de glicol-éter para ofrecer una transmisión de fuerza precisa, constante y segura en el sistema de frenado de tu vehículo. Su fórmula está diseñada para responder en cada frenada, tanto en el uso diario en ciudad como en trayectos largos, descensos prolongados y condiciones exigentes de tráfico.",
    features: [
      "Alto punto de ebullición, que ayuda a evitar la formación de burbujas de vapor ante el calentamiento del sistema.",
      "Excelente estabilidad térmica y química durante toda su vida útil.",
      "Baja viscosidad a bajas temperaturas, para una respuesta rápida del pedal en cualquier clima.",
      "Protege contra la corrosión los componentes metálicos del sistema: cilindros, pistones, pinzas y líneas.",
      "Compatible con los sellos y mangueras de caucho utilizados en sistemas de frenos convencionales.",
      "Lubrica las partes móviles internas, lo que contribuye a prolongar la vida útil de los componentes.",
      "Fórmula Premium pensada para un desempeño estable y confiable.",
    ],
  },
  {
    slug: "liga-de-frenos-dot-4",
    name: "Liga de Frenos DOT 4",
    category: "fluidos",
    image: "/images/products/dot-4.png",
    summary: "Diseñada para exigencias superiores de frenado y temperaturas más elevadas.",
    highlight: "High Performance | Contenido neto: 290 ml",
    description:
      "La Liga de Frenos GAT DOT 4 Premium está formulada para exigencias superiores de frenado y temperaturas de trabajo más elevadas. Mantiene una respuesta firme del pedal y protege los componentes internos del sistema, incluso en uso intensivo.",
    features: [
      "Diseñada para temperaturas de trabajo más elevadas y un punto de ebullición superior.",
      "Totalmente compatible con sistemas de seguridad activa ABS y ESP.",
      "Máxima resistencia a la ebullición ante frenadas prolongadas.",
      "Protege componentes internos y sellos del sistema de frenos.",
      "Respuesta constante del pedal en ciudad, carretera y descensos.",
      "Fórmula Premium para un desempeño estable y confiable.",
    ],
  },
  {
    slug: "bujias",
    name: "Bujías",
    category: "bujias",
    image: "/images/products/bujias.jpg",
    summary: "Encendido preciso con núcleo de cobre de máxima conductividad.",
    highlight: "High Performance | Núcleo de cobre",
    description:
      "Las Bujías GAT entregan un encendido preciso gracias a su electrodo de cobre y su aislamiento cerámico. Están mecanizadas para mantener el voltaje donde corresponde y ofrecer una cobertura amplia del parque automotriz.",
    features: [
      "Electrodo central con núcleo de cobre de máxima conductividad.",
      "Cerámica de alta calidad que previene la formación de burbujas y fugas de corriente.",
      "Cinco pestañas o nervaduras para evitar pérdidas de voltaje.",
      "Mecanizado de alta precisión y certificación TÜV IATF 16949.",
      "Amplia cobertura automotriz.",
    ],
  },
  {
    slug: "refrigerante-anticorrosivo-verde",
    name: "Refrigerante Anticorrosivo Verde",
    category: "fluidos",
    image: "/images/products/refrigerante-verde.jpg",
    summary: "Refrigerante anticorrosivo de alto desempeño, premezclado y listo para usar.",
    highlight: "High Performance | Contenido neto: 3,785 L",
    description:
      "El Refrigerante Anticorrosivo Verde GAT es un fluido de alto desempeño, premezclado y listo para usar. Su formulación protege el sistema de enfriamiento y mantiene una temperatura estable en distintas condiciones climáticas.",
    features: [
      "Formulación anticorrosiva de alto desempeño.",
      "Excelente estabilidad térmica en distintas condiciones climáticas.",
      "Máxima protección para componentes metálicos y sellos del sistema de enfriamiento.",
      "Inhibe la corrosión y viene premezclado.",
      "Presentación de 3,785 L (US 1 gal).",
    ],
  },
  {
    slug: "refrigerante-anticorrosivo-naranja",
    name: "Refrigerante Anticorrosivo Naranja",
    category: "fluidos",
    image: "/images/products/refrigerante-naranja.jpg",
    summary: "Refrigerante anticorrosivo de alto desempeño, premezclado y listo para usar.",
    highlight: "High Performance | Contenido neto: 3,785 L",
    description:
      "El Refrigerante Anticorrosivo Naranja GAT es un fluido de alto desempeño, premezclado y listo para usar. Protege metales y sellos del sistema de enfriamiento y conserva su rendimiento en climas exigentes.",
    features: [
      "Formulación anticorrosiva de alto desempeño.",
      "Excelente estabilidad térmica en distintas condiciones climáticas.",
      "Máxima protección para componentes metálicos y sellos del sistema de enfriamiento.",
      "Inhibe la corrosión y viene premezclado.",
      "Presentación de 3,785 L (US 1 gal).",
    ],
  },
  {
    slug: "limpiaparabrisas",
    name: "Limpiaparabrisas",
    category: "repuestos",
    image: "/images/products/limpiaparabrisas.jpg",
    summary: "Visibilidad perfecta en cualquier condición climatológica.",
    highlight: "High Performance | Medida: 19\"",
    description:
      "Los Limpiaparabrisas GAT están hechos para mantener el parabrisas limpio bajo lluvia y condiciones exigentes. Su estructura y su goma con grafito reparten la presión de forma uniforme y reducen la fricción sobre el cristal.",
    features: [
      "Visibilidad clara en cualquier condición climatológica.",
      "Estructura sólida con marco de alta resistencia para mayor durabilidad.",
      "Múltiples puntos de presión que mejoran el contacto sobre el cristal.",
      "Recubrimiento de grafito que disminuye la fricción y extiende la vida útil de la goma.",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCategory(id: CategoryId) {
  return categories.find((category) => category.id === id)!;
}

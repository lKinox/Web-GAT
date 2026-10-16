// TODO: reemplazar con los datos reales de contacto de GAT.
export const site = {
  name: "GAT Global Auto Tech",
  tagline: "Repuestos automotrices de calidad premium",
  whatsapp: "10000000000",
  phone: "+1 (000) 000-0000",
  email: "ventas@gat-autotech.com",
  instagram: "https://www.instagram.com/",
  address: "Dirección por definir",
};

export const whatsappLink = (message = "Hola, quisiera información sobre los productos GAT.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/productos", label: "Productos" },
];

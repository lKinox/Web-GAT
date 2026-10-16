import Image from "next/image";

const stats = [
  { value: "1000", suffix: "+", label: "Clientes satisfechos" },
  { value: "50", suffix: "k+", label: "Productos vendidos" },
  { value: "150", suffix: "+", label: "Referencias disponibles" },
];

export function Stats() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-16 text-white">
      <Image
        src="/images/hero-curve.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 rotate-180 scale-110 object-cover object-bottom opacity-90"
      />
      <div className="absolute inset-0 -z-10 bg-ink/40" />

      <div className="container-gat flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="eyebrow">Nuestra trayectoria</p>
          <h2 className="title-display mt-2 text-4xl sm:text-5xl">
            Nuestro
            <span className="block">viaje</span>
          </h2>
        </div>
        <dl className="grid grid-cols-3 gap-6 sm:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-brand pl-3 sm:pl-4">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="title-display text-3xl sm:text-6xl">
                {stat.value}
                <span className="text-brand">{stat.suffix}</span>
              </dd>
              <dd className="mt-2 text-xs text-white/70 sm:text-sm">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

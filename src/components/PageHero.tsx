import Image from "next/image";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
};

export function PageHero({ eyebrow, title, highlight, description }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-16 pt-36 text-white sm:pb-20 sm:pt-40">
      <Image src="/images/bg-motor.jpg" alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-60" />
      <Image
        src="/images/hero-curve.png"
        alt=""
        width={3024}
        height={1951}
        sizes="100vw"
        className="pointer-events-none absolute -bottom-[18%] inset-x-0 -z-10 h-auto w-full min-w-[900px] opacity-90"
      />
      <div className="container-gat">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="title-display mt-3 text-4xl sm:text-6xl">
          {title}
          {highlight && <span className="block text-brand">{highlight}</span>}
        </h1>
        {description && <p className="mt-5 max-w-xl text-white/75">{description}</p>}
      </div>
    </section>
  );
}

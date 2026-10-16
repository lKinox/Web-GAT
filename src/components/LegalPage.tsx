import { PageHero } from "./PageHero";

type Section = { heading: string; body: string };

export function LegalPage({ title, sections }: { title: string; sections: Section[] }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} />
      <section className="bg-white py-16 lg:py-20">
        <div className="container-gat max-w-3xl space-y-10">
          <p className="text-sm text-ink/55">Última actualización: octubre de 2026.</p>
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-semibold">{section.heading}</h2>
              <p className="mt-3 leading-relaxed text-ink/75">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

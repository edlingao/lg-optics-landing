import { business } from "@/lib/business";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonios" aria-labelledby="testimonials-title" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Opiniones en Google</p>
            <h2 id="testimonials-title" className="mt-3 font-roots text-4xl text-ink md:text-5xl">Lo que dicen nuestros clientes</h2>
          </div>
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="link">Ver opiniones en Google Maps</a>
        </div>
        {/* Phones swipe through the reviews sideways instead of scrolling past six stacked cards. */}
        <div className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3" tabIndex={0} role="group" aria-label="Opiniones de clientes">
          {testimonials.map(({ name, quote, rating }) => (
            <figure key={name} className="tile flex w-[80%] flex-none snap-center flex-col p-7 md:w-auto">
              <div role="img" aria-label={`${rating} de 5 estrellas`} className="mb-4 flex gap-1 text-amber-500">
                {Array.from({ length: rating }, (_, index) => (
                  <svg key={index} aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="m12 2.5 2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55L2.48 9.42l6.58-.96L12 2.5Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="flex-1 font-roots text-2xl leading-snug text-ink">
                <p>“{quote}”</p>
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-ink/80">{name}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-ink/75">¿Ya eres cliente? Tu opinión ayuda a otras personas de Puebla a encontrarnos.</p>
          {/* /opinion redirects to the Google review box; a plain link avoids prefetching a redirect. */}
          <a href="/opinion" target="_blank" rel="noopener noreferrer" className="btn-secondary">Dejar mi opinión en Google</a>
        </div>
      </div>
    </section>
  );
}

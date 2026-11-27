import { business } from "@/lib/business";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonios" aria-labelledby="testimonials-title" className="scroll-mt-28 py-14 md:py-20">
      <div className="px-5 text-center">
        <h2 id="testimonials-title" className="font-roots text-4xl md:text-5xl">Lo que dicen nuestros clientes</h2>
        <p className="mt-2 text-sm text-ink/70 md:text-base">Opiniones en Google</p>
      </div>
      <div className="rail mt-8 scroll-px-5 px-5 md:mt-10 lg:scroll-px-8 lg:px-8" tabIndex={0} role="group" aria-label="Opiniones de clientes">
        {testimonials.map(({ name, quote, rating }) => (
          <figure key={name} className="flex w-[80%] flex-none snap-start flex-col border-t border-ink pt-5 sm:w-[45%] lg:w-[30%]">
            <div role="img" aria-label={`${rating} de 5 estrellas`} className="mb-3 flex gap-0.5 text-ink">
              {Array.from({ length: rating }, (_, index) => (
                <svg key={index} aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="m12 2.5 2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55L2.48 9.42l6.58-.96L12 2.5Z" />
                </svg>
              ))}
            </div>
            <blockquote className="flex-1 font-roots text-2xl leading-snug md:text-3xl">
              <p>“{quote}”</p>
            </blockquote>
            <figcaption className="mt-5 text-sm text-ink/70">{name}</figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 text-center">
        {/* /opinion redirects to the Google review box; a plain link avoids prefetching a redirect. */}
        <a href="/opinion" target="_blank" rel="noopener noreferrer" className="btn-secondary">Dejar mi opinión en Google</a>
        <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="link text-sm">Ver opiniones en Google Maps</a>
      </div>
    </section>
  );
}

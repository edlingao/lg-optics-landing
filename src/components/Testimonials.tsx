import { business } from "@/lib/business";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonios" aria-labelledby="testimonials-title" className="scroll-mt-20 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="testimonials-title" className="text-center font-roots text-3xl text-navy-900 md:text-4xl">
          Lo que dicen nuestros clientes
        </h2>
        <p className="mx-auto mb-10 mt-4 max-w-2xl text-center text-gray-700">
          Experiencias que nuestros clientes han compartido en Google sobre sus lentes y la atención en L&amp;G OPTICS.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ name, quote, rating }) => (
            <figure key={name} className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-7">
              <div role="img" aria-label={`${rating} de 5 estrellas`} className="mb-5 flex gap-1 text-amber-700">
                {Array.from({ length: rating }, (_, index) => (
                  <svg key={index} aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="m12 2.5 2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55L2.48 9.42l6.58-.96L12 2.5Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mb-6 flex-1 leading-relaxed text-gray-800">
                <p>“{quote}”</p>
              </blockquote>
              <figcaption className="border-t border-gray-200 pt-4">
                <span className="block font-semibold text-navy-900">{name}</span>
                <span className="text-sm text-gray-600">Opinión en Google</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-gray-700">¿Ya eres cliente? Tu opinión ayuda a otras personas de Puebla a encontrarnos.</p>
          {/* /opinion redirects to the Google review box; a plain link avoids prefetching a redirect. */}
          <a href="/opinion" target="_blank" rel="noopener noreferrer" className="btn-primary">Dejar mi opinión en Google</a>
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy-900 underline">
            Ver opiniones en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

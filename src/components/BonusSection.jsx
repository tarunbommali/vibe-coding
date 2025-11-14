import { bonuses } from '../data/constants'

const BonusSection = () => (
  <section className="py-16">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">Early bird goodies</p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-900">
        Exclusive <span className="bg-linear-to-r from-rose-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">bonus kit</span>
      </h2>
      <p className="mt-4 text-base text-slate-600">Register today and download the complete pack instantly.</p>
    </div>
    <div className="mx-auto mt-12 grid gap-6 md:grid-cols-3">
      {bonuses.map((bonus, index) => (
        <article
          key={bonus.title}
          className="group relative overflow-hidden rounded-2xl border border-rose-100/70 bg-white/80 p-6 text-left shadow-[0_20px_45px_rgba(244,63,94,0.12)] transition duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-[0_30px_70px_rgba(244,63,94,0.2)]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-br from-rose-50 via-white to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
          />
          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">Bonus {index + 1}</span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-xs font-semibold text-rose-600">
                {index + 1}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{bonus.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{bonus.description}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default BonusSection

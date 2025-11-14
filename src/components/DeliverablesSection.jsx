    import { deliverables } from '../data/constants'

const DeliverablesSection = () => (
  <section className="py-16">
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-500">What you walk away with</p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-900">
  Tangible <span className="bg-linear-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">outcomes</span> in this workshop
      </h2>
    </div>
    <div className="mx-auto mt-10 flex flex-col gap-4">
      {deliverables.map((item, index) => (
        <div
          key={item}
          className="flex items-center gap-4 rounded-full border border-white/60 bg-white/90 px-5 py-3 text-left shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
          style={{ transitionDelay: `${index * 80}ms` }}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-violet-500 text-base font-semibold text-white">
            {index + 1}
          </span>
          <p className="text-sm text-slate-700">{item}</p>
        </div>
      ))}
    </div>
  </section>
)

export default DeliverablesSection

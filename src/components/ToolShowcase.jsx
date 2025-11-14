import { toolStack } from '../data/constants'

const ToolShowcase = () => (
  <section id="tools" className="py-16">
    <div className="mx-auto max-w-5xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-500">Hands-on Playground</p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-900">
  Use real <span className="bg-linear-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">industry tools</span>
      </h2>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        Every module pairs theory with the exact tool you will ship with. Logos below are the actual products you will
        touch during the workshop.
      </p>
    </div>
    <div className="mx-auto mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
     {toolStack.map((tool, index) => (
  <article
    key={tool.name}
    className="flex flex-col gap-4 rounded-2xl border border-white/60 bg-white/90 p-5 shadow-[0_20px_45px_rgba(15,23,42,0.08)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.12)] transition-all duration-300 hover:scale-105 cursor-pointer"
    style={{ transitionDelay: `${index * 60}ms` }}
  >
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-4 no-underline text-inherit"
    >
      <img
        src={tool.image}
        alt={tool.name}
        loading="lazy"
        className="h-14 w-14 rounded-2xl border border-slate-100 bg-slate-50 object-contain p-2"
      />
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-slate-900">{tool.name}</h3>
        <p className="text-sm text-slate-600">{tool.description}</p>
      </div>
    </a>
  </article>
))}
    </div>
  </section>
)

export default ToolShowcase

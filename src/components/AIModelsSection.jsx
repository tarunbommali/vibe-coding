import { aiModelProviders } from '../data/constants'

const AIModelsSection = () => (
  <section id="ai-models" className="py-16">
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-500">Model ecosystem</p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-900">
  LLMs that power <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">VIBE builds</span>
      </h2>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        We benchmark multiple providers—pick the model that balances reasoning, latency, and cost for each workflow.
      </p>
    </div>
    <div className="mx-auto mt-10 grid gap-6 lg:grid-cols-2">
      {aiModelProviders.map((provider) => (
        <article
          key={provider.name}
          className="flex flex-col gap-4 rounded-3xl border border-white/60 bg-white/90 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
        >
          <header>
            <h3 className="text-xl font-semibold text-slate-900">{provider.name}</h3>
            <p className="text-sm text-slate-500">{provider.description}</p>
          </header>
          <ul className="space-y-3">
            {provider.models.map((model) => (
              <li
                key={model.id}
                className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3 text-left"
              >
                <p className="text-base font-semibold text-slate-900">{model.name}</p>
                <p className="text-sm text-slate-500">{model.focus}</p>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
)

export default AIModelsSection

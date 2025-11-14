import { developmentStack } from '../data/constants'

const DevStackSection = () => (
  <section id="stack" className="py-16">
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">Build-ready stack</p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-900">
        Ship faster with{' '}
  <span className="bg-linear-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
          battle-tested tools
        </span>
      </h2>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        From no-code builders to full-stack deployments, this is the blueprint we hand over.
      </p>
    </div>
    <div className="mx-auto mt-10 grid gap-6 lg:grid-cols-3">
      <article className="flex flex-col gap-4 rounded-3xl border border-white/60 bg-white/90 p-6 shadow-[0_25px_50px_rgba(15,23,42,0.08)]">
        <h3 className="text-xl font-semibold text-slate-900">No-Code / Low-Code</h3>
        <p className="text-sm text-slate-500">Launch agents visually, then export to code when you are ready.</p>
        <ul className="space-y-4">
          {developmentStack.noCodeTools.map((tool) => (
            <li key={tool.name} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
              <div className="space-y-1">
                <strong className="text-base text-slate-900">{tool.name}</strong>
                <p className="text-sm text-slate-500">{tool.purpose}</p>
                <p className="text-xs uppercase tracking-wide text-slate-400">{tool.useCase}</p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {tool.features.map((feature) => (
                  <span key={feature} className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600">
                    {feature}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </article>
      <article className="flex flex-col gap-4 rounded-3xl border border-white/60 bg-white/90 p-6 shadow-[0_25px_50px_rgba(15,23,42,0.08)]">
        <h3 className="text-xl font-semibold text-slate-900">Backend Runtime</h3>
        <p className="text-sm text-slate-500">APIs, databases, and auth that backstop your agents.</p>
        <dl className="space-y-3 text-sm text-slate-600">
          <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <dt className="font-medium text-slate-500">Runtime</dt>
            <dd className="font-semibold text-slate-900">{developmentStack.backend.runtime}</dd>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <dt className="font-medium text-slate-500">Authentication</dt>
            <dd className="font-semibold text-slate-900">{developmentStack.backend.authentication}</dd>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <dt className="font-medium text-slate-500">Deployment</dt>
            <dd className="font-semibold text-slate-900">{developmentStack.backend.deployment}</dd>
          </div>
        </dl>
        <div className="mt-2 flex flex-wrap gap-2">
          {developmentStack.backend.database.map((row) => (
            <span key={row.label} className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              {row.label}: {row.value}
            </span>
          ))}
        </div>
      </article>
      <article className="flex flex-col gap-4 rounded-3xl border border-white/60 bg-white/90 p-6 shadow-[0_25px_50px_rgba(15,23,42,0.08)]">
        <h3 className="text-xl font-semibold text-slate-900">Frontend Experience</h3>
        <p className="text-sm text-slate-500">Modern DX with production-grade UI systems.</p>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <span className="text-slate-500">Framework</span>
            <strong className="text-slate-900">{developmentStack.frontend.framework}</strong>
          </li>
          <li className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <span className="text-slate-500">Styling</span>
            <strong className="text-slate-900">{developmentStack.frontend.styling}</strong>
          </li>
          <li className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <span className="text-slate-500">State</span>
            <strong className="text-slate-900">{developmentStack.frontend.stateManagement}</strong>
          </li>
          <li className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
            <span className="text-slate-500">Forms</span>
            <strong className="text-slate-900">{developmentStack.frontend.forms}</strong>
          </li>
        </ul>
      </article>
    </div>
  </section>
)

export default DevStackSection

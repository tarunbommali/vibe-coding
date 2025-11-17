import { agentArchitecture, textStack } from '../data/constants'
import TextStack from './TextStack'

// Provide safe defaults for sections that might be missing in the data
const {
  blueprint = {},
  toolPatterns = [],
  modelSelection = [],
  promptTemplates = [],
  deployment = [],
  security = [],
  optimization = [],
} = agentArchitecture || {}

const Card = ({ children }) => (
  <article className="rounded-3xl border border-white/60 bg-white/90 p-6 shadow-[0_25px_50px_rgba(15,23,42,0.08)]">
    {children}
  </article>
)

const AgentArchitectureSection = () => (
  <section id="architecture" className="py-16">
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-500">Agent operating system</p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-900">
  How we <span className="bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">design & deploy</span> AI agents
      </h2>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        A modular blueprint covering core agents, tools, deployment, and safeguards.
      </p>
    </div>
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      <Card>
        <h3 className="text-xl font-semibold text-slate-900">{blueprint.title}</h3>
        <p className="mt-2 text-sm text-slate-500">{blueprint.summary}</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
          {(blueprint.bullets || []).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Card>
      <Card>
        <h3 className="text-xl font-semibold text-slate-900">Tool Patterns</h3>
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          {toolPatterns.map((tool) => (
            <li key={tool.name} className="rounded-2xl bg-slate-50/70 p-4">
              <strong className="text-slate-900">{tool.name}</strong>
              <p className="text-slate-600">{tool.description}</p>
            </li>
          ))}
        </ul>
      </Card>
      <Card>
        <h3 className="text-xl font-semibold text-slate-900">Model Selection Matrix</h3>
        <ul className="mt-4 space-y-4 text-sm">
          {modelSelection.map((tier) => (
            <li key={tier.tier} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
              <div className="flex items-center justify-between">
                <strong className="text-slate-900">{tier.tier}</strong>
                <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                  {tier.cost}
                </span>
              </div>
              <p className="mt-2 text-slate-600">{(tier.models || []).join(', ')}</p>
              <small className="text-slate-400">{(tier.useCases || []).join(' · ')}</small>
            </li>
          ))}
        </ul>
      </Card>
      <Card>
        <h3 className="text-xl font-semibold text-slate-900">Prompt Templates</h3>
        <ul className="mt-4 space-y-3 text-sm">
          {promptTemplates.map((template) => (
            <li key={template.name} className="rounded-2xl bg-slate-50/70 p-4">
              <strong className="text-slate-900">{template.name}</strong>
              <p className="text-slate-600">{template.description}</p>
              <small className="text-xs text-slate-400">{template.snippet}</small>
            </li>
          ))}
        </ul>
      </Card>
      <Card>
        <h3 className="text-xl font-semibold text-slate-900">Deployment & Runtime</h3>
        <ul className="mt-4 space-y-3 text-sm">
          {deployment.map((option) => (
            <li key={option.name} className="rounded-2xl bg-slate-50/70 p-4">
              <strong className="text-slate-900">{option.name}</strong>
              <p className="text-slate-600">{option.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {(option.highlights || []).map((highlight) => (
                  <span key={highlight} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600">
                    {highlight}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </Card>
      <Card>
        <h3 className="text-xl font-semibold text-slate-900">Security & Reliability</h3>
        <div className="mt-4 space-y-4 text-sm">
          {security.map((item) => (
            <div key={item.name} className="rounded-2xl bg-slate-50/70 p-4">
              <strong className="text-slate-900">{item.name}</strong>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-600">
                {(item.practices || []).map((practice) => (
                  <li key={practice}>{practice}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <TextStack items={textStack || []} />
      </Card>
      <Card>
        <h3 className="text-xl font-semibold text-slate-900">Performance Optimization</h3>
        <div className="mt-4 space-y-4 text-sm">
          {optimization.map((item) => (
            <div key={item.name} className="rounded-2xl bg-slate-50/70 p-4">
              <strong className="text-slate-900">{item.name}</strong>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-600">
                {(item.details || []).map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
    </div>
  </section>
)

export default AgentArchitectureSection

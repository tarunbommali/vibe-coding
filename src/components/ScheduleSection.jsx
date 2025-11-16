import { workshopDays } from '../data/constants'

const ScheduleSection = () => (
  <section id="schedule" className="py-16">
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">Complete Curriculum</p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-900">
        Day-by-day <span className="bg-linear-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">workshop map</span>
      </h2>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        The exact pathway from foundations to portfolio-ready AI products.
      </p>
    </div>
    <div className="mt-10 space-y-8">
      {workshopDays.map((day) => (
        <article
          key={day.title}
          className="rounded-3xl border border-white/60 bg-white/90 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
        >
          <header className="mb-6 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{day.subtitle}</p>
            <h3 className="text-2xl font-semibold text-slate-900">{day.title}</h3>
          </header>
          <div className={`grid gap-5 ${day.sessions.length > 2 ? 'md:grid-cols-2 lg:grid-cols-3' : day.sessions.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
            {day.sessions.map((session) => (
              <div key={session.name} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
                  <h4 className="text-lg font-semibold text-slate-900">{session.name}</h4>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                  {session.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-slate-500">
                  <strong className="text-slate-900">Outcome:</strong> {session.outcome}
                </p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default ScheduleSection

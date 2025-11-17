import { heroStats, liveDate ,timerEndDate} from '../data/constants'
import Countdown from '../utils/helper'

const HeroSection = () => (
  <section className="py-6 lg:py-10">
    <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-500">
          VIBE · 2-Day AI Vibe Tools & Agent Workshop
        </p>
        <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Master AI Vibe Tools & Build Agents in
          <span className="bg-linear-to-r from-violet-500 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            <i>
              <b>48 hours</b>
            </i>
          </span>
        </h1>
        <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
          {liveDate} · Powered by
          <span className="font-semibold text-slate-900">
            Jawaharlal Nehru Technological University-Gurajada, Vizianagaram
          </span>
          . Learn prompt engineering, explore GenAI tools, and ship production-ready mini agents —
          even if you have zero coding background.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-500"
            href="#register"
          >
            Claim My Spot
          </a>
          <span className="text-sm text-slate-500">Limited seats · AI Mastery Kit</span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
            >
              <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-8 shadow-[0_35px_80px_rgba(15,23,42,0.12)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 rounded-full bg-linear-to-br from-violet-200 via-indigo-200 to-transparent blur-3xl"
        />
        <div className="relative space-y-6">
          <div className="rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-500">Registration Closes</p>
            <Countdown target={timerEndDate} />
            <p className="mt-2 text-sm text-slate-500">
              Lock your seat before the bonus window disappears.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-900 p-6 text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Workshop</p>
            <p className="mt-2 text-2xl font-semibold">{liveDate}</p>
            <p className="mt-2 text-sm text-slate-200">
              Live forenoon + afternoon + full-day build marathon.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection

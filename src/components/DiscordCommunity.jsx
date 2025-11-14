import { DISCORD_SERVER_LINK, DISCORD_IMG_LINK } from '../data/constants'

const DiscordCommunity = () => (
  <section id="community" className="py-16">
  <div className="rounded-3xl border border-indigo-200 bg-linear-to-r from-indigo-50 via-violet-50 to-cyan-50 p-8 shadow-[0_30px_60px_rgba(79,70,229,0.25)] lg:flex lg:items-center lg:gap-10">
       <img
          src={DISCORD_IMG_LINK}
          alt="Discord logo"
          loading="lazy"
          className="h-52 w-52  object-cover "
        />
      <div className="flex-1 space-y-4 text-center lg:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">Always-on peer support</p>
        <h2 className="text-3xl font-semibold text-slate-900">
          Join the <span className="bg-linear-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">VIBE Discord</span>
        </h2>
        <p className="text-base leading-relaxed text-slate-600">
          Get daily drop-ins from mentors, share project wins, and stay updated on new AI prompts, datasets, and build
          challenges exclusive to this workshop community.
        </p>
        <a
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-500"
          href={DISCORD_SERVER_LINK}
          target="_blank"
          rel="noreferrer"
        >
          Join Community Server
        </a>
      </div>
      <div className="mt-8  justify-center lg:mt-0 lg:flex-none hidden md:flex">
       
        <img src="https://res.cloudinary.com/dwclxsywi/image/upload/v1763140044/WhatsApp_Image_2025-11-14_at_22.25.25_pfxyy8.jpg"
        alt="Discord community"
        loading="lazy"
        className="h-52 w-52 object-cover "
        />
      </div>
    </div>
  </section>
)

export default DiscordCommunity

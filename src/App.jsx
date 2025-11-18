import HeroSection from './components/HeroSection'
import DeliverablesSection from './components/DeliverablesSection'
import ScheduleSection from './components/ScheduleSection'
import ToolShowcase from './components/ToolShowcase'
import AIModelsSection from './components/AIModelsSection'
import DevStackSection from './components/DevStackSection'
import AgentArchitectureSection from './components/AgentArchitectureSection'
import BonusSection from './components/BonusSection'
import DiscordCommunity from './components/DiscordCommunity'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import MoveToTop from './components/MoveToTop'
import QrSection from './components/QrSection'
const App = () => (
  <div className="min-h-screen bg-linear-to-b from-white via-slate-50 to-slate-100 text-slate-900">
    <main className="mx-auto max-w-7xl space-y-20 px-4 pb-24 pt-10 lg:px-0">

      <HeroSection />
      <DeliverablesSection />
      <ScheduleSection />
      <QrSection />

      <ToolShowcase />
      <AIModelsSection />
      <DevStackSection />
      <AgentArchitectureSection />

      <BonusSection />
      <DiscordCommunity />

      <FinalCTA />
      <Footer />
    </main>

    <MoveToTop />
  </div>
)

export default App

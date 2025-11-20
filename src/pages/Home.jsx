import BackgroundFX from '../components/BackgroundFX'
import LandingHero from '../components/LandingHero'
import FeatureGrid from '../components/FeatureGrid'
import { Themes, Special } from '../components/HomeSections'
import SplitCTA from '../components/SplitCTA'

export default function Home() {
  return (
    <main>
      <BackgroundFX />
      <LandingHero />
      <FeatureGrid />
      <Themes />
      <Special />
      <SplitCTA />
    </main>
  )
}

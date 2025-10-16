import HeroSection from '../HeroSection'
import { ThemeProvider } from '../ThemeProvider'

export default function HeroSectionExample() {
  return (
    <ThemeProvider>
      <div className="h-[200vh]">
        <HeroSection />
      </div>
    </ThemeProvider>
  )
}

import Navigation from '../Navigation'
import { ThemeProvider } from '../ThemeProvider'

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <div className="h-screen">
        <Navigation />
        <div className="pt-32 px-8">
          <p>Scroll to see sticky navigation</p>
        </div>
      </div>
    </ThemeProvider>
  )
}

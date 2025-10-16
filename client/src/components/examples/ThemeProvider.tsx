import { ThemeProvider, useTheme } from '../ThemeProvider'
import { Button } from '@/components/ui/button'

function ThemeDemo() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <div className="p-8">
      <p className="mb-4">Current theme: {theme}</p>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </div>
  )
}

export default function ThemeProviderExample() {
  return (
    <ThemeProvider>
      <ThemeDemo />
    </ThemeProvider>
  )
}

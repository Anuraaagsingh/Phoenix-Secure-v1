import { useState } from 'react'
import IOKnob from '../IOKnob'

export default function IOKnobExample() {
  const [isDark, setIsDark] = useState(false)
  
  return (
    <div className="p-8 flex items-center justify-center">
      <IOKnob isDark={isDark} onToggle={() => setIsDark(!isDark)} />
    </div>
  )
}

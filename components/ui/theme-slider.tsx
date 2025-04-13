"use client"

import { useTheme } from "@/contexts/theme-context"
import { Moon, Sun } from "lucide-react"

export function ThemeSlider() {
  const { darkLevel, setDarkLevel } = useTheme()

  return (
    <div className="flex items-center gap-2 bg-opacity-80 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <Sun className="h-4 w-4 text-amber-500" />
      <input
        type="range"
        min="0"
        max="100"
        value={darkLevel}
        onChange={(e) => setDarkLevel(Number.parseInt(e.target.value))}
        className="w-24 h-2 bg-gradient-to-r from-amber-100 to-indigo-900 rounded-lg appearance-none cursor-pointer"
        style={{
          // Custom thumb styling
          WebkitAppearance: "none",
          appearance: "none",
        }}
      />
      <Moon className="h-4 w-4 text-indigo-400" />
    </div>
  )
}

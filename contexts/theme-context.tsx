"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type ThemeContextType = {
  darkLevel: number
  setDarkLevel: (level: number) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkLevel, setDarkLevel] = useState(0)

  // Apply theme changes when darkLevel changes
  useEffect(() => {
    document.documentElement.style.setProperty("--darkness-level", darkLevel.toString())

    // Update CSS variables based on darkness level
    const bgLightness = 98 - (darkLevel * 90) / 100
    const fgLightness = 4 + (darkLevel * 90) / 100
    const bgHue = 60 - (darkLevel * 40) / 100
    const bgSaturation = 33 - (darkLevel * 28) / 100

    document.documentElement.style.setProperty("--background", `${bgHue} ${bgSaturation}% ${bgLightness}%`)
    document.documentElement.style.setProperty("--foreground", `20 14.3% ${fgLightness}%`)

    // Update other theme-related variables
    const cardBgLightness = 98 - (darkLevel * 85) / 100
    document.documentElement.style.setProperty("--card-bg", `hsl(${bgHue}, ${bgSaturation}%, ${cardBgLightness}%)`)

    // Update border colors
    const borderOpacity = 0.3 - (darkLevel * 0.15) / 100
    document.documentElement.style.setProperty("--border-opacity", borderOpacity.toString())

    // Set theme class for conditional styling
    if (darkLevel > 50) {
      document.documentElement.classList.add("dark-theme")
    } else {
      document.documentElement.classList.remove("dark-theme")
    }
  }, [darkLevel])

  return <ThemeContext.Provider value={{ darkLevel, setDarkLevel }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

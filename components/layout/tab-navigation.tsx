"use client"

import { Dices, Sword, Route, Building2, Scroll, BookOpen } from "lucide-react"

interface TabNavigationProps {
  activeTab: string
  setActiveTab: (value: string) => void
}

export function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
  return (
    <div className="tab-navigation grid grid-cols-6 mb-6">
      <button onClick={() => setActiveTab("basics")} className={`tab-item ${activeTab === "basics" ? "active" : ""}`}>
        <Dices className="h-4 w-4" />
        <span className="hidden sm:inline">Basics</span>
      </button>
      <button onClick={() => setActiveTab("combat")} className={`tab-item ${activeTab === "combat" ? "active" : ""}`}>
        <Sword className="h-4 w-4" />
        <span className="hidden sm:inline">Combat</span>
      </button>
      <button
        onClick={() => setActiveTab("exploration")}
        className={`tab-item ${activeTab === "exploration" ? "active" : ""}`}
      >
        <Route className="h-4 w-4" />
        <span className="hidden sm:inline">Exploration</span>
      </button>
      <button onClick={() => setActiveTab("social")} className={`tab-item ${activeTab === "social" ? "active" : ""}`}>
        <Building2 className="h-4 w-4" />
        <span className="hidden sm:inline">Social</span>
      </button>
      <button
        onClick={() => setActiveTab("downtime")}
        className={`tab-item ${activeTab === "downtime" ? "active" : ""}`}
      >
        <Scroll className="h-4 w-4" />
        <span className="hidden sm:inline">Downtime</span>
      </button>
      <button onClick={() => setActiveTab("general")} className={`tab-item ${activeTab === "general" ? "active" : ""}`}>
        <BookOpen className="h-4 w-4" />
        <span className="hidden sm:inline">General</span>
      </button>
    </div>
  )
}

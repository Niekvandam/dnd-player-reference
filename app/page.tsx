"use client"

import { useState } from "react"
import { PageHeader } from "@/components/layout/page-header"
import { TabNavigation } from "@/components/layout/tab-navigation"
import { BasicsSection } from "@/components/sections/basics-section"
import { CombatSection } from "@/components/sections/combat-section"
import { ExplorationSection } from "@/components/sections/exploration-section"
import { SocialSection } from "@/components/sections/social-section"
import { DowntimeSection } from "@/components/sections/downtime-section"
import { GeneralSection } from "@/components/sections/general-section"

export default function PlayerReference() {
  const [activeTab, setActiveTab] = useState("basics")

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto py-6 px-4">
        <PageHeader setActiveTab={setActiveTab} />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "basics" && <BasicsSection />}
        {activeTab === "combat" && <CombatSection />}
        {activeTab === "exploration" && <ExplorationSection />}
        {activeTab === "social" && <SocialSection />}
        {activeTab === "downtime" && <DowntimeSection />}
        {activeTab === "general" && <GeneralSection />}
      </div>
    </div>
  )
}

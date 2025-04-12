"use client"

import { useState, useEffect, useMemo } from "react"

// Import all data files
import abilities from "@/data/basics/abilities.json"
import diceRolls from "@/data/basics/dice-rolls.json"
import healthResting from "@/data/basics/health-resting.json"
import armorProtection from "@/data/basics/armor-protection.json"
import spellcasting from "@/data/basics/spellcasting.json"

import combatBasics from "@/data/combat/basics.json"
import actions from "@/data/combat/actions.json"
import bonusActions from "@/data/combat/bonus-actions.json"
import reactions from "@/data/combat/reactions.json"
import movement from "@/data/combat/movement.json"
import weaponProperties from "@/data/combat/weapon-properties.json"

import wildernessActions from "@/data/exploration/wilderness-actions.json"
import travelPace from "@/data/exploration/travel-pace.json"
import environmentalInteractions from "@/data/exploration/environmental-interactions.json"
import potentialEncounters from "@/data/exploration/potential-encounters.json"

import townActions from "@/data/social/town-actions.json"
import socialInteractions from "@/data/social/social-interactions.json"
import locationSpecific from "@/data/social/location-specific.json"
import cityServices from "@/data/social/city-services.json"

import personalDevelopment from "@/data/downtime/personal-development.json"
import economicActivities from "@/data/downtime/economic-activities.json"
import socialActivities from "@/data/downtime/social-activities.json"
import nightActivities from "@/data/downtime/night-activities.json"

import whenLost from "@/data/general/when-lost.json"
import situationalPrompts from "@/data/general/situational-prompts.json"

import outrageousActions from "@/data/creative/outrageous-actions.json"
import moreOutrageousActions from "@/data/creative/more-outrageous-actions.json"

// Define the structure of a search result
interface SearchResult {
  id: string
  title: string
  content: string | string[]
  section: string
  tab: string
}

// Helper function to process content for searching
const processContent = (content: any): string => {
  if (typeof content === "string") return content
  if (Array.isArray(content)) {
    return content
      .map((item) => {
        if (typeof item === "string") return item
        if (typeof item === "object" && item !== null) {
          if (item.label && item.description) return `${item.label} ${item.description}`
          return Object.values(item).join(" ")
        }
        return ""
      })
      .join(" ")
  }
  if (typeof content === "object" && content !== null) {
    return Object.values(content).join(" ")
  }
  return ""
}

export function useSearch() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)

  // Create a searchable database from all the JSON data
  const searchableData = useMemo(() => {
    const data: SearchResult[] = []

    // Basics
    abilities.items.forEach((item) => {
      data.push({
        id: item.name,
        title: item.name,
        content: item.description,
        section: "Abilities",
        tab: "basics",
      })
    })

    diceRolls.items.forEach((item) => {
      data.push({
        id: item.name,
        title: item.name,
        content: item.description,
        section: "Dice & Rolls",
        tab: "basics",
      })
    })

    healthResting.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: item.content,
        section: "Health & Resting",
        tab: "basics",
      })
    })

    armorProtection.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: processContent(item.content),
        section: "Armor & Protection",
        tab: "basics",
      })
    })

    spellcasting.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: item.content,
        section: "Spellcasting",
        tab: "basics",
      })
    })

    // Combat
    combatBasics.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: processContent(item.content),
        section: "Combat Basics",
        tab: "combat",
      })
    })

    actions.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: processContent(item.content),
        section: "Actions",
        tab: "combat",
      })
    })

    bonusActions.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: item.content,
        section: "Bonus Actions",
        tab: "combat",
      })
    })

    reactions.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: item.content,
        section: "Reactions",
        tab: "combat",
      })
    })

    movement.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: processContent(item.content),
        section: "Movement",
        tab: "combat",
      })
    })

    weaponProperties.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: item.content,
        section: "Weapon Properties",
        tab: "combat",
      })
    })

    // Exploration
    wildernessActions.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: item.content,
        section: "Wilderness Actions",
        tab: "exploration",
      })
    })

    travelPace.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: processContent(item.content),
        section: "Travel Pace",
        tab: "exploration",
      })
    })

    environmentalInteractions.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: item.content,
        section: "Environmental Interactions",
        tab: "exploration",
      })
    })

    potentialEncounters.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: item.content,
        section: "Potential Encounters",
        tab: "exploration",
      })
    })

    // Social
    townActions.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: item.content,
        section: "Town Actions",
        tab: "social",
      })
    })

    socialInteractions.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: item.content,
        section: "Social Interactions",
        tab: "social",
      })
    })

    locationSpecific.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: processContent(item.content),
        section: "Location-Specific Options",
        tab: "social",
      })
    })

    cityServices.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: processContent(item.content),
        section: "City Services",
        tab: "social",
      })
    })

    // Downtime
    personalDevelopment.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: item.content,
        section: "Personal Development",
        tab: "downtime",
      })
    })

    economicActivities.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: item.content,
        section: "Economic Activities",
        tab: "downtime",
      })
    })

    socialActivities.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: item.content,
        section: "Social Activities",
        tab: "downtime",
      })
    })

    nightActivities.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: item.content,
        section: "Night Activities",
        tab: "downtime",
      })
    })

    // General
    whenLost.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: item.content,
        section: "When You're Feeling Lost",
        tab: "general",
      })
    })

    situationalPrompts.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title || item.id,
        content: item.content,
        section: "Situational Prompts",
        tab: "general",
      })
    })

    // Creative (for random ideas)
    outrageousActions.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: item.content,
        section: "Outrageous Actions",
        tab: "creative",
      })
    })

    moreOutrageousActions.items.forEach((item) => {
      data.push({
        id: item.id,
        title: item.title,
        content: item.content,
        section: "More Outrageous Actions",
        tab: "creative",
      })
    })

    return data
  }, [])

  // Search function
  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      setShowResults(false)
      return
    }

    const searchTerms = searchQuery.toLowerCase().split(" ")

    const filteredResults = searchableData.filter((item) => {
      const titleLower = item.title.toLowerCase()
      const contentLower =
        typeof item.content === "string"
          ? item.content.toLowerCase()
          : Array.isArray(item.content)
            ? item.content.join(" ").toLowerCase()
            : ""

      return searchTerms.every((term) => titleLower.includes(term) || contentLower.includes(term))
    })

    setResults(filteredResults)
    setShowResults(true)
  }

  // Debounce search to avoid excessive processing
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(query)
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  return {
    query,
    setQuery,
    results,
    showResults,
    setShowResults,
  }
}

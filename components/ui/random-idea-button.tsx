"use client"

import { useState } from "react"
import { Sparkles } from "lucide-react"
import outrageousActions from "@/data/creative/outrageous-actions.json"
import moreOutrageousActions from "@/data/creative/more-outrageous-actions.json"

export function RandomIdeaButton() {
  const [showIdea, setShowIdea] = useState(false)
  const [currentIdea, setCurrentIdea] = useState<{ title: string; content: string } | null>(null)

  // Combine all creative ideas into one array
  const allIdeas = [...outrageousActions.items, ...moreOutrageousActions.items]

  const generateRandomIdea = () => {
    const randomIndex = Math.floor(Math.random() * allIdeas.length)
    setCurrentIdea(allIdeas[randomIndex])
    setShowIdea(true)
  }

  return (
    <div className="relative">
      <button
        onClick={generateRandomIdea}
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg shadow-md hover:from-pink-600 hover:to-purple-700 transition-all"
      >
        <Sparkles className="h-4 w-4" />
        <span>Give me a random stupid idea!</span>
      </button>

      {showIdea && currentIdea && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="absolute inset-0 bg-black/20 pointer-events-auto" onClick={() => setShowIdea(false)}></div>
          <div className="bg-white border border-purple-200 rounded-lg shadow-xl p-4 max-w-md w-full pointer-events-auto z-50 relative">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-gray-800">{currentIdea.title}</h3>
              <button onClick={() => setShowIdea(false)} className="text-gray-400 hover:text-gray-600">
                ×
              </button>
            </div>
            <p className="text-gray-700">{currentIdea.content}</p>
          </div>
        </div>
      )}
    </div>
  )
}

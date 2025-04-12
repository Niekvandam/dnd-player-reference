"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { RandomIdeaButton } from "@/components/ui/random-idea-button"
import { SearchResults } from "@/components/ui/search-results"
import { useSearch } from "@/hooks/use-search"

interface PageHeaderProps {
  setActiveTab: (tab: string) => void
}

export function PageHeader({ setActiveTab }: PageHeaderProps) {
  const { query, setQuery, results, showResults, setShowResults } = useSearch()

  return (
    <header className="mb-8">
      <h1 className="page-title">D&D Player Reference</h1>
      <p className="page-subtitle">
        A comprehensive guide to your options in different scenarios to enhance your gameplay experience.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-3xl mx-auto mt-6">
        <div className="relative w-full md:max-w-md">
          <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <Input
            type="search"
            placeholder="Search for actions or situations..."
            className="pl-10 bg-white border-gray-200 rounded-md"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {showResults && (
            <SearchResults
              results={results}
              onClose={() => setShowResults(false)}
              onSelectResult={(tab) => setActiveTab(tab)}
            />
          )}
        </div>
        <RandomIdeaButton />
      </div>
    </header>
  )
}

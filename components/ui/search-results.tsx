"use client"
import { X } from "lucide-react"

// Define the structure of a search result
interface SearchResult {
  id: string
  title: string
  content: string | string[]
  section: string
  tab: string
}

interface SearchResultsProps {
  results: SearchResult[]
  onClose: () => void
  onSelectResult: (tab: string) => void
}

export function SearchResults({ results, onClose, onSelectResult }: SearchResultsProps) {
  if (results.length === 0) return null

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-[70vh] overflow-y-auto">
      <div className="flex justify-between items-center p-3 border-b border-gray-200">
        <h3 className="font-semibold text-gray-700">Search Results ({results.length})</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="p-2">
        {results.map((result, index) => (
          <div
            key={`${result.section}-${result.id}-${index}`}
            className="p-3 hover:bg-gray-50 rounded-md cursor-pointer"
            onClick={() => {
              onSelectResult(result.tab)
              onClose()
            }}
          >
            <div className="flex justify-between">
              <h4 className="font-medium text-gray-800">{result.title}</h4>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{result.section}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {typeof result.content === "string"
                ? result.content
                : Array.isArray(result.content)
                  ? result.content.join(", ")
                  : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

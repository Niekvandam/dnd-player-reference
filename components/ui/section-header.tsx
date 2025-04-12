import type React from "react"
import type { LucideIcon } from "lucide-react"

interface SectionHeaderProps {
  icon: LucideIcon
  title: string
  color: string
  children?: React.ReactNode
  className?: string
}

export function SectionHeader({ icon: Icon, title, color, children, className = "" }: SectionHeaderProps) {
  return (
    <div className={`flex items-center gap-2 mb-4 ${className}`}>
      <Icon className={`h-5 w-5 ${color}`} />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {children}
    </div>
  )
}

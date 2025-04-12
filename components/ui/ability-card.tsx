interface AbilityCardProps {
  name: string
  color: string
  description: string
}

export function AbilityCard({ name, color, description }: AbilityCardProps) {
  return (
    <div className={`ability-card ${color}`}>
      <h4 className="font-semibold mb-1">{name}</h4>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  )
}

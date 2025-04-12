interface DiceCardProps {
  name: string
  description: string
}

export function DiceCard({ name, description }: DiceCardProps) {
  return (
    <div className="ability-card bg-stone-50">
      <h4 className="font-semibold mb-1">{name}</h4>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  )
}

interface InspirationItem {
  question: string
  action: string
  description: string
}

interface InspirationCardProps {
  title: string
  color: string
  items: InspirationItem[]
}

export function InspirationCard({ title, color, items }: InspirationCardProps) {
  return (
    <div className={`inspiration-card ${color}`}>
      <h3 className="font-semibold text-gray-800 mb-3">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {items.map((item, index) => (
          <div key={index} className="inspiration-item">
            <span className="text-gray-700">"{item.question}" → Try </span>
            <strong>{item.action}</strong>
            {item.description && <span className="text-gray-600"> {item.description}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

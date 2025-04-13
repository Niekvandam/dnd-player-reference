import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sword, Zap, Shield, Move } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { InspirationCard } from "@/components/ui/inspiration-card"

// Import JSON data
import inspirationItems from "@/data/combat/inspiration-items.json"
import combatBasics from "@/data/combat/basics.json"
import actions from "@/data/combat/actions.json"
import bonusActions from "@/data/combat/bonus-actions.json"
import reactions from "@/data/combat/reactions.json"
import movement from "@/data/combat/movement.json"
import weaponProperties from "@/data/combat/weapon-properties.json"

export function CombatSection() {
  return (
    <>
      <InspirationCard
        title="Quick Inspiration: What can I do right now?"
        color="bg-red-50"
        items={inspirationItems.inspirationItems}
      />
      <div className="section-card">
        <div className="section-header">
          <h2 className="section-title">
            <Sword className="h-5 w-5 text-red-600" />
            Combat Options
          </h2>
          <p className="section-description">
            Actions, bonus actions, reactions, and movement options available during combat.
          </p>
        </div>
        <div className="scroll-container">
          <ScrollArea className="flex-1">
            <div className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <SectionHeader icon={Zap} title={combatBasics.title} color={combatBasics.color} />
                  <Accordion type="single" collapsible className="w-full space-y-2">
                    {combatBasics.items.map((item) => (
                      <AccordionItem
                        key={item.id}
                        value={item.id}
                        className="border border-gray-200 rounded-md overflow-hidden bg-white"
                      >
                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-800">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-3 pt-1 text-gray-700">
                          {Array.isArray(item.content) ? (
                            <ul className="list-disc pl-6 space-y-2">
                              {item.content.map((contentItem, idx) => (
                                <li key={idx}>
                                  <strong>{contentItem.label}:</strong> {contentItem.description}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p>{item.content}</p>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  <SectionHeader icon={Zap} title={actions.title} color={actions.color} className="mt-6" />
                  <Accordion type="single" collapsible className="w-full space-y-2">
                    {actions.items.map((item) => (
                      <AccordionItem
                        key={item.id}
                        value={item.id}
                        className="border border-gray-200 rounded-md overflow-hidden bg-white"
                      >
                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-800">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-3 pt-1 text-gray-700">
                          {Array.isArray(item.content) ? (
                            <ul className="list-disc pl-6 space-y-2">
                              {item.content.map((contentItem, idx) => (
                                <li key={idx}>{contentItem}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>{item.content}</p>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div>
                  <SectionHeader icon={Zap} title={bonusActions.title} color={bonusActions.color} />
                  <Accordion type="single" collapsible className="w-full space-y-2">
                    {bonusActions.items.map((item) => (
                      <AccordionItem
                        key={item.id}
                        value={item.id}
                        className="border border-gray-200 rounded-md overflow-hidden bg-white"
                      >
                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-800">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-3 pt-1 text-gray-700">
                          <p>{item.content}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  <SectionHeader icon={Shield} title={reactions.title} color={reactions.color} className="mt-6" />
                  <Accordion type="single" collapsible className="w-full space-y-2">
                    {reactions.items.map((item) => (
                      <AccordionItem
                        key={item.id}
                        value={item.id}
                        className="border border-gray-200 rounded-md overflow-hidden bg-white"
                      >
                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-800">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-3 pt-1 text-gray-700">
                          <p>{item.content}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  <SectionHeader icon={Move} title={movement.title} color={movement.color} className="mt-6" />
                  <Accordion type="single" collapsible className="w-full space-y-2">
                    {movement.items.map((item) => (
                      <AccordionItem
                        key={item.id}
                        value={item.id}
                        className="border border-gray-200 rounded-md overflow-hidden bg-white"
                      >
                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-800">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-3 pt-1 text-gray-700">
                          {Array.isArray(item.content) ? (
                            <ul className="list-disc pl-6 space-y-2">
                              {item.content.map((contentItem, idx) => (
                                <li key={idx}>{contentItem}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>{item.content}</p>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  <SectionHeader
                    icon={Sword}
                    title={weaponProperties.title}
                    color={weaponProperties.color}
                    className="mt-6"
                  />
                  <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 mb-6">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {weaponProperties.items.map((item) => (
                        <li key={item.id}>
                          <strong>{item.title}</strong> - {item.content}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  )
}

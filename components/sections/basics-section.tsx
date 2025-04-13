import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Brain, Dices, Heart, Shield, Sparkles, HelpCircle } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { AbilityCard } from "@/components/ui/ability-card"
import { DiceCard } from "@/components/ui/dice-card"

// Import JSON data
import abilities from "@/data/basics/abilities.json"
import diceRolls from "@/data/basics/dice-rolls.json"
import healthResting from "@/data/basics/health-resting.json"
import armorProtection from "@/data/basics/armor-protection.json"
import spellcasting from "@/data/basics/spellcasting.json"
import advantageDisadvantage from "@/data/basics/advantage-disadvantage.json"
import proficiency from "@/data/basics/proficiency.json"

export function BasicsSection() {
  return (
    <div className="section-card">
      <div className="section-header">
        <h2 className="section-title">
          <Dices className="h-5 w-5 text-amber-600" />
          Core Game Mechanics
        </h2>
        <p className="section-description">Essential information about abilities, dice, and core game concepts.</p>
      </div>
      <div className="scroll-container">
        <ScrollArea className="flex-1">
          <div className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <SectionHeader icon={Brain} title={abilities.title} color="text-purple-600" />
                <div className="grid grid-cols-1 gap-4">
                  {abilities.items.map((ability, index) => (
                    <AbilityCard
                      key={index}
                      name={ability.name}
                      color={ability.color}
                      description={ability.description}
                    />
                  ))}
                </div>

                <SectionHeader icon={Dices} title={diceRolls.title} color="text-stone-600" className="mt-6" />
                <div className="space-y-4">
                  <DiceCard name={diceRolls.items[0].name} description={diceRolls.items[0].description} />
                  <div className="grid grid-cols-2 gap-4">
                    {diceRolls.items.slice(1).map((dice, index) => (
                      <DiceCard key={index} name={dice.name} description={dice.description} />
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <SectionHeader icon={Heart} title={healthResting.title} color="text-red-600" />
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {healthResting.items.map((item) => (
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

                <SectionHeader icon={Shield} title={armorProtection.title} color="text-blue-600" className="mt-6" />
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {armorProtection.items.map((item) => (
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
                        {item.note && <p className="mt-2 text-gray-600">{item.note}</p>}
                        {item.details && (
                          <ul className="list-disc pl-6 mt-2 space-y-2">
                            {item.details.map((detail, idx) => (
                              <li key={idx}>{detail}</li>
                            ))}
                          </ul>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <SectionHeader icon={Sparkles} title={spellcasting.title} color="text-purple-600" className="mt-6" />
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {spellcasting.items.map((item) => (
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
                        {item.additional && <p className="mt-2 text-gray-600">{item.additional}</p>}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <SectionHeader
                  icon={Dices}
                  title={advantageDisadvantage.title}
                  color="text-emerald-600"
                  className="mt-6"
                />
                <div className="p-4 bg-emerald-50 rounded-lg space-y-2 border border-emerald-100">
                  {advantageDisadvantage.content.map((item, index) => (
                    <p key={index} className="text-gray-700">
                      <strong>{item.label}:</strong> {item.description}
                    </p>
                  ))}
                  <p className="text-sm mt-2 text-gray-600">{advantageDisadvantage.note}</p>
                </div>

                <SectionHeader icon={HelpCircle} title={proficiency.title} color="text-blue-600" className="mt-6" />
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 mb-6">
                  <p className="text-gray-700">{proficiency.content}</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                    {proficiency.levels.map((level, index) => (
                      <li key={index}>{level}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

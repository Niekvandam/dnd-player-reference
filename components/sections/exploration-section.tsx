import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Route, Footprints, Mountain, Map } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { InspirationCard } from "@/components/ui/inspiration-card"

// Import JSON data
import inspirationItems from "@/data/exploration/inspiration-items.json"
import wildernessActions from "@/data/exploration/wilderness-actions.json"
import travelPace from "@/data/exploration/travel-pace.json"
import environmentalInteractions from "@/data/exploration/environmental-interactions.json"
import potentialEncounters from "@/data/exploration/potential-encounters.json"

export function ExplorationSection() {
  return (
    <>
      <InspirationCard
        title="Quick Inspiration: What can I do while exploring?"
        color="bg-green-50"
        items={inspirationItems.inspirationItems}
      />
      <div className="section-card">
        <div className="section-header">
          <h2 className="section-title">
            <Route className="h-5 w-5 text-green-600" />
            Exploration & Travel Options
          </h2>
          <p className="section-description">Actions, activities, and considerations during travel and exploration.</p>
        </div>
        <div className="p-0">
          <ScrollArea className="h-[1000px] md:h-[900px] p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <SectionHeader icon={Route} title={wildernessActions.title} color={wildernessActions.color} />
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {wildernessActions.items.map((item) => (
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

                <SectionHeader icon={Footprints} title={travelPace.title} color={travelPace.color} className="mt-6" />
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {travelPace.items.map((item) => (
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
              </div>

              <div>
                <SectionHeader
                  icon={Mountain}
                  title={environmentalInteractions.title}
                  color={environmentalInteractions.color}
                />
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {environmentalInteractions.items.map((item) => (
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

                <SectionHeader
                  icon={Map}
                  title={potentialEncounters.title}
                  color={potentialEncounters.color}
                  className="mt-6"
                />
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {potentialEncounters.items.map((item) => (
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
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  )
}

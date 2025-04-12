import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Building2, MessageCircle, Store } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { InspirationCard } from "@/components/ui/inspiration-card"

// Import JSON data
import inspirationItems from "@/data/social/inspiration-items.json"
import townActions from "@/data/social/town-actions.json"
import socialInteractions from "@/data/social/social-interactions.json"
import locationSpecific from "@/data/social/location-specific.json"
import cityServices from "@/data/social/city-services.json"

export function SocialSection() {
  return (
    <>
      <InspirationCard
        title="Quick Inspiration: What can I do in social situations?"
        color="bg-purple-50"
        items={inspirationItems.inspirationItems}
      />
      <div className="section-card">
        <div className="section-header">
          <h2 className="section-title">
            <Building2 className="h-5 w-5 text-purple-600" />
            City/Social Options
          </h2>
          <p className="section-description">
            Actions, activities, and interactions available in urban environments and social situations.
          </p>
        </div>
        <div className="p-0">
          <ScrollArea className="h-[1000px] md:h-[900px] p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <SectionHeader icon={Building2} title={townActions.title} color={townActions.color} />
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {townActions.items.map((item) => (
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
                  icon={MessageCircle}
                  title={socialInteractions.title}
                  color={socialInteractions.color}
                  className="mt-6"
                />
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {socialInteractions.items.map((item) => (
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

              <div>
                <SectionHeader icon={Store} title={cityServices.title} color={cityServices.color} />
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {cityServices.items.map((item) => (
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
                  icon={Building2}
                  title={locationSpecific.title}
                  color={locationSpecific.color}
                  className="mt-6"
                />
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {locationSpecific.items.map((item) => (
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
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  )
}

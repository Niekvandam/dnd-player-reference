import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Scroll, Store, Users, Moon } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { InspirationCard } from "@/components/ui/inspiration-card"

// Import JSON data
import inspirationItems from "@/data/downtime/inspiration-items.json"
import personalDevelopment from "@/data/downtime/personal-development.json"
import economicActivities from "@/data/downtime/economic-activities.json"
import socialActivities from "@/data/downtime/social-activities.json"
import nightActivities from "@/data/downtime/night-activities.json"

export function DowntimeSection() {
  return (
    <>
      <InspirationCard
        title="Quick Inspiration: What can I do during downtime?"
        color="bg-amber-50"
        items={inspirationItems.inspirationItems}
      />
      <div className="section-card">
        <div className="section-header">
          <h2 className="section-title">
            <Scroll className="h-5 w-5 text-amber-600" />
            Downtime Activities
          </h2>
          <p className="section-description">Options for what to do between adventures or during extended breaks.</p>
        </div>
        <div className="p-0">
          <ScrollArea className="h-[1000px] md:h-[900px] p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <SectionHeader icon={Scroll} title={personalDevelopment.title} color="text-amber-600" />
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {personalDevelopment.items.map((item) => (
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
                        {item.example && <p className="mt-2 text-sm italic text-gray-600">Example: {item.example}</p>}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <SectionHeader icon={Moon} title={nightActivities.title} color="text-indigo-600" className="mt-6" />
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {nightActivities.items.map((item) => (
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
                <SectionHeader icon={Store} title={economicActivities.title} color="text-amber-600" />
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {economicActivities.items.map((item) => (
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
                        {item.example && <p className="mt-2 text-sm italic text-gray-600">Example: {item.example}</p>}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <SectionHeader icon={Users} title={socialActivities.title} color="text-blue-600" className="mt-6" />
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {socialActivities.items.map((item) => (
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
                        {item.example && <p className="mt-2 text-sm italic text-gray-600">Example: {item.example}</p>}
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

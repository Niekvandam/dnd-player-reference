import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookOpen, HelpCircle } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

// Import JSON data
import whenLost from "@/data/general/when-lost.json"
import situationalPrompts from "@/data/general/situational-prompts.json"

export function GeneralSection() {
  return (
    <div className="section-card">
      <div className="section-header">
        <h2 className="section-title">
          <BookOpen className="h-5 w-5 text-blue-600" />
          General Options
        </h2>
        <p className="section-description">Universal actions and options available in most situations.</p>
      </div>
      <div className="scroll-container">
        <ScrollArea className="flex-1">
          <div className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <SectionHeader icon={HelpCircle} title={whenLost.title} color={whenLost.color} />
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {whenLost.items.map((item) => (
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
                <SectionHeader icon={HelpCircle} title={situationalPrompts.title} color={situationalPrompts.color} />
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {situationalPrompts.items.map((item) => (
                    <AccordionItem
                      key={item.id}
                      value={item.id}
                      className="border border-gray-200 rounded-md overflow-hidden bg-white"
                    >
                      <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-gray-800">
                        {item.title || item.id}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-3 pt-1 text-gray-700">
                        <p>{item.content}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="space-y-4 p-4 bg-green-50 rounded-lg border border-green-100 mt-6 mb-6">
                  <p className="text-sm text-gray-700">
                    Remember that this tool is a guide, not a limitation. You can always try actions not listed here.
                    Describe what you want to do to your DM, who will determine how to resolve it.
                  </p>
                  <p className="text-sm text-gray-700">
                    Think creatively about how your character's background, skills, and abilities might apply to
                    different situations. The most memorable moments often come from unexpected solutions!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

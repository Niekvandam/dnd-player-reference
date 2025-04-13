"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  showScrollIndicators?: boolean
}

const ScrollArea = React.forwardRef<React.ElementRef<typeof ScrollAreaPrimitive.Root>, ScrollAreaProps>(
  ({ className, children, showScrollIndicators = true, ...props }, ref) => {
    const [showTopIndicator, setShowTopIndicator] = React.useState(false)
    const [showBottomIndicator, setShowBottomIndicator] = React.useState(true)
    const [showScrollHint, setShowScrollHint] = React.useState(true)
    const viewportRef = React.useRef<HTMLDivElement>(null)

    // Handle scroll events to show/hide indicators
    const handleScroll = React.useCallback(() => {
      if (!viewportRef.current) return

      const { scrollTop, scrollHeight, clientHeight } = viewportRef.current

      // Show top indicator if scrolled down
      setShowTopIndicator(scrollTop > 20)

      // Show bottom indicator if not at bottom
      setShowBottomIndicator(scrollTop + clientHeight < scrollHeight - 20)

      // Hide scroll hint once user has scrolled
      if (scrollTop > 10) {
        setShowScrollHint(false)
      }
    }, [])

    // Hide scroll hint after 5 seconds
    React.useEffect(() => {
      const timer = setTimeout(() => {
        setShowScrollHint(false)
      }, 5000)

      return () => clearTimeout(timer)
    }, [])

    return (
      <ScrollAreaPrimitive.Root ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
        <ScrollAreaPrimitive.Viewport
          ref={viewportRef}
          onScroll={handleScroll}
          className="h-full w-full rounded-[inherit]"
        >
          {children}
        </ScrollAreaPrimitive.Viewport>
        <ScrollAreaPrimitive.Scrollbar
          orientation="vertical"
          className="flex select-none touch-none p-0.5 bg-transparent transition-colors duration-200 ease-out hover:bg-stone-100/50 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
        >
          <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-amber-600/40 hover:bg-amber-600/60" />
        </ScrollAreaPrimitive.Scrollbar>
        <ScrollAreaPrimitive.Corner />

        {showScrollIndicators && (
          <>
            {showTopIndicator && <div className="scroll-indicator-top" />}
            {showBottomIndicator && <div className="scroll-indicator" />}
            {showScrollHint && showBottomIndicator && (
              <div className="scroll-hint">
                <ChevronDown className="h-4 w-4 text-amber-800/70" />
              </div>
            )}
          </>
        )}
      </ScrollAreaPrimitive.Root>
    )
  },
)
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

export { ScrollArea }

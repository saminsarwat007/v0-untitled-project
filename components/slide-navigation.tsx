"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface SlideNavigationProps {
  currentSlide: number
  totalSlides: number
  nextSlide: () => void
  prevSlide: () => void
  goToSlide: (slideNumber: number) => void
}

export default function SlideNavigation({
  currentSlide,
  totalSlides,
  nextSlide,
  prevSlide,
  goToSlide,
}: SlideNavigationProps) {
  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center z-50">
      <div className="bg-slate-700/60 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2 scale-75 hover:scale-100 transition-transform duration-300">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 1}
          className="text-white p-1 rounded-full hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-1">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index + 1)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                currentSlide === index + 1 ? "bg-teal-400 w-3" : "bg-slate-400 hover:bg-slate-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides}
          className="text-white p-1 rounded-full hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

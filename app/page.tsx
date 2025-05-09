"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Slide1Hero from "@/components/slides/slide-1-hero"
import Slide2Problem from "@/components/slides/slide-2-problem"
import Slide3Solution from "@/components/slides/slide-3-solution"
import Slide4HowItWorks from "@/components/slides/slide-4-how-it-works"
import Slide5Features from "@/components/slides/slide-5-features"
import Slide6WhyClay from "@/components/slides/slide-6-why-clay"
import Slide7CoolingMechanisms from "@/components/slides/slide-7-cooling-mechanisms"
import Slide8Market from "@/components/slides/slide-8-market"
import Slide9TargetUsers from "@/components/slides/slide-9-target-users"
import Slide10Climate from "@/components/slides/slide-10-climate"
import Slide11GoToMarket from "@/components/slides/slide-11-go-to-market"
import Slide11Business from "@/components/slides/slide-11-business"
import Slide12ThankYou from "@/components/slides/slide-12-thank-you"
import SlideNavigation from "@/components/slide-navigation"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const totalSlides = 13

  const nextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (slideNumber: number) => {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
      setCurrentSlide(slideNumber)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        nextSlide()
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        prevSlide()
      } else if (e.key >= "1" && e.key <= "9") {
        const slideNum = Number.parseInt(e.key)
        if (slideNum <= totalSlides) {
          goToSlide(slideNum)
        }
      } else if (e.key === "0") {
        goToSlide(10)
      } else if (e.key === "-") {
        goToSlide(11)
      } else if (e.key === "=") {
        goToSlide(12)
      } else if (e.key === "+") {
        goToSlide(13)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide])

  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-50 relative">
      <AnimatePresence mode="wait">
        {currentSlide === 1 && <Slide1Hero key="slide-1" />}
        {currentSlide === 2 && <Slide2Problem key="slide-2" />}
        {currentSlide === 3 && <Slide3Solution key="slide-3" />}
        {currentSlide === 4 && <Slide4HowItWorks key="slide-4" />}
        {currentSlide === 5 && <Slide5Features key="slide-5" />}
        {currentSlide === 6 && <Slide6WhyClay key="slide-6" />}
        {currentSlide === 7 && <Slide7CoolingMechanisms key="slide-7" />}
        {currentSlide === 8 && <Slide8Market key="slide-8" />}
        {currentSlide === 9 && <Slide9TargetUsers key="slide-9" />}
        {currentSlide === 10 && <Slide10Climate key="slide-10" />}
        {currentSlide === 11 && <Slide11GoToMarket key="slide-11" />}
        {currentSlide === 12 && <Slide11Business key="slide-12" />}
        {currentSlide === 13 && <Slide12ThankYou key="slide-13" />}
      </AnimatePresence>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        goToSlide={goToSlide}
      />
    </div>
  )
}

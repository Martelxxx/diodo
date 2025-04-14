"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    image: "/model1.webp",
    title: "L'Élégance Intemporelle",
    subtitle: "Collection Automne 2023",
    description:
      "Découvrez notre nouvelle collection qui fusionne l'artisanat traditionnel avec le design contemporain.",
    cta: "Découvrir",
    link: "/collection",
  },
  {
    id: 2,
    image: "/abstract1.webp",
    title: "L'Art de l'Artisanat",
    subtitle: "Savoir-faire Exceptionnel",
    description: "Chaque pièce raconte une histoire, tissée avec passion et expertise par nos artisans qualifiés.",
    cta: "Notre Histoire",
    link: "/about",
  },
  {
    id: 3,
    image: "/shirt1.png",
    title: "Authenticité & Modernité",
    subtitle: "Collection Exclusive",
    description:
      "Des créations uniques qui célèbrent l'héritage culturel tout en embrassant l'innovation contemporaine.",
    cta: "Acheter",
    link: "/collection",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="container mx-auto px-4 md:px-6 text-center text-white">
              <span className="inline-block text-gold uppercase tracking-wider mb-2">{slide.subtitle}</span>
              <h1 className="hero-title mb-4">{slide.title}</h1>
              <p className="max-w-xl mx-auto mb-8 text-lg">{slide.description}</p>
              <Link href={slide.link}>
                <Button className="btn-gold text-lg px-8 py-6">{slide.cta}</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide ? "bg-gold w-8" : "bg-white/50 hover:bg-white",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Aminata Diallo",
    role: "Cliente Fidèle",
    quote:
      "Les créations de Diodo Couture sont d'une qualité exceptionnelle. Chaque pièce que j'ai achetée raconte une histoire et reflète un savoir-faire artisanal incomparable.",
    avatar: "/model1.webp",
    rating: 5,
  },
  {
    id: 2,
    name: "Omar Seck",
    role: "Collectionneur d'Art",
    quote:
      "En tant que collectionneur, j'apprécie l'authenticité et l'originalité des textiles de Diodo Couture. Leur fusion entre tradition et modernité crée des pièces véritablement uniques.",
    avatar: "/model2.webp",
    rating: 5,
  },
  {
    id: 3,
    name: "Fatou Ndiaye",
    role: "Styliste",
    quote:
      "Collaborer avec Diodo Couture a été une expérience enrichissante. Leur dévouement à l'artisanat et leur vision artistique sont une source d'inspiration pour tous les créateurs.",
    avatar: "/model3.webp",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 mb-6 rounded-full overflow-hidden border-2 border-gold">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn("h-5 w-5", i < testimonial.rating ? "text-gold fill-gold" : "text-gray-400")}
                    />
                  ))}
                </div>
                <blockquote className="text-xl italic mb-6">"{testimonial.quote}"</blockquote>
                <div className="text-gold font-serif font-medium">{testimonial.name}</div>
                <div className="text-gray-400 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentIndex ? "bg-gold w-8" : "bg-gray-600 hover:bg-gray-500",
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

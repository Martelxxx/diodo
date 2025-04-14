"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AITypingEffectProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenPhrases?: number
  className?: string
}

export default function AITypingEffect({
  phrases,
  typingSpeed = 50,
  deletingSpeed = 30,
  delayBetweenPhrases = 2000,
  className = "",
}: AITypingEffectProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (isPaused) return

    const currentPhrase = phrases[currentPhraseIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < currentPhrase.length) {
            setCurrentText(currentPhrase.substring(0, currentText.length + 1))
          } else {
            // Complete phrase typed - delay before deleting
            setTimeout(() => setIsDeleting(true), delayBetweenPhrases)
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.substring(0, currentText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases, isPaused])

  // Ensure each phrase is fully typed before moving to the next
  useEffect(() => {
    // When a new phrase starts, ensure we complete it
    if (currentText === "" && !isDeleting) {
      setIsPaused(false)
    }

    // When a phrase is fully typed, pause briefly before deleting
    if (phrases[currentPhraseIndex] === currentText && !isDeleting) {
      setIsPaused(true)
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
      }, delayBetweenPhrases)

      return () => clearTimeout(pauseTimeout)
    }
  }, [currentText, isDeleting, currentPhraseIndex, phrases, delayBetweenPhrases])

  return (
    <div className="inline-flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={className}
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
      <span className={`ml-1 inline-block w-0.5 h-8 bg-cyan-400 ${cursorVisible ? "opacity-100" : "opacity-0"}`}></span>
    </div>
  )
}

import { useEffect, useState } from 'react'

export default function useTypingEffect(phrases, typingSpeed = 90, deletingSpeed = 45, pauseTime = 1800) {
    const [text, setText] = useState('')
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                const next = currentPhrase.slice(0, text.length + 1)
                setText(next)
                if (next === currentPhrase) {
                    setTimeout(() => setIsDeleting(true), pauseTime)
                    return
                }
            } else {
                const next = currentPhrase.slice(0, text.length - 1)
                setText(next)
                if (next === '') {
                    setIsDeleting(false)
                    setPhraseIndex((phraseIndex + 1) % phrases.length)
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed)

        return () => clearTimeout(timeout)
    }, [text, phraseIndex, isDeleting, phrases, typingSpeed, deletingSpeed, pauseTime])

    return text
}

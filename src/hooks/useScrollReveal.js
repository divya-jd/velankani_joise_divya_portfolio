import { useEffect, useRef, useState } from 'react'

export default function useScrollReveal(options = {}) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const node = ref.current
        if (!node) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: options.threshold || 0.1 }
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [options.threshold])

    return [ref, isVisible]
}

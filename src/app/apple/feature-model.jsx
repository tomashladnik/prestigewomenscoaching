"use client"

import { X } from "lucide-react"
import { useEffect } from "react"
export default function FeatureModal({ isOpen, onClose, title, content }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className="bg-white text-black w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6 md:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-2 text-sm font-medium text-gray-600">{title}</div>
          <h2 className="text-4xl font-bold mb-8">{content.title}</h2>

          <div
  className="prose prose-lg prose-gray max-w-none"
  dangerouslySetInnerHTML={{ __html: content.description }}
></div>


        </div>
      </div>
    </div>
  )
}


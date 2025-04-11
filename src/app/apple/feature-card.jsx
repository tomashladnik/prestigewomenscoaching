"use client"

import { Plus } from "lucide-react"
import { useState } from "react"
import FeatureModal from "./feature-model"

export default function FeatureCard({
  title,
  subtitle,
  bgColor = "bg-black",
  textColor = "text-white",
  imageSrc,
  videoSrc,
  featureId,
  content,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        tabIndex={0}
        className={`relative rounded-3xl overflow-hidden aspect-[3/4] ${bgColor} ${textColor} group focus:ring-2 focus:ring-offset-2 focus:ring-white hover:scale-[1.02] transition-transform`}
      >
        {/* Background Image or Video */}
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        ) : null}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Text Content */}
        <div className="relative z-20 p-6 flex flex-col h-full">
          <div className="mb-2 text-sm font-medium opacity-90 ">{title}</div>
          <h2 className="text-2xl font-semibold mb-4">{subtitle}</h2>
          <div className="flex-grow" />
        </div>

        {/* Plus Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[rgba(60,60,60,0.5)] backdrop-blur-sm flex items-center justify-center hover:bg-[rgba(80,80,80,0.7)] transition-colors z-30"
          aria-label={`Learn more about ${title}`}
          title={`Open details for ${title}`}
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Modal */}
      <FeatureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        content={content}
      />
    </>
  )
}
// export default function FeatureCard({ title, subtitle, imageSrc, onOpen }) {
//   return (
//     <div className="p-4">
//       <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
//         <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
//         <div className="p-4">
//           <h3 className="text-lg font-bold">{title}</h3>
//           <p className="text-sm text-gray-400">{subtitle}</p>
//           <button
//             onClick={onOpen}
//             className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md"
//           >
//             +
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

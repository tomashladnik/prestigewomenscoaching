import { Activity, Dumbbell, Footprints, Heart, Scale, Timer, Watch } from "lucide-react"

export default function AboutUsSection() {
    const gridSize = 10
  const occupiedSpaces = new Set()

  // Function to get a random unoccupied position
  const getUnoccupiedPosition = () => {
    let attempts = 0
    while (attempts < 50) {
      const gridX = Math.floor(Math.random() * gridSize)
      const gridY = Math.floor(Math.random() * gridSize)
      const position = `${gridX},${gridY}`
      
      if (!occupiedSpaces.has(position)) {
        occupiedSpaces.add(position)
        return {
          left: `${(gridX * 100) / gridSize}%`,
          top: `${(gridY * 100) / gridSize}%`
        }
      }
      attempts++
    }
    return null
  }

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Background pattern with icons */}
      <div className="absolute inset-0 w-3/5 overflow-hidden">
        <div className="absolute inset-0 p-4">
          {/* Scattered icons pattern */}
          {Array.from({ length:15 }).map((_, i) => {
            const Icon = [Dumbbell, Heart, Watch, Footprints, Timer, Activity, Scale][i % 7]
            // Varying sizes for visual interest
            const size = Math.floor(Math.random() * 35) + 70
            
            const position = getUnoccupiedPosition()
            if (!position) return null 
            const rotate = `${Math.floor(Math.random() * 3)}deg`

            return (
              <div
                key={i}
                className="absolute transition-all duration-1000"
                style={{
                
                  top: position.top,
                  left: position.left,
                  transform: `rotate(${rotate})`,
                  opacity: 0.9,
                }}
              >
                <Icon 
                  size={size} 
                  className="text-amber-500" 
                  strokeWidth={1}
                  fill="none" 
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Content card */}
      <div className="relative flex justify-end items-center min-h-screen p-4 md:p-8">
        <div className="w-full md:w-3/5 lg:w-1/2 bg-white rounded-3xl border-2 border-amber-500 p-4  md:p-12 shadow-lg z-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-wider text-center">ABOUT US</h2>

            <h1 className="text-2xl md:text-4xl font-black text-center">Prestige Women's Coaching</h1>

            <p className="text-center text-lg">
              The Ultimate Women's Transformation Experience is more than a fitness program - it's a lifestyle shift
              built for real women who want lasting change without sacrificing their time, energy, or confidence.
            </p>

            <p className="text-center text-lg">
              At Prestige Women's Coaching, we specialize in high-touch, personalized coaching for women who are ready
              to feel strong, empowered, and in control again. Whether it's in your home or in the gym, our team brings
              the strategy, support, and accountability to help you finally get the results you deserve.
            </p>

            <p className="text-center text-lg">
              Since launching, we've helped over 200 women transform their bodies and mindsets through our proven
              6-month experience.
            </p>

            {/* Stats section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-500">200+</p>
                <p className="text-sm">Women Transformed</p>
              </div>

              <div className="text-center">
                <p className="text-3xl font-bold text-amber-500">6-Month</p>
                <p className="text-sm">Personalized Coaching Journey</p>
              </div>

              <div className="text-center">
                <p className="text-3xl font-bold text-amber-500">90%+</p>
                <p className="text-sm">Client Completion Rate</p>
              </div>

              <div className="text-center">
                <p className="text-3xl font-bold text-amber-500">Thousands</p>
                <p className="text-sm">of Fat Lost & Strength Gained</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


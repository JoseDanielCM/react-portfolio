import React from 'react'
import { SparklesPreview } from '../InternalSections/GoalTitleSparkes'

function Goal() {
  return (
    <section id='Goal' className="main-section sectBack-Top bg-black relative h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          transform: 'translateX(-25%) scale(1.5)',  // Shifts the video left and scales it up
        }}
      >
        <source src="/public/GoalBackground.mp4" type="video/mp4" />
      </video>
      <SparklesPreview />
      {/* GoalContent*/}
      <div>

      </div>
    </section>

  )
}

export default Goal;


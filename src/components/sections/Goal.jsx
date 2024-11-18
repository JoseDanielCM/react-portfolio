import React from 'react'
import { SparklesPreview } from '../InternalSections/GoalTitleSparkes'
import { GoalContent } from '../InternalSections/GoalContent'

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

      <img className='z-10 absolute top-0 left-0 ml-16 pl-3 mt-5 w-1/6' src="/public/SpacialCat1.webp" alt="" />
      <SparklesPreview title="Goals"/>
      <GoalContent />

    </section>
  )
}

export default Goal;


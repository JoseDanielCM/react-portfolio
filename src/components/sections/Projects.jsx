import React from 'react'
import  ProjectsTechnologies  from '../InternalSections/ProjectsTechnologies'

export default function Projects() {
    return (
        <section id='Projects' className="main-section relative sectBack-Top bg-black overflow-hidden" >
            <video
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/public/ProjectsBackground.mp4" type="video/mp4" />
            </video>
            <ProjectsTechnologies />
        </section>
    )
}

import React from 'react'
import  ProjectsTechnologies  from '../InternalSections/ProjectsTechnologies'

export default function Projects() {
    return (
        <section id='Projects' className="main-section relative bg-black overflow-hidden" 
        style={{
            backgroundImage: 'URL("/public/SunBackground.png")',
            backgroundSize: 'cover',
            backgroundPositionX:"center",
            backgroundRepeat: 'no-repeat',
        }
        }>
            
            <ProjectsTechnologies />
        </section>
    )
}

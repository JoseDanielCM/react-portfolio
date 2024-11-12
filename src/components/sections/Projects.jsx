import React from 'react'
import  ProjectsTechnologies  from '../InternalSections/ProjectsTechnologies'
import  ProjectsCards from '../InternalSections/ProjectsCards'

export default function Projects() {
    return (
        <section id='Projects' className="main-section sectBack-Top bg-black relative h-screen overflow-hidden" >
            <ProjectsTechnologies />
            <ProjectsCards />
        </section>
    )
}

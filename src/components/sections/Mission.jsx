import React from "react";
import Card from "../InternalSections/MissionCard"; 

export default function Projects() {
    return (
        <section
            id="Mission"
            className="main-section sectBack-Bot h-screen relative pb-28 pt-28 overflow-hidden"
            style={{
                backgroundImage: `
                    linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 20%),
                    linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 20%),
                    url("/public/TreeBackground.jpg")
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                
            }}
        >

            <h1 className="ext-center text-white text-7xl font-bold pb-7 pt-24 text-center">Mission Vission & Values</h1>
            <div className="space-cards-container flex flex-wrap justify-center gap-28 z-50 relative mt-10">
                {/* Mission Card */}
                <Card
                    title="Mission"
                    description="Empowering users to learn effectively by creating innovative, space-inspired tools that combine technology and imagination."
                    iconSrc="https://img.icons8.com/color/96/rocket.png"
                    gradient="bg-gradient-to-br from-purple-900 to-black"
                />

                {/* Vision Card */}
                <Card
                    title="Vision"
                    description="To revolutionize self-learning by inspiring individuals to explore the uncharted territories of knowledge, just like the stars."
                    iconSrc="https://img.icons8.com/color/96/telescope.png"
                    gradient="bg-gradient-to-br from-blue-900 to-black"
                />

                {/* Values Card */}
                <Card
                    title="Values"
                    description=""
                    iconSrc="https://img.icons8.com/color/96/star.png"
                    gradient="bg-gradient-to-br from-teal-900 to-black"
                    additionalContent={
                        <ul className="mt-4 list-disc list-inside">
                            <li>Curiosity</li>
                            <li>Innovation</li>
                            <li>Collaboration</li>
                            <li>Integrity</li>
                            <li>Perseverance</li>
                        </ul>
                    }
                />
            </div>
        </section>
    );
}

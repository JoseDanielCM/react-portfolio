import React from "react";
import Card from "../InternalSections/MissionCard"; 

export default function Projects() {
    return (
        <section
            id="Mission"
            className="main-section relative overflow-hidden min-h-[50vh] sectBack-Bot"
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

            <h1 className="text-white text-7xl font-bold pb-24 pt-24 text-center">Mission Vission & Values</h1>
            <div className="space-cards-container flex flex-wrap justify-center gap-28 z-50 relative mb-10 mt-10">
                {/* Mission Card */}
                <Card
                    title="Mission"
                    description="To create impactful software solutions that solve real-world problems while continuously improving my skills in programming and design."
                    iconSrc="https://img.icons8.com/color/96/rocket.png"
                    gradient="bg-gradient-to-br from-purple-900 to-black"
                />

                {/* Vision Card */}
                <Card
                    title="Vision"
                    description="To become a developer who creates innovative solutions that inspire exploration, curiosity, and a deeper understanding of certain topics"
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
                            <li>Continuous Improvement</li>
                            <li>Perseverance</li>
                            <li>Adaptability</li>
                        </ul>
                    }
                />
            </div>
        </section>
    );
}

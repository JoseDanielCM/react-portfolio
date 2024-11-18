import React from "react";
import Card from "../InternalSections/MissionCard"; // Assuming Card is in the same folder

export default function Projects() {
    return (
        <section
            id="Mission"
            className="main-section sectBack-Bot relative pb-28 pt-28 sectBack- overflow-hidden"
            style={{
                backgroundImage: 'URL("/public/TreeBackground.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }
            }
        >


            <div className="space-cards-container flex flex-wrap justify-center gap-8 z-50 relative mt-10">
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

// Profile.jsx
import React from 'react';
import {ProfileCard} from '../InternalSections/ProfileCard'

function Profile() {
    return (
        <section id='Profile' className="main-section sectBack-Bot relative h-screen flex items-center justify-center overflow-hidden m-0">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{
                    transform: 'translateX(-25%) scale(1.5)',  // Shifts the video left and scales it up
                }}
            >
                <source src="/ProfileBackground.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay */}

            {/* Content */}
            <div className="w-screen relative z-20 flex flex-col md:flex-row items-center justify-between text-white right-24 p-0">
                {/* Profile Photo */}
                <div className="w-44 h-44 md:w-60 md:h-60  bg-gray-800 rounded-full overflow-hidden flex-shrink-0 mb-4 md:mb-0 relative left-1/4">
                    <img src="/public/ProfilePhoto.png" alt="Profile Photo" className="w-full h-full object-cover" />
                </div>

                <ProfileCard/>
            </div>
        </section>
    );
}

export default Profile;

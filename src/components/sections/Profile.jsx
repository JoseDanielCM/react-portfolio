// Profile.jsx
import React from 'react';

function Profile() {
    return (
        <section id='Profile' className="main-section relative h-screen flex items-center justify-center overflow-hidden">
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
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

            {/* Content */}
            <div className="w-screen relative z-20 flex flex-col md:flex-row items-center justify-between text-white p-4 md:p-7">
                {/* Profile Photo */}
                <div className="w-44 h-44 md:w-52 md:h-52 bg-gray-800 rounded-full overflow-hidden flex-shrink-0 mb-4 md:mb-0 sm:ml-40 md:ml-44 ">
                    <img src="your-profile-photo.jpg" alt="Profile Photo" className="w-full h-full object-cover" />
                </div>

                {/* Info Card */}
                <div className="bg-white bg-opacity-90 text-gray-900 p-6 rounded-lg shadow-lg max-w-md mr-32">
                    <h2 className="text-2xl font-bold mb-2">Your Name</h2>
                    <p className="mb-4">Brief description or introduction goes here. This can be a place to highlight your skills, passions, or current project.</p>
                    <a href="#" className="text-purple-600 hover:underline">Learn more about me</a>
                </div>
            </div>
        </section>
    );
}

export default Profile;

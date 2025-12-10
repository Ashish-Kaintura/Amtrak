import React, { useState, useEffect } from 'react';

const AmtrakLoader = () => {
    const [dots, setDots] = useState('');

    // Simple logic to animate the "..." text
    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-50">

            {/* --- Main Animation Container --- */}
            <div className="relative w-64 h-40 flex items-end justify-center overflow-hidden">

                {/* Smoke Puffs */}
                <div className="absolute top-4 left-16 flex flex-col items-center">
                    <div className="w-3 h-3 bg-gray-300 rounded-full animate-smoke-2 mb-1"></div>
                    <div className="w-4 h-4 bg-gray-400 rounded-full animate-smoke-1"></div>
                </div>

                {/* The Train Engine (SVG) */}
                <div className="relative z-10 animate-rumble text-[#002147]"> {/* Dark Navy Blue */}
                    <svg
                        width="100"
                        height="100"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Body */}
                        <path d="M18 10h-3V7h-2v3H6c-1.1 0-2 .9-2 2v5h1.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5h3c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5H20v-5c0-1.1-.9-2-2-2zM8 17c-.83 0-1.5-.67-1.5-1.5S7.17 14 8 14s1.5.67 1.5 1.5S8.83 17 8 17zm8 0c-.83 0-1.5-.67-1.5-1.5S15.17 14 16 14s1.5.67 1.5 1.5S16.83 17 16 17z" />
                        {/* Window */}
                        <path d="M12 6c2.21 0 4 1.79 4 4V10H8V10c0-2.21 1.79-4 4-4z" fill="#D50032" /> {/* Accent Red */}
                        {/* Smokestack */}
                        <path d="M10 2h4v3h-4z" />
                    </svg>
                </div>

                {/* The Moving Track */}
                <div className="absolute bottom-0 w-full h-2 bg-gray-400">
                    {/* Creates the 'ties' of the railroad moving left */}
                    <div
                        className="w-[200%] h-full animate-track"
                        style={{
                            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 20px, #fff 20px, #fff 30px)'
                        }}
                    ></div>
                </div>
            </div>

            {/* --- Loading Text --- */}
            <div className="mt-8 text-center">
                <h2 className="text-xl font-bold text-blue-900 tracking-wider">
                    PLANNING JOURNEY
                </h2>
                <p className="text-sm text-gray-500 font-medium mt-1">
                    Finding the best routes for you{dots}
                </p>
            </div>

            {/* --- Progress Bar (Optional) --- */}
            <div className="mt-6 w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-red-600 animate-[pulse_1s_infinite] w-2/3 rounded-full"></div>
            </div>

        </div>
    );
};

export default AmtrakLoader;
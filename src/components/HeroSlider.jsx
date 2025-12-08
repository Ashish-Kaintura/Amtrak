import React, { useState, useEffect, useCallback } from 'react';

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const heroSlides = [
        {
            bg: 'https://i.postimg.cc/CMqq5Rjj/husqqqy_BXH14Mul_FWk_unsplash.jpg',
            title: 'Premium Routes Now Open',
            subtitle: 'Discover our luxury Acela service with enhanced amenities and unparalleled comfort.',
            badge: 'Exclusive Offers'
        },
        {
            bg: 'https://i.postimg.cc/FFLLzYjP/sash_bo_5Jw_BM9n_ZSI_unsplash.jpg',
            title: 'Travel Smarter with Amtrak',
            subtitle: 'Experience comfort, convenience, and sustainable travel across the nation.',
            badge: 'New: Mobile Boarding'
        },
        {
            bg: 'https://i.postimg.cc/4499yYzW/rhamely_u_SIu_Nyj_Rioc_unsplash.jpg',
            title: 'Earn Rewards Every Trip',
            subtitle: 'Join Amtrak Guest Rewards today and start saving on your future adventures.',
            badge: 'Loyalty Program'
        }
    ];

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, [heroSlides.length]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    
    useEffect(() => {


        const slideTimer = setInterval(nextSlide, 6000); // 6000ms = 6 seconds

        return () => clearInterval(slideTimer);
    }, [nextSlide]);




    return (
        <div
            className="relative w-full h-screen overflow-hidden group font-sans"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

            {/* Background Images Layer */}
            {heroSlides.map((slide, idx) => (
                <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
                        }`}
                >
                    <div
                        className={`absolute inset-0 bg-cover bg-center transition-transform duration-8000 ease-linear ${idx === currentSlide ? 'scale-110' : 'scale-100'
                            }`}
                        style={{ backgroundImage: `url(${slide.bg})` }}
                    />
                </div>
            ))}

            {/* Content Layer */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-6">
                <div className="h-full flex items-center relative">
                    {heroSlides.map((slide, idx) => {
                        const isActive = idx === currentSlide;
                        return (
                            <div
                                key={idx}
                                className={`absolute top-1/2 -translate-y-1/2 left-0 w-full max-w-3xl transition-all duration-1000 ease-in-out ${isActive
                                    ? 'opacity-100 translate-y-[-50%] pointer-events-auto'
                                    : 'opacity-0 translate-y-[-40%] pointer-events-none'
                                    }`}
                            >
                                <div className="space-y-6">
                                    {/* Badge */}
                                    <span className={`inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium tracking-wide text-white transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                        }`}>
                                        {slide.badge}
                                    </span>

                                    {/* Title */}
                                    <h1 className={`text-5xl md:text-7xl font-bold leading-tight text-white transition-all duration-700 delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                        }`}>
                                        {slide.title}
                                    </h1>

                                    {/* Subtitle */}
                                    <p className={`text-lg md:text-xl text-white/80 transition-all duration-700 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                        }`}>
                                        {slide.subtitle}
                                    </p>

                                    {/* Button */}
                                    <div className={`pt-4 transition-all duration-700 delay-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                        }`}>
                                        <button className="group relative px-8 py-3 bg-white text-slate-900 font-bold rounded-full overflow-hidden transition-all hover:pr-12">
                                            <span className="relative z-10">Explore Now</span>
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300">
                                                →
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-12 right-6 z-30 flex gap-4">
                <button
                    onClick={prevSlide}
                    className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 group"
                    aria-label="Previous Slide"
                >
                    <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 group"
                    aria-label="Next Slide"
                >
                    <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>

            {/* Pagination Indicators */}
            <div className="absolute bottom-12 left-6 z-30 flex gap-3">
                {heroSlides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1 rounded-full transition-all duration-500 ${idx === currentSlide ? 'w-12 bg-white' : 'w-4 bg-white/40 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
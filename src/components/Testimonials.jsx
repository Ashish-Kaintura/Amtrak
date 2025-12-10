import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const testimonials = [
        { 
            name: 'Sarah Johnson', 
            role: 'Frequent Traveler', 
            text: 'Booking with Amtrek Reservation  has never been easier. The mobile app is fantastic and the board experience was seamless.', 
            rating: 5,
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
        },
        { 
            name: 'Michael Chen', 
            role: 'Business Executive', 
            text: 'Acela Express saves me valuable time. The Wi-Fi is reliable and the service is impeccable. Highly recommended.', 
            rating: 5,
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop'
        },
        { 
            name: 'Emily Rodriguez', 
            role: 'Student', 
            text: 'Great discounts for students and the seats are so comfortable. It makes traveling back to campus a joy.', 
            rating: 5,
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop'
        }
    ];

    useEffect(() => {
        if(isPaused) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isPaused, testimonials.length]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section className="relative py-24 overflow-hidden font-sans">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1532105956626-9569c03602f6?q=80&w=2070&auto=format&fit=crop" 
                    alt="Train Window View" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-blue-400 font-semibold tracking-widest text-xs uppercase mb-3 block">
                        Passenger Stories
                    </span>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Trusted by Millions
                    </h3>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Discover why travelers across the nation choose Amtrek Reservation  for their journey.
                    </p>
                </div>

                {/* Main Content Area */}
                <div 
                    className="relative max-w-4xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Glassmorphic Card Container */}
                    <div className="relative bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                        
                        {/* Decorative Quote Icon */}
                        <div className="absolute top-8 left-8 text-white/10">
                            <Quote size={80} fill="currentColor" />
                        </div>

                        <div className="relative h-[280px] md:h-[220px]">
                            {testimonials.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
                                        idx === currentIndex 
                                        ? 'opacity-100 translate-y-0 pointer-events-auto' 
                                        : 'opacity-0 translate-y-8 pointer-events-none'
                                    }`}
                                >
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-md" />
                                        ))}
                                    </div>

                                    {/* Quote Text */}
                                    <blockquote className="text-xl md:text-2xl text-center text-white font-medium leading-relaxed mb-8 relative z-10">
                                        "{item.text}"
                                    </blockquote>

                                    {/* User Profile */}
                                    <div className="flex items-center gap-4">
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className="w-12 h-12 rounded-full border-2 border-white/20 object-cover"
                                        />
                                        <div className="text-left">
                                            <div className="text-white font-bold text-lg leading-tight">
                                                {item.name}
                                            </div>
                                            <div className="text-blue-200 text-sm font-medium">
                                                {item.role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-between mt-8 px-4">
                        {/* Left Arrow */}
                        <button 
                            onClick={prevSlide}
                            className="p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        {/* Pagination Dots */}
                        <div className="flex gap-3">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${
                                        idx === currentIndex 
                                        ? 'w-8 bg-blue-400' 
                                        : 'w-2 bg-white/20 hover:bg-white/40'
                                    }`}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <button 
                            onClick={nextSlide}
                            className="p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
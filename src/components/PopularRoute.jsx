import React from 'react'
import { Clock, Train, TrendingUp, ChevronLeft, ChevronRight, ArrowRight, MapPin } from 'lucide-react'

// Added images to the data for a richer UI
const routes = [
    { 
        from: 'Boston', 
        to: 'New York', 
        time: '3h 30m', 
        price: '$49', 
        popular: true,
        image: 'https://i.postimg.cc/J4LkSR9K/bostontonewyork.png' 
    },
    { 
        from: 'New York', 
        to: 'Washington', 
        time: '2h 45m', 
        price: '$62', 
        popular: true,
        image: 'https://i.postimg.cc/yYjyPJWw/new_york_to_washinton.png'
    },
    { 
        from: 'Chicago', 
        to: 'Detroit', 
        time: '5h 20m', 
        price: '$38', 
        popular: false,
        image: 'https://i.postimg.cc/15sKw0Rj/chicago_to_detroit.png'
    },
    { 
        from: 'Los Angeles', 
        to: 'San Diego', 
        time: '2h 50m', 
        price: '$45', 
        popular: true,
        image: 'https://i.postimg.cc/9FCBZPXk/loss_angesl_to_san.png'
    },
    { 
        from: 'Seattle', 
        to: 'Portland', 
        time: '3h 15m', 
        price: '$52', 
        popular: false,
        image: 'https://i.postimg.cc/vHbvf78J/seatile_to_poland.png'
    },
    { 
        from: 'Philadelphia', 
        to: 'Boston', 
        time: '5h 10m', 
        price: '$68', 
        popular: false,
        image: 'https://i.postimg.cc/L62VLk6K/philland_to_bostin.png'
    }
];

export default function PopularRoute() {
    return (
        <section className="bg-slate-50 py-20 font-sans">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-2 block">
                            Discover
                        </span>
                        <h3 className="text-4xl font-bold text-slate-900 mb-2">Popular Routes</h3>
                        <p className="text-slate-500 max-w-md text-lg">
                            Explore the most traveled railway journeys favored by our community this season.
                        </p>
                    </div>
                    
                    {/* Navigation Buttons */}
                    <div className="flex gap-3">
                        <button className="p-3 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="p-3 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {routes.map((route, idx) => (
                        <div 
                            key={idx} 
                            className="group relative h-[400px] w-full rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Background Image with Zoom Effect */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${route.image})` }}
                            />
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Top Badge */}
                            {/* {route.popular && (
                                <div className="absolute top-6 left-6">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-semibold rounded-full shadow-lg">
                                        <TrendingUp className="w-3 h-3" />
                                        Trending
                                    </span>
                                </div>
                            )} */}

                            {/* Content Container */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                
                                {/* Route Visualization */}
                                <div className="space-y-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    
                                    {/* Cities & Icon */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-slate-300 text-sm font-medium mb-1">From</p>
                                            <h4 className="text-2xl font-bold">{route.from}</h4>
                                        </div>

                                        {/* Animated Train Connector */}
                                        <div className="flex flex-col items-center px-4 flex-1">
                                            <div className="w-full h-[1px] bg-white/30 relative">
                                                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
                                                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
                                                <Train className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-white/80" />
                                            </div>
                                            <p className="text-xs text-white/60 mt-2">{route.time}</p>
                                        </div>

                                        <div className="text-right">
                                            <p className="text-slate-300 text-sm font-medium mb-1">To</p>
                                            <h4 className="text-2xl font-bold">{route.to}</h4>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-[1px] w-full bg-white/20" />

                                    {/* Footer: Price & Action */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-sm text-slate-300">Starting from</span>
                                            <span className="text-3xl font-bold text-white">{route.price}</span>
                                        </div>

                                        <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 rounded-full font-semibold text-sm opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-100 hover:bg-blue-50">
                                            Book Now
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
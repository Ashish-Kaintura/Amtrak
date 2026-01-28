import { useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Map, Users, Globe, Award, ArrowRight, Train } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import video from "../video/train video.mp4";
export default function About() {
    const [expanded, setExpanded] = useState(false);

    const shortText =
        "From our humble beginnings to a modern transportation giant, every decade has brought innovation to the American railway.";

    const longText = `
    From our humble beginnings to becoming a modern transportation giant, our journey spans over a century of transformation.
    Each decade brought groundbreaking innovations — from expanding long-distance connectivity to introducing high-speed trains,
    building state-of-the-art rail infrastructure, adopting eco-friendly operations, and enhancing passenger experience through
    world-class service standards. What started as a simple mode of transport is now an icon of reliability, comfort, and
    technological advancement in the American transportation landscape.
    Our legacy continues to inspire future generations as we redefine mobility for tomorrow.
  `;

    const navigate = useNavigate();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax transform for hero text
    const yHero = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div ref={containerRef} className="bg-white font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">

            {/* --- 1. CINEMATIC HERO SECTION --- */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background with Zoom Effect */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, ease: "easeOut" }}
                        className="w-full h-full"
                    >
                        <img
                            src="https://i.postimg.cc/Qxn2hg1N/Banner_(1).jpg"
                            alt="Hero Train"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 via-slate-900/40 to-white" />
                </div>

                {/* Floating Content */}
                <motion.div
                    style={{ y: yHero, opacity: opacityHero }}
                    className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-[-5vh]"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex items-center justify-center gap-3 mb-6"
                    >
                        <div className="h-px w-12 bg-white/50"></div>
                        <span className="text-blue-200 uppercase tracking-[0.3em] text-xs font-bold">Est. 1971</span>
                        <div className="h-px w-12 bg-white/50"></div>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-none">
                        America’s <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 via-white to-blue-300 bg-300% animate-gradient">
                            Moving Soul.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
                        We don't just transport passengers. We weave together the fabric of a nation,
                        connecting 46 states with the rhythm of the rails.
                    </p>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
                >
                    <span className="text-[10px] uppercase tracking-widest">Scroll to Explore</span>
                    <div className="w-px h-12 bg-linear-to-b from-white/50 to-transparent"></div>
                </motion.div>
            </section>


            {/* --- 2. THE STATS STRIP (Glassmorphism) --- */}
            <section className="relative z-20 -mt-24 px-6 mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-4xl p-10 flex flex-col md:flex-row justify-between items-center gap-8 md:divide-x divide-slate-200"
                >
                    {[
                        { label: 'Annual Riders', value: '12.5M', icon: Users },
                        { label: 'Destinations', value: '500+', icon: Map },
                        { label: 'Daily Trains', value: '300+', icon: Train },
                        { label: 'Sustainability', value: '-83% CO₂', icon: Globe },
                    ].map((stat, idx) => (
                        <div key={idx} className="flex-1 px-6 text-center md:text-left flex items-center gap-4">
                            <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                                <stat.icon size={24} />
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-slate-900">{stat.value}</h4>
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </section>


            {/* --- 3. OUR LEGACY (Timeline Animation) --- */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16">
                    {/* Left Sticky Header */}
                    <div className="md:w-1/3">
                        <div className="sticky top-32">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                                Our Legacy
                            </h2>

                            {/* Summary Text */}
                            <p className="text-slate-500 text-lg leading-relaxed mb-4 transition-all duration-300">
                                {expanded ? longText : shortText}
                            </p>

                            {/* Read More Button */}
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="group flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all"
                            >
                                {expanded ? "Read less" : "Read full history"}
                                <ArrowRight className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
                            </button>
                        </div>
                    </div>

                    {/* Right Timeline */}
                    <div className="md:w-2/3 space-y-24 relative pl-8 md:pl-0">
                        {/* Timeline Vertical Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 md:hidden"></div>

                        {[
                            { year: '1971', title: 'The Beginning', desc: 'Amtrek Reservation  begins service on May 1st with 184 trains serving 43 states.', img: 'https://i.postimg.cc/5tgpnbbR/licensed-image.jpg' },
                            { year: '2000', title: 'High Speed Era', desc: 'Acela Express launches, introducing high-speed rail to the Northeast Corridor.', img: 'https://i.postimg.cc/T1fDSW0b/Gemini_Generated_Image_it38viit38viit38.png' },
                            { year: '2024', title: 'The Future', desc: 'New fleet of sustainable, AI-assisted trains rolls out across the nation.', img: 'https://i.postimg.cc/0jPw3Jnm/Gemini_Generated_Image_rmubnyrmubnyrmub.png' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="relative group"
                            >
                                {/* Mobile Dot */}
                                <div className="absolute -left-[37px] top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md md:hidden"></div>

                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="md:w-1/3">
                                        <span className="text-6xl font-black text-slate-600 absolute -z-10 -top-8 -left-4 md:static md:text-blue-700">
                                            {item.year}
                                        </span>
                                        <h3 className="text-2xl font-bold text-slate-900 mt-2">{item.title}</h3>
                                        <p className="text-slate-600 mt-2">{item.desc}</p>
                                    </div>
                                    <div className="md:w-2/3 overflow-hidden rounded-2xl">
                                        <motion.img
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.7 }}
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            <section className="py-32 bg-black/85 text-white relative overflow-hidden my-20">
                {/* Background Video */}
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                >
                    <source src={video} type="video/mp4" />
                </video>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <Award className="w-16 h-16 text-amber-400 mx-auto mb-8" />
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                        "The journey is not just about moving. It's about being moved."
                    </h2>
                    {/* <div className="flex justify-center gap-2">
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <div key={i} className="w-2 h-2 rounded-full bg-white/60"></div>
                                    ))}
                                </div> */}
                </div>
            </section>


            {/* --- 5. MEET THE LEADERSHIP (Minimal) --- */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Our Leadership</span>
                        <h2 className="text-4xl font-bold text-slate-900">Meet the Conductors</h2>
                    </div>
                    <button className="hidden md:block text-slate-500 hover:text-blue-600 font-medium transition-colors">View all team members &rarr;</button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { name: 'Ashish Kaintura', role: 'Chief Executive Officer', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop' },
                        { name: 'Sarah Jenkins', role: 'Head of Operations', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop' },
                        { name: 'Marcus Ray', role: 'Director of Sustainability', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop' }
                    ].map((person, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-3/4">
                                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-all duration-500 z-10" />
                                <img
                                    src={person.img}
                                    alt={person.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{person.name}</h3>
                            <p className="text-slate-500 text-sm">{person.role}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* --- 6. CTA BANNER --- */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=1974&auto=format&fit=crop"
                            className="w-full h-full object-cover"
                            alt="Cityscape"
                        />
                        <div className="absolute inset-0 bg-blue-900/90 mix-blend-multiply"></div>
                    </div>

                    <div className="relative z-10 p-16 md:p-24 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Your Next Adventure Awaits</h2>
                        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                            The tracks are clear, the seats are comfortable, and the views are breathtaking.
                            Where will you go next?
                        </p>
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-xl"
                        >
                            Book Your Ticket
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}
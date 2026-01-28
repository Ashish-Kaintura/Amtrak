import { motion } from "framer-motion";
import { BadgePercent, GraduationCap, Gift, Users, Sparkles, Link } from "lucide-react";

export default function Offers() {
    const offers = [
        {
            title: "Student Discount",
            subtitle: "Save 20% on all domestic & international routes",
            desc: "Valid for students aged 18–25 with a valid student ID. Perfect for holidays, semester breaks, and weekend trips.",
            tag: "20% OFF",
            icon: GraduationCap,
            img: "https://i.postimg.cc/qM89D6vw/studentoffer.png"
        },
        {
            title: "Senior Savings",
            subtitle: "Flat 30% off for passengers aged 60+",
            desc: "Travel comfortably and affordably with our senior-exclusive discounts, available year-round.",
            tag: "30% OFF",
            icon: Users,
            img: "https://i.postimg.cc/8zNx2kFg/senior.png"
        },
        {
            title: "Seasonal Festive Offers",
            subtitle: "Christmas, New Year & Summer Sale",
            desc: "Enjoy unbeatable deals during peak holiday seasons. Limited-time festive discounts on all popular routes.",
            tag: "UP TO 40% OFF",
            icon: Sparkles,
            img: "https://i.postimg.cc/65RCHR6c/Banner-(2).jpg"
        },
        {
            title: "Exclusive Coupon Codes",
            subtitle: "Redeem and save instantly on checkout",
            desc: "Use special coupon codes to get instant savings on your next booking. Applicable on all train classes.",
            tag: "SAVE NOW",
            icon: Gift,
            img: "https://i.postimg.cc/yYFwp3N8/dicount.png"
        }
    ];

    return (
        <div className="bg-white font-sans overflow-hidden">

            {/* === HERO SECTION === */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10 }}
                        src="https://i.postimg.cc/dtBPD7vB/Gemini-Generated-Image-oxhyveoxhyveoxhy.png"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center text-white px-6"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <BadgePercent className="w-6 h-6 text-amber-300" />
                        <span className="tracking-widest text-xs uppercase">Special Offers</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                        Save More on
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
                            {" "}Your Journey
                        </span>
                    </h1>

                    <p className="text-lg text-blue-100 max-w-xl mx-auto mt-4">
                        Discover exclusive deals, limited-time sales, and passenger-only discounts.
                    </p>
                </motion.div>
            </section>

      
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Current Deals & Discounts
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        These offers help millions of travelers explore the world more affordably.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {offers.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
                        >

                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.img}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    alt={item.title}
                                />
                                <span className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                                    {item.tag}
                                </span>
                            </div>


                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <item.icon className="w-7 h-7 text-blue-600" />
                                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                                </div>

                                <p className="text-blue-700 font-semibold mb-2">{item.subtitle}</p>
                                <p className="text-slate-600">{item.desc}</p>

                                <button className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all">
                                    View Details →
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* === CTA BANNER === */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden">
                    <img
                        src="https://i.postimg.cc/w3K6dCC0/wmremove-transformed.jpg"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black-900/90 mix-blend-multiply"></div>

                    <div className="relative z-10 p-16 md:p-24 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Claim Your Offer?
                        </h2>
                        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                            Book now and enjoy exclusive discounts on your next train journey.
                        </p>
                        <Link to="/contact">
                        <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-xl">
                            Book Tickets Now
                        </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

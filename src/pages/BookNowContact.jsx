import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, User, Calendar, Train } from "lucide-react";

export default function BookNowContact() {
    return (
        <div className="bg-white font-sans overflow-hidden">

            {/* === HERO SECTION === */}
            <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10 }}
                        src="https://i.postimg.cc/fTgGD7mh/Contect_Banner_3.jpg"
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
                    <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                        Book Your Journey
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
                            {" "}With Confidence
                        </span>
                    </h1>

                    <p className="text-lg text-blue-100 max-w-xl mx-auto mt-4">
                        Have questions? Need help? Our support team is here 24/7.
                    </p>
                </motion.div>
            </section>

            {/* === CONTACT + BOOKING FORM === */}
            <section className="py-24 px-6 max-w-7xl mx-auto">

                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* === CONTACT INFO === */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Need Help?
                            <span className="text-blue-600"> Contact Us</span>
                        </h2>

                        <p className="text-slate-600 text-lg">
                            Our travel assistance team is ready to help you with bookings, cancellations, route info, and special travel requirements.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg">
                                    <Phone />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-slate-900">Phone Support</h4>
                                    <p className="text-slate-500">(866) 306-1219</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg">
                                    <Mail />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-slate-900">Email Support</h4>
                                    <p className="text-slate-500">support@Amtrek Reservation traintickets.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg">
                                    <MapPin />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-slate-900">Head Office</h4>
                                    <p className="text-slate-500">17662 Irvine Blvd, Suite 9 Tustin, CA 92780</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* === BOOKING FORM === */}
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-10 rounded-3xl shadow-xl space-y-6 border border-slate-100"
                    >
                        <h3 className="text-3xl font-bold text-slate-900 mb-2">Quick Booking Form</h3>
                        <p className="text-slate-500 mb-6">Fill out the details and we will assist you instantly.</p>

                        {/* Name */}
                        <div>
                            <label className="text-sm font-semibold text-slate-600">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    className="w-full mt-2 p-4 pl-12 rounded-xl border focus:border-blue-500 outline-none"
                                    placeholder="John Carter"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-sm font-semibold text-slate-600">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                                <input
                                    type="email"
                                    className="w-full mt-2 p-4 pl-12 rounded-xl border focus:border-blue-500 outline-none"
                                    placeholder="example@mail.com"
                                />
                            </div>
                        </div>

                        {/* From / To */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-semibold text-slate-600">From</label>
                                <div className="relative">
                                    <Train className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="text"
                                        className="w-full mt-2 p-4 pl-12 rounded-xl border focus:border-blue-500 outline-none"
                                        placeholder="New York (NYP)"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-slate-600">To</label>
                                <div className="relative">
                                    <Train className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="text"
                                        className="w-full mt-2 p-4 pl-12 rounded-xl border focus:border-blue-500 outline-none"
                                        placeholder="Boston (BOS)"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Date */}
                        <div>
                            <label className="text-sm font-semibold text-slate-600">Travel Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                                <input
                                    type="date"
                                    className="w-full mt-2 p-4 pl-12 rounded-xl border focus:border-blue-500 outline-none"
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full p-4 bg-blue-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all hover:scale-[1.02]"
                        >
                            <Send className="w-5 h-5" /> Submit Booking Request
                        </button>
                    </motion.form>
                </div>
            </section>

            {/* === MAP SECTION === */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-4xl font-bold text-slate-900 mb-8 text-center">
                        Our Global Reach
                    </h3>

                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                        <img
                            src="https://i.postimg.cc/tgbZvmv4/contact-image.png"
                            className="w-full h-[450px] object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

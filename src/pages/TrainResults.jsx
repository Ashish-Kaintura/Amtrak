import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, IndianRupee } from "lucide-react";

export default function TrainResults() {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {
        return (
            <div className="p-10 text-center">
                <h2 className="text-2xl font-bold">No Search Data Found</h2>
                <button
                    onClick={() => navigate("/")}
                    className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                    Go Back
                </button>
            </div>
        );
    }

    const { from, to, date, passengers, results } = state;

    return (
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen p-6 mt-28">
            <div className="max-w-6xl mx-auto">

                {/* Back & Summary */}
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 mb-6 text-indigo-700 hover:text-indigo-900"
                >
                    <ArrowLeft /> Back to Search
                </button>

                <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
                    <div className="text-xl font-bold text-gray-900 flex gap-2 items-center">
                        {from.split(" (")[0]} → {to.split(" (")[0]}
                    </div>
                    <div className="text-gray-600 mt-1">
                        {new Date(date).toLocaleDateString("en-US")} • {passengers} Passenger{passengers > 1 ? "s" : ""}
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {results.length} Train{results.length !== 1 ? "s" : ""} Found
                </h2>

                {results.length > 0 ? (
                    <div className="space-y-4">
                        {results.map((t) => (
                            <div key={t.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6">
                                <div className="flex flex-col md:flex-row justify-between gap-6">
                                    <div>
                                        <div className="text-xl font-bold text-indigo-700">{t.trainNumber}</div>
                                        <div className="text-lg font-semibold">{t.trainName}</div>
                                        <div className="text-sm text-gray-500 mt-2">Runs: {t.days.join(", ")}</div>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {t.classes.map((c, i) => (
                                                <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{c}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Timings */}
                                    <div className="flex items-center gap-6">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold">{t.departure}</div>
                                            <div className="text-sm text-gray-500">{t.from}</div>
                                        </div>

                                        <div className="text-center">
                                            <Clock className="w-5 h-5 mx-auto text-gray-400" />
                                            <div className="text-sm text-gray-500">{t.duration}</div>
                                        </div>

                                        <div className="text-center">
                                            <div className="text-2xl font-bold">{t.arrival}</div>
                                            <div className="text-sm text-gray-500">{t.to}</div>
                                        </div>
                                    </div>

                                    {/* Pricing */}
                                    <div className="text-center">
                                        <div className="text-3xl font-bold flex items-center justify-center">
                                            <IndianRupee className="w-5 h-5" /> {t.price}
                                        </div>
                                        <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg mt-3 hover:bg-indigo-700 transition">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
                        <h3 className="text-2xl font-bold">No Trains Found</h3>
                        <p className="text-gray-600 mt-2">Try a different route.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

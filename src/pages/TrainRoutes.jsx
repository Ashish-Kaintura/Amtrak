import React from 'react';
import { Clock, IndianRupee } from 'lucide-react';
import { internationalTrains } from "../data/internationalTrains";

export default function TrainRoutes() {
    return (
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen p-6">
            <div className="max-w-6xl mx-auto mt-28">

                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-800">All International Train Routes</h1>
                    <p className="text-gray-600 mt-2">Explore all available train routes across Asia and beyond.</p>
                </div>

                {internationalTrains.length > 0 ? (
                    <div className="space-y-6">
                        {internationalTrains.map((train) => (
                            <div key={train.id} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition">
                                <div className="flex flex-col md:flex-row justify-between gap-6">
                                    {/* Train Info */}
                                    <div>
                                        <div className="text-xl font-bold text-indigo-700">{train.trainNumber}</div>
                                        <div className="text-lg font-semibold">{train.trainName}</div>
                                        <div className="text-sm text-gray-500 mt-1">
                                            Runs: {train.days.join(", ")}
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {train.classes.map((c, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{c}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Route & Timings */}
                                    <div className="flex items-center gap-6">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold">{train.departure}</div>
                                            <div className="text-sm text-gray-500">{train.from}</div>
                                        </div>

                                        <div className="text-center">
                                            <Clock className="w-5 h-5 mx-auto text-gray-400" />
                                            <div className="text-sm text-gray-500">{train.duration}</div>
                                        </div>

                                        <div className="text-center">
                                            <div className="text-2xl font-bold">{train.arrival}</div>
                                            <div className="text-sm text-gray-500">{train.to}</div>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="text-center flex flex-col justify-center">
                                        <div className="text-3xl font-bold flex items-center justify-center">
                                            <IndianRupee className="w-5 h-5" />
                                            {train.price}
                                        </div>
                                        <div className="text-xs text-gray-500 mt-1">Per person</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
                        <h3 className="text-2xl font-bold">No Train Routes Found</h3>
                        <p className="text-gray-600 mt-2">Please check back later.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

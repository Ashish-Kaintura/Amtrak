import { useState, useRef, useEffect } from "react";
import { Search, MapPin, Calendar, Users, X, ArrowRight } from "lucide-react";
import { internationalTrains } from "../data/internationalTrains";
import { useNavigate } from "react-router-dom";

export default function TrainRouteSearch() {
    const [showInput, setShowInput] = useState(false);
    const [query, setQuery] = useState("");
    const [filteredRoutes, setFilteredRoutes] = useState([]);
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    // Filter routes based on query
    useEffect(() => {
        if (!query) {
            setFilteredRoutes([]);
            return;
        }
        const q = query.toLowerCase();
        const results = internationalTrains.filter(train =>
            train.from.toLowerCase().includes(q) ||
            train.to.toLowerCase().includes(q) ||
            train.trainName.toLowerCase().includes(q)
        );
        setFilteredRoutes(results);
    }, [query]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                inputRef.current && !inputRef.current.contains(event.target)) {
                setShowInput(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelectRoute = (train) => {
        navigate("/train-result", {
            state: {
                from: train.from + ` (${train.fromCode || ""})`,
                to: train.to + ` (${train.toCode || ""})`,
                date: new Date().toISOString().split("T")[0],
                passengers: 1,
                results: [train],
            },
        });
    };

    return (
        <div className="relative flex items-center">
            {/* Input Box */}
            {showInput && (
                <div className=" mt-2 " ref={dropdownRef}>
                    <input
                        type="text"
                        ref={inputRef}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search city, station, or train..."
                        className="w-full  px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                    <div className="absolute top-full left-0">

                        {/* Dropdown */}
                        {filteredRoutes.length > 0 && (
                            <div className="mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                {filteredRoutes.map(train => (
                                    <div
                                        key={train.id}
                                        onClick={() => handleSelectRoute(train)}
                                        className="px-4 py-3 cursor-pointer hover:bg-indigo-50 flex justify-between items-center"
                                    >
                                        <div>
                                            <div className="font-medium text-gray-800">{train.from} → {train.to}</div>
                                            <div className="text-sm text-gray-500">{train.trainName} ({train.trainNumber})</div>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-400" />
                                    </div>
                                ))}
                            </div>
                        )}

                        {query && filteredRoutes.length === 0 && (
                            <div className="mt-1 px-4 py-3 bg-white border border-gray-200 text-gray-500 rounded-lg">
                                No routes found
                            </div>
                        )}
                    </div>

                </div>

            )}

            {/* Search Icon */}
            <button
                onClick={() => {
                    setShowInput(prev => !prev);
                    setQuery("");
                }}
                className="p-2 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-all"
            >


                <Search className="w-5 h-5" />

            </button>


        </div>
    );
}

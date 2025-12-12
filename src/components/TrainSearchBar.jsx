import { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Calendar, Users, X } from 'lucide-react';
import { internationalStations } from "../data/internationalStations";
import { internationalTrains } from "../data/internationalTrains";
import { useNavigate } from 'react-router-dom';

export default function TrainSearchBar() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [passengers, setPassengers] = useState(1);
    const [showFromDropdown, setShowFromDropdown] = useState(false);
    const [showToDropdown, setShowToDropdown] = useState(false);
    const [filteredFromStations, setFilteredFromStations] = useState([]);
    const [filteredToStations, setFilteredToStations] = useState([]);
    const [locationError, setLocationError] = useState('');

    const fromRef = useRef(null);
    const toRef = useRef(null);
    const navigate = useNavigate();

    const filterStations = (query) => {
        if (!query) return internationalStations;
        const lowerQuery = query.toLowerCase();
        return internationalStations.filter(station =>
            station.name.toLowerCase().includes(lowerQuery) ||
            station.code.toLowerCase().includes(lowerQuery) ||
            station.country.toLowerCase().includes(lowerQuery)
        );
    };

    const handleFromChange = (e) => {
        const value = e.target.value;
        setFrom(value);
        setFilteredFromStations(filterStations(value));
        setShowFromDropdown(true);
    };

    const handleToChange = (e) => {
        const value = e.target.value;
        setTo(value);
        setFilteredToStations(filterStations(value));
        setShowToDropdown(true);
    };

    const selectFromStation = (station) => {
        setFrom(`${station.name} (${station.code})`);
        setShowFromDropdown(false);
        setLocationError('');
    };

    const selectToStation = (station) => {
        setTo(`${station.name} (${station.code})`);
        setShowToDropdown(false);
        setLocationError('');
    };

    const swapStations = () => {
        const temp = from;
        setFrom(to);
        setTo(temp);
        setLocationError('');
    };

    const handleSearch = () => {
        if (!from || !to || !date) {
            alert("Please fill all fields");
            return;
        }

        if (from === to) {
            setLocationError('Departure and arrival locations cannot be the same');
            return;
        }

        const fromStation = from.split(" (")[0];
        const toStation = to.split(" (")[0];

        const results = internationalTrains.filter(
            train => train.from === fromStation && train.to === toStation
        );

        navigate("/train-result", {
            state: { from, to, date, passengers, results }
        });
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (fromRef.current && !fromRef.current.contains(event.target)) setShowFromDropdown(false);
            if (toRef.current && !toRef.current.contains(event.target)) setShowToDropdown(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4 ">
            <div className="w-full max-w-5xl">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">International Train Search</h1>
                    <p className="text-gray-600">Book international train tickets across Asia and beyond</p>
                </div>

                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {/* From Station */}
                        <div className="relative" ref={fromRef}>
                            <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                                <input
                                    type="text"
                                    value={from}
                                    onChange={handleFromChange}
                                    onFocus={() => { setShowFromDropdown(true); setFilteredFromStations(filterStations(from)); }}
                                    placeholder="Enter departure city"
                                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                                />
                                {from && (
                                    <button onClick={() => setFrom('')} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                        <X className="w-4 h-4" />
                                    </button>
                                )}
                            </div>

                            {showFromDropdown && (
                                <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                    {filteredFromStations.length > 0 ? (
                                        filteredFromStations.map(station => {
                                            const isDisabled = to.split(" (")[0] === station.name;
                                            return (
                                                <div
                                                    key={station.id}
                                                    onClick={() => !isDisabled && selectFromStation(station)}
                                                    className={`px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0 relative ${isDisabled ? "text-gray-400 cursor-not-allowed" : "hover:bg-indigo-50 text-gray-800"
                                                        }`}
                                                >
                                                    <div>{station.name}</div>
                                                    <div className="text-sm text-gray-500">{station.code} - {station.country}</div>

                                                    {isDisabled && (
                                                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-red-500">
                                                            Already selected
                                                        </span>
                                                    )}
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <div className="px-4 py-3 text-gray-500 text-sm">No stations found</div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* To Station */}
                        <div className="relative" ref={toRef}>
                            <label className="block text-sm font-medium text-gray-700 mb-2 flex justify-between items-center">
                                <span>To</span>
                                <button onClick={swapStations} className="text-xs text-indigo-600 hover:text-indigo-800">⇄ Swap</button>
                            </label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                                <input
                                    type="text"
                                    value={to}
                                    onChange={handleToChange}
                                    onFocus={() => { setShowToDropdown(true); setFilteredToStations(filterStations(to)); }}
                                    placeholder="Enter arrival city"
                                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                                />
                                {to && (
                                    <button onClick={() => setTo('')} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                        <X className="w-4 h-4" />
                                    </button>
                                )}
                            </div>

                            {showToDropdown && (
                                <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                    {filteredToStations.length > 0 ? (
                                        filteredToStations.map(station => {
                                            const isDisabled = from.split(" (")[0] === station.name;
                                            return (
                                                <div
                                                    key={station.id}
                                                    onClick={() => !isDisabled && selectToStation(station)}
                                                    className={`px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0 relative ${isDisabled ? "text-gray-400 cursor-not-allowed" : "hover:bg-indigo-50 text-gray-800"
                                                        }`}
                                                >
                                                    <div>{station.name}</div>
                                                    <div className="text-sm text-gray-500">{station.code} - {station.country}</div>

                                                    {isDisabled && (
                                                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-red-500">
                                                            Already selected
                                                        </span>
                                                    )}
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <div className="px-4 py-3 text-gray-500 text-sm">No stations found</div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Date */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                                />
                            </div>
                        </div>

                        {/* Passengers */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
                            <div className="relative">
                                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <select
                                    value={passengers}
                                    onChange={(e) => setPassengers(Number(e.target.value))}
                                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition bg-white"
                                >
                                    {[1, 2, 3, 4, 5, 6].map((num) => (
                                        <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {locationError && <p className="text-red-500 mt-2">{locationError}</p>}

                    {/* Search Button */}
                    <div className="mt-8">
                        <button
                            onClick={handleSearch}
                            disabled={!from || !to || !date || from === to}
                            className={`w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold py-4 rounded-lg shadow-lg flex items-center justify-center gap-2 transition ${!from || !to || !date || from === to ? "opacity-50 cursor-not-allowed" : "hover:from-indigo-700 hover:to-purple-700 hover:scale-105"
                                }`}
                        >
                            <Search className="w-5 h-5" />
                            Search International Trains
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

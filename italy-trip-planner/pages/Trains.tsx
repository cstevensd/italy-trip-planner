
import React, { useState } from 'react';
import { Icon } from '../components/Icon';
import { fetchTrainTimes } from '../services/trainService';
import { TrainTime } from '../types';

const locations = ['Rome', 'Florence', 'Pisa'];

const TrainCard: React.FC<{ train: TrainTime }> = ({ train }) => {
    const getTrainTypeColor = (type: TrainTime['trainType']) => {
        switch(type) {
            case 'Frecciarossa': return 'bg-red-600';
            case 'Italo': return 'bg-red-800';
            case 'Intercity': return 'bg-blue-600';
            case 'Regionale': return 'bg-green-600';
            default: return 'bg-gray-500';
        }
    }
    return (
        <div className="bg-brand-surface rounded-xl p-4 sm:p-6 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in">
            <div className="flex-grow w-full">
                <div className="flex justify-between items-center mb-4">
                    <div className={`text-xs font-bold text-white px-2 py-0.5 rounded-full ${getTrainTypeColor(train.trainType)}`}>
                        {train.trainType}
                    </div>
                    <div className="text-sm text-brand-text-muted font-mono">{train.trainNumber}</div>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className="text-center">
                        <p className="text-xl sm:text-2xl font-bold text-brand-primary">{train.departureTime}</p>
                    </div>
                    <div className="flex-grow text-center">
                        <div className="text-sm text-brand-text-muted">{train.duration}</div>
                        <div className="relative w-full h-0.5 bg-brand-border my-1">
                            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-2 h-2 rounded-full bg-brand-text-muted"></div>
                            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 rounded-full bg-brand-accent"></div>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-xl sm:text-2xl font-bold text-brand-primary">{train.arrivalTime}</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-auto sm:border-l sm:pl-6 border-t sm:border-t-0 pt-4 sm:pt-0 border-brand-border flex flex-row sm:flex-col justify-between sm:justify-center items-center gap-2">
                 <p className="text-2xl font-bold text-brand-accent">€{train.price.toFixed(2)}</p>
                 <button className="bg-brand-accent text-white font-semibold px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors text-sm">Select</button>
            </div>
        </div>
    );
}

const Trains: React.FC = () => {
    const [departure, setDeparture] = useState('');
    const [destination, setDestination] = useState('');
    const [trains, setTrains] = useState<TrainTime[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searched, setSearched] = useState(false);

    const handleSearch = async () => {
        if (!departure || !destination || departure === destination) {
            setError("Please select a valid departure and destination.");
            return;
        }
        setIsLoading(true);
        setError(null);
        setSearched(true);
        setTrains([]);

        try {
            const results = await fetchTrainTimes(departure, destination);
            setTrains(results);
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    const isSearchDisabled = !departure || !destination || departure === destination || isLoading;

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
                <Icon name="train" className="w-10 h-10 text-brand-accent" />
                <h1 className="text-4xl font-extrabold text-brand-primary ml-3">Train Schedules</h1>
            </div>

            <div className="bg-brand-surface p-6 rounded-xl shadow-subtle mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <div className="w-full">
                        <label htmlFor="departure" className="block text-sm font-medium text-brand-text-muted mb-1">From</label>
                        <select
                            id="departure"
                            value={departure}
                            onChange={(e) => setDeparture(e.target.value)}
                            className="w-full p-3 bg-brand-background border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition"
                        >
                            <option value="">Select Departure</option>
                            {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                        </select>
                    </div>
                    <div className="w-full">
                        <label htmlFor="destination" className="block text-sm font-medium text-brand-text-muted mb-1">To</label>
                        <select
                            id="destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="w-full p-3 bg-brand-background border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition"
                        >
                            <option value="">Select Destination</option>
                            {locations.filter(l => l !== departure).map(loc => <option key={loc} value={loc}>{loc}</option>)}
                        </select>
                    </div>
                    <button
                        onClick={handleSearch}
                        disabled={isSearchDisabled}
                        className="w-full p-3 bg-brand-accent text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors disabled:bg-brand-accent/50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Searching...' : 'Find Trains'}
                    </button>
                </div>
                 {departure && departure === destination && (
                    <p className="text-red-500 text-sm mt-2">Departure and destination cannot be the same.</p>
                 )}
            </div>

            <div className="space-y-4">
                {isLoading && (
                    <div className="flex justify-center items-center py-10">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent"></div>
                    </div>
                )}
                {error && (
                    <div className="text-center text-red-500 bg-red-50/50 p-4 rounded-lg">
                        <h3 className="font-bold">Search Error</h3>
                        <p>{error}</p>
                    </div>
                )}
                {!isLoading && !error && searched && trains.length > 0 && (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-brand-primary">Available Trains: {departure} &rarr; {destination}</h2>
                        {trains.map((train, index) => (
                            <TrainCard key={index} train={train} />
                        ))}
                    </div>
                )}
                {!isLoading && !error && searched && trains.length === 0 && (
                     <div className="text-center py-10 px-4 bg-brand-surface rounded-xl shadow-subtle">
                        <p className="text-brand-text-muted font-semibold text-lg">No direct trains found for this route.</p>
                        <p className="text-brand-text-muted text-sm">Please check station names or try a different route.</p>
                    </div>
                )}
                {!isLoading && !error && !searched && (
                    <div className="text-center py-10 px-4 bg-brand-surface rounded-xl shadow-subtle">
                        <Icon name="train" className="w-12 h-12 text-brand-border mx-auto mb-4" />
                        <p className="text-brand-text-muted font-semibold text-lg">Find your train connection in Italy.</p>
                        <p className="text-brand-text-muted text-sm">Select your route above to begin.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Trains;

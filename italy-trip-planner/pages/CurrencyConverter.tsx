

import React, { useState, useEffect } from 'react';
import { Icon } from '../components/Icon';
import { Currency } from '../types';

// Hardcoded rates relative to USD for approximation
const baseRates = {
  USD: 1,
  CAD: 1.37,
  EUR: 0.92,
};

const currencyDetails: { [key in Currency]: { name: string, symbol: string } } = {
    USD: { name: 'US Dollar', symbol: '$' },
    CAD: { name: 'Canadian Dollar', symbol: '$' },
    EUR: { name: 'Euro', symbol: '€' },
};

const currencyOptions: Currency[] = ['CAD', 'USD', 'EUR'];

const TippingItem: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex items-start gap-4 p-4 bg-brand-background/50 rounded-lg">
        <div className="flex-shrink-0 w-10 h-10 bg-brand-accent-light rounded-full flex items-center justify-center">
            <Icon name={icon} className="w-6 h-6 text-brand-accent" />
        </div>
        <div>
            <h4 className="font-bold text-lg text-brand-primary">{title}</h4>
            <p className="text-brand-text-muted">{description}</p>
        </div>
    </div>
);

const CurrencyConverter: React.FC = () => {
    const [amount, setAmount] = useState('100');
    const [fromCurrency, setFromCurrency] = useState<Currency>('CAD');
    const [toCurrency, setToCurrency] = useState<Currency>('EUR');
    const [convertedAmount, setConvertedAmount] = useState<string | null>(null);

    const convert = (value: number, from: Currency, to: Currency): string => {
        if (from === to) return value.toFixed(2);
        const valueInUsd = value / baseRates[from];
        const result = valueInUsd * baseRates[to];
        return result.toFixed(2);
    };

    useEffect(() => {
        const numericAmount = parseFloat(amount);
        if (!isNaN(numericAmount) && numericAmount > 0) {
            const result = convert(numericAmount, fromCurrency, toCurrency);
            setConvertedAmount(result);
        } else {
            setConvertedAmount(null);
        }
    }, [amount, fromCurrency, toCurrency]);

    const handleSwapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Allow only numbers and a single decimal point
        if (/^\d*\.?\d{0,2}$/.test(value)) {
            setAmount(value);
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="animate-fade-in">
                <div className="flex items-center mb-8">
                    <Icon name="currency" className="w-10 h-10 text-brand-accent" />
                    <h1 className="text-4xl font-extrabold text-brand-primary ml-3">Currency Converter</h1>
                </div>

                <div className="bg-brand-surface p-6 sm:p-8 rounded-xl shadow-lifted space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
                            <label htmlFor="from" className="block text-sm font-medium text-brand-text-muted mb-1">From</label>
                            <select
                                id="from"
                                value={fromCurrency}
                                onChange={(e) => setFromCurrency(e.target.value as Currency)}
                                className="w-full p-3 bg-brand-background border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition"
                            >
                                {currencyOptions.map(c => <option key={c} value={c}>{currencyDetails[c].name} ({c})</option>)}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="to" className="block text-sm font-medium text-brand-text-muted mb-1">To</label>
                            <select
                                id="to"
                                value={toCurrency}
                                onChange={(e) => setToCurrency(e.target.value as Currency)}
                                className="w-full p-3 bg-brand-background border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition"
                            >
                                {currencyOptions.map(c => <option key={c} value={c}>{currencyDetails[c].name} ({c})</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center">
                         <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-brand-border"></div>
                        </div>
                        <button
                            onClick={handleSwapCurrencies}
                            className="relative z-10 bg-brand-surface p-2 rounded-full border-2 border-brand-border text-brand-text-muted hover:text-brand-accent hover:border-brand-accent hover:rotate-180 transition-all duration-300"
                            aria-label="Swap currencies"
                        >
                            <Icon name="swap" className="w-6 h-6"/>
                        </button>
                    </div>
                    
                    <div>
                        <label htmlFor="amount" className="block text-sm font-medium text-brand-text-muted mb-1">Amount to Convert</label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="text-brand-text-muted text-xl">{currencyDetails[fromCurrency].symbol}</span>
                            </div>
                            <input
                                type="text"
                                id="amount"
                                value={amount}
                                onChange={handleAmountChange}
                                className="w-full p-4 pl-10 text-3xl font-bold bg-brand-background border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition"
                                placeholder="0.00"
                            />
                        </div>
                    </div>

                    {convertedAmount && (
                        <div className="text-center pt-6 border-t border-brand-border">
                            <p className="text-lg text-brand-text-muted">{amount} {fromCurrency} equals</p>
                            <p className="text-5xl font-extrabold text-brand-accent mt-2">
                               {currencyDetails[toCurrency].symbol}{convertedAmount}
                               <span className="text-3xl font-bold text-brand-text-muted ml-2">{toCurrency}</span>
                            </p>
                        </div>
                    )}

                    <p className="text-xs text-brand-text-muted text-center pt-4">
                        *Rates are for planning purposes only and are based on approximate values (1 USD = 1.37 CAD, 1 USD = 0.92 EUR).
                    </p>
                </div>
            </div>

            <div className="mt-12 animate-fade-in" style={{animationDelay: '200ms'}}>
                <div className="flex items-center mb-6">
                    <Icon name="info" className="w-8 h-8 text-brand-secondary" />
                    <h2 className="text-3xl font-extrabold text-brand-primary ml-3">Tipping in Italy</h2>
                </div>

                <div className="bg-brand-surface p-6 sm:p-8 rounded-xl shadow-lifted space-y-6">
                    <p className="text-brand-text-muted text-center italic">
                        Tipping (La Mancia) is not generally expected in Italy as it is in North America. Service charges ('servizio') are often included in the bill. However, a small tip for exceptional service is always appreciated.
                    </p>
                    
                    <div className="space-y-4">
                        <TippingItem
                            icon="utensils"
                            title="Restaurants & Cafes"
                            description="Check your bill for 'servizio incluso'. If included, no tip is needed. For great service, rounding up or leaving €1-2 per person is a kind gesture. 10% is very generous."
                        />
                        <TippingItem
                            icon="taxi"
                            title="Taxis"
                            description="Tipping is not customary. Simply rounding up the fare to the nearest euro is common and sufficient."
                        />
                        <TippingItem
                            icon="bed"
                            title="Hotels"
                            description="For porters, €1-2 per bag is appreciated. For housekeeping, you can leave €1-2 per day in the room at the end of your stay."
                        />
                        <TippingItem
                            icon="flag"
                            title="Tour Guides"
                            description="For private or small group tours, if you were happy with the service, a tip of €5-10 per person is a nice way to show appreciation."
                        />
                    </div>
                </div>
            </div>

            <div className="mt-12 animate-fade-in" style={{animationDelay: '300ms'}}>
                <div className="flex items-center mb-6">
                    <Icon name="credit-card" className="w-8 h-8 text-brand-secondary" />
                    <h2 className="text-3xl font-extrabold text-brand-primary ml-3">ATM & Debit Card Tips</h2>
                </div>

                <div className="bg-brand-surface p-6 sm:p-8 rounded-xl shadow-lifted space-y-4">
                    <h3 className="font-bold text-lg text-brand-primary">Using a Bank of America Debit Card</h3>
                    <p className="text-brand-text-muted">
                        To minimize fees, find a <strong className="text-brand-text-main">BNL (Banca Nazionale del Lavoro)</strong> ATM. They are part of the Global ATM Alliance.
                    </p>
                    <ul className="space-y-4 pt-2">
                        <li className="flex items-start gap-4">
                            <Icon name="check" className="w-5 h-5 text-brand-success mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-brand-text-main">Avoid ATM Fees</h4>
                                <p className="text-brand-text-muted text-sm">Using a BNL ATM avoids the $5 non-BofA usage fee and any operator access fees.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Icon name="alert-triangle" className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-brand-text-main">Transaction Fee Still Applies</h4>
                                <p className="text-brand-text-muted text-sm">You will still be charged a 3% international transaction fee on the withdrawal amount.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Icon name="currency" className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-brand-text-main">Choose Euros at the ATM</h4>
                                <p className="text-brand-text-muted text-sm">When prompted, always choose to be charged in Euros (EUR), not your home currency. This gives you a much better exchange rate from the bank network (Visa/Mastercard) rather than the ATM's less favorable rate.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CurrencyConverter;
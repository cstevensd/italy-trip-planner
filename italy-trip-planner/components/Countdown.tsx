
import React, { useState, useEffect } from 'react';
import { ScheduleItem, TodoItemType } from '../types';
import { Icon } from './Icon';

interface TimeLeft {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}

const parseScheduleDate = (dateStr: string): Date | null => {
    const year = 2025;
    const cleanDateStr = dateStr.split('-')[0].trim();
    const eventDate = new Date(`${cleanDateStr}, ${year}`);
    if (isNaN(eventDate.getTime())) {
        return null;
    }
    eventDate.setHours(0, 0, 0, 0);
    return eventDate;
};

const getAssigneeColor = (name: string) => {
    const travelerColors: { [key: string]: string } = {
        'Audrey': 'bg-pink-200 text-pink-800',
        'Grace': 'bg-purple-200 text-purple-800',
        'Tessy': 'bg-cyan-200 text-cyan-800',
    };
    return travelerColors[name] || 'bg-gray-200 text-gray-800';
};

const Countdown: React.FC<{ schedule: ScheduleItem[], todoList: TodoItemType[] }> = ({ schedule, todoList }) => {
    const [nextEvent, setNextEvent] = useState<{ event: ScheduleItem, date: Date } | null>(null);
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({});

    useEffect(() => {
        const now = new Date();
        let firstFutureEvent = null;

        for (const item of schedule) {
            const eventDate = parseScheduleDate(item.date);
            if (eventDate && eventDate > now) {
                firstFutureEvent = { event: item, date: eventDate };
                break;
            }
        }
        setNextEvent(firstFutureEvent);
    }, [schedule]);

    useEffect(() => {
        if (!nextEvent) {
            setTimeLeft({});
            return;
        }

        const calculate = () => {
            const difference = +nextEvent.date - +new Date();
            let newTimeLeft: TimeLeft = {};

            if (difference > 0) {
                newTimeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            return newTimeLeft;
        };

        setTimeLeft(calculate());
        const timer = setInterval(() => {
            setTimeLeft(calculate());
        }, 1000);

        return () => clearInterval(timer);
    }, [nextEvent]);

    if (!nextEvent && todoList.length === 0) {
        return (
            <div className="bg-brand-success-bg border-l-4 border-brand-success p-4 rounded-lg my-8 flex items-center justify-center gap-4 animate-fade-in">
                <Icon name="check" className="w-8 h-8 text-brand-success mr-4 flex-shrink-0" />
                <div>
                    <h3 className="font-bold text-lg text-brand-primary">Trip in Progress!</h3>
                    <p className="text-sm text-brand-text-muted">Enjoy your adventure in Italy!</p>
                </div>
            </div>
        );
    }

    const hasTimeLeft = Object.keys(timeLeft).length > 0;
    const timeParts = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Mins', value: timeLeft.minutes },
        { label: 'Secs', value: timeLeft.seconds },
    ];

    return (
        <div className="bg-brand-accent-light border-l-4 border-brand-accent p-6 rounded-lg my-8 space-y-6 animate-fade-in">
            {nextEvent && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center text-left w-full sm:w-auto">
                        <Icon name="calendar" className="w-8 h-8 text-brand-accent mr-4 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-lg text-brand-primary">Next Up: {nextEvent.event.activity}</h3>
                            <p className="text-sm text-brand-text-muted">Countdown to the next event on {nextEvent.event.date}.</p>
                        </div>
                    </div>
                    <div className="flex space-x-3 text-brand-secondary font-mono">
                        {hasTimeLeft ? (
                            timeParts.map(part => (
                                <div key={part.label} className="text-center">
                                    <span className="text-2xl md:text-3xl font-bold">{String(part.value || 0).padStart(2, '0')}</span>
                                    <span className="text-xs block">{part.label}</span>
                                </div>
                            ))
                        ) : (
                            <span className="font-semibold text-lg text-brand-primary">It's happening!</span>
                        )}
                    </div>
                </div>
            )}
            
            {todoList.length > 0 && (
                <div className={nextEvent ? "border-t border-brand-accent/30 pt-6" : ""}>
                    <h3 className="font-bold text-lg text-brand-primary mb-3">Pending Tasks</h3>
                    <ul className="space-y-4">
                        {todoList.map(item => (
                             <li key={item.id} className="flex items-start justify-between gap-4 p-3 bg-white/50 rounded-lg">
                                <div className="flex-grow">
                                    <p className="font-medium text-brand-text-main">{item.task}</p>
                                    {item.link && (
                                        <a 
                                            href={item.link.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="inline-flex items-center text-sm mt-1 text-brand-accent font-semibold hover:underline"
                                        >
                                            <Icon name="link" className="w-4 h-4 mr-1.5" />
                                            {item.link.text}
                                        </a>
                                    )}
                                </div>
                                <div className="flex -space-x-3 ml-4 flex-shrink-0">
                                    {item.assignees.map(name => (
                                        <div 
                                            key={name} 
                                            title={name} 
                                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white ${getAssigneeColor(name)}`}
                                        >
                                            {name.charAt(0)}
                                        </div>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Countdown;
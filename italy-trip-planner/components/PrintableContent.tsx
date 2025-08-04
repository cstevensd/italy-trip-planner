
import React from 'react';
import { schedule, flights, accommodations, trainBookings, todoList } from '../data/tripData';
import { dayTripData } from '../data/dayTripData';
import { curatedGuides } from '../data/guidesData';
import { italianPhrases } from '../data/phrasesData';
import { CuratedGuideContent, Flight, Accommodation, TrainBooking, TodoItemType, PhraseCategory, GuideListItem, GuideSection } from '../types';

// --- STYLES ---
const styles: { [key: string]: React.CSSProperties } = {
    page: {
        width: '210mm',
        minHeight: '297mm',
        padding: '15mm',
        backgroundColor: '#FFFFFF',
        color: '#333333',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: '10pt',
        boxSizing: 'border-box',
    },
    pageBreak: {
        pageBreakAfter: 'always',
    },
    h1: { fontSize: '28pt', fontWeight: '800', color: '#003366', marginBottom: '16px', borderBottom: '2px solid #E2725B', paddingBottom: '8px' },
    h2: { fontSize: '20pt', fontWeight: '700', color: '#556B2F', marginBottom: '12px', marginTop: '24px' },
    h3: { fontSize: '14pt', fontWeight: '700', color: '#333333', marginBottom: '8px' },
    p: { margin: '0 0 8px 0', lineHeight: '1.5' },
    card: { border: '1px solid #E0E0E0', borderRadius: '8px', padding: '16px', marginBottom: '16px', breakInside: 'avoid' },
    flex: { display: 'flex', gap: '16px' },
    flexBetween: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' },
};

const PageBreak = () => <div style={styles.pageBreak}></div>;
const Section = ({ children }: {children: React.ReactNode}) => <div style={{breakInside: 'avoid-page'}}>{children}</div>;


// --- COMPONENTS ---

const PrintableSchedule = () => (
    <Section>
        <h1 style={styles.h1}>Trip Schedule</h1>
        {schedule.map((item, index) => (
            <div key={index} style={{...styles.card, borderLeft: '4px solid #E2725B'}}>
                <p style={{...styles.p, fontWeight: 'bold', color: '#003366'}}>{item.date} - {item.activity}</p>
                <p style={styles.p}>{item.notes}</p>
                {item.address && <p style={{...styles.p, fontSize: '9pt', color: '#757575'}}>Address: {item.address}</p>}
            </div>
        ))}
    </Section>
);

const PrintableFlight = ({ flight }: { flight: Flight }) => (
    <div style={styles.card}>
        <h3 style={styles.h3}>Flight for: {flight.travelers}</h3>
        <div style={styles.grid2}>
            <div>
                <h4 style={{...styles.h3, fontSize: '12pt', color: '#556B2F'}}>Outbound</h4>
                <p style={styles.p}>{flight.outbound.airline} {flight.outbound.flightNumber}</p>
                <p style={styles.p}>Departs: {flight.outbound.departure}</p>
                <p style={styles.p}>Arrives: {flight.outbound.arrival}</p>
                <p style={styles.p}>Seats: {flight.outbound.seats}</p>
            </div>
            <div>
                <h4 style={{...styles.h3, fontSize: '12pt', color: '#556B2F'}}>Return</h4>
                <p style={styles.p}>{flight.return.airline} {flight.return.flightNumber}</p>
                <p style={styles.p}>Departs: {flight.return.departure}</p>
                <p style={styles.p}>Arrives: {flight.return.arrival}</p>
                <p style={styles.p}>Seats: {flight.return.seats}</p>
            </div>
        </div>
        <div style={{marginTop: '12px', borderTop: '1px solid #E0E0E0', paddingTop: '12px'}}>
            <h4 style={{...styles.h3, fontSize: '11pt'}}>Confirmation Codes</h4>
            {flight.confirmationCodes.map(c => <p key={c.code} style={styles.p}>{c.provider}: {c.code}</p>)}
        </div>
    </div>
);

const PrintableAccommodation = ({ accom }: { accom: Accommodation }) => (
    <div style={styles.card}>
        <h3 style={{...styles.h3, color: '#003366'}}>{accom.city}: {accom.name}</h3>
        <p style={styles.p}>Dates: {accom.dates}</p>
        <p style={styles.p}>Provider: {accom.provider}</p>
        <p style={styles.p}>Address: {accom.address}</p>
    </div>
);

const PrintableTrain = ({ booking }: { booking: TrainBooking }) => (
    <div style={styles.card}>
        <h3 style={{...styles.h3, color: '#003366'}}>{booking.departure.split(',')[0]} to {booking.arrival.split(',')[0]}</h3>
        <p style={styles.p}>Passenger: {booking.passenger}</p>
        <p style={styles.p}>Departure: {booking.departure}</p>
        <p style={styles.p}>Arrival: {booking.arrival}</p>
        <p style={styles.p}>Details: Class {booking.class}, Coach {booking.coach}, Seats {booking.seats}</p>
        <p style={styles.p}>Confirmation: {booking.confirmationNumber}</p>
    </div>
);

const PrintableBookings = () => (
    <Section>
        <h1 style={styles.h1}>Bookings</h1>
        <h2 style={styles.h2}>Flights</h2>
        {flights.map((flight, i) => <PrintableFlight key={i} flight={flight} />)}
        
        <h2 style={styles.h2}>Accommodations</h2>
        <div style={styles.grid2}>
            {accommodations.map((accom, i) => <PrintableAccommodation key={i} accom={accom} />)}
        </div>

        <h2 style={styles.h2}>Train Tickets</h2>
        {trainBookings.map((train, i) => <PrintableTrain key={i} booking={train} />)}
    </Section>
);

const PrintableDayTrip = () => (
    <Section>
        <h1 style={styles.h1}>{dayTripData.title}</h1>
        <div style={styles.card}>
            <h3 style={styles.h3}>Trip Details</h3>
            <p style={styles.p}>Date: {dayTripData.date}</p>
            <p style={styles.p}>Booking Ref: {dayTripData.bookingRef} (PIN: {dayTripData.pin})</p>
            <p style={styles.p}>Participants: {dayTripData.participants}</p>
        </div>
        <div style={styles.card}>
            <h3 style={styles.h3}>Meeting Point</h3>
            <p style={styles.p}>Time: {dayTripData.meetingPoint.time}</p>
            <p style={styles.p}>Location: {dayTripData.meetingPoint.instructions}</p>
        </div>
        <div>
            <h3 style={{...styles.h3, marginTop: '16px'}}>Itinerary</h3>
            {dayTripData.itinerary.map((item, i) => (
                <div key={i} style={{padding: '8px 0', borderBottom: '1px solid #E0E0E0'}}>
                    <p style={styles.p}><strong>{item.activity}</strong> ({item.duration}) - {item.details}</p>
                </div>
            ))}
        </div>
    </Section>
);

const PrintableTodoList = () => {
    const incomplete = todoList.filter(t => !t.completed);
    const completed = todoList.filter(t => t.completed);
    return (
        <Section>
            <h1 style={styles.h1}>To-Do List</h1>
            <h2 style={styles.h2}>Pending Tasks</h2>
            {incomplete.length > 0 ? incomplete.map(item => (
                <p key={item.id} style={styles.p}>[  ] {item.task} ({item.assignees.join(', ')})</p>
            )) : <p>All tasks complete!</p>}
            
            <h2 style={styles.h2}>Completed Tasks</h2>
            {completed.map(item => (
                <p key={item.id} style={{...styles.p, color: '#757575', textDecoration: 'line-through'}}>[X] {item.task}</p>
            ))}
        </Section>
    );
};

const PrintableGuide = ({ guide }: { guide: CuratedGuideContent}) => (
    <Section>
        <h1 style={styles.h1}>{guide.name}</h1>
        {guide.overviewText && <p style={{...styles.p, fontStyle: 'italic', marginBottom: '16px'}}>{guide.overviewText}</p>}
        {guide.sections.map((section, i) => (
            <div key={i} style={{marginBottom: '16px', breakInside: 'avoid'}}>
                <h2 style={{...styles.h2, fontSize: '16pt'}}>{section.title}</h2>
                {typeof section.content === 'string' ? <p style={styles.p}>{section.content}</p> :
                 (section.content as GuideListItem[]).map((item, j) => (
                    <div key={j} style={{paddingLeft: '16px', borderLeft: '2px solid #E0E0E0', marginBottom: '8px'}}>
                        <p style={{...styles.p, fontWeight: 'bold'}}>{item.name}</p>
                        {item.description && <p style={{...styles.p, fontSize: '9pt'}}>{item.description}</p>}
                        {item.address && <p style={{...styles.p, fontSize: '9pt', color: '#757575'}}>Address: {item.address}</p>}
                    </div>
                 ))
                }
            </div>
        ))}
    </Section>
);

const PrintablePhrases = () => (
    <Section>
        <h1 style={styles.h1}>Useful Italian Phrases</h1>
        {italianPhrases.map(cat => (
            <div key={cat.category} style={{marginBottom: '16px', breakInside: 'avoid'}}>
                <h2 style={{...styles.h2, fontSize: '16pt'}}>{cat.category}</h2>
                {cat.phrases.map(phrase => (
                    <div key={phrase.italian} style={styles.grid2}>
                        <p style={styles.p}>{phrase.italian}</p>
                        <p style={{...styles.p, color: '#757575'}}>{phrase.english}</p>
                    </div>
                ))}
            </div>
        ))}
    </Section>
);

// --- MAIN COMPONENT ---
const PrintableContent: React.FC = () => {
    const guidesToPrint = ['Rome', 'Florence', 'Tuscany'];
    return (
        <div id="printable-content">
            <div style={styles.page}>
                <div style={{textAlign: 'center', paddingTop: '80mm'}}>
                    <h1 style={{...styles.h1, fontSize: '40pt', border: 'none'}}>Italy Trip 2025</h1>
                    <p style={{...styles.p, fontSize: '18pt', color: '#556B2F'}}>Full Itinerary & Reference Guide</p>
                </div>
            </div>
            <PageBreak />
            <div style={styles.page}><PrintableSchedule /></div>
            <PageBreak />
            <div style={styles.page}><PrintableBookings /></div>
            <PageBreak />
            <div style={styles.page}><PrintableDayTrip /></div>
            <PageBreak />
            <div style={styles.page}><PrintableTodoList /></div>
            
            {guidesToPrint.map(city => {
                const guide = curatedGuides[city];
                if (!guide) return null;
                return (
                    <React.Fragment key={city}>
                        <PageBreak />
                        <div style={styles.page}><PrintableGuide guide={guide} /></div>
                    </React.Fragment>
                );
            })}
            
            <PageBreak />
            <div style={styles.page}><PrintablePhrases /></div>
        </div>
    );
};

export default PrintableContent;

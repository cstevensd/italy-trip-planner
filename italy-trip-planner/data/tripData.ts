import { ScheduleItem, Flight, Accommodation, TodoItemType } from '../types';

export const travelers = ['Audrey', 'Grace', 'Tessy'];

export const tripStartDate = '2025-08-07T00:00:00';
export const firstFlightDeparture = '2025-08-07T15:15:00'; // Tessy's departure from LAX

export const schedule: ScheduleItem[] = [
  { date: 'Aug 7', activity: 'Flights to Rome', notes: 'Audrey & Grace depart YYZ at 9:40 PM. Tessy departs LAX at 3:15 PM.' },
  { 
    date: 'Aug 8', 
    activity: 'Arrive in Rome, Check into Airbnb', 
    notes: 'Audrey & Grace land at 12:15 PM. Tessy lands at 11:55 AM. Check into Trastevere House.',
    address: 'Via di S. Francesco a Ripa, 136, 00153 Roma RM, Italy',
    link: {
      url: 'https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HM8ND8EYER',
      text: 'View Rome Airbnb Booking'
    }
  },
  { date: 'Aug 9', activity: 'Rome Exploration', notes: 'Places to visit: Galleria Borghese, Colosseum, Vatican.' },
  { 
    date: 'Aug 10', 
    activity: 'Private Mosaic Lesson & Rome Exploration', 
    notes: '2-hour private lesson from 3:30 PM - 5:30 PM. Confirmation: GYG83X24KY5Q.',
    address: 'Via Paolo VI, 27/29, 00193 Roma RM, Italy'
  },
  { 
    date: 'Aug 11', 
    activity: 'Train to Florence', 
    notes: 'Morning train to Florence (approx. 2 hours). Check into Florence Airbnb.',
    address: 'Via del Parione, 13, 50123 Firenze FI, Italy',
    link: {
      url: 'https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMA4TWW3XW',
      text: 'View Florence Airbnb Booking'
    }
  },
  { date: 'Aug 12-13', activity: 'Florence Exploration', notes: 'Explore Florence. Museums, architecture, food.' },
  { 
    date: 'Aug 14', 
    activity: 'Travel to Tuscany', 
    notes: 'Pick up rental car. Drive to Pancole Farm near San Gimignano.',
    address: 'Località Pancole 23, 53037 San Gimignano SI, Italy',
    link: {
      url: 'https://www.agriturismo.it/rental/5097d8e72ba59b5d',
      text: 'View Tuscany Farm Booking'
    }
  },
  { date: 'Aug 15-16', activity: 'Tuscan Countryside', notes: 'Relax, explore San Gimignano. Day trip to Pisa & Cinque Terre.' },
  { 
    date: 'Aug 17', 
    activity: 'Return to Rome', 
    notes: 'Drive back to Rome, drop off car. Check into Hotel Sonya.',
    address: 'Via Del Viminale 58, 00184 Rome, Italy',
    link: {
      url: 'https://www.google.com/search?q=https://www.booking.com/hotel/it/sonya.html%3Faid%3D304142%26label%3Dgen173nr-1FCA4oggI46AdIMVgEaIkCiAEBmAExuAEHyAEM2AEB6AEB-AEDiAIBqAIDuALmxN_BBsACAdICJDA0ODBiNmI0LWJkOTctNDY5My1iNTlkLTM1ZTNhYjRlODcwY9gCBeACAQ%26sid%3Dac7bb0cb214bd51dd4ed2277ba2dafc7%26dist%3D0%26sb_price_type%3Dtotal%26type%3Dtotal%26',
      text: 'View Hotel Sonya Booking'
    }
  },
  { date: 'Aug 18', activity: 'Flights Home', notes: 'Audrey & Grace depart at 2:15 PM. Tessy departs at 9:30 AM.' },
];

export const flights: Flight[] = [
  {
    travelers: 'Audrey & Grace',
    outbound: {
      airline: 'Air Transat',
      flightNumber: 'TS308',
      departure: 'Aug 07, 2025, 9:40 p.m. YYZ',
      arrival: 'Aug 08, 2025, 12:15 p.m. FCO',
      seats: '20K, 20J',
    },
    return: {
      airline: 'Air Transat',
      flightNumber: 'TS309',
      departure: 'Aug 18, 2025, 2:15 p.m. FCO',
      arrival: 'Aug 18, 2025, 6:00 p.m. YYZ',
      seats: '20K, 20J',
    },
    confirmationCodes: [
      { provider: 'Air Transat', code: 'C5LBBL' },
      { provider: 'Capital One Travel', code: 'H-JCAHZG' },
    ],
  },
  {
    travelers: 'Tessy',
    outbound: {
      airline: 'ITA Airways',
      flightNumber: 'AZ621',
      departure: 'Aug 07, 2025, 3:15 p.m. LAX',
      arrival: 'Aug 08, 2025, 11:55 a.m. FCO',
      duration: '11h 40m (nonstop)',
      seats: '50L',
    },
    return: {
      airline: 'ITA Airways',
      flightNumber: 'AZ620',
      departure: 'Aug 18, 2025, 9:30 a.m. FCO',
      arrival: 'Aug 18, 2025, 1:15 p.m. LAX',
      duration: '12h 45m (nonstop)',
      seats: '50A',
    },
    confirmationCodes: [
      { provider: 'ITA Airways', code: 'B7YMGN' },
      { provider: 'Capital One Travel', code: 'H-DOAYRQ' },
    ],
  },
];

export const accommodations: Accommodation[] = [
  { city: 'Rome', name: 'Trastevere House', provider: 'Airbnb', address: 'Via di S. Francesco a Ripa, 136, 00153 Roma RM, Italy', dates: 'Aug 8 - 11', imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-1268663338308297389/original/fdbad139-70b5-4713-8d4b-7be45d846b10.jpeg?im_w=1200', bookingLink: 'https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HM8ND8EYER' },
  { city: 'Florence', name: 'Spectacular view from 4th floor', provider: 'Airbnb', address: 'Via del Parione, 13, 50123 Firenze FI, Italy', dates: 'Aug 11 - 14', imageUrl: 'https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-38850230-unapproved/original/23f66835-b8e8-4ec5-9eed-08ad8b334047.JPEG?im_w=960', bookingLink: 'https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMA4TWW3XW' },
  { city: 'Tuscany', name: 'Pancole Farm', provider: 'Agriturismo.it', address: 'Località Pancole 23, 53037 San Gimignano SI, Italy', dates: 'Aug 14 - 17', imageUrl: 'https://fattoria-di-pancole-villa.tuscanyitalyhotels.com/data/Photos/OriginalPhoto/16594/1659473/1659473656/fattoria-di-pancole-villa-san-gimignano-photo-15.JPEG', bookingLink: 'https://www.agriturismo.it/rental/5097d8e72ba59b5d' },
  { city: 'Rome (End)', name: 'Hotel Sonya', provider: 'Booking.com', address: 'Via Del Viminale 58, 00184 Rome, Italy', dates: 'Aug 17 - 18', imageUrl: 'https://images.trvl-media.com/lodging/1000000/800000/793900/793890/87f9010d.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill', bookingLink: 'https://www.agriturismo.it/user/bookings/ck5LNWdWVG9zS0I4WUh5M3FEOEFEdz09?newsletter=agriturismo%2Fagriturismo_it_wl%2FBooking%2FBookingConfirmation%2F722b7610b1e4bb357c9d7dfcd0368b91%2Ff771ec2d-df12-475a-b15c-dc25d44ca1f9%2Fe41640ae-afbd-4fd0-b2c9-abd6149b3cf8&utm_source=agriturismo&utm_medium=Booking&utm_campaign=BookingConfirmation' },
];

export const todoList: TodoItemType[] = [
    // Completed Tasks
    { id: 1, task: 'Book flights', completed: true, assignees: ['Tessy'] },
    { id: 2, task: 'Get seats', completed: true, assignees: ['Tessy'] },
    { id: 3, task: 'Book Rome accommodation', completed: true, assignees: ['Tessy'] },
    { id: 4, task: 'Book Florence accommodation', completed: true, assignees: ['Tessy'] },
    { id: 5, task: 'Book Countryside accommodation', completed: true, assignees: ['Tessy'] },
    { id: 6, task: 'Book Mosaic class', completed: true, assignees: ['Tessy'] },
    { id: 7, task: 'Book car', completed: true, assignees: ['Tessy'] },
    { id: 8, task: 'Get international drivers license', completed: true, assignees: ['Tessy'] },

    // Incomplete Tasks
    { id: 10, task: 'Book train ticket to Florence', completed: false, assignees: ['Tessy'] },
    { id: 11, task: 'Book train ticket to Rome', completed: false, assignees: ['Tessy'] },
    { id: 13, task: 'Get passport ready', completed: false, assignees: ['Audrey', 'Grace', 'Tessy'] },
    { id: 14, task: 'Plan departure date travel to airport', completed: false, assignees: ['Audrey', 'Grace', 'Tessy'] },
    { id: 15, task: 'Pack for the trip', completed: false, assignees: ['Audrey', 'Grace', 'Tessy'] },
];
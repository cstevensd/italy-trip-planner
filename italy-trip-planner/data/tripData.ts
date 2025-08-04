
import { ScheduleItem, Flight, Accommodation, TodoItemType, Traveler, TrainBooking } from '../types';

export const travelers = ['Audrey', 'Grace', 'Tessy'];

export const travelerDetails: Traveler[] = [
  { name: 'Audrey', email: 'audrey@example.com' },
  { name: 'Grace', email: 'grace@example.com' },
  { name: 'Tessy', email: 'caitstevens92@gmail.com' },
];

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
  { 
    date: 'Aug 10', 
    activity: 'Colosseum, Roman Forum & Palatine Hill Tour', 
    notes: "Reserved for 4:00 PM (entry may be +/- 90 mins, check tickets for final time). Includes audioguide for 3 adults. Booking ID: 4348267058. Meet at 'Sperone Valadier' near Arch of Constantine 10 mins before entry. IMPORTANT: This is a booking confirmation, actual tickets will be emailed separately. Booking cannot be canceled or modified.",
    address: 'Sperone Valadier, near Arch of Constantine, Colosseum, Rome',
    link: {
      url: 'https://www.google.com/maps/search/?api=1&query=Sperone+Valadier+Colosseo+Roma',
      text: 'View Meeting Point'
    }
  },
  { 
    date: 'Aug 10', 
    activity: 'Decision Time: Pisa/Cinque Terre Tour', 
    notes: 'Final reminder to decide on the day trip. Free cancellation ends Aug 11 at 7:30 AM. Please make a final decision by 8 PM tonight.',
    link: {
      url: 'https://l4ab.adj.st/bookings/S0QATK0D09T0GCIN6WKTQ1LK9FT9REW0/details?adj_t=6oimkb3_lut0srj&adj_deep_link=gyg%3A%2F%2Fbookings%2FS0QATK0D09T0GCIN6WKTQ1LK9FT9REW0%2Fdetails%3Fvisitor_id%3D31F21BD46A634DC7915A2B7533D3E834%26utm_source%3Dgetyourguide%26utm_medium%3Demail_transactional%26utm_campaign%3Dshopping_cart_confirmation_v2%26utm_content%3Dbooking_summary_manage_booking_move_v3&adj_fallback=https%3A%2F%2Fwww.getyourguide.com%2Fbooking%2FS0QATK0D09T0GCIN6WKTQ1LK9FT9REW0%3Fpartner_id%3DHCIAOO8%26visitor_id%3D31F21BD46A634DC7915A2B7533D3E834%26utm_source%3Dgetyourguide%26utm_medium%3Demail_transactional%26utm_campaign%3Dshopping_cart_confirmation_v2%26utm_content%3Dbooking_summary_manage_booking_move_v3&adj_redirect=https%3A%2F%2Fwww.getyourguide.com%2Fbooking%2FS0QATK0D09T0GCIN6WKTQ1LK9FT9REW0%3Fpartner_id%3DHCIAOO8%26visitor_id%3D31F21BD46A634DC7915A2B7533D3E834%26utm_source%3Dgetyourguide%26utm_medium%3Demail_transactional%26utm_campaign%3Dshopping_cart_confirmation_v2%26utm_content%3Dbooking_summary_manage_booking_move_v3&visitor_id=31F21BD46A634DC7915A2B7533D3E834&utm_source=getyourguide&utm_medium=email_transactional&utm_campaign=shopping_cart_confirmation_v2&utm_content=booking_summary_manage_booking_move_v3',
      text: 'Modify Pisa/Cinque Terre Booking'
    }
  },
  { 
    date: 'Aug 11', 
    activity: 'Private Mosaic Lesson', 
    notes: '2-hour private lesson from 3:30 PM - 5:30 PM. Confirmation: GYG83X24KY5Q. Meet Maria Teresa.',
    address: 'Via Paolo VI, 27/29, 00193 Roma RM, Italy'
  },
  { 
    date: 'Aug 11', 
    activity: 'Train to Florence & Check-in', 
    notes: 'Take an evening train to Florence after the mosaic class (approx. 2 hours). Check into Florence Airbnb.',
    address: 'Via del Parione, 13, 50123 Firenze FI, Italy',
    link: {
      url: 'https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMA4TWW3XW',
      text: 'View Florence Airbnb Booking'
    }
  },
  { 
    date: 'Aug 12', 
    activity: 'Pisa & Cinque Terre Day Tour', 
    notes: 'Full-day small group tour starting at 7:30 AM from Santa Maria Novella station. A fast-paced trip to see the highlights of Pisa and the coastal villages. Booking Ref: GYG32MNN5GW5.',
    address: 'Piazza della Stazione, 50123 Firenze FI, Italy',
    link: {
      url: '#/daytrip',
      text: 'View Day Trip Details'
    }
  },
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
  { 
    date: 'Aug 17', 
    activity: 'Train to Rome & Hotel Check-in', 
    notes: 'Take the Italo train from Florence to Rome (11:28 AM - 1:40 PM). After arriving, check into Hotel Sonya.',
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
      departureTerminal: 'Terminal 3',
      arrivalTerminal: 'Terminal 3',
      departureMapUrl: "https://www.google.com/maps/place/Terminal+3,+Mississauga,+ON,+Canada/@43.6846016,-79.6218971,15.44z/data=!4m6!3m5!1s0x882b396c195fcd2b:0x22ec6c583a711fa5!8m2!3d43.6856208!4d-79.6205582!16s%2Fg%2F1jkxvbxx6?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
    },
    return: {
      airline: 'Air Transat',
      flightNumber: 'TS309',
      departure: 'Aug 18, 2025, 2:15 p.m. FCO',
      arrival: 'Aug 18, 2025, 6:00 p.m. YYZ',
      seats: '20K, 20J',
      departureTerminal: 'Terminal 3',
      arrivalTerminal: 'Terminal 3',
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
      departureTerminal: 'Tom Bradley Intl. Terminal (B)',
      arrivalTerminal: 'Terminal 3',
    },
    return: {
      airline: 'ITA Airways',
      flightNumber: 'AZ620',
      departure: 'Aug 18, 2025, 9:30 a.m. FCO',
      arrival: 'Aug 18, 2025, 1:15 p.m. LAX',
      duration: '12h 45m (nonstop)',
      seats: '50A',
      departureTerminal: 'Terminal 1',
      arrivalTerminal: 'Tom Bradley Intl. Terminal (B)',
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

const florenceTicketDueDate = new Date();
florenceTicketDueDate.setHours(20, 0, 0, 0);

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
    { id: 14, task: 'Plan departure date travel to airport', completed: true, assignees: ['Audrey', 'Grace', 'Tessy'] },
    { id: 10, task: 'Book train ticket to Florence', completed: true, assignees: ['Tessy'] },
    { id: 11, task: 'Book train ticket to Rome', completed: true, assignees: ['Tessy'] },
    { id: 12, task: 'Book Pisa/Cinque Terre Tour', completed: true, assignees: ['Tessy'] },

    // Incomplete Tasks
    { 
        id: 16, 
        task: 'Check in for Air Transat flight (by Aug 6, 9:40 PM)', 
        completed: false, 
        assignees: ['Audrey', 'Grace'],
        link: {
            url: 'https://www.airtransat.com/en-CA/my-booking',
            text: 'Manage Air Transat Booking'
        }
    },
    { 
        id: 17, 
        task: 'Check in for ITA Airways flight (by Aug 6, 3:15 PM)', 
        completed: false, 
        assignees: ['Tessy'],
        link: {
            url: 'https://www.ita-airways.com/en_gb',
            text: 'Manage ITA Airways Booking'
        }
    },
    { id: 15, task: 'Pack for the trip', completed: false, assignees: ['Audrey', 'Grace', 'Tessy'] },
];


export const trainBookings: TrainBooking[] = [
  {
    passenger: 'Caitlyn StevensDietrich',
    departure: 'Roma Termini, Aug 11, 2025, 4:05 p.m.',
    arrival: 'Firenze SMN, Aug 11, 2025, 6:17 p.m.',
    duration: '2h 12m',
    confirmationNumber: 'AJ158U',
    seats: '1, 2, 3',
    coach: '4',
    class: 'Smart',
    departureMapUrl: 'https://maps.app.goo.gl/7Bn36y4CyydVPfNR6',
  },
  {
    passenger: 'caitlyn stevensdietrich',
    departure: 'Firenze SMN, Aug 17, 2025, 11:28 a.m.',
    arrival: 'Roma Termini, Aug 17, 2025, 1:40 p.m.',
    duration: '2h 12m',
    confirmationNumber: 'ZI62VQ',
    seats: '15, 16, 17',
    coach: '8',
    class: 'Smart',
    departureMapUrl: 'https://maps.app.goo.gl/9Dgo4j3r8aN5fA889',
    arrivalMapUrl: 'https://maps.app.goo.gl/7Bn36y4CyydVPfNR6',
  },
];

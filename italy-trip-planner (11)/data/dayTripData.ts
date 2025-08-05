

import { DayTripDetails } from '../types';

export const dayTripData: DayTripDetails = {
    title: "Pisa & Cinque Terre Day Tour",
    date: "August 12, 2025",
    duration: "13 hours",
    provider: "Small Group Tour",
    bookingRef: "GYG32MNN5GW5",
    pin: "YA=N1F58",
    participants: "3 Adults",
    language: "English",
    meetingPoint: {
        address: "Piazza della Stazione, 50123 Firenze FI, Italy",
        instructions: "Meet your guide in front of the sliding doors of the pharmacy inside Santa Maria Novella Train Station, opposite platform 16.",
        time: "7:25 AM (for 7:30 AM departure)",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Piazza+della+Stazione,+50123+Firenze+FI,+Italy"
    },
    endpoint: "Your activity will end at the same place it began.",
    importantInfo: {
        bring: [
            { item: "Comfortable shoes", icon: "shoes" },
            { item: "Swimwear", icon: "swimsuit" },
            { item: "Water", icon: "water-bottle" },
            { item: "Comfortable clothes", icon: "list" }
        ],
        notAllowed: [
            { item: "Baby strollers", icon: "close" },
            { item: "Luggage or large bags", icon: "luggage" }
        ],
        knowBeforeYouGo: [
            "The tour is fast-paced & budget-minded. A bit of walking is involved, you need to be physically fit.",
            "The national park is often subject to landslides, and for this reason, the trails can be closed.",
            "It's recommended to not make any travel arrangements for when you return to Florence in the event of any train delays.",
            "In high season (June, July & August) the trains could be very crowded and hot. The tour may visit two villages instead of three to allow for more relaxation time.",
            "The tour operator is not responsible for any items lost or stolen, or for any train issues or strikes.",
            "A minimum of 8 people are required to run the tour."
        ]
    },
    itinerary: [
        { 
            transport: "Train", 
            duration: "1 hour", 
            activity: "Travel to Pisa", 
            details: "Depart from Florence's Santa Maria Novella station.",
            departureInfo: "Regional trains depart roughly every 30-60 minutes."
        },
        { 
            duration: "75 mins", 
            activity: "Tower of Pisa", 
            details: "Free time for photos, visiting the Piazza dei Miracoli, and sightseeing.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Piazza+dei+Miracoli"
        },
        { 
            transport: "Train", 
            duration: "75 mins", 
            activity: "Travel to Liguria", 
            details: "Journey towards the Cinque Terre coastline.",
            departureInfo: "Connects via La Spezia. Trains on this line run frequently."
        },
        {
            duration: "15 mins",
            activity: "Break in Liguria",
            details: "A short break before continuing to the first village."
        },
        { 
            transport: "Train", 
            duration: "7 mins", 
            activity: "Travel to Riomaggiore", 
            details: "A short, panoramic train ride to the first village.",
            departureInfo: "The Cinque Terre Express runs approx. every 15-20 minutes in peak season."
        },
        { 
            duration: "1 hour", 
            activity: "Riomaggiore", 
            details: "Time for photos, visiting the village, and lunch.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Riomaggiore"
        },
        { 
            transport: "Train", 
            duration: "9 mins", 
            activity: "Travel to Vernazza", 
            details: "Continue the panoramic train journey.",
            departureInfo: "The Cinque Terre Express runs approx. every 15-20 minutes in peak season."
        },
        { 
            duration: "1 hour", 
            activity: "Vernazza", 
            details: "Free time for photos, visiting the harbor, and sightseeing.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Vernazza"
        },
        { 
            transport: "Train", 
            duration: "7 mins", 
            activity: "Travel to Manarola", 
            details: "Another scenic train ride along the coast.",
            departureInfo: "The Cinque Terre Express runs approx. every 15-20 minutes in peak season."
        },
        { 
            duration: "1 hour", 
            activity: "Manarola", 
            details: "Break time, photos, and enjoying the scenic views.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Manarola"
        },
        {
            transport: "Train",
            duration: "10 mins",
            activity: "Return to Ligurian hub",
            details: "Begin the journey back towards Florence.",
            departureInfo: "The Cinque Terre Express runs approx. every 15-20 minutes in peak season."
        },
        {
            duration: "25 mins",
            activity: "Break in Liguria",
            details: "A final break before the long train ride back."
        },
        { 
            transport: "Train", 
            duration: "~2h 25m", 
            activity: "Travel back to Florence", 
            details: "Final leg of the journey returning to the starting point.",
            departureInfo: "Check departure boards for the next available train to Firenze S.M.N."
        },
    ]
};
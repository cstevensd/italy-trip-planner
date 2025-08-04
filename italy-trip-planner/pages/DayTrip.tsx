
import React, { useState } from 'react';
import { dayTripData } from '../data/dayTripData';
import { Icon } from '../components/Icon';

const CopyButton: React.FC<{ textToCopy: string; label: string }> = ({ textToCopy, label }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <button
            onClick={handleCopy}
            className="inline-flex items-center bg-gray-100 text-brand-text-muted font-semibold px-3 py-1.5 rounded-lg hover:bg-brand-border transition-all duration-200 text-sm w-32 justify-center"
            aria-label={`Copy ${label}`}
        >
            <Icon name={copied ? 'check' : 'copy'} className="w-4 h-4 mr-2 transition-all" />
            {copied ? 'Copied!' : `Copy ${label}`}
        </button>
    );
};

const DayTrip: React.FC = () => {
    const cancellationLink = "https://l4ab.adj.st/bookings/S0QATK0D09T0GCIN6WKTQ1LK9FT9REW0/details?adj_t=6oimkb3_lut0srj&adj_deep_link=gyg%3A%2F%2Fbookings%2FS0QATK0D09T0GCIN6WKTQ1LK9FT9REW0%2Fdetails%3Fvisitor_id%3D31F21BD46A634DC7915A2B7533D3E834%26utm_source%3Dgetyourguide%26utm_medium%3Demail_transactional%26utm_campaign%3Dshopping_cart_confirmation_v2%26utm_content%3Dbooking_summary_manage_booking_move_v3&adj_fallback=https%3A%2F%2Fwww.getyourguide.com%2Fbooking%2FS0QATK0D09T0GCIN6WKTQ1LK9FT9REW0%3Fpartner_id%3DHCIAOO8%26visitor_id%3D31F21BD46A634DC7915A2B7533D3E834%26utm_source%3Dgetyourguide%26utm_medium%3Demail_transactional%26utm_campaign%3Dshopping_cart_confirmation_v2%26utm_content%3Dbooking_summary_manage_booking_move_v3&adj_redirect=https%3A%2F%2Fwww.getyourguide.com%2Fbooking%2FS0QATK0D09T0GCIN6WKTQ1LK9FT9REW0%3Fpartner_id%3DHCIAOO8%26visitor_id%3D31F21BD46A634DC7915A2B7533D3E834%26utm_source%3Dgetyourguide%26utm_medium%3Demail_transactional%26utm_campaign%3Dshopping_cart_confirmation_v2%26utm_content%3Dbooking_summary_manage_booking_move_v3&visitor_id=31F21BD46A634DC7915A2B7533D3E834&utm_source=getyourguide&utm_medium=email_transactional&utm_campaign=shopping_cart_confirmation_v2&utm_content=booking_summary_manage_booking_move_v3";

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="flex items-center mb-4">
        <Icon name="sun-wave" className="w-12 h-12 text-brand-accent" />
        <div className='ml-4'>
            <h1 className="text-4xl font-extrabold text-brand-primary">{dayTripData.title}</h1>
            <p className="text-brand-text-muted">{dayTripData.date} &bull; {dayTripData.duration}</p>
        </div>
      </div>

      <div className="my-6 p-4 bg-yellow-100/70 border-l-4 border-yellow-500 text-yellow-900 rounded-r-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <Icon name="alert-triangle" className="h-5 w-5 text-yellow-500" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-bold">Cancellation Policy</h3>
            <div className="mt-2 text-sm">
              <p>
                This tour is cancellable for a full refund before 7:30 AM on August 11.
                <a href={cancellationLink} target="_blank" rel="noopener noreferrer" className="font-medium underline hover:text-yellow-800 ml-2">
                  Manage Booking
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        
        {/* Left Column (Main Content) */}
        <div className="lg:col-span-2 space-y-8">
            
            {/* Itinerary Section */}
            <div>
                <h2 className="text-3xl font-bold text-brand-primary mb-6">Itinerary</h2>
                <div className="relative border-l-2 border-brand-border ml-5 pl-8 space-y-8">
                    {dayTripData.itinerary.map((item, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-[44px] top-1 h-8 w-8 rounded-full bg-brand-accent flex items-center justify-center text-white z-10 shadow">
                                <Icon name={item.transport === 'Train' ? 'train' : 'map-pin'} className="w-5 h-5"/>
                            </div>
                            <div className="bg-brand-surface p-5 rounded-xl shadow-subtle">
                               <div className="flex justify-between items-center">
                                    <h3 className="font-bold text-lg text-brand-text-main">{item.activity}</h3>
                                    <span className="text-sm font-semibold text-brand-secondary bg-brand-accent-light/50 px-2 py-1 rounded-md">{item.duration}</span>
                               </div>
                                <p className="text-brand-text-muted mt-1">{item.details}</p>
                            </div>
                        </div>
                    ))}
                    <div className="relative">
                        <div className="absolute -left-[44px] top-1 h-8 w-8 rounded-full bg-brand-primary flex items-center justify-center text-white z-10 shadow">
                            <Icon name="flag" className="w-5 h-5"/>
                        </div>
                        <div className="bg-brand-surface p-5 rounded-xl shadow-subtle">
                           <h3 className="font-bold text-lg text-brand-text-main">Return to Florence</h3>
                           <p className="text-brand-text-muted mt-1">{dayTripData.endpoint}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* Right Column (Sidebar) */}
        <div className="space-y-6">
            
            {/* Booking Details Card */}
            <div className="bg-brand-surface p-5 rounded-xl shadow-subtle">
                <h3 className="text-xl font-bold text-brand-secondary mb-4 border-b border-brand-border pb-2">Booking Details</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-brand-text-muted">Reference:</p>
                        <p className="font-mono text-sm p-1 bg-brand-background rounded">{dayTripData.bookingRef}</p>
                    </div>
                     <CopyButton textToCopy={dayTripData.bookingRef} label="Ref" />

                    <div className="flex items-center justify-between pt-2 border-t border-brand-background">
                        <p className="font-semibold text-brand-text-muted">PIN:</p>
                         <p className="font-mono text-sm p-1 bg-brand-background rounded">{dayTripData.pin}</p>
                    </div>
                    <CopyButton textToCopy={dayTripData.pin} label="PIN" />

                    <div className="flex items-center gap-2 pt-4 border-t border-brand-border">
                        <Icon name="users" className="w-5 h-5 text-brand-text-muted"/>
                        <p className="text-brand-text-main">{dayTripData.participants}</p>
                    </div>
                </div>
            </div>

            {/* Meeting Point Card */}
            <div className="bg-brand-accent-light p-5 rounded-xl border-l-4 border-brand-accent">
                <h3 className="text-xl font-bold text-brand-accent mb-3">Meeting Point</h3>
                <p className="font-semibold text-brand-primary">Arrive by: {dayTripData.meetingPoint.time}</p>
                <p className="text-brand-text-muted mt-2 text-sm">{dayTripData.meetingPoint.instructions}</p>
                 <a 
                    href={dayTripData.meetingPoint.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center bg-white text-brand-accent font-semibold px-3 py-1.5 rounded-lg hover:bg-brand-accent hover:text-white transition-colors text-sm shadow"
                  >
                      <Icon name="map-pin" className="w-4 h-4 mr-2" />
                      View on Map
                  </a>
            </div>

            {/* Important Info Card */}
             <div className="bg-brand-surface p-5 rounded-xl shadow-subtle">
                <h3 className="text-xl font-bold text-brand-secondary mb-4 border-b border-brand-border pb-2">Important Info</h3>
                
                <div className="mb-4">
                    <h4 className="font-semibold text-brand-text-main mb-2">What to Bring</h4>
                    <ul className="space-y-2">
                        {dayTripData.importantInfo.bring.map(item => (
                            <li key={item.item} className="flex items-center text-sm text-brand-text-muted">
                                <Icon name={item.icon} className="w-4 h-4 mr-3 text-brand-accent"/>
                                {item.item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-4">
                    <h4 className="font-semibold text-brand-text-main mb-2">Not Allowed</h4>
                     <ul className="space-y-2">
                        {dayTripData.importantInfo.notAllowed.map(item => (
                            <li key={item.item} className="flex items-center text-sm text-brand-text-muted">
                                <Icon name={item.icon} className="w-4 h-4 mr-3 text-red-500"/>
                                {item.item}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-semibold text-brand-text-main mb-2">Know Before You Go</h4>
                    <ul className="space-y-2 list-disc list-inside">
                        {dayTripData.importantInfo.knowBeforeYouGo.map((item, index) => (
                            <li key={index} className="text-sm text-brand-text-muted">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>

      </div>
    </div>
  );
};

export default DayTrip;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';
import PrintableContent from '../components/PrintableContent';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Countdown from '../components/Countdown';
import { schedule } from '../data/tripData';


const QuickLink: React.FC<{ to: string, title: string, description: string, icon: string }> = ({ to, title, description, icon }) => (
    <Link 
        to={to} 
        className="bg-brand-surface p-5 rounded-xl shadow-subtle hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group"
    >
        <Icon name={icon} className="w-8 h-8 text-brand-accent flex-shrink-0" />
        <div>
            <h3 className="font-bold text-lg text-brand-text-main group-hover:text-brand-accent transition-colors">{title}</h3>
            <p className="text-brand-text-muted mt-1">{description}</p>
        </div>
    </Link>
);


const Home: React.FC = () => {
  const [isPrinting, setIsPrinting] = useState(false);

  const handleDownloadPdf = async () => {
    setIsPrinting(true);
    // Use a timeout to allow the printable component to render
    setTimeout(async () => {
        const input = document.getElementById('printable-content');
        if (!input) {
            console.error("Printable content not found!");
            setIsPrinting(false);
            return;
        }

        try {
          const canvas = await html2canvas(input, {
              scale: 2, // Higher scale for better quality
              useCORS: true, // For images from other domains
              backgroundColor: null, // Use transparent background
          });

          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF({
              orientation: 'p',
              unit: 'mm',
              format: 'a4',
          });

          const pdfWidth = pdf.internal.pageSize.getWidth();
          const canvasWidth = canvas.width;
          const canvasHeight = canvas.height;
          const ratio = canvasWidth / pdfWidth;
          const imgHeight = canvasHeight / ratio;
          const pdfHeight = pdf.internal.pageSize.getHeight();
          
          let heightLeft = imgHeight;
          let position = 0;

          pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
          heightLeft -= pdfHeight;

          while (heightLeft > 0) {
              position = heightLeft - imgHeight;
              pdf.addPage();
              pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
              heightLeft -= pdfHeight;
          }
          
          pdf.save('Italy-Trip-Planner.pdf');
        } catch (error) {
          console.error("Error generating PDF:", error);
          alert("Sorry, there was an error generating the PDF. Please try again.");
        } finally {
          setIsPrinting(false);
        }
    }, 500); // 500ms delay
  };


  return (
    <div className="space-y-12">
        <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden animate-fade-in">
            <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1-italy-poster-alexey-erofalov.jpg" alt="Viva Italia travel poster collage" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative h-full flex flex-col items-center justify-center text-white text-center p-4">
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">Italia 2025</h1>
                <p className="mt-2 text-lg sm:text-xl max-w-2xl opacity-90">Woop woop</p>
            </div>
        </div>

      <Countdown schedule={schedule} />

      <div>
        <h2 className="text-3xl font-bold text-brand-primary mb-6 text-center lg:text-left">Trip Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <QuickLink to="/schedule" title="Schedule" description="Daily itinerary and plans" icon="calendar" />
            <QuickLink to="/bookings" title="Bookings" description="Flights & lodgings" icon="plane" />
            <QuickLink to="/daytrip" title="Day Trip" description="Pisa & Cinque Terre details" icon="sun-wave" />
            <QuickLink to="/destinations" title="Guides" description="City info & local tips" icon="book-open" />
            <QuickLink to="/phrases" title="Phrases" description="Useful Italian vocabulary" icon="speech-bubble" />
            <QuickLink to="/currency" title="Currency Converter" description="CAD, USD, EUR rates" icon="currency" />
        </div>
      </div>

       {/* Download Section */}
      <div className="mt-12 text-center border-t border-brand-border pt-8">
          <h2 className="text-2xl font-bold text-brand-primary mb-3">Ready for the Trip?</h2>
          <p className="text-brand-text-muted max-w-xl mx-auto mb-6">Download a complete, offline-ready copy of all your trip information into a single PDF document.</p>
          <button 
              onClick={handleDownloadPdf} 
              disabled={isPrinting}
              className="inline-flex items-center justify-center bg-brand-primary text-white font-bold py-3 px-8 rounded-lg shadow-lifted hover:bg-opacity-90 transition-all duration-300 disabled:bg-brand-primary/50 disabled:cursor-wait"
          >
              <Icon name="download" className="w-5 h-5 mr-3" />
              {isPrinting ? 'Generating PDF...' : 'Download Full Trip Itinerary'}
          </button>
      </div>

      {isPrinting && (
        <div style={{ position: 'absolute', left: '-9999px', top: 0, zIndex: -100 }}>
             <PrintableContent />
        </div>
      )}

    </div>
  );
};

export default Home;
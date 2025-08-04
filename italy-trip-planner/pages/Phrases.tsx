
import React, { useState, useEffect } from 'react';
import { italianPhrases } from '../data/phrasesData';
import { Icon } from '../components/Icon';

const Phrases: React.FC = () => {
  const [speakingPhrase, setSpeakingPhrase] = useState<string | null>(null);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      // If this phrase is already speaking, cancel it to stop.
      if (speakingPhrase === text) {
          window.speechSynthesis.cancel();
          return;
      }
      
      // Cancel any currently playing speech before starting a new one
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'it-IT';
      utterance.rate = 0.9; // A bit slower for clarity

      utterance.onstart = () => {
        setSpeakingPhrase(text);
      };

      utterance.onend = () => {
        setSpeakingPhrase(null);
      };
      
      utterance.onerror = (event) => {
        console.error("Speech synthesis error:", event.error);
        setSpeakingPhrase(null);
      };

      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser doesn't support text-to-speech.");
    }
  };

  // Add a cleanup effect to cancel speech if the component unmounts
  useEffect(() => {
    const handleBeforeUnload = () => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      handleBeforeUnload(); // Also cancel on component unmount
    };
  }, []);


  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-8">
        <Icon name="speech-bubble" className="w-10 h-10 text-brand-accent" />
        <h1 className="text-4xl font-extrabold text-brand-primary ml-3">Useful Italian Phrases</h1>
      </div>

      <div className="space-y-8">
        {italianPhrases.map((category, index) => (
          <div key={category.category} className="bg-brand-surface p-6 rounded-xl shadow-subtle animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
            <h2 className="text-2xl font-bold text-brand-accent mb-4 border-b border-brand-border pb-2">{category.category}</h2>
            <ul className="space-y-4">
              {category.phrases.map(phrase => (
                <li key={phrase.italian} className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 p-2 rounded-lg hover:bg-brand-background transition-colors items-center">
                   <div className="flex items-center gap-3">
                        <p className="font-semibold text-brand-text-main flex-grow">{phrase.italian}</p>
                        <button 
                            onClick={() => speak(phrase.italian)}
                            className={`p-1.5 rounded-full hover:bg-brand-accent-light transition-colors flex-shrink-0 ${speakingPhrase === phrase.italian ? 'text-brand-accent animate-pulse' : 'text-brand-text-muted hover:text-brand-accent'}`}
                            aria-label={`Listen to "${phrase.italian}"`}
                        >
                            <Icon name="volume-2" className="w-5 h-5" />
                        </button>
                    </div>
                  <p className="text-brand-text-muted">{phrase.english}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phrases;

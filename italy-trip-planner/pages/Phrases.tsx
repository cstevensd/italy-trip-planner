
import React, { useState, useEffect } from 'react';
import { italianPhrases } from '../data/phrasesData';
import { Icon } from '../components/Icon';

const Phrases: React.FC = () => {
  const [speakingPhrase, setSpeakingPhrase] = useState<string | null>(null);
  const [italianVoice, setItalianVoice] = useState<SpeechSynthesisVoice | null>(null);

  // Effect to load voices and handle component lifecycle for speech synthesis
  useEffect(() => {
    const loadAndSetVoice = () => {
      if ('speechSynthesis' in window) {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length === 0) {
            return; // Voices not loaded yet. The onvoiceschanged event will trigger this again.
        }

        const premiumVoiceNames = [
          'Luca',           // Apple - premium
          'Alice',          // Apple - standard, often good quality
          'Microsoft Elsa - Italian (Italy)', // Windows
          'Elsa',           // Windows
          'Google italiano',// Google
          'Federica',       // Apple
        ];

        const italianVoices = voices.filter(v => v.lang === 'it-IT');
        let selectedVoice: SpeechSynthesisVoice | null = null;
        
        // 1. Look for premium/known voices by name in a specific order
        for (const name of premiumVoiceNames) {
            const foundVoice = italianVoices.find(v => v.name === name);
            if (foundVoice) {
                selectedVoice = foundVoice;
                break;
            }
        }
        
        // 2. If no premium voice found, pick any non-local Italian voice
        if (!selectedVoice) {
            selectedVoice = italianVoices.find(v => !v.localService) || null;
        }

        // 3. As a final fallback, pick the first available Italian voice
        if (!selectedVoice && italianVoices.length > 0) {
            selectedVoice = italianVoices[0];
        }

        if (selectedVoice) {
          setItalianVoice(selectedVoice);
        }
      }
    };

    // Load voices immediately and add a listener for when they become available.
    loadAndSetVoice();
    if ('speechSynthesis' in window && typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
      window.speechSynthesis.onvoiceschanged = loadAndSetVoice;
    }
    
    // Cleanup function to cancel any speech when the component unmounts or the page is closed.
    const handleBeforeUnload = () => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = null;
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      // If the same phrase is clicked again while it's speaking, stop it.
      if (window.speechSynthesis.speaking && speakingPhrase === text) {
        window.speechSynthesis.cancel();
        setSpeakingPhrase(null); // Explicitly reset state
        return;
      }
      
      // Cancel any other ongoing speech before starting a new one.
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Explicitly set the Italian voice if it was found.
      if (italianVoice) {
        utterance.voice = italianVoice;
      }
      
      utterance.lang = 'it-IT'; // Set language as a fallback.
      utterance.rate = 0.9; // A touch slower for better clarity.

      utterance.onstart = () => setSpeakingPhrase(text);
      utterance.onend = () => setSpeakingPhrase(null);
      utterance.onerror = (event) => {
        console.error("Speech synthesis error:", event.error);
        setSpeakingPhrase(null);
      };

      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser doesn't support text-to-speech.");
    }
  };

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
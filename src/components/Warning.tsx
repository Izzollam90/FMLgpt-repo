import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

export function Warning() {
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate('/disclaimer');
  };

  const handleDecline = () => {
    window.location.href = 'https://meatspin.com';
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 flex items-center justify-center p-4">
      <div className="max-w-2xl bg-gray-900 rounded-lg p-8 shadow-xl">
        <div className="flex items-center justify-center mb-6">
          <AlertTriangle className="h-12 w-12 text-gray-400" />
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-6">Content Warning</h1>
        
        <div className="space-y-4 text-gray-400 mb-8">
          <p>
            You are about to interact with FMLgpt, an uncensored artificial intelligence chatbot. 
            Please be advised that FMLgpt can generate content that may include explicit language 
            and mature themes. This bot is not suitable for users under the age of 18. 
            User discretion is advised.
          </p>
          
          <p className="font-semibold text-gray-300">
            Important Notice:
          </p>
          
          <p>
            FMLgpt does not support or condone any illegal activities. Discussions or suggestions 
            related to illegal content are strictly prohibited. Any such behavior will not be 
            tolerated, and necessary actions will be taken to prevent misuse. Interactions do 
            not reflect the opinions or beliefs of the creators or associated parties.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleAccept}
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-colors"
          >
            I Accept & Continue
          </button>
          
          <button
            onClick={handleDecline}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors"
          >
            Decline & Exit
          </button>
        </div>
      </div>
    </div>
  );
}
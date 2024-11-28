import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Skull } from 'lucide-react';

export function Disclaimer() {
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate('/chat');
  };

  const handleDecline = () => {
    window.location.href = 'https://2girls1cup.ca/';
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 flex items-center justify-center p-4">
      <div className="max-w-2xl bg-gray-900 rounded-lg p-8 shadow-xl">
        <div className="flex items-center justify-center mb-6">
          <Skull className="h-12 w-12 text-gray-400" />
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-6">Final Disclaimer</h1>
        
        <div className="space-y-4 text-gray-400 mb-8">
          <p>
            By proceeding, you acknowledge that you are willingly entering a space 
            where content may be offensive, controversial, or inappropriate. You accept 
            full responsibility for your interactions with FMLgpt and understand that 
            the creators bear no liability for any consequences arising from its use.
          </p>
          
          <p>
            Remember: What happens in FMLgpt, stays in FMLgpt (unless you choose to share it).
          </p>

          <div className="mt-8 space-y-4 text-gray-300">
            <p>
              FMLgpt is powered by the cognitivecomputations/dolphin-2.8-mistral-7b-v02 model. 
              This model, while advanced, has its limitations in processing and understanding 
              complex queries. FMLgpt is designed to assist users by providing responses based 
              on patterns in data it was trained on, and it does not generate conscious or 
              intentional thoughts.
            </p>

            <p>
              Please be aware that the responses from FMLgpt may not always be accurate or 
              appropriate for all contexts. Users are advised to use discretion and not to 
              rely solely on FMLgpt for critical decisions.
            </p>

            <p>
              For those interested in supporting enhancements and future upgrades of FMLgpt, 
              donations are welcomed. Contributions will help in adopting more advanced 
              technologies to improve user interaction and capabilities. If you wish to 
              contribute, please donate to the following BTC address:
            </p>

            <p className="font-mono bg-gray-800 p-4 rounded-lg text-center">
              bc1qlfq50ht9845hedcakdtyp8ugfs45ct6zqrxuxx
            </p>

            <p>
              Your support is greatly appreciated and will assist in the ongoing development 
              and enhancement of FMLgpt.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleAccept}
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-colors"
          >
            Ten Four Sir
          </button>
          
          <button
            onClick={handleDecline}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors"
          >
            F*ck off
          </button>
        </div>
      </div>
    </div>
  );
}
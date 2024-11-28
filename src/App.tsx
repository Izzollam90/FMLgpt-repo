import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Chat } from './components/Chat';
import { Warning } from './components/Warning';
import { Disclaimer } from './components/Disclaimer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/warning" element={<Warning />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={<Navigate to="/warning" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
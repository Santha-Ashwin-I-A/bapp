import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './App.jsx';
import MemoryLane from './pages/memory-lane.jsx';
import SurpriseMessage from './pages/surpriseMsg.jsx';
import Gift from './pages/gift.jsx';
import Quiz from './pages/quiz.jsx';
import FinalMessage from './pages/fmessage.jsx'; 
import SMessage from './pages/special-surprise.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memory-lane" element={<MemoryLane />} />
        <Route path="/surprise-message" element={<SurpriseMessage />} />
        <Route path="/gift" element={<Gift/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/final-message" element={<FinalMessage/>}/>
        <Route path="/special-surprise" element={<SMessage/>}/>
      </Routes>
    </Router>
  </StrictMode>
);

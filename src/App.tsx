import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./styles/App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="bg-[#F9F9FA] text-black">
      <Navbar />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path='/:matchId' element={<Match />} /> */}
          {/* <Route path='/bet' element={<Bet />} /> */}
          {/* <Route path="/harybet" element={<HaryBet />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

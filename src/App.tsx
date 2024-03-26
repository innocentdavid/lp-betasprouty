import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./styles/App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path='/:matchId' element={<Match />} /> */}
          {/* <Route path='/bet' element={<Bet />} /> */}
          {/* <Route path="/harybet" element={<HaryBet />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

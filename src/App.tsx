import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./styles/App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/privacy";
import TermsOfService from "./pages/TermsOfService";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="bg-[#F9F9FA] text-black">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/terms-of-service"
            element={
              <>
                <ScrollToTop />
                <TermsOfService />
              </>
            }
          />
          <Route
            path="/privacy"
            element={
              <>
                <ScrollToTop />
                <Privacy />
              </>
            }
          />
          {/* <Route path='/:matchId' element={<Match />} /> */}
          {/* <Route path='/bet' element={<Bet />} /> */}
          {/* <Route path="/harybet" element={<HaryBet />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route
            path="*"
            element={
              <>
                <ScrollToTop />
                <NotFound />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

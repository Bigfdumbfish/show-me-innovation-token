import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AirdropForm from "./AirdropForm";
import DAO from "./DAO";
import Transparency from "./Transparency";
import Apply from "./Apply";
import ThankYou from "./ThankYou";

export default function App() {
  return (
    <BrowserRouter basename="/show-me-innovation-token">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airdrop" element={<AirdropForm />} />
        <Route path="/dao" element={<DAO />} />
        <Route path="/transparency" element={<Transparency />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

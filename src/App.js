import "./App.css";
import AppAppBar from "./components/AppAppBar";
import DashBoardMain from "./pages/DashBoardMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Feedback from "./pages/interview/Feedback";
import Interview from "./pages/interview/Interview";
import { Divider } from "@mui/material";

function App(props) {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashBoardMain />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        <Divider sx={{ mx: 8, my: 5, borderColor: "gray" }} />
        <Footer />
    </BrowserRouter>
    // <DashBoardMain/>
  );
}

export default App;

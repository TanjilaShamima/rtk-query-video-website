import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AddVideoPage from "./pages/AddVideoPage";
import EditVideoPage from "./pages/EditVideoPage";
import HomePage from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos/:videoId" element={<VideoPage />} />
          <Route path="/videos/add" element={<AddVideoPage />} />
          <Route path="/videos/edit/:videoId" element={<EditVideoPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

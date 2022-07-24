import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import DetailsTest from "./pages/detailsTest/DetailsTest";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/test/:id" element={<DetailsTest />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import { Home, WishList, SingleMovie } from "./pages";
import Navbar from "./components/navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<WishList />} />
        <Route path="/movie" element={<SingleMovie />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

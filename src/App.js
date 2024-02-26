import "./App.css";
import Navbar from "./components/Navbar";
import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Part1 />
              <Part2 />
              <Footer />
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;

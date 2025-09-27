import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Features from "./components/Features/Features"
import Studentreview from "./components/StudentReview/Studentreview"
import Footer from "./components/Footer/Footer"
import Courses from "./components/courses/Courses"
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
    
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Studentreview />
              </>
            }
          />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
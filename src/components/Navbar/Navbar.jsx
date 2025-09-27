import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import { Link } from "react-router-dom"; // import Link

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            IELTS<span className="text-gray-800">Institute</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/courses" className="hover:text-blue-600">Courses</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Home</Link>
            <Link to="/courses" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Courses</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-600">About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

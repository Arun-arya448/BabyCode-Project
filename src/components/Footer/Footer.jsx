import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-blue-500">
            IELTS<span className="text-white">Institute</span>
          </h1>
          <p className="mt-2 text-gray-400">
            Achieve your dream IELTS score with expert guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
          <ul className="flex flex-wrap gap-12 space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-blue-500">Courses</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right">
          <h2 className="font-semibold text-lg mb-4">Contact Us</h2>
          <p>Email: info@ieltsinstitute.com</p>
          <p>Phone: +91 98765 43210</p>
          <p className="mt-4 text-gray-400 text-sm">
            © 2025 IELTS Institute. All rights reserved.
          </p>
          <p className="mt-2 text-gray-400 text-sm">
            Made with <span className="text-red-500">❤️</span> by Arun Arya
          </p>
        </div>

      </div>
    </footer>
  );
}

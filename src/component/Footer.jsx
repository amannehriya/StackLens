import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    
    <footer className=" z-30 bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] text-gray-300 py-10 ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-white font-bold text-xl">StackSight</h2>
          <p className="text-sm mt-2 text-gray-400">
            Empowering developers with insights and tools to build scalable applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@stacksight.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +1 (234) 567-890
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> San Francisco, CA
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://github.com/amannehriya" target="_blank" rel="noreferrer" className="hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="https://www.linkedin.com/in/aman-nehriya-a171a2337" target="_blank" rel="noreferrer" className="hover:text-white">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} StackSight. All rights reserved.
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-[#0A0118] border-t border-purple-500/10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-purple-400 transition-colors">Dashboard</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</Link></li>
              <li><Link to="/settings" className="text-gray-400 hover:text-purple-400 transition-colors">Settings</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-purple-500/10">
          <p className="text-center text-gray-400">
            © 2024 Examify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
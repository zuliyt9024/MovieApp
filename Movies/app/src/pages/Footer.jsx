import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-red-500">🎬 MovieHub</h2>
          <p className="mt-3 text-sm text-gray-400">
            Discover top rated movies, explore details and manage content easily 
            with our powerful Movies App.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-red-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/admin" className="hover:text-red-400 transition">
                Admin Panel
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect With Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-red-400">🌐</a>
            <a href="#" className="hover:text-red-400">📘</a>
            <a href="#" className="hover:text-red-400">📷</a>
            <a href="#" className="hover:text-red-400">🐦</a>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            Email: support@moviehub.com
          </p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} MovieHub. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;

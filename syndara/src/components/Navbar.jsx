import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Borrowers", href: "/borrowers" },
  { name: "Investors", href: "/investors" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-50/90 backdrop-blur-lg border-b border-white/30">
        <nav className="max-w-7xl mx-auto px-8 flex items-center justify-between py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-medium tracking-tight text-gray-900">
              Syndara
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  location.pathname === item.href
                    ? "text-gray-900 bg-white/50"
                    : "text-gray-700 hover:text-gray-900 hover:bg-white/30"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

         

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/50 bg-white/90 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 text-base font-medium rounded-md transition-colors ${
                    location.pathname === item.href
                      ? "text-gray-900 bg-white/70"
                      : "text-gray-700 hover:text-gray-900 hover:bg-white/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3 border-t border-gray-200 mt-4">
                <Link 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full px-4 py-2 text-center font-medium border border-gray-300 rounded-md hover:bg-white/50 transition-colors bg-white/30"
                >
                  Submit a Scenario
                </Link>
                <Link 
                  to="/contact?type=investor" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full px-4 py-2 text-center font-medium bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
                >
                  Join Early Access
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
export default Navbar;
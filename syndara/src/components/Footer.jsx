
import React from 'react';

const footerLinks = {
  main: [
    { name: "Home", href: "/" },
    { name: "Borrowers", href: "/borrowers" },
    { name: "Investors", href: "/investors" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About", href: "/about" },
  ],
  resources: [
    { name: "Case Studies", href: "/case-studies" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [    { name: "Privacy Policy", href: "/legal#privacy" },
    { name: "Terms of Use", href: "/legal#terms" },
    { name: "Disclosures", href: "/legal#disclosures" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          <div className="lg:col-span-1">
            <a href="/" className="inline-block">
              <span className="font-serif text-2xl font-medium">Covantra</span>
            </a>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Built from $175M+ of real mortgage execution. Now building the platform layer.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Covantra. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Operating under Mortgage Architects, Tara Borle's Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
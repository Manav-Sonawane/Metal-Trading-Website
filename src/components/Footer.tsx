import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white">SP</span>
              </div>
              <span className="text-xl text-white">SteelPro</span>
            </div>
            <p className="text-sm mb-4">
              Leading provider of premium steel products and solutions for industrial applications worldwide.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">123 Industrial Ave, Steel City, SC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-sm">info@steelpro.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
          <p>© 2025 SteelPro. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-400">
            Disclaimer: All products are manufactured to meet international standards. 
            Specifications subject to change without notice.
          </p>
        </div>
      </div>
    </footer>
  );
}

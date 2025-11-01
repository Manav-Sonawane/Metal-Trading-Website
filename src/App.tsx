import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LandingPage } from "./components/LandingPage";
import { ProductCatalog } from "./components/ProductCatalog";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <LandingPage onNavigate={handleNavigate} />;
      case "products":
        return <ProductCatalog />;
      case "about":
        return (
          <div className="min-h-screen bg-white py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h1 className="text-4xl mb-6 text-slate-900">About SteelPro</h1>
              <p className="text-lg text-slate-600 mb-6">
                SteelPro has been a trusted name in steel trading and
                manufacturing since 2005. With over two decades of experience,
                we've established ourselves as a leading provider of premium
                steel products to industries worldwide.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Our state-of-the-art facilities and expert team ensure that
                every product meets the highest international standards. We are
                committed to quality, innovation, and customer satisfaction in
                everything we do.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-8">
                <h2 className="text-2xl mb-4 text-slate-900">Our Values</h2>
                <ul className="space-y-2 text-slate-700">
                  <li>• Quality: Uncompromising standards in every product</li>
                  <li>
                    • Innovation: Continuously improving our processes and
                    products
                  </li>
                  <li>
                    • Integrity: Honest and transparent business practices
                  </li>
                  <li>
                    • Sustainability: Committed to environmental responsibility
                  </li>
                  <li>• Customer Focus: Your success is our priority</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "contact":
        return (
          <div className="min-h-screen bg-white py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h1 className="text-4xl mb-6 text-slate-900">Contact Us</h1>
              <p className="text-lg text-slate-600 mb-8">
                Get in touch with our team for inquiries, quotes, or technical
                support.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl mb-4 text-slate-900">
                    Contact Information
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <div>
                      <h3 className="text-slate-900 mb-1">Address</h3>
                      <p>
                        123 Industrial Avenue
                        <br />
                        Steel City, SC 12345
                        <br />
                        United States
                      </p>
                    </div>
                    <div>
                      <h3 className="text-slate-900 mb-1">Phone</h3>
                      <p>+1 (555) 123-4567</p>
                    </div>
                    <div>
                      <h3 className="text-slate-900 mb-1">Email</h3>
                      <p>
                        info@steelpro.com
                        <br />
                        sales@steelpro.com
                      </p>
                    </div>
                    <div>
                      <h3 className="text-slate-900 mb-1">Business Hours</h3>
                      <p>
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h2 className="text-2xl mb-4 text-slate-900">
                    Send us a Message
                  </h2>
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Form submission would be processed here");
                    }}
                  >
                    <div>
                      <label className="block text-sm text-slate-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-slate-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-slate-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-700 mb-1">
                        Message
                      </label>
                      <textarea
                        className="w-full px-4 py-2 border border-slate-300 rounded-md"
                        rows={4}
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
    </div>
  );
}

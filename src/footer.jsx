import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto pr-6 pl-4 md:pl-20 py-10 grid grid-cols-1 md:grid-cols-6 gap-6 text-left">
        {[
          {
            title: "CATEGORIES",
            links: [
              "User Interface",
              "User Experience",
              "Digital Media",
              "Lifestyle",
              "Programming",
              "Animation",
            ],
          },
          {
            title: "PRODUCT",
            links: ["Pricing", "Overview", "Browse", "Accessibility", "Five"],
          },
          {
            title: "SOLUTIONS",
            links: ["Brainstorming", "Ideation", "Wireframing", "Research"],
          },
          {
            title: "RESOURCES",
            links: ["Help Center", "Blog", "Tutorials"],
          },
          {
            title: "SUPPORT",
            links: [
              "Contact Us",
              "Developers",
              "Documentation",
              "Integrations",
              "Reports",
              "Webinar",
            ],
          },
          {
            title: "COMPANY",
            links: ["About", "Press", "Events", "Careers"],
          },
        ].map((section, idx) => (
          <div key={idx}>
            <h3 className="font-bold mb-5 tracking-wide text-center md:text-left">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-purple-600 block text-center md:text-left"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 mt-6">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-xs text-center md:text-left">
            @ 2023 Wrapp. All rights reserved
          </p>
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 mt-2 md:mt-0">
            <div className="flex justify-center space-x-4 md:mr-7">
              <a href="#" className="text-gray-500 hover:text-purple-600">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600">
                Contact
              </a>
            </div>
            <div className="flex justify-center mt-2 md:mt-0 space-x-3 md:mr-7">
              <a href="#"><img src="/youtube.png" alt="YouTube" className="w-5 h-5" /></a>
              <a href="#"><img src="/facebook.png" alt="Facebook" className="w-5 h-5" /></a>
              <a href="#"><img src="/twitter.png" alt="Twitter" className="w-5 h-5" /></a>
              <a href="#"><img src="/instagram.png" alt="Instagram" className="w-5 h-5" /></a>
              <a href="#"><img src="/linkedin.png" alt="LinkedIn" className="w-5 h-5" /></a>
            </div>
            <div className="flex justify-center mt-2 md:mt-0 md:ml-4">
              <img src="/App.png" alt="App Store" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

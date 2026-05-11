import Link from "next/link";
import { PERSONAL_INFO } from "@/shared/config/constants";
import { ROUTES } from "@/shared/config/routes";


export const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
          
          {/* Brand */}
          <div>
            <Link href={ROUTES.home} className="flex items-center">
              <img
                src="/assets/ks.png"
                alt="KS Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-gray-600 text-sm mt-4 leading-relaxed max-w-sm">
              Front-End Developer specialized in building modern web applications,
              GIS solutions, and scalable SaaS products.
            </p>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-block mt-4 text-sm text-purple-500 hover:text-purple-400 transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link
                href={ROUTES.home}
                className="text-gray-500 hover:text-white transition-colors"
              >
                Home
              </Link>

              <Link
                href={ROUTES.about}
                className="text-gray-500 hover:text-white transition-colors"
              >
                About
              </Link>

              <Link
                href={ROUTES.projects}
                className="text-gray-500 hover:text-white transition-colors"
              >
                Projects
              </Link>

              <Link
                href={ROUTES.contact}
                className="text-gray-500 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Connect
            </h3>

            <p className="text-gray-500 text-sm mb-5">
              Open for freelance projects and collaborations.
            </p>

            <div className="flex gap-3">
              
              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-gray-800 flex items-center justify-center 
                           text-gray-500 hover:text-white hover:border-gray-600 transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504..." />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-gray-800 flex items-center justify-center 
                           text-gray-500 hover:text-white hover:border-gray-600 transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0..." />
                </svg>
              </a>

              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-10 h-10 rounded-lg border border-gray-800 flex items-center justify-center 
                           text-gray-500 hover:text-white hover:border-gray-600 transition-all"
              >
                ✉
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-900 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-700">
            © {new Date().getFullYear()} Kyrillos Samer Mousa. All rights reserved.
          </p>

          <p className="text-xs text-gray-700">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
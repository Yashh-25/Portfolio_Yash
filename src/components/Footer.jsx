
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Yashh-25",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yash-sharma-it",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:yash.sharma26m@iimranchi.ac.in",
      label: "Email",
    },
  ];

  return (
    <footer className="relative z-10 bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Branding */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>

              <span className="font-bold text-xl">
                Yash Sharma
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Computer Science Engineer passionate about technology, AI,
              analytics, and building meaningful solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-purple-400 transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-purple-400 transition-colors"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-purple-400 transition-colors"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="/IIM%20Ranchi_Yash%20Sharma.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  Resume <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Connect
            </h3>

            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                const isEmail = link.label === "Email";

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isEmail ? "_self" : "_blank"}
                    rel={
                      isEmail
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="relative z-10 inline-flex cursor-pointer items-center justify-center p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors"
                    title={link.label}
                    aria-label={link.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} Yash Sharma. All rights reserved.
            </p>

            <p>
              Designed & Built with{" "}
              <span className="text-purple-400">React</span>
              {" "}and{" "}
              <span className="text-purple-400">Tailwind CSS</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

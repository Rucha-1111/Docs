import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Rucha-1111/', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rucha-gade/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:ruchagade20@gmail.com', label: 'Email' },
];

const footerLinks = [
  {
    title: 'Documentation',
    links: [
      { label: 'Getting Started', href: '/docs/getting-started' },
      { label: 'API Reference', href: '/docs/api-reference' },
      { label: 'Tutorials', href: '/docs/tutorials' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/about#contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/Docs/web-icon.png"
                alt="DeCoded Logo"
                className="w-8 h-8 rounded-lg glow-pulse"
              />
              <span className="font-semibold text-lg">DeCoded</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mb-6">
              Aspiring Technical Writer crafting clear, developer-focused documentation
              that bridges complex systems and human understanding.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TechWriter Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with precision and purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}

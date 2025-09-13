import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export interface FooterProps {}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerSections: FooterSection[] = [
  {
    title: "About",
    links: [
      { label: "Our Mission", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Success Stories", href: "#" },
      { label: "Annual Report", href: "#" },
    ],
  },
  {
    title: "Adopt",
    links: [
      { label: "Available Dogs", href: "#" },
      { label: "Adoption Process", href: "#" },
      { label: "Adoption Fees", href: "#" },
      { label: "Post-Adoption Support", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Volunteer", href: "#" },
      { label: "Donate", href: "#" },
      { label: "Foster", href: "#" },
      { label: "Sponsor a Dog", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Dog Care Tips", href: "#" },
      { label: "Training Resources", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
];

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-amber-900 text-amber-50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Paws & Hearts</h3>
                <p className="text-sm text-amber-200">Dog Shelter</p>
              </div>
            </div>
            <p className="text-amber-200 mb-6 max-w-sm">
              We rescue homeless dogs, provide them with care and love, and help
              them find their forever homes. Every dog deserves a second chance
              at happiness.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-PAWS</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@pawsandhearts.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Shelter Street, Pet City, PC 12345</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-amber-200 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-amber-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-amber-200">
            © 2024 Paws & Hearts Dog Shelter. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-amber-200 hover:text-white transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              className="text-amber-200 hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              className="text-amber-200 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="text-amber-200 hover:text-white transition-colors"
            >
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex space-x-4 text-sm">
            <a
              href="#"
              className="text-amber-200 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-amber-200 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

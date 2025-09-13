import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart, Phone } from "lucide-react";

export interface HeaderProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
}

export const navigationItems: NavigationItem[] = [
  { id: "home", label: "Home" },
  { id: "gallery", label: "Our Dogs" },
  { id: "adoption", label: "Adoption Process" },
  { id: "stories", label: "Success Stories" },
  { id: "contact", label: "Contact" },
  { id: "faq", label: "FAQ" },
];

const Header: React.FC<HeaderProps> = ({
  currentSection,
  setCurrentSection,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Paws & Hearts</h1>
            <p className="text-xs text-gray-600">Dog Shelter</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentSection(item.id)}
              className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                currentSection === item.id
                  ? "text-amber-600 border-b-2 border-amber-600 pb-1"
                  : "text-gray-700"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Contact Info & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-600">
            <Phone className="h-4 w-4" />
            <span>(555) 123-PAWS</span>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-6">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentSection(item.id)}
                    className={`text-left text-lg font-medium transition-colors hover:text-amber-600 p-2 rounded-md ${
                      currentSection === item.id
                        ? "text-amber-600 bg-amber-50"
                        : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>(555) 123-PAWS</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Mon - Sun: 8:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export { Header };

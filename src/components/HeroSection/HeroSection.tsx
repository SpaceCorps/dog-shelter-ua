import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MapPin, Clock } from "lucide-react";

export interface HeroSectionProps {
  setCurrentSection: (section: string) => void;
}

export interface HeroStats {
  number: string;
  label: string;
}

export const heroStats: HeroStats[] = [
  { number: "500+", label: "Dogs Rescued" },
  { number: "450+", label: "Happy Adoptions" },
  { number: "24/7", label: "Care & Support" },
  { number: "15", label: "Years of Service" },
];

const HeroSection: React.FC<HeroSectionProps> = ({ setCurrentSection }) => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-amber-200/30 blur-xl"></div>
        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-orange-200/30 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Give a Dog a
                <span className="text-amber-600 block">Second Chance</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Every dog deserves love, care, and a forever home. Join us in
                our mission to rescue, rehabilitate, and rehome dogs in need.
                Your new best friend is waiting for you.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
                onClick={() => setCurrentSection("gallery")}
              >
                <Heart className="mr-2 h-5 w-5" />
                Find Your Friend
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg"
                onClick={() => setCurrentSection("adoption")}
              >
                Learn About Adoption
              </Button>
            </div>

            {/* Contact Info */}
            <Card className="bg-white/80 backdrop-blur border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <Clock className="mr-2 h-4 w-4 text-amber-600" />
                      <span className="font-medium">
                        Mon - Sun: 8:00 AM - 9:00 PM
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="mr-2 h-4 w-4 text-amber-600" />
                      <span>123 Shelter Street, Pet City, PC 12345</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-amber-600 hover:bg-amber-50"
                    onClick={() => setCurrentSection("contact")}
                  >
                    Visit Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Hero Image & Stats */}
          <div className="relative">
            {/* Main Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Happy dogs at the shelter"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-8 -left-8 right-8">
              <div className="grid grid-cols-2 gap-4">
                {heroStats.map((stat, index) => (
                  <Card key={index} className="bg-white shadow-lg border-0">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-amber-600">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };

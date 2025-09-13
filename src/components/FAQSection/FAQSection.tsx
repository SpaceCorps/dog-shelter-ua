import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, HelpCircle, Phone, Mail } from "lucide-react";

export interface FAQSectionProps {}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "adoption" | "general" | "care" | "volunteer";
}

export const faqCategories = [
  { value: "all", label: "All Questions" },
  { value: "adoption", label: "Adoption Process" },
  { value: "general", label: "General Information" },
  { value: "care", label: "Dog Care" },
  { value: "volunteer", label: "Volunteering" },
];

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "What are the basic requirements for adopting a dog?",
    answer:
      "To adopt a dog, you must be at least 18 years old, have stable housing with landlord approval if renting, demonstrate financial ability to provide ongoing care, have adequate time for exercise and companionship, and ensure all family members agree to the adoption.",
    category: "adoption",
  },
  {
    id: "2",
    question: "How long does the adoption process take?",
    answer:
      "The adoption process typically takes 3-7 days from application submission to taking your new pet home. This includes time for application review, meet and greet sessions, home visit, and final approval. We want to ensure the best match for both you and the dog.",
    category: "adoption",
  },
  {
    id: "3",
    question: "What if I find a stray dog?",
    answer:
      "If you find a stray dog, please contact us immediately at (555) 123-PAWS. First, ensure the dog is safe and not injured. Check for identification tags and try to locate the owner through social media and local lost pet groups. If no owner is found after a reasonable search, we can help facilitate proper care and rehoming.",
    category: "general",
  },
  {
    id: "4",
    question: "Can I return a dog if the adoption doesn't work out?",
    answer:
      "Yes, we understand that sometimes circumstances change or the match isn't perfect. If for any reason you cannot keep your adopted dog, we ask that you return them to us rather than rehoming them elsewhere. We provide lifetime support for all our adoptions and will help find the dog a new suitable home.",
    category: "adoption",
  },
  {
    id: "5",
    question: "Do you offer a trial period for adoptions?",
    answer:
      "We offer a 2-week trial period for all adoptions. This allows you and your new pet to adjust to each other and ensure it's a good match before the adoption is finalized. During this time, we provide support and guidance to help with the transition.",
    category: "adoption",
  },
  {
    id: "6",
    question: "What medical care do the dogs receive before adoption?",
    answer:
      "All our dogs receive comprehensive medical care including spaying/neutering, up-to-date vaccinations, deworming, flea and tick prevention, microchipping, and a full health examination by our veterinarian. Any special medical needs or ongoing treatments are disclosed during the adoption process.",
    category: "care",
  },
];

const FAQSection: React.FC<FAQSectionProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = faqItems.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our adoption process, dog
            care, and shelter services. Can't find what you're looking for?
            Contact us directly.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="md:w-64">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    {faqCategories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFAQs.map((faq) => (
                <Card key={faq.id} className="shadow-sm">
                  <AccordionItem value={faq.id} className="border-0">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 rounded-t-lg">
                      <div className="flex items-start space-x-3">
                        <HelpCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="pl-8">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                        <div className="mt-3">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            {faqCategories.find(
                              (cat) => cat.value === faq.category,
                            )?.label || faq.category}
                          </span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Card>
              ))}
            </Accordion>
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No questions found
                </h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any questions matching your search criteria.
                  Try adjusting your search terms or category filter.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-gradient-to-r from-amber-600 to-orange-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="mb-6 text-amber-100">
                Our friendly team is here to help. Don't hesitate to reach out
                if you need more information about our adoption process,
                volunteering opportunities, or anything else.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-amber-600 hover:bg-gray-100"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us: (555) 123-PAWS
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-600"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send us an Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { FAQSection };

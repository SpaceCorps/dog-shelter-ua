import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FileText,
  Heart,
  Home,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";

export interface AdoptionProcessSectionProps {}

export interface AdoptionStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface AdoptionRequirement {
  title: string;
  description: string;
  required: boolean;
}

export const adoptionSteps: AdoptionStep[] = [
  {
    id: 1,
    title: "Application",
    description: "Fill out our comprehensive adoption application form",
    icon: "FileText",
    details: [
      "Complete our online application form",
      "Provide references from veterinarian",
      "Share information about your living situation",
      "Tell us about your experience with pets",
    ],
  },
  {
    id: 2,
    title: "Meet & Greet",
    description: "Visit our shelter to meet your potential new companion",
    icon: "Heart",
    details: [
      "Schedule a visit to our shelter",
      "Spend time with the dog you're interested in",
      "Ask questions about the dog's history and needs",
      "Bring family members to meet the dog",
    ],
  },
  {
    id: 3,
    title: "Home Visit",
    description:
      "Our team will visit your home to ensure it's safe and suitable",
    icon: "Home",
    details: [
      "Schedule a convenient time for home visit",
      "Ensure your home is safe and secure",
      "Check that you have necessary supplies",
      "Discuss any modifications needed",
    ],
  },
  {
    id: 4,
    title: "Adoption",
    description: "Finalize the adoption and welcome your new family member",
    icon: "CheckCircle",
    details: [
      "Sign adoption contract",
      "Pay adoption fee",
      "Receive medical records and care instructions",
      "Take your new friend home!",
    ],
  },
];

export const adoptionRequirements: AdoptionRequirement[] = [
  {
    title: "Age Requirement",
    description: "Adopters must be 18 years or older",
    required: true,
  },
  {
    title: "Housing Stability",
    description: "Stable housing situation with landlord approval if renting",
    required: true,
  },
  {
    title: "Financial Responsibility",
    description:
      "Ability to provide ongoing care including food, medical expenses, and grooming",
    required: true,
  },
  {
    title: "Time Commitment",
    description:
      "Adequate time to provide exercise, training, and companionship",
    required: true,
  },
  {
    title: "Family Agreement",
    description: "All family members must agree to the adoption",
    required: true,
  },
];

const iconMap = {
  FileText,
  Heart,
  Home,
  CheckCircle,
};

const AdoptionProcessSection: React.FC<AdoptionProcessSectionProps> = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How to Adopt
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We want to ensure every dog finds the perfect home and every family
            finds their perfect companion. Our adoption process is designed to
            make the best matches for both dogs and families.
          </p>
        </div>

        {/* Adoption Process Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Adoption Process
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adoptionSteps.map((step) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap];
              return (
                <Card
                  key={step.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    activeStep === step.id
                      ? "ring-2 ring-amber-500 bg-amber-50"
                      : "hover:bg-white"
                  }`}
                  onClick={() =>
                    setActiveStep(activeStep === step.id ? null : step.id)
                  }
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-600 text-white">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div className="flex items-center justify-center mb-2">
                      <Badge variant="outline" className="mr-2">
                        Step {step.id}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600 text-center mb-4">
                      {step.description}
                    </p>

                    {activeStep === step.id && (
                      <div className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className="flex items-start space-x-2"
                          >
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-gray-700">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Adoption Requirements
          </h3>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="mr-2 h-5 w-5 text-amber-600" />
                  Basic Requirements for Adoption
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {adoptionRequirements.map((requirement, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {requirement.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {requirement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h3>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  How long does the adoption process take?
                </AccordionTrigger>
                <AccordionContent>
                  The adoption process typically takes 3-7 days from application
                  to taking your new pet home. This includes time for
                  application review, meet and greet, home visit, and final
                  approval.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  What are the adoption fees?
                </AccordionTrigger>
                <AccordionContent>
                  Adoption fees vary by age and size: Puppies (under 1 year):
                  $300, Adult dogs (1-7 years): $200, Senior dogs (7+ years):
                  $100. All dogs come spayed/neutered, vaccinated, and
                  microchipped.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Can I return a dog if it doesn't work out?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we understand that sometimes circumstances change. If for
                  any reason you cannot keep your adopted dog, we ask that you
                  return them to us. We provide lifetime support for all our
                  adoptions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Do you offer a trial period?
                </AccordionTrigger>
                <AccordionContent>
                  We offer a 2-week trial period for all adoptions. This allows
                  you and your new pet to adjust to each other and ensure it's a
                  good match before the adoption is finalized.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-amber-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Adoption Journey?
              </h3>
              <p className="mb-6">
                Take the first step towards finding your new best friend. Our
                team is here to guide you through every step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-amber-600 hover:bg-gray-100"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Start Application
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-600"
                >
                  <Clock className="mr-2 h-5 w-5" />
                  Schedule Visit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { AdoptionProcessSection };

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export interface ContactSectionProps {}

export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
  agreeToTerms: boolean;
}

export interface ContactInfo {
  type: string;
  value: string;
  icon: string;
}

export const contactReasons = [
  { value: "adoption", label: "I want to adopt a dog" },
  { value: "volunteer", label: "I want to volunteer" },
  { value: "donation", label: "I want to make a donation" },
  { value: "surrender", label: "I need to surrender a dog" },
  { value: "general", label: "General inquiry" },
  { value: "other", label: "Other" },
];

export const contactInfo: ContactInfo[] = [
  {
    type: "Phone",
    value: "(555) 123-PAWS",
    icon: "Phone",
  },
  {
    type: "Email",
    value: "info@pawsandhearts.org",
    icon: "Mail",
  },
  {
    type: "Address",
    value: "123 Shelter Street, Pet City, PC 12345",
    icon: "MapPin",
  },
  {
    type: "Hours",
    value: "Mon - Sun: 8:00 AM - 9:00 PM",
    icon: "Clock",
  },
];

const iconMap = {
  Phone,
  Mail,
  MapPin,
  Clock,
};

const ContactSection: React.FC<ContactSectionProps> = () => {
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
    agreeToTerms: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    field: keyof ContactForm,
    value: string | boolean,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        reason: "",
        message: "",
        agreeToTerms: false,
      });
    }, 3000);
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.reason &&
    formData.message &&
    formData.agreeToTerms;

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about adoption, volunteering, or our services? We'd
            love to hear from you. Reach out and we'll get back to you as soon
            as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Reason */}
                <div>
                  <label
                    htmlFor="reason"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    How can we help you? *
                  </label>
                  <Select
                    value={formData.reason}
                    onValueChange={(value) =>
                      handleInputChange("reason", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a reason for contacting us" />
                    </SelectTrigger>
                    <SelectContent>
                      {contactReasons.map((reason) => (
                        <SelectItem key={reason.value} value={reason.value}>
                          {reason.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Tell us more about how we can help you..."
                    rows={5}
                    required
                  />
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.agreeToTerms}
                    onChange={(e) =>
                      handleInputChange("agreeToTerms", e.target.checked)
                    }
                    className="mt-1"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the processing of my personal information and
                    understand that all information will be used to help with my
                    inquiry. *
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full bg-amber-600 hover:bg-amber-700"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent =
                    iconMap[info.icon as keyof typeof iconMap];
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                        <IconComponent className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{info.type}</p>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-lg">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-700">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">Find us at 123 Shelter Street</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-red-900 mb-2">
                  Emergency Animal Services
                </h3>
                <p className="text-sm text-red-800 mb-3">
                  If you've found an injured or stray animal that needs
                  immediate help, please contact our emergency line.
                </p>
                <Button variant="destructive" size="sm">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Emergency: (555) 911-PETS
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Success Dialog */}
        <Dialog open={isSubmitted} onOpenChange={setIsSubmitted}>
          <DialogContent className="text-center">
            <DialogHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <DialogTitle className="text-2xl">
                Message Sent Successfully!
              </DialogTitle>
              <DialogDescription className="text-base">
                Thank you for reaching out to us. We've received your message
                and will get back to you within 24 hours. If your inquiry is
                urgent, please call us directly at (555) 123-PAWS.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export { ContactSection };

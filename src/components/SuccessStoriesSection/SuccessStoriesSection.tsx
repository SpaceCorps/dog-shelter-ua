import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Heart, Calendar, User } from "lucide-react";

export interface SuccessStoriesSectionProps {}

export interface SuccessStory {
  id: string;
  dogName: string;
  ownerName: string;
  story: string;
  image: string;
  adoptionDate: string;
  dogBreed: string;
}

export const successStories: SuccessStory[] = [
  {
    id: "1",
    dogName: "Luna",
    ownerName: "Sarah Johnson",
    story:
      "I adopted Luna when she was just a scared puppy. Now she's the most loyal companion I could ask for. She loves our morning runs and has brought so much joy to my life. I can't imagine life without her!",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    adoptionDate: "6 months ago",
    dogBreed: "Golden Retriever Mix",
  },
  {
    id: "2",
    dogName: "Max",
    ownerName: "The Williams Family",
    story:
      "Max came to us as a senior dog, and we thought we were giving him a chance. Little did we know he would give us so much more. He's gentle with our kids and has become the heart of our family.",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    adoptionDate: "1 year ago",
    dogBreed: "German Shepherd",
  },
  {
    id: "3",
    dogName: "Bella",
    ownerName: "Mike Chen",
    story:
      "Bella was returned twice before I met her. She just needed someone who understood her energy and intelligence. Now she's my hiking buddy and the smartest dog I've ever known. Sometimes the perfect match takes time to find.",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    adoptionDate: "8 months ago",
    dogBreed: "Border Collie",
  },
];

const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + successStories.length) % successStories.length,
    );
  };

  const currentStory = successStories[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every adoption is a success story. Here are some heartwarming tales
            from our adoptive families about how their rescued dogs have
            enriched their lives.
          </p>
        </div>

        {/* Main Story Display */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src={currentStory.image}
                  alt={currentStory.dogName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-amber-600 text-white">
                    <Heart className="mr-1 h-3 w-3" />
                    Success Story
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {currentStory.dogName} & {currentStory.ownerName}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="text-xs">
                        <Calendar className="mr-1 h-3 w-3" />
                        Adopted {currentStory.adoptionDate}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {currentStory.dogBreed}
                      </Badge>
                    </div>
                  </div>

                  <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                    "{currentStory.story}"
                  </blockquote>

                  <div className="flex items-center text-sm text-gray-600">
                    <User className="mr-2 h-4 w-4" />
                    <span>— {currentStory.ownerName}</span>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={prevStory}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex space-x-2">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-amber-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextStory}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {successStories.slice(0, 6).map((story, index) => (
            <Card
              key={story.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                index === currentIndex ? "ring-2 ring-amber-500" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.dogName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold">{story.dogName}</h4>
                  <p className="text-sm opacity-90">{story.ownerName}</p>
                </div>
              </div>

              <CardContent className="p-4">
                <p className="text-sm text-gray-600 line-clamp-3">
                  {story.story}
                </p>
                <div className="mt-3 flex items-center text-xs text-gray-500">
                  <Calendar className="mr-1 h-3 w-3" />
                  <span>Adopted {story.adoptionDate}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-amber-600 to-orange-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Share Your Story</h3>
              <p className="mb-6">
                Have you adopted from us? We'd love to hear about your journey
                and share your success story to inspire others to adopt.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-amber-600 hover:bg-gray-100"
              >
                <Heart className="mr-2 h-5 w-5" />
                Submit Your Story
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { SuccessStoriesSection };

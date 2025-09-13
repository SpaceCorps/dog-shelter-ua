import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  DialogTrigger,
} from "@/components/ui/dialog";
import { Heart, MapPin, Calendar, User, Ruler, Search } from "lucide-react";

export interface Dog {
  id: string;
  name: string;
  age: string;
  breed: string;
  size: "Small" | "Medium" | "Large";
  gender: "Male" | "Female";
  description: string;
  personality: string[];
  image: string;
  isAdopted?: boolean;
  specialNeeds?: boolean;
}

export interface DogCardProps {
  dog: Dog;
  onAdoptClick: (dog: Dog) => void;
}

export interface DogGallerySectionProps {}

export const mockDogs: Dog[] = [
  {
    id: "1",
    name: "Shiva",
    age: "2 years",
    breed: "Doberman Mix",
    size: "Large",
    gender: "Female",
    description:
      "Shiva is a gentle giant with a heart full of love. She enjoys long walks and is great with children.",
    personality: ["Gentle", "Loyal", "Energetic"],
    image:
      "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "2",
    name: "Kira",
    age: "3 months",
    breed: "Golden Retriever Mix",
    size: "Medium",
    gender: "Female",
    description:
      "Kira is a playful puppy who loves to explore and make new friends. Perfect for an active family.",
    personality: ["Playful", "Curious", "Friendly"],
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "3",
    name: "Mailo",
    age: "4 years",
    breed: "German Shepherd",
    size: "Large",
    gender: "Male",
    description:
      "Mailo is a loyal companion who loves outdoor adventures. He is well-trained and protective.",
    personality: ["Loyal", "Protective", "Intelligent"],
    image:
      "https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "4",
    name: "Leon",
    age: "9 months",
    breed: "Border Collie Mix",
    size: "Medium",
    gender: "Male",
    description:
      "Leon is an energetic and smart dog who loves to learn new tricks and play fetch.",
    personality: ["Smart", "Energetic", "Trainable"],
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "5",
    name: "Molly",
    age: "6 months",
    breed: "Beagle Mix",
    size: "Small",
    gender: "Female",
    description:
      "Molly is a sweet and gentle puppy who gets along well with other pets and children.",
    personality: ["Sweet", "Gentle", "Social"],
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "6",
    name: "Greg",
    age: "3 years",
    breed: "Australian Shepherd",
    size: "Medium",
    gender: "Male",
    description:
      "Greg is an active dog who loves hiking and outdoor activities. He needs an experienced owner.",
    personality: ["Active", "Independent", "Adventurous"],
    image:
      "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "7",
    name: "Rex",
    age: "3 years",
    breed: "French Bulldog",
    size: "Small",
    gender: "Male",
    description:
      "Rex is a calm and friendly dog who loves to relax and enjoy quiet moments with his family.",
    personality: ["Calm", "Friendly", "Relaxed"],
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "8",
    name: "Boris",
    age: "2 years",
    breed: "Border Collie",
    size: "Medium",
    gender: "Male",
    description:
      "Boris is a highly intelligent and active dog who excels in agility and obedience training.",
    personality: ["Intelligent", "Active", "Obedient"],
    image:
      "https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "9",
    name: "Tyson",
    age: "5 years",
    breed: "Dalmatian",
    size: "Large",
    gender: "Male",
    description:
      "Tyson is a spotted beauty with lots of energy and a playful spirit. Great with active families.",
    personality: ["Energetic", "Playful", "Loyal"],
    image:
      "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "10",
    name: "Lisa",
    age: "5 years",
    breed: "Australian Cattle Dog",
    size: "Medium",
    gender: "Female",
    description:
      "Lisa is a working breed who loves having a job to do. She is perfect for an active lifestyle.",
    personality: ["Hardworking", "Loyal", "Energetic"],
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "11",
    name: "Mila",
    age: "7 years",
    breed: "Basset Hound",
    size: "Medium",
    gender: "Female",
    description:
      "Mila is a senior dog with a gentle soul. She loves quiet walks and cozy naps.",
    personality: ["Gentle", "Calm", "Loving"],
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "12",
    name: "Snizka",
    age: "2 years",
    breed: "Chihuahua Mix",
    size: "Small",
    gender: "Female",
    description:
      "Snizka may be small, but she has a big personality. She loves to be the center of attention.",
    personality: ["Confident", "Playful", "Affectionate"],
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

const DogCard: React.FC<{ dog: Dog; onAdoptClick: (dog: Dog) => void }> = ({
  dog,
  onAdoptClick,
}) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={dog.image}
          alt={dog.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 text-gray-800">
            {dog.size}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge
            variant={dog.gender === "Male" ? "default" : "secondary"}
            className={
              dog.gender === "Male"
                ? "bg-blue-100 text-blue-800"
                : "bg-pink-100 text-pink-800"
            }
          >
            {dog.gender}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">{dog.name}</h3>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-1" />
            {dog.age}
          </div>
        </div>
        <p className="text-sm text-gray-600">{dog.breed}</p>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">
          {dog.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {dog.personality.slice(0, 3).map((trait, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {trait}
            </Badge>
          ))}
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-amber-600 hover:bg-amber-700">
              <Heart className="mr-2 h-4 w-4" />
              Learn More
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{dog.name}</DialogTitle>
              <DialogDescription>
                {dog.breed} • {dog.age} • {dog.gender}
              </DialogDescription>
            </DialogHeader>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">About {dog.name}</h4>
                  <p className="text-sm text-gray-600">{dog.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Personality Traits</h4>
                  <div className="flex flex-wrap gap-2">
                    {dog.personality.map((trait, index) => (
                      <Badge key={index} variant="secondary">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Ruler className="h-4 w-4 mr-2 text-amber-600" />
                    <span>{dog.size}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-amber-600" />
                    <span>{dog.gender}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-amber-600" />
                    <span>{dog.age}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-amber-600" />
                    <span>Available</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700"
                  onClick={() => onAdoptClick(dog)}
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Start Adoption Process
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

const DogGallerySection: React.FC<DogGallerySectionProps> = () => {
  const [dogs] = useState<Dog[]>(mockDogs);
  const [filteredDogs, setFilteredDogs] = useState<Dog[]>(mockDogs);
  const [sizeFilter, setSizeFilter] = useState<string>("all");
  const [genderFilter, setGenderFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 6;

  const handleAdoptClick = (dog: Dog) => {
    alert(
      `Starting adoption process for ${dog.name}! Please contact us at (555) 123-PAWS for more information.`,
    );
  };

  const applyFilters = () => {
    let filtered = dogs;

    if (sizeFilter !== "all") {
      filtered = filtered.filter((dog) => dog.size === sizeFilter);
    }

    if (genderFilter !== "all") {
      filtered = filtered.filter((dog) => dog.gender === genderFilter);
    }

    setFilteredDogs(filtered);
    setCurrentPage(1);
  };

  React.useEffect(() => {
    applyFilters();
  }, [sizeFilter, genderFilter, dogs]);

  const totalPages = Math.ceil(filteredDogs.length / dogsPerPage);
  const startIndex = (currentPage - 1) * dogsPerPage;
  const currentDogs = filteredDogs.slice(startIndex, startIndex + dogsPerPage);

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Dogs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Each of our dogs has a unique story and is looking for their forever
            home. Browse through our available dogs and find your perfect
            companion.
          </p>

          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-600">
                {dogs.length}
              </div>
              <div className="text-sm text-gray-600">Dogs Available</div>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            <div>
              <div className="text-3xl font-bold text-amber-600">168</div>
              <div className="text-sm text-gray-600">
                Dogs Looking for Homes
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">
              Filter by:
            </span>
          </div>

          <Select value={sizeFilter} onValueChange={setSizeFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sizes</SelectItem>
              <SelectItem value="Small">Small</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Large">Large</SelectItem>
            </SelectContent>
          </Select>

          <Select value={genderFilter} onValueChange={setGenderFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genders</SelectItem>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Dogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentDogs.map((dog) => (
            <DogCard key={dog.id} dog={dog} onAdoptClick={handleAdoptClick} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>

            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={
                      currentPage === page
                        ? "bg-amber-600 hover:bg-amber-700"
                        : ""
                    }
                  >
                    {page}
                  </Button>
                ),
              )}
            </div>

            <Button
              variant="outline"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export { DogGallerySection };

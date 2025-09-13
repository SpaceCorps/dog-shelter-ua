import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { DogGallerySection } from "./components/DogGallerySection";
import { AdoptionProcessSection } from "./components/AdoptionProcessSection";
import { SuccessStoriesSection } from "./components/SuccessStoriesSection";
import { ContactSection } from "./components/ContactSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <Header
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <main>
        {currentSection === "home" && (
          <HeroSection setCurrentSection={setCurrentSection} />
        )}
        {currentSection === "gallery" && <DogGallerySection />}
        {currentSection === "adoption" && <AdoptionProcessSection />}
        {currentSection === "stories" && <SuccessStoriesSection />}
        {currentSection === "contact" && <ContactSection />}
        {currentSection === "faq" && <FAQSection />}
      </main>
      <Footer />
    </div>
  );
}

export default App;

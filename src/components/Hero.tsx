import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Github, Linkedin, Send, Youtube } from "lucide-react";
import ContactDialog from "./ContactDialog";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref} 
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{
        backgroundImage: 'url(/lovable-uploads/379a545e-3066-49e6-bdc1-bf5070c81743.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Top Navigation */}
      <nav className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-8">
          <Button variant="ghost" className="text-white hover:text-orange font-medium">Home</Button>
          <Button variant="ghost" className="text-white hover:text-orange">About</Button>
          <Button variant="ghost" className="text-white hover:text-orange">Resume</Button>
          <Button variant="ghost" className="text-white hover:text-orange">Portfolio</Button>
          <Button variant="ghost" className="text-white hover:text-orange">Testimonial</Button>
          <Button variant="ghost" className="text-white hover:text-orange">Contact</Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
          I'm <span className="text-orange">Jonathon</span> Doe
        </h1>
        
        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-orange hover:bg-orange/20 transition-all cursor-pointer">
            <Github className="w-5 h-5" />
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-orange hover:bg-orange/20 transition-all cursor-pointer">
            <Send className="w-5 h-5" />
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-orange hover:bg-orange/20 transition-all cursor-pointer">
            <Youtube className="w-5 h-5" />
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-orange hover:bg-orange/20 transition-all cursor-pointer">
            <Linkedin className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Contact Me Button */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <ContactDialog>
          <Button 
            size="lg"
            className="bg-orange hover:bg-orange/90 text-white px-8 py-3 font-medium"
          >
            CONTACT ME
          </Button>
        </ContactDialog>
      </div>
    </section>
  );
};

export default Hero;
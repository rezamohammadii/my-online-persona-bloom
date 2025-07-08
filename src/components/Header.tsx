import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-foreground">TRETO</div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Button variant="ghost" className="text-orange font-medium">HOME</Button>
            <Button variant="ghost" className="text-foreground hover:text-orange">PRICES</Button>
            <Button variant="ghost" className="text-foreground hover:text-orange">PORTFOLIO</Button>
            <Button variant="ghost" className="text-foreground hover:text-orange">BLOG</Button>
            <Button variant="ghost" className="text-foreground hover:text-orange">CONTACT ME</Button>
          </nav>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <Facebook className="w-5 h-5 text-foreground hover:text-orange cursor-pointer" />
            <Instagram className="w-5 h-5 text-foreground hover:text-orange cursor-pointer" />
            <Linkedin className="w-5 h-5 text-foreground hover:text-orange cursor-pointer" />
            <Youtube className="w-5 h-5 text-foreground hover:text-orange cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'var(--dots-pattern)',
          backgroundSize: '20px 20px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-text-light tracking-wider uppercase">
                GRAPHIC <span className="text-orange">AND</span> WEB DEVELOPER
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                SOPHIE MILLER
              </h1>
            </div>
            
            <p className="text-lg text-text-light max-w-md">
              From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
              >
                PORTFOLIO
              </Button>
              <Button 
                size="lg"
                className="bg-orange hover:bg-orange/90 text-orange-foreground"
              >
                CONTACT ME
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <img 
                src="/lovable-uploads/c90ecbe4-529d-4306-b7cb-9b768df551a6.png"
                alt="Sophie Miller"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
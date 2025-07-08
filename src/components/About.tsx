import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'var(--dots-pattern)',
          backgroundSize: '20px 20px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-md border-4 border-foreground">
              <img 
                src="/lovable-uploads/341bdf11-7c4a-406a-9dbc-d77da90f9ae0.png"
                alt="Sophie Miller waving"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-orange tracking-wider uppercase">
                HELLO, MY NAME IS
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                SOPHIE MILLER
              </h2>
            </div>
            
            <div className="space-y-6 text-text-light">
              <p>
                From France, Paris. I have rich experience in web design, also I am good at React, Vue.js. I love to talk with you about our unique. I have been studying UI UX Design since October 2020. I like creating a cool design project.
              </p>
              <p>
                Over 6+ years of IT experience which includes 2+ years of a React JS Developer and 3 years of Experience as a UI/UX Developer and 1 years of Experience as software Developer.
              </p>
            </div>
            
            <Button 
              size="lg"
              className="bg-orange hover:bg-orange/90 text-orange-foreground"
            >
              DOWNLOAD CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className={`py-20 bg-gradient-to-t from-primary/5 via-background to-accent/10 relative overflow-hidden transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'var(--dots-pattern)',
          backgroundSize: '20px 20px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content - Contact Info */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-orange tracking-wider uppercase mb-4">
                CONTACT <span className="text-foreground">ME</span>
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                LET'S GET YOU AN ESTIMATE
              </h2>
            </div>
            
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="border-2 border-foreground p-6 space-y-3">
                <h3 className="font-bold text-foreground">EMAIL</h3>
                <div className="space-y-1 text-text-light">
                  <p>hello@treto.co</p>
                  <p>projects@treto.co</p>
                </div>
              </div>
              
              <div className="border-2 border-foreground p-6 space-y-3">
                <h3 className="font-bold text-foreground">PHONE</h3>
                <div className="space-y-1 text-text-light">
                  <p>+ 56 3636 60 60</p>
                  <p>+ 56 6363 06 06</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Contact Form */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
                  YOUR FULL NAME <span className="text-orange">*</span>
                </Label>
                <Input 
                  id="fullName"
                  className="border-2 border-muted focus:border-orange"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  YOUR EMAIL ADDRESS <span className="text-orange">*</span>
                </Label>
                <Input 
                  id="email"
                  type="email"
                  className="border-2 border-muted focus:border-orange"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-foreground">
                YOUR MESSAGE <span className="text-orange">*</span>
              </Label>
              <Textarea 
                id="message"
                rows={6}
                className="border-2 border-muted focus:border-orange resize-none"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <p className="text-sm text-text-light">
                by sending, I accept the{" "}
                <a href="#" className="text-orange underline">
                  terms and conditions
                </a>
                .
              </p>
              
              <Button 
                size="lg"
                className="bg-orange hover:bg-orange/90 text-orange-foreground px-8"
              >
                SUBMIT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
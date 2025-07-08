import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const educationData = [
  {
    title: "BACKEND PROGRAMMING",
    period: "2020 TO 2021",
    description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged."
  },
  {
    title: "MASTER IN GRAPHIC",
    period: "2019 TO 2020", 
    description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged."
  },
  {
    title: "BACHELORS OF FINEART",
    period: "2017 TO 2018",
    description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged."
  }
];

const Education = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const { ref, isVisible } = useScrollAnimation();
  
  const toggleExpand = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section ref={ref} className={`py-20 relative overflow-hidden transition-all duration-700 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
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
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-text-light tracking-wider uppercase mb-4">
                CERTIFICATES
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                EDUCATION
              </h2>
            </div>
            
            <div className="max-w-md text-text-light">
              Extensive education in developing web pages using: HTML5, CSS3, SASS, JavaScript, React JS, Angular JS, JQuery, JSON, Node.js, Bootstrap.
            </div>
          </div>
          
          {/* Right Content - Education Items */}
          <div className="space-y-6">
            {educationData.map((item, index) => (
              <div key={index} className="border-b border-border pb-6">
                <div className="flex items-start gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 border-2 border-foreground shrink-0"
                    onClick={() => toggleExpand(index)}
                  >
                    <Plus className={`w-5 h-5 transition-transform ${expandedItems.includes(index) ? 'rotate-45' : ''}`} />
                  </Button>
                  
                  <div className="flex-1 space-y-2">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-orange">
                        {item.period}
                      </p>
                    </div>
                    
                    {expandedItems.includes(index) && (
                      <p className="text-text-light animate-fade-in">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
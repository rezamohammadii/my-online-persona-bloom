import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experienceData = [
  [
    {
      title: "FREELANCE",
      period: "TODAY",
      description: "It has survived not only five centuries, but also the leap into electronic typesetting."
    },
    {
      title: "AGENCY MACLL",
      period: "2019 TO 2022",
      description: "It has survived not only five centuries, but also the leap into electronic typesetting."
    },
    {
      title: "ENVATO",
      period: "2017 TO 2019",
      description: "It has survived not only five centuries, but also the leap into electronic typesetting."
    }
  ],
  [
    {
      title: "SENIOR DEVELOPER",
      period: "2016 TO 2017",
      description: "It has survived not only five centuries, but also the leap into electronic typesetting."
    },
    {
      title: "JUNIOR DEVELOPER",
      period: "2014 TO 2016", 
      description: "It has survived not only five centuries, but also the leap into electronic typesetting."
    },
    {
      title: "INTERN",
      period: "2013 TO 2014",
      description: "It has survived not only five centuries, but also the leap into electronic typesetting."
    }
  ]
];

const Experience = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % experienceData.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + experienceData.length) % experienceData.length);
  };

  return (
    <section ref={ref} className={`py-20 relative overflow-hidden transition-all duration-700 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'var(--dots-pattern)',
          backgroundSize: '20px 20px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm font-medium text-text-light tracking-wider uppercase mb-4">
                A DECADE OF <span className="text-orange">WORK</span>
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                EXPERIENCE
              </h2>
              <p className="text-text-light mt-4 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-foreground">
                {currentPage + 1} / {experienceData.length}
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevPage}
                  className="border-2 border-foreground"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextPage}
                  className="border-2 border-foreground"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Experience Grid */}
          <div className="border-t border-border pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experienceData[currentPage].map((exp, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-orange">
                      {exp.period}
                    </p>
                  </div>
                  <p className="text-text-light">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
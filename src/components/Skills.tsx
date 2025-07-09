import { Progress } from "@/components/ui/progress";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  { name: "FIGMA", percentage: 60, icon: "🎨" },
  { name: "PHP / C++", percentage: 80, icon: "💻" },
  { name: "JAVASCRIPT", percentage: 75, icon: "⚡" },
  { name: "REACT / NEXTJS", percentage: 75, icon: "⚛️" },
  { name: "HTML5 / CSS3", percentage: 90, icon: "🌐" },
  { name: "VUE.JS", percentage: 55, icon: "💚" },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className={`py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 relative overflow-hidden transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'var(--dots-pattern)',
          backgroundSize: '20px 20px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-text-light tracking-wider uppercase mb-4">
            MY GREAT <span className="text-orange">WORK</span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            ABILITY OR SKILL
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center text-lg">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-orange font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-orange h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
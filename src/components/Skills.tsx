import { Code, Database, Palette, Brain, Zap, Monitor } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["HTML5", "CSS3", "JavaScript ES6", "React.js", "Tailwind CSS", "Bootstrap"],
      description: "Building responsive, interactive web experiences",
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: ["SQL", "Database Design", "API Integration"],
      description: "Managing data and server-side logic",
      color: "from-green-600 to-emerald-600",
    },
    {
      title: "Design & UX",
      icon: Palette,
      skills: ["UI/UX Design", "Responsive Design", "User Research", "Prototyping"],
      description: "Creating beautiful, user-centered interfaces",
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Problem Solving",
      icon: Brain,
      skills: ["Data Structures", "Algorithms", "Logic Building", "Debugging"],
      description: "Analytical thinking and efficient solutions",
      color: "from-orange-600 to-red-600",
    },
    {
      title: "Development Tools",
      icon: Monitor,
      skills: ["Git & GitHub", "VS Code", "Chrome DevTools", "Netlify"],
      description: "Modern development workflow",
      color: "from-indigo-600 to-purple-600",
    },
    {
      title: "Currently Learning",
      icon: Zap,
      skills: ["Node.js", "TypeScript", "Three.js", "Mobile Development"],
      description: "Expanding my technical horizons",
      color: "from-yellow-600 to-orange-600",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Netflix-Style Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-foreground" 
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
            My <span className="text-netflix-glow">Skills</span>
          </h2>
          <div className="section-divider-netflix"></div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Browse my technical skills like Netflix categories. Each skill represents hours of learning, 
            practice, and real-world application in building modern web experiences.
          </p>
        </div>

        {/* Netflix-Style Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="skill-category group cursor-pointer">
              <CardContent className="p-6 h-full">
                {/* Category Header */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl 
                                 flex items-center justify-center mb-4 group-hover:scale-110 
                                 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 
                               transition-all duration-300 group/skill"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full 
                                     group-hover/skill:scale-125 transition-transform`}></div>
                      <span className="text-sm font-medium text-foreground group-hover/skill:text-primary 
                                     transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Netflix-style hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 
                               group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Journey Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">My Learning Journey</h3>
          <Card className="netflix-card bg-card border-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-primary mb-4">Current Focus</h4>
                  <div className="space-y-3">
                    {["Mahakal Institute of Technology", "B.Tech Computer Science (2022-2026)", 
                      "CGPA: 6.92 | Current SGPA: 8.21", "Final Year Student"].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-4">Next Goals</h4>
                  <div className="space-y-3">
                    {["Master UI/UX Design Tools", "Build Full-Stack Applications", 
                      "Contribute to Open Source", "Launch Personal Projects"].map((goal, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
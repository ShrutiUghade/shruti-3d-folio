import { GraduationCap, MapPin, Calendar, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Mahakal Institute of Technology, Ujjain",
      year: "2022 - 2026",
      status: "Final Year",
      icon: GraduationCap,
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Padmaja Higher Secondary School",
      year: "2022",
      status: "Completed",
      icon: GraduationCap,
    },
    {
      degree: "Secondary (10th)",
      institution: "Padmaja Higher Secondary School", 
      year: "2020",
      status: "Completed",
      icon: GraduationCap,
    },
  ];

  const goals = [
    "Master UI/UX Design principles",
    "Build scalable web applications",
    "Contribute to open-source projects",
    "Develop mobile applications",
  ];

  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        {/* Netflix-Style Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-foreground" 
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
            About <span className="text-netflix-glow">Me</span>
          </h2>
          <div className="section-divider-netflix"></div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Discover my journey from a curious student to a passionate developer. 
            Like a Netflix series, every episode of my learning story builds toward something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <div className="space-y-8">
            <Card className="card-3d bg-card border-card-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Personal Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Dewas, Madhya Pradesh, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>B.Tech CS Student (2022-2026)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-primary" />
                    <span>Aspiring Frontend Developer & UI/UX Designer</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-3d bg-card border-card-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Learning Goals</h3>
                <div className="grid grid-cols-1 gap-3">
                  {goals.map((goal, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                      <span>{goal}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center lg:text-left text-primary">Education Journey</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start gap-6 pb-8">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full">
                    <edu.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content Card */}
                  <Card className="flex-1 card-3d bg-card border-card-border">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold">{edu.degree}</h4>
                        <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-1">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
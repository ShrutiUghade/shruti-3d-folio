import { Code, Palette, Smartphone, Search, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive, interactive websites using modern technologies like React.js, HTML5, CSS3, and JavaScript.",
      skills: ["React.js", "HTML/CSS", "JavaScript", "Responsive Design"],
      status: "Available",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, user-friendly interfaces with a focus on user experience and modern design principles.",
      skills: ["Design Principles", "User Research", "Prototyping", "Visual Design"],
      status: "Learning",
    },
    {
      icon: Smartphone,
      title: "Responsive Web Design",
      description: "Ensuring your website looks and works perfectly on all devices, from mobile phones to desktop computers.",
      skills: ["Mobile-First", "CSS Grid", "Flexbox", "Media Queries"],
      status: "Available",
    },
    {
      icon: Search,
      title: "Web Performance",
      description: "Optimizing websites for speed, performance, and search engine visibility to provide the best user experience.",
      skills: ["Performance Optimization", "SEO Basics", "Code Optimization", "Best Practices"],
      status: "Learning",
    },
    {
      icon: Zap,
      title: "Modern Web Technologies",
      description: "Implementing cutting-edge web technologies and frameworks to create dynamic, interactive web applications.",
      skills: ["Modern JavaScript", "CSS Frameworks", "Build Tools", "Version Control"],
      status: "Available",
    },
    {
      icon: Users,
      title: "Collaborative Development",
      description: "Working effectively in teams, following best practices for code collaboration and project management.",
      skills: ["Git/GitHub", "Team Collaboration", "Code Reviews", "Agile Methods"],
      status: "Available",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-500/20 text-green-400";
      case "Learning":
        return "bg-yellow-500/20 text-yellow-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Netflix-Style Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-foreground" 
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Services & <span className="text-netflix-glow">Expertise</span>
          </h2>
          <div className="section-divider-netflix"></div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Browse my services like Netflix originals. Each offering represents my commitment to 
            quality, innovation, and creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-3d bg-card border-card-border group">
              <CardContent className="p-8 text-center space-y-6">
                {/* Icon */}
                <div className="relative mx-auto w-16 h-16">
                  <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative z-10 w-full h-full bg-gradient-primary rounded-full flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Title and Status */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(service.status)}`}>
                    {service.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Skills */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-primary">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-muted text-xs rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Journey */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto card-3d bg-card border-card-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Learning Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                As a final-year computer science student, I'm constantly evolving and learning new technologies. 
                While I'm proficient in frontend development, I'm actively expanding my skills in UI/UX design, 
                backend technologies, and modern web development practices.
              </p>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-semibold text-green-400 mb-3">Currently Offering:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Frontend Development (React.js, HTML, CSS, JS)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Responsive Web Design
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Modern Web Technologies
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-3">Currently Learning:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      UI/UX Design & Prototyping
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      Backend Development (Node.js)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      Advanced Web Performance
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
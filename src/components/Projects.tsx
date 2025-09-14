import { ExternalLink, Github, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Interactive Web Application",
      year: "2024",
      description: "A clean, responsive web application with dynamic features built using React.js. Features modern UI components, state management, and seamless user interactions.",
      technologies: ["React.js", "CSS", "JavaScript", "Responsive Design"],
      features: [
        "Dynamic user interface",
        "Responsive design",
        "Interactive components",
        "Modern styling",
      ],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Voice-Activated Virtual Assistant",
      year: "2025",
      description: "An innovative voice-controlled assistant that integrates with external services. Built with modern web technologies to provide seamless voice interaction capabilities.",
      technologies: ["JavaScript", "Web Speech API", "External APIs", "HTML", "CSS"],
      features: [
        "Voice recognition",
        "External service integration",
        "Real-time responses",
        "Cross-platform compatibility",
      ],
      liveUrl: "https://virtual-assistant-shruti.netlify.app/",
      githubUrl: "#",
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Novaspace",
      year: "2025",
      description: "A responsive marketing website showcasing modern web design principles. Built with vanilla HTML, CSS, and JavaScript focusing on performance and user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: [
        "Modern design",
        "Responsive layout",
        "Smooth animations",
        "Cross-browser compatibility",
      ],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="section-divider"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project represents my journey in learning and applying new technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-3d bg-card border-card-border overflow-hidden group">
              <CardContent className="p-0">
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-black/30 text-white text-sm rounded-full">
                      <Calendar className="h-3 w-3" />
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center px-4">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-primary">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-primary">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
          <p className="text-muted-foreground mb-6">
            Check out my GitHub profile for more projects and contributions
          </p>
          <Button size="lg" variant="outline" className="btn-hero">
            <Github className="mr-2 h-5 w-5" />
            View GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { Play, Github, Calendar, Code, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Interactive Web Application",
      year: "2024",
      description: "A modern, responsive web application featuring dynamic UI components, state management, and seamless user interactions built with React.js and modern web technologies.",
      technologies: ["React.js", "CSS3", "JavaScript ES6", "Responsive Design"],
      features: [
        "Dynamic user interface with smooth animations",
        "Responsive design for all device sizes",
        "Interactive components with state management",
        "Modern styling with CSS3 features",
      ],
      liveUrl: "https://shrutiughade.github.io/Interactive-Web-Application/",
      githubUrl: "https://github.com/ShrutiUghade/Interactive-Web-Application",
      category: "Web Development",
      status: "Completed",
      gradient: "from-blue-600 via-purple-600 to-indigo-600",
    },
    {
      title: "Voice-Activated Virtual Assistant",
      year: "2025",
      description: "An innovative AI-powered virtual assistant with voice recognition capabilities, external API integrations, and real-time response system built with cutting-edge web technologies.",
      technologies: ["JavaScript", "Web Speech API", "External APIs", "Python Integration"],
      features: [
        "Advanced voice recognition system",
        "Real-time API integrations",
        "Intelligent response generation",
        "Cross-platform compatibility",
      ],
      liveUrl: "https://github.com/ShrutiUghade/Voice-Assistant",
      githubUrl: "https://github.com/ShrutiUghade/Voice-Assistant",
      category: "AI & Machine Learning",
      status: "Live",
      gradient: "from-green-600 via-teal-600 to-cyan-600",
    },
    {
      title: "Novaspace",
      year: "2025",
      description: "A stunning marketing website showcasing modern web design principles with emphasis on performance, accessibility, and user experience. Built with vanilla technologies for optimal speed.",
      technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "Performance Optimization"],
      features: [
        "Ultra-fast loading performance",
        "Modern responsive design",
        "Smooth scroll animations",
        "SEO optimized structure",
      ],
      liveUrl: "https://shrutiughade.github.io/Novaspace/",
      githubUrl: "https://github.com/ShrutiUghade/Novaspace",
      category: "Web Design",
      status: "Completed",
      gradient: "from-pink-600 via-rose-600 to-red-600",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        {/* Netflix-Style Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-foreground" 
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
            My <span className="text-netflix-glow">Projects</span>
          </h2>
          <div className="section-divider-netflix"></div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explore my portfolio like a streaming library. Each project represents a unique story 
            of learning, creativity, and technical growth in my development journey.
          </p>
        </div>

        {/* Netflix-Style Projects Grid */}
        <div className="netflix-scroll">
          {projects.map((project, index) => (
            <Card key={index} className="project-card group">
              <CardContent className="p-0 h-full">
                {/* Project Thumbnail Header */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30"></div>
                  
                  {/* Project Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-black/50 text-white text-xs rounded-full font-medium">
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-black/50 text-white text-xs rounded-full">
                      <Calendar className="h-3 w-3" />
                      {project.year}
                    </span>
                  </div>

                  {/* Project Title Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center px-4 group-hover:scale-110 transition-transform duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Netflix-Style Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="btn-netflix">
                      <Play className="mr-2 h-4 w-4" fill="currentColor" />
                      View Project
                    </Button>
                  </div>
                </div>

                {/* Project Info Panel */}
                <div className="p-6 space-y-4 bg-card flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                      <Code className="h-3 w-3" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground 
                                   hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-primary">Key Features</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 2).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="border-border hover:bg-muted" asChild>
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

        {/* Netflix-Style CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Interested in collaborating?</h3>
          <p className="text-muted-foreground mb-6">
            These projects represent just the beginning of my journey. Let's create something amazing together.
          </p>
          <Button size="lg" className="btn-netflix">
            <Github className="mr-2 h-5 w-5" />
            Explore More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { Play, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/shruti-profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="cinematic-bg"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl float-cinematic"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl float-cinematic" 
             style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/3 rounded-full blur-3xl float-cinematic" 
             style={{ animationDelay: "6s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Netflix-Style Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              {/* Netflix-Style Title */}
              <h1 className="netflix-title">
                <span className="block text-foreground">SHRUTI</span>
                <span className="block text-netflix-glow">UGHADE</span>
              </h1>
              
              {/* Netflix-Style Subtitle */}
              <p className="netflix-subtitle">
                Frontend Developer • Aspiring UI/UX Designer • Final-Year B.Tech CS
              </p>
              
              {/* Netflix-Style Description */}
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Crafting digital experiences with precision and creativity. 
                Computer Science student from Mahakal Institute of Technology, 
                passionate about building the future of web development.
              </p>
            </div>

            {/* Netflix-Style CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="btn-netflix group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" fill="currentColor" />
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground 
                         transition-all duration-300 font-semibold"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            {/* Contact Quick Access */}
            <div className="flex items-center gap-6 justify-center lg:justify-start text-muted-foreground">
              <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <Mail className="h-4 w-4" />
                <span className="text-sm">Dewas, Madhya Pradesh</span>
              </div>
              <div className="text-primary font-bold glow-netflix">
                +91 7225935700
              </div>
            </div>
          </div>

          {/* Netflix-Style Profile Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Netflix Glow Effect */}
              <div className="absolute inset-0 bg-gradient-red rounded-2xl blur-3xl opacity-20 pulse-netflix"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 netflix-card">
                <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-primary/30 
                               shadow-2xl relative group">
                  <img
                    src={profileImage}
                    alt="Shruti Ughade - Frontend Developer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Netflix-style overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-primary font-bold text-lg">Frontend Developer</p>
                      <p className="text-sm text-muted-foreground">Ready to create amazing experiences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Netflix-Style Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
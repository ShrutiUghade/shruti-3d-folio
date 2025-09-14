import { Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-card-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          {/* Main Footer Text */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 animate-pulse" />
            <span>and</span>
            <Code className="h-4 w-4 text-primary" />
            <span>by Shruti Ughade</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Shruti Ughade. All rights reserved.
          </p>

          {/* Additional Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-muted-foreground">
            <span>Final Year B.Tech CS Student</span>
            <span className="hidden sm:block">•</span>
            <span>Dewas, Madhya Pradesh</span>
            <span className="hidden sm:block">•</span>
            <span>Frontend Developer & Aspiring UI/UX Designer</span>
          </div>

          {/* Quote */}
          <div className="pt-4 border-t border-card-border">
            <p className="text-sm text-primary italic">
              "Building the web, one line of code at a time."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
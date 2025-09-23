import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you can add actual form submission logic
    // For now, we'll simulate a successful submission
    try {
      // You can integrate with email services like EmailJS, Formspree, or your backend
      console.log("Form Data:", formData);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7225935700",
      href: "tel:+917225935700",
    },
    {
      icon: Mail,
      label: "Email",
      value: "shrutiughade01@gmail.com",
      href: "mailto:shrutiughade01@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dewas, Madhya Pradesh",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ShrutiUghade",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/shrutiughade",
      color: "hover:text-blue-400",
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      href: "#",
      color: "hover:text-primary",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        {/* Netflix-Style Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-foreground" 
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Get In <span className="text-netflix-glow">Touch</span>
          </h2>
          <div className="section-divider-netflix"></div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Ready to collaborate? Let's create something amazing together. Whether you have a project in mind 
            or just want to connect, I'm always excited to discuss new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently in my final year of B.Tech Computer Science and actively looking for 
                opportunities to apply my skills in real-world projects. Whether you're looking for 
                a frontend developer, have a project in mind, or want to discuss technology, 
                I'd love to hear from you!
              </p>
            </div>

            {/* Netflix-Style Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="netflix-card bg-card border-border">
                  <CardContent className="p-6">
                    <a
                      href={info.href}
                      className="flex items-center gap-4 hover:text-primary transition-colors group"
                    >
                      <div className="p-3 bg-gradient-red rounded-lg group-hover:scale-110 transition-transform glow-netflix">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-semibold text-foreground">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="card-3d bg-card border-card-border">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Find me online</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-muted rounded-lg transition-all hover:scale-110 ${social.color}`}
                      title={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-3d bg-card border-card-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full btn-netflix group">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
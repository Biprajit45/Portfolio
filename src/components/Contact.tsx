import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Coffee } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_yjv0a5b';
const TEMPLATE_ID = 'template_u63wv0l';
const PUBLIC_KEY = 'ePo3qLxbsVptK1kFo';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'biprajitsuklabaidya@gmail.com',
      href: 'mailto:biprajitsuklabaidya@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-6033228900',
      href: 'tel:+916033228900',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Noida, India 🇮🇳',
      href: '#',
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        form.reset();
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <Badge variant="secondary" className="bg-glass border-glass backdrop-blur-glass">
            <Coffee className="w-4 h-4 mr-2" />
            Let's Work Together
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-glass border-glass backdrop-blur-glass animate-fade-up transition-transform duration-300 hover:scale-105 hover:shadow-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6" role="form" aria-label="Contact form">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      aria-label="Your name"
                      className="bg-glass border-glass backdrop-blur-glass focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      aria-label="Your email"
                      className="bg-glass border-glass backdrop-blur-glass focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    aria-label="Subject"
                    className="bg-glass border-glass backdrop-blur-glass focus:border-primary"
                    placeholder="Project discussion"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    aria-label="Message"
                    className="bg-glass border-glass backdrop-blur-glass focus:border-primary resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  aria-label="Send Message"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-up delay-300">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-glass border-glass backdrop-blur-glass hover:bg-primary/10 transition-all duration-300 group"
                  aria-label={label + ': ' + value}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{label}</h4>
                    <p className="text-muted-foreground">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <Card className="bg-glass border-glass backdrop-blur-glass">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse-slow" />
                  <div>
                    <h4 className="font-medium text-foreground">Available for work</h4>
                    <p className="text-sm text-muted-foreground">
                      Currently accepting new projects and collaborations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
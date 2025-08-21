import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Star, Clock, Phone, Mail, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    description: '',
    urgency: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.phone) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and phone are required for your free estimate.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Estimate request submitted!",
      description: "We'll contact you within 24 hours with your free estimate.",
    });

    // Navigate to thank you page
    setTimeout(() => {
      navigate('/thank-you');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Jason's Roofing Co</h1>
              <p className="text-sm text-muted-foreground">Licensed & Insured</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(555) 123-ROOF</span>
            </div>
            <Button variant="outline" size="sm">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://pub.overskill.com/app-1202/production/src/assets/hero-roofing.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            <Star className="w-4 h-4 mr-1" />
            5-Star Rated Roofing Company
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get Your <span className="text-[hsl(var(--roofing-orange))]">Free Roofing</span><br />
            Estimate Today
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Professional residential and commercial roofing services. 
            Licensed, insured, and trusted by thousands of homeowners.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center space-x-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-[hsl(var(--roofing-orange))]" />
              <span>Free Estimates</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-[hsl(var(--roofing-orange))]" />
              <span>24/7 Emergency Service</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-[hsl(var(--roofing-orange))]" />
              <span>Licensed & Insured</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-[hsl(var(--roofing-orange))] hover:bg-[hsl(var(--roofing-orange))]/90 text-white border-0 px-8 py-6 text-lg font-semibold shadow-lg"
            onClick={() => document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Free Estimate Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Roofing Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From repairs to complete replacements, we handle all your roofing needs with precision and care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card transition-smooth hover:shadow-roofing">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-[hsl(var(--roofing-blue))]" />
                  <span>Roof Replacement</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Complete roof replacement with premium materials and expert installation.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card transition-smooth hover:shadow-roofing">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-[hsl(var(--roofing-orange))]" />
                  <span>Roof Repair</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Quick and reliable roof repairs to fix leaks and damage.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card transition-smooth hover:shadow-roofing">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-[hsl(var(--roofing-blue))]" />
                  <span>Emergency Service</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">24/7 emergency roofing services for urgent repairs and storm damage.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Estimate Form */}
      <section id="estimate-form" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Estimate</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll contact you within 24 hours with a detailed estimate.
            </p>
          </div>
          
          <Card className="shadow-roofing">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Property Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="123 Main St, City, State, ZIP"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Needed</Label>
                    <Select onValueChange={(value) => handleInputChange('serviceType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="replacement">Complete Roof Replacement</SelectItem>
                        <SelectItem value="repair">Roof Repair</SelectItem>
                        <SelectItem value="inspection">Roof Inspection</SelectItem>
                        <SelectItem value="maintenance">Roof Maintenance</SelectItem>
                        <SelectItem value="emergency">Emergency Service</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="urgency">Timeline</Label>
                    <Select onValueChange={(value) => handleInputChange('urgency', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you need this done?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP / Emergency</SelectItem>
                        <SelectItem value="week">Within a week</SelectItem>
                        <SelectItem value="month">Within a month</SelectItem>
                        <SelectItem value="flexible">Flexible timeline</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Project Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Tell us about your roofing project, any specific concerns, or damage you've noticed..."
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-[hsl(var(--roofing-orange))] hover:bg-[hsl(var(--roofing-orange))]/90 text-white font-semibold py-6 text-lg"
                >
                  Get My Free Estimate
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Licensed & Insured</h3>
              <p className="text-sm text-muted-foreground">Fully licensed and insured for your protection</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">5-Star Rated</h3>
              <p className="text-sm text-muted-foreground">Hundreds of satisfied customers</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Quick Response</h3>
              <p className="text-sm text-muted-foreground">24-hour estimate turnaround</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Quality Guarantee</h3>
              <p className="text-sm text-muted-foreground">Warranty on all work performed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">Jason's Roofing Co</h3>
                  <p className="text-sm text-muted-foreground">Professional Roofing Services</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Serving the community with quality roofing solutions for over 15 years.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-ROOF</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>info@jasonsroofing.com</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>123 Business Ave, Your City, ST</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Service Areas</h4>
              <p className="text-muted-foreground">
                We proudly serve the greater metropolitan area and surrounding communities. 
                Call us to confirm service in your area.
              </p>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Jason's Roofing Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
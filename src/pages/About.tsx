import { useState } from 'react';
import { Header } from '@/components/Header';
import { Cart } from '@/components/Cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Truck, RefreshCw, Heart, Users, Award } from 'lucide-react';
import { MobileNavigation } from '@/components/MobileNavigation';

const About = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'Your data is protected with enterprise-grade security'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Free shipping on orders over $50 with express options'
    },
    {
      icon: RefreshCw,
      title: 'Easy Returns',
      description: '30-day hassle-free returns on all products'
    },
    {
      icon: Heart,
      title: 'Customer Care',
      description: '24/7 support from our dedicated team'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join thousands of satisfied customers'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'Premium products with lifetime warranty'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={() => setIsMobileMenuOpen(true)}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            About ShopHub
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            We're passionate about bringing you the finest products with exceptional service. 
            Since 2020, we've been committed to quality, innovation, and customer satisfaction.
          </p>
          <Button size="lg" variant="secondary">
            Get in Touch
          </Button>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                ShopHub was founded with a simple mission: to make premium products accessible 
                to everyone. What started as a small venture has grown into a trusted platform 
                serving customers worldwide.
              </p>
              <p className="text-muted-foreground mb-6">
                We carefully curate every product in our catalog, working directly with 
                manufacturers and artisans to ensure the highest quality standards. Our team 
                is dedicated to providing an exceptional shopping experience from browsing 
                to delivery.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-8">
              <img 
                src="/src/assets/camera.jpg" 
                alt="Our team"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose ShopHub?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We go above and beyond to ensure your shopping experience is exceptional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Contact Support</Button>
            <Button variant="outline" size="lg">Visit FAQ</Button>
          </div>
        </div>
      </section>

      <MobileNavigation 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default About;
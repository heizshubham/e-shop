import { Button } from '@/components/ui/button';
import { ShoppingBag, Star, TrendingUp } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
}

export const Hero = ({ onShopNow }: HeroProps) => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-hero text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">Premium Products • Fast Shipping • Best Prices</span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Shop Premium
              <span className="block bg-gradient-to-r from-secondary-light to-secondary bg-clip-text text-transparent">
                Products
              </span>
              Online
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto">
              Discover our curated collection of high-quality products. From electronics to fashion, find everything you need in one place.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold">10K+</div>
              <div className="text-sm text-primary-foreground/80">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold">5K+</div>
              <div className="text-sm text-primary-foreground/80">Products</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-1">
                4.9 <Star className="h-5 w-5 fill-current" />
              </div>
              <div className="text-sm text-primary-foreground/80">Rating</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="xl"
              className="text-lg font-semibold shadow-glow hover:scale-105"
              onClick={onShopNow}
            >
              <ShoppingBag className="h-5 w-5" />
              Shop Now
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              className="text-lg font-semibold bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20"
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-8 text-sm text-primary-foreground/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              Free Shipping
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              30-Day Returns
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              Secure Checkout
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Cart } from '@/components/Cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductGrid } from '@/components/ProductGrid';
import { MobileNavigation } from '@/components/MobileNavigation';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest gadgets and tech accessories',
    image: '/src/assets/headphones.jpg',
    count: 12
  },
  {
    id: 'fashion',
    name: 'Fashion',
    description: 'Trendy clothes and accessories',
    image: '/src/assets/backpack.jpg',
    count: 8
  },
  {
    id: 'home',
    name: 'Home & Garden',
    description: 'Everything for your living space',
    image: '/src/assets/camera.jpg',
    count: 15
  },
  {
    id: 'sports',
    name: 'Sports & Outdoors',
    description: 'Gear for active lifestyle',
    image: '/src/assets/smartwatch.jpg',
    count: 6
  }
];

const Categories = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (selectedCategory) {
    return (
      <div className="min-h-screen bg-background">
        <Header 
          onCartClick={() => setIsCartOpen(true)}
          onMenuClick={() => setIsMobileMenuOpen(true)}
        />
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="outline" 
              onClick={() => setSelectedCategory(null)}
            >
              ← Back to Categories
            </Button>
            <h1 className="text-3xl font-bold">
              {categories.find(c => c.id === selectedCategory)?.name}
            </h1>
          </div>
          
          <ProductGrid initialCategory={selectedCategory} />
        </div>

        <MobileNavigation 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
        />

        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={() => setIsMobileMenuOpen(true)}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            Shop by Category
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our carefully curated categories to find exactly what you're looking for
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105"
              onClick={() => setSelectedCategory(category.id)}
            >
              <CardHeader className="pb-2">
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
                  />
                </div>
                <CardTitle className="text-xl">{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {category.count} products
                  </span>
                  <Button variant="outline" size="sm">
                    Browse →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <MobileNavigation 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Categories;
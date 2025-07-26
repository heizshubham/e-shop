import { useState, useRef } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { Cart } from '@/components/Cart';
import { products, getFeaturedProducts } from '@/data/products';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Truck, Shield, RotateCcw } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { MobileNavigation } from '@/components/MobileNavigation';

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const productsRef = useRef<HTMLDivElement>(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCheckout = () => {
    // For now, just show an alert - Stripe integration will be added here
    alert('Checkout functionality will be available once Stripe is integrated. Please provide your Stripe requirements to proceed.');
  };

  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={() => setIsMobileMenuOpen(true)}
      />
      
      <main>
        {/* Hero Section */}
        <Hero onShopNow={scrollToProducts} />

        {/* Featured Products Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover our hand-picked selection of premium products
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <div key={product.id} className="animate-slide-up">
                  <div 
                    className="group overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-all duration-normal cursor-pointer bg-card"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-slow"
                      />
                      <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">
                        Featured
                      </Badge>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-warning text-warning" />
                          <span className="text-sm text-muted-foreground">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-bold text-primary">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                      
                      <Button 
                        variant="cart" 
                        size="lg" 
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product);
                        }}
                      >
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Products Section */}
        <section ref={productsRef} className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">All Products</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Browse our complete collection of premium products
              </p>
            </div>
            
            <ProductGrid 
              products={products}
              onProductClick={setSelectedProduct}
            />
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto shadow-glow">
                  <Truck className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Free Shipping</h3>
                <p className="text-muted-foreground">Free shipping on all orders over $50</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto shadow-glow">
                  <Shield className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Secure Checkout</h3>
                <p className="text-muted-foreground">Your payment information is always secure</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto shadow-glow">
                  <RotateCcw className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">30-Day Returns</h3>
                <p className="text-muted-foreground">Easy returns within 30 days</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Navigation Menu */}
      <MobileNavigation 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      {/* Cart Sidebar */}
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProduct.name}</DialogTitle>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full rounded-lg shadow-medium"
                  />
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-warning text-warning" />
                      <span className="font-medium">{selectedProduct.rating}</span>
                      <span className="text-muted-foreground">({selectedProduct.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">
                      ${selectedProduct.price.toFixed(2)}
                    </div>
                    <div className="text-muted-foreground">
                      {selectedProduct.stock} in stock
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProduct.description}
                  </p>
                  
                  <div className="space-y-3">
                    <Button 
                      variant="hero" 
                      size="xl" 
                      className="w-full"
                      onClick={() => {
                        addToCart(selectedProduct);
                        setSelectedProduct(null);
                      }}
                      disabled={selectedProduct.stock === 0}
                    >
                      <ShoppingCart className="h-5 w-5" />
                      {selectedProduct.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full"
                      onClick={handleCheckout}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;

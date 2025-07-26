import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
}

export const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleViewDetails = () => {
    onViewDetails?.(product);
  };

  return (
    <Card 
      className="group overflow-hidden shadow-soft hover:shadow-medium transition-all duration-normal cursor-pointer bg-gradient-card"
      onClick={handleViewDetails}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-slow"
        />
        {product.featured && (
          <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">
            Featured
          </Badge>
        )}
        {product.stock < 10 && product.stock > 0 && (
          <Badge className="absolute top-2 right-2 bg-warning text-warning-foreground">
            Low Stock
          </Badge>
        )}
        {product.stock === 0 && (
          <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
            Out of Stock
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          {product.rating && (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews})
              </span>
            </div>
          )}
        </div>
        
        <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm text-muted-foreground">
            {product.stock} in stock
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          variant="cart" 
          size="lg" 
          className="w-full"
          onClick={handleAddToCart}
          disabled={product.stock === 0}
        >
          <ShoppingCart className="h-4 w-4" />
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
};
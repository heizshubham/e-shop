import { useState } from 'react';
import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { categories, getProductsByCategory } from '@/data/products';
import { Filter, Grid, List } from 'lucide-react';

interface ProductGridProps {
  products?: Product[];
  onProductClick?: (product: Product) => void;
  featuredOnly?: boolean;
  initialCategory?: string;
}

export const ProductGrid = ({ products, onProductClick, featuredOnly = false, initialCategory }: ProductGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = products || getProductsByCategory(selectedCategory);

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setViewMode('grid')}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setViewMode('list')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Products Count */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Filter className="h-4 w-4" />
        Showing {filteredProducts.length} products
        {selectedCategory !== 'All' && ` in ${selectedCategory}`}
      </div>

      {/* Product Grid */}
      <div className={
        viewMode === 'grid' 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          : "space-y-4"
      }>
        {filteredProducts.map((product) => (
          <div key={product.id} className="animate-fade-in">
            <ProductCard 
              product={product} 
              onViewDetails={onProductClick}
            />
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">
            No products found in this category.
          </p>
          <Button 
            variant="outline" 
            onClick={() => setSelectedCategory('All')}
          >
            View All Products
          </Button>
        </div>
      )}
    </div>
  );
};
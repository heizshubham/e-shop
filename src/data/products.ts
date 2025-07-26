import { Product } from '@/types/product';
import headphonesImg from '@/assets/headphones.jpg';
import smartwatchImg from '@/assets/smartwatch.jpg';
import cameraImg from '@/assets/camera.jpg';
import backpackImg from '@/assets/backpack.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.',
    price: 299.99,
    image: headphonesImg,
    category: 'Electronics',
    stock: 15,
    featured: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking watch with heart rate monitoring, GPS, and smart notifications. Stay connected and healthy.',
    price: 199.99,
    image: smartwatchImg,
    category: 'Electronics',
    stock: 28,
    featured: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable organic cotton t-shirt. Soft, breathable, and perfect for everyday wear.',
    price: 29.99,
    image: '/api/placeholder/400/400',
    category: 'Clothing',
    stock: 50,
    rating: 4.4,
    reviews: 56
  },
  {
    id: '4',
    name: 'Professional Camera',
    description: 'High-resolution DSLR camera perfect for photography enthusiasts and professionals. Capture every moment in stunning detail.',
    price: 899.99,
    image: cameraImg,
    category: 'Electronics',
    stock: 8,
    featured: true,
    rating: 4.9,
    reviews: 67
  },
  {
    id: '5',
    name: 'Minimalist Backpack',
    description: 'Sleek and functional backpack perfect for work or travel. Multiple compartments and premium materials.',
    price: 79.99,
    image: backpackImg,
    category: 'Accessories',
    stock: 35,
    rating: 4.5,
    reviews: 43
  },
  {
    id: '6',
    name: 'Artisan Coffee Blend',
    description: 'Premium coffee blend sourced from sustainable farms. Rich, smooth taste with notes of chocolate and caramel.',
    price: 24.99,
    image: '/api/placeholder/400/400',
    category: 'Food & Beverage',
    stock: 100,
    rating: 4.7,
    reviews: 156
  },
  {
    id: '7',
    name: 'Wireless Charging Pad',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicators.',
    price: 49.99,
    image: '/api/placeholder/400/400',
    category: 'Electronics',
    stock: 22,
    rating: 4.3,
    reviews: 38
  },
  {
    id: '8',
    name: 'Bamboo Desk Organizer',
    description: 'Eco-friendly bamboo desk organizer with multiple compartments. Perfect for keeping your workspace tidy.',
    price: 39.99,
    image: '/api/placeholder/400/400',
    category: 'Home & Office',
    stock: 18,
    rating: 4.6,
    reviews: 29
  }
];

export const categories = [
  'All',
  'Electronics',
  'Clothing',
  'Accessories',
  'Food & Beverage',
  'Home & Office'
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCategory = (category: string) => 
  category === 'All' ? products : products.filter(p => p.category === category);
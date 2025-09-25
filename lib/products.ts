export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured: boolean;
  tags: string[];
}

export const categories = [
  { id: 'sofas', name: 'Sofas', count: 24 },
  { id: 'chairs', name: 'Chairs', count: 18 },
  { id: 'tables', name: 'Tables', count: 32 },
  { id: 'bedroom', name: 'Bedroom', count: 16 },
  { id: 'lighting', name: 'Lighting', count: 12 },
  { id: 'storage', name: 'Storage', count: 20 },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Royal Velvet Sofa',
    price: 2499,
    originalPrice: 2999,
    description: 'Luxurious velvet sofa with golden accents and premium cushioning. Perfect for your royal living room.',
    category: 'sofas',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg',
      'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg'
    ],
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    featured: true,
    tags: ['luxury', 'velvet', 'comfortable']
  },
  {
    id: '2',
    name: 'Imperial Dining Table',
    price: 1899,
    description: 'Handcrafted solid wood dining table with intricate golden inlays. Seats up to 8 people comfortably.',
    category: 'tables',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
    images: [
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg'
    ],
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    featured: true,
    tags: ['wooden', 'dining', 'handcrafted']
  },
  {
    id: '3',
    name: 'Noble Leather Chair',
    price: 899,
    originalPrice: 1199,
    description: 'Premium leather armchair with brass studs and ergonomic design. Perfect for your study or office.',
    category: 'chairs',
    image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg',
    images: [
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg',
      'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg'
    ],
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    featured: false,
    tags: ['leather', 'office', 'comfortable']
  },
  {
    id: '4',
    name: 'Majestic Bedroom Set',
    price: 3299,
    originalPrice: 3899,
    description: 'Complete bedroom set with king-size bed, nightstands, and dresser. Features golden hardware and luxury finish.',
    category: 'bedroom',
    image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg',
    images: [
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg',
      'https://images.pexels.com/photos/1743226/pexels-photo-1743226.jpeg'
    ],
    rating: 4.9,
    reviewCount: 94,
    inStock: true,
    featured: true,
    tags: ['bedroom', 'set', 'luxury']
  },
  {
    id: '5',
    name: 'Crystal Chandelier',
    price: 1599,
    description: 'Stunning crystal chandelier with gold finish. Creates beautiful ambient lighting for any room.',
    category: 'lighting',
    image: 'https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg',
    images: [
      'https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg',
      'https://images.pexels.com/photos/2041401/pexels-photo-2041401.jpeg'
    ],
    rating: 4.8,
    reviewCount: 73,
    inStock: true,
    featured: false,
    tags: ['crystal', 'chandelier', 'elegant']
  },
  {
    id: '6',
    name: 'Golden Storage Cabinet',
    price: 1299,
    description: 'Elegant storage cabinet with golden handles and premium wood finish. Perfect for organizing in style.',
    category: 'storage',
    image: 'https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg',
    images: [
      'https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg',
      'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg'
    ],
    rating: 4.6,
    reviewCount: 112,
    inStock: true,
    featured: false,
    tags: ['storage', 'cabinet', 'golden']
  }
];

export const getFeaturedProducts = () => products.filter(product => product.featured);

export const getProductsByCategory = (category: string) => 
  products.filter(product => product.category === category);

export const getProductById = (id: string) => 
  products.find(product => product.id === id);

export const searchProducts = (query: string) =>
  products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );
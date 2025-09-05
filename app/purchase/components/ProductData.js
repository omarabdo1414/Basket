// Product data
export const productData = {
  id: 1,
  name: 'SkinnyPop Popcorn SkinnyPack Original',
  price: '$15.00 - $25.00',
  rating: 4.8,
  reviewCount: 245,
  sizes: ['small', 'medium', 'large'],
  description: 'SkinnyPop Original Popcorn is light and delicious. Made from 100% organic corn with no artificial additives. Perfect for healthy snacking.',
  tags: ['Healthy Food', 'Organic', 'Popcorn'],
  images: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
      alt: "SkinnyPop Popcorn Main"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1595475038665-8b3d1c4d1b6f?w=500&h=500&fit=crop",
      alt: "SkinnyPop Popcorn Side"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&h=500&fit=crop",
      alt: "SkinnyPop Popcorn Close"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&h=500&fit=crop",
      alt: "SkinnyPop Popcorn Pack"
    }
  ]
};

export const relatedProducts = [
  {
    id: 1,
    name: 'Organic Fresh Lemon',
    price: '$2.50',
    oldPrice: '$3.50',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop',
    discount: '20%',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Organic Green Salad',
    price: '$3.20',
    oldPrice: '$4.50',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop',
    discount: '30%',
    rating: 4.7
  },
  {
    id: 3,
    name: 'Fresh Mixed Fruits',
    price: '$4.50',
    oldPrice: '$6.00',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=300&h=300&fit=crop',
    discount: '25%',
    rating: 4.3
  },
  {
    id: 4,
    name: 'Organic Red Apple',
    price: '$1.99',
    oldPrice: '$2.50',
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=300&h=300&fit=crop',
    discount: '20%',
    rating: 4.6
  }
];
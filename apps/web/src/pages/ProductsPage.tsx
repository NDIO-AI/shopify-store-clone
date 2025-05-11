import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';

// Mock data for demonstration
const allProducts = [
  { id: '1', name: 'Modern Desk Lamp', price: 49.99, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', description: 'Elegant desk lamp with adjustable brightness', category: 'Lighting' },
  { id: '2', name: 'Ceramic Vase', price: 29.99, image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', description: 'Handcrafted ceramic vase for your home', category: 'Home Decor' },
  { id: '3', name: 'Wooden Cutting Board', price: 35.99, image: 'https://images.unsplash.com/photo-1588165171080-c89acfa5ee83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', description: 'Premium wooden cutting board for your kitchen', category: 'Kitchen' },
  { id: '4', name: 'Scented Candle', price: 19.99, image: 'https://images.unsplash.com/photo-1603006905393-c8bbd0f4f144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', description: 'Relaxing scented candle for your home', category: 'Home Decor' },
  { id: '5', name: 'Minimalist Wall Clock', price: 39.99, image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', description: 'Simple and elegant wall clock', category: 'Home Decor' },
  { id: '6', name: 'Throw Pillow Set', price: 24.99, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', description: 'Set of 2 decorative throw pillows', category: 'Home Decor' },
  { id: '7', name: 'Glass Water Bottle', price: 15.99, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', description: 'Reusable glass water bottle', category: 'Kitchen' },
  { id: '8', name: 'Ceramic Plant Pot', price: 22.99, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', description: 'Modern ceramic pot for indoor plants', category: 'Home Decor' }
];

const categories = [...new Set(allProducts.map(product => product.category))];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('default');

  // Filter products by category
  const filteredProducts = selectedCategory
    ? allProducts.filter(product => product.category === selectedCategory)
    : allProducts;

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else {
      return 0; // default, no sorting
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Categories</h3>
            <div className="space-y-1">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`block w-full text-left px-2 py-1 rounded hover:bg-[hsl(var(--muted))] ${!selectedCategory ? 'bg-[hsl(var(--muted))] font-medium' : ''}`}
              >
                All Categories
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`block w-full text-left px-2 py-1 rounded hover:bg-[hsl(var(--muted))] ${selectedCategory === category ? 'bg-[hsl(var(--muted))] font-medium' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sortedProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                badge={product.category === 'New' ? 'NEW SEASON' : undefined}
                colors={['#000000', '#6b7cb4']}
                onQuickView={(id) => console.log(`Quick view for product ${id}`)}
              />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-[hsl(var(--muted-foreground))]">No products found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

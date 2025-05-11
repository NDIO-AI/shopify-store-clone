import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProductCard } from '../components/ProductCard';
import {
  featuredProducts,
  collectionProducts,
  testimonials,
  heroImage
} from '../data/mockData';

export default function HomePage() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {/* Hero Section */}
      <section style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
        zIndex: 5
      }}>
        {/* Darker overlay for better text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 10
        }}></div>

        <div style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          margin: 0,
          padding: 0
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 16px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            zIndex: 20
          }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: '300',
              marginBottom: '24px',
              maxWidth: '900px',
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.7)',
              letterSpacing: '0.5px'
            }}>Elevate Your Style with Timeless Fashion</h1>

            <p style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              marginBottom: '32px',
              maxWidth: '768px',
              margin: '0 auto 32px auto',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)',
              letterSpacing: '0.5px'
            }}>Curated collections of modern and elegant clothing designed for comfort and style.</p>

            <div style={{
              display: 'flex',
              flexDirection: isDesktop ? 'row' : 'column',
              gap: '16px'
            }}>
              <Link to="/products" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '9999px',
                backgroundColor: 'white',
                color: 'hsl(var(--foreground))',
                height: '56px',
                padding: '0 40px',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--primary))';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = 'hsl(var(--foreground))';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
              }}>
                Shop Now
              </Link>

              <Link to="/collections" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '9999px',
                backgroundColor: 'transparent',
                border: '2px solid white',
                color: 'white',
                height: '56px',
                padding: '0 40px',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
              }}>
                Explore Collections
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer to push content below the hero */}
      <div style={{ height: '100vh' }}></div>

      {/* Featured Collections */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: '300', marginBottom: '16px' }}>Shop Our Collections</h2>
            <p style={{
              color: 'hsl(var(--muted-foreground))',
              maxWidth: '768px',
              margin: '0 auto',
              fontSize: '16px'
            }}>Explore our latest clothing collections featuring timeless designs and premium quality for every occasion.</p>
          </div>

          {/* Horizontal Layout for Collection Products */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '24px',
            justifyContent: 'center',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {collectionProducts.map(product => (
              <div key={product.id} style={{ flex: '1 1 280px', maxWidth: '320px', minWidth: '280px' }}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                  badge={product.category}
                  onQuickView={(id) => console.log(`Quick view for product ${id}`)}
                  onAddToCart={(id) => console.log(`Add to cart: ${id}`)}
                />
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/collections" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '9999px',
              border: '1px solid hsl(var(--foreground))',
              color: 'hsl(var(--foreground))',
              height: '48px',
              padding: '0 32px',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'hsl(var(--foreground))';
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'hsl(var(--foreground))';
            }}>
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: '300', marginBottom: '16px' }}>New Arrivals</h2>
            <p style={{
              color: 'hsl(var(--muted-foreground))',
              maxWidth: '768px',
              margin: '0 auto',
              fontSize: '16px'
            }}>The latest additions to our carefully selected range of home decor and essentials.</p>
          </div>

          {/* Horizontal Layout for Products */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '32px',
            justifyContent: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {featuredProducts.map(product => (
              <div key={product.id} style={{ flex: '1 1 300px', maxWidth: '380px', minWidth: '300px' }}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  badge={product.badge}
                  colors={product.colors}
                  onQuickView={(id) => console.log(`Quick view for product ${id}`)}
                />
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/products" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '9999px',
              border: '1px solid hsl(var(--primary))',
              color: 'hsl(var(--primary))',
              height: '48px',
              padding: '0 32px',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'hsl(var(--primary))';
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'hsl(var(--primary))';
            }}>
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pt-[20px] pb-20 bg-[hsl(var(--secondary))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 mt-4">
            <h2 className="text-3xl font-light mb-4">What Our Customers Say</h2>
            <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">Hear from our satisfied customers about their experience with VENUE.</p>
          </div>
          <div className="flex flex-row justify-center gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm w-[30%] min-w-[250px] flex flex-col items-center text-center mb-[20px]">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <div className="mb-4" style={{ lineHeight: 1.2 }}>
                  <div className="font-medium text-lg">{testimonial.name}</div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">{testimonial.role}</div>
                </div>
                <p className="text-[hsl(var(--muted-foreground))] italic text-sm leading-relaxed h-[60px] overflow-y-auto max-w-[90%]">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            backgroundColor: 'hsl(30, 20%, 94%)',
            padding: '32px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '300',
              marginBottom: '16px'
            }}>Join Our Community</h2>
            <p style={{
              fontSize: '14px',
              color: 'hsl(220, 14%, 46%)',
              maxWidth: '500px',
              margin: '0 auto 24px auto'
            }}>Subscribe to our newsletter for exclusive offers, design tips, and first access to new collections.</p>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '12px',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  flex: '1',
                  padding: '12px 20px',
                  border: '1px solid hsl(220, 13%, 91%)',
                  borderRadius: '9999px',
                  backgroundColor: 'white',
                  outline: 'none'
                }}
              />
              <button style={{
                backgroundColor: 'hsl(24, 100%, 62%)',
                color: 'white',
                borderRadius: '9999px',
                padding: '12px 24px',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
              }}>
                Subscribe
              </button>
            </div>
            <p style={{
              fontSize: '10px',
              color: 'hsl(220, 14%, 46%)',
              marginTop: '16px'
            }}>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

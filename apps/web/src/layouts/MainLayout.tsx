import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Custom hook for responsive design
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

export default function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // Add CSS for nav hover effects
  const navHoverStyles = `
    .nav-item:hover .nav-underline {
      width: 100% !important;
    }
  `;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Add styles for nav hover effects */}
      <style dangerouslySetInnerHTML={{ __html: navHoverStyles }} />

      {/* Header - Fixed position at top */}
      <header className="fixed top-0 left-0 right-0 w-full border-b bg-white/95 backdrop-blur-sm z-[2000]" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo and Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <button
                style={{
                  display: isDesktop ? 'none' : 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  borderRadius: '6px',
                  transition: 'background-color 0.3s ease'
                }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="24" height="24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="24" height="24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
              <Link to="/" style={{
                fontSize: '28px',
                fontWeight: '300',
                letterSpacing: '0.05em',
                textDecoration: 'none',
                color: 'hsl(var(--primary))'
              }}>VENUE</Link>
            </div>

            {/* Desktop Navigation */}
            <nav style={{
              display: isDesktop ? 'flex' : 'none',
              alignItems: 'center',
              justifyContent: 'center',
              flex: '1',
              marginLeft: '32px',
              marginRight: '32px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '40px'
              }}>
                <div className="nav-item" style={{ position: 'relative' }}>
                  <Link to="/" style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    textDecoration: 'none',
                    color: 'hsl(var(--primary))',
                    paddingBottom: '4px',
                    display: 'block'
                  }}>
                    Home
                  </Link>
                  <div style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    width: window.location.pathname === '/' ? '100%' : '0%',
                    height: '2px',
                    backgroundColor: 'hsl(var(--primary))',
                    transition: 'width 0.3s ease'
                  }} className="nav-underline"></div>
                </div>

                <div className="nav-item" style={{ position: 'relative' }}>
                  <Link to="/products" style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    textDecoration: 'none',
                    color: 'hsl(var(--primary))',
                    paddingBottom: '4px',
                    display: 'block'
                  }}>
                    Shop
                  </Link>
                  <div style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    width: window.location.pathname === '/products' ? '100%' : '0%',
                    height: '2px',
                    backgroundColor: 'hsl(var(--primary))',
                    transition: 'width 0.3s ease'
                  }} className="nav-underline"></div>
                </div>

                <div className="nav-item" style={{ position: 'relative' }}>
                  <Link to="/collections" style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    textDecoration: 'none',
                    color: 'hsl(var(--primary))',
                    paddingBottom: '4px',
                    display: 'block'
                  }}>
                    Collections
                  </Link>
                  <div style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    width: window.location.pathname === '/collections' ? '100%' : '0%',
                    height: '2px',
                    backgroundColor: 'hsl(var(--primary))',
                    transition: 'width 0.3s ease'
                  }} className="nav-underline"></div>
                </div>

                <div className="nav-item" style={{ position: 'relative' }}>
                  <Link to="/about" style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    textDecoration: 'none',
                    color: 'hsl(var(--primary))',
                    paddingBottom: '4px',
                    display: 'block'
                  }}>
                    About
                  </Link>
                  <div style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    width: window.location.pathname === '/about' ? '100%' : '0%',
                    height: '2px',
                    backgroundColor: 'hsl(var(--primary))',
                    transition: 'width 0.3s ease'
                  }} className="nav-underline"></div>
                </div>

                <div className="nav-item" style={{ position: 'relative' }}>
                  <Link to="/contact" style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    textDecoration: 'none',
                    color: 'hsl(var(--primary))',
                    paddingBottom: '4px',
                    display: 'block'
                  }}>
                    Contact
                  </Link>
                  <div style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    width: window.location.pathname === '/contact' ? '100%' : '0%',
                    height: '2px',
                    backgroundColor: 'hsl(var(--primary))',
                    transition: 'width 0.3s ease'
                  }} className="nav-underline"></div>
                </div>
              </div>
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <Link to="/search" style={{
                padding: '8px',
                borderRadius: '50%',
                transition: 'background-color 0.3s ease',
                color: 'hsl(var(--primary))'
              }} onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#f5f5f5';
              }} onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </Link>
              <Link to="/login" style={{
                padding: '8px',
                borderRadius: '50%',
                transition: 'background-color 0.3s ease',
                color: 'hsl(var(--primary))'
              }} onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#f5f5f5';
              }} onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </Link>
              <Link to="/cart" style={{
                padding: '8px',
                borderRadius: '50%',
                transition: 'background-color 0.3s ease',
                color: 'hsl(var(--primary))',
                position: 'relative'
              }} onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#f5f5f5';
              }} onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {!isDesktop && (
            <div style={{
              display: isMenuOpen ? 'block' : 'none',
              padding: '16px 0',
              borderTop: '1px solid #eee',
              backgroundColor: 'white',
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              zIndex: 2000,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}>
              <nav style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: '0 16px'
              }}>
                <Link to="/" style={{
                  padding: '8px 0',
                  transition: 'color 0.3s ease',
                  textDecoration: 'none',
                  color: 'hsl(var(--primary))'
                }} onClick={() => setIsMenuOpen(false)}
                   onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                >Home</Link>
                <Link to="/products" style={{
                  padding: '8px 0',
                  transition: 'color 0.3s ease',
                  textDecoration: 'none',
                  color: 'hsl(var(--primary))'
                }} onClick={() => setIsMenuOpen(false)}
                   onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                >Shop</Link>
                <Link to="/collections" style={{
                  padding: '8px 0',
                  transition: 'color 0.3s ease',
                  textDecoration: 'none',
                  color: 'hsl(var(--primary))'
                }} onClick={() => setIsMenuOpen(false)}
                   onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                >Collections</Link>
                <Link to="/about" style={{
                  padding: '8px 0',
                  transition: 'color 0.3s ease',
                  textDecoration: 'none',
                  color: 'hsl(var(--primary))'
                }} onClick={() => setIsMenuOpen(false)}
                   onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                >About</Link>
                <Link to="/contact" style={{
                  padding: '8px 0',
                  transition: 'color 0.3s ease',
                  textDecoration: 'none',
                  color: 'hsl(var(--primary))'
                }} onClick={() => setIsMenuOpen(false)}
                   onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                >Contact</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Announcement Bar - Fixed position below header */}
      <div className="fixed top-[64px] left-0 right-0 w-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] py-2 text-center text-sm z-[1000]" style={{ margin: 0, padding: '0.5rem 0', width: '100vw', boxSizing: 'border-box', left: 0 }}>
        Free shipping on all orders over $50 • Shop now and save!
      </div>

      {/* Spacer to prevent content from being hidden under fixed header and announcement bar */}
      <div className="h-[140px]"></div>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer style={{
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'hsl(var(--border))',
        padding: '48px 0',
        backgroundColor: 'hsl(var(--secondary))'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column',
            gap: '32px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              flex: isDesktop ? '1 1 0' : '1 1 100%'
            }}>
              <h3 style={{
                fontWeight: '500',
                fontSize: '16px',
                marginBottom: '16px'
              }}>Shop</h3>
              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <li><Link to="/products" style={{
                  fontSize: '14px',
                  color: 'hsl(var(--muted-foreground))',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none'
                }} onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
                >All Products</Link></li>
                <li><Link to="/collections" style={{
                  fontSize: '14px',
                  color: 'hsl(var(--muted-foreground))',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none'
                }} onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
                >Collections</Link></li>
                <li><Link to="/featured" style={{
                  fontSize: '14px',
                  color: 'hsl(var(--muted-foreground))',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none'
                }} onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
                >Featured</Link></li>
                <li><Link to="/sale" style={{
                  fontSize: '14px',
                  color: 'hsl(var(--muted-foreground))',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none'
                }} onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
                >Sale</Link></li>
              </ul>
            </div>
            <div style={{
              flex: isDesktop ? '1 1 0' : '1 1 100%'
            }}>
              <h3 style={{
                fontWeight: '500',
                fontSize: '16px',
                marginBottom: '16px'
              }}>Account</h3>
              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <li><Link to="/login" style={{
                  fontSize: '14px',
                  color: 'hsl(var(--muted-foreground))',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none'
                }} onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
                >Login</Link></li>
                <li><Link to="/register" style={{
                  fontSize: '14px',
                  color: 'hsl(var(--muted-foreground))',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none'
                }} onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
                >Register</Link></li>
                <li><Link to="/orders" style={{
                  fontSize: '14px',
                  color: 'hsl(var(--muted-foreground))',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none'
                }} onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
                >Order History</Link></li>
                <li><Link to="/wishlist" style={{
                  fontSize: '14px',
                  color: 'hsl(var(--muted-foreground))',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none'
                }} onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
                >Wishlist</Link></li>
              </ul>
            </div>
            <div style={{
              flex: isDesktop ? '1 1 0' : '1 1 100%'
            }}>
              <h3 style={{
                fontWeight: '500',
                fontSize: '16px',
                marginBottom: '16px'
              }}>About</h3>
              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <li><Link to="/about" style={{
                  fontSize: '14px',
                  color: 'hsl(var(--muted-foreground))',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none'
                }} onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
                >Our Story</Link></li>
                <li><Link to="/contact" style={{
                  fontSize: '14px',
                  color: 'hsl(var(--muted-foreground))',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none'
                }} onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
                >Contact Us</Link></li>
                <li><Link to="/faq" style={{
                  fontSize: '14px',
                  color: 'hsl(var(--muted-foreground))',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none'
                }} onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
                >FAQ</Link></li>
                <li><Link to="/blog" style={{
                  fontSize: '14px',
                  color: 'hsl(var(--muted-foreground))',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none'
                }} onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
                >Blog</Link></li>
              </ul>
            </div>
            <div style={{
              flex: isDesktop ? '1 1 0' : '1 1 100%'
            }}>
              <h3 style={{
                fontWeight: '500',
                fontSize: '16px',
                marginBottom: '16px'
              }}>Newsletter</h3>
              <p style={{
                fontSize: '14px',
                color: 'hsl(var(--muted-foreground))',
                marginBottom: '16px'
              }}>Subscribe to receive updates, access to exclusive deals, and more.</p>
              <div style={{
                display: 'flex'
              }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    flex: '1',
                    padding: '8px 12px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'hsl(var(--border))',
                    borderRightWidth: '0',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
                <button style={{
                  backgroundColor: 'hsl(var(--primary))',
                  color: 'hsl(var(--primary-foreground))',
                  padding: '8px 16px',
                  fontSize: '14px',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div style={{
            marginTop: '48px',
            paddingTop: '32px',
            borderTopWidth: '1px',
            borderTopStyle: 'solid',
            borderTopColor: 'hsl(var(--border))',
            textAlign: 'center',
            fontSize: '14px',
            color: 'hsl(var(--muted-foreground))'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              marginBottom: '16px'
            }}>
              <a href="#" style={{
                color: 'hsl(var(--muted-foreground))',
                transition: 'color 0.2s ease'
              }} onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                 onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
              <a href="#" style={{
                color: 'hsl(var(--muted-foreground))',
                transition: 'color 0.2s ease'
              }} onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                 onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </a>
              <a href="#" style={{
                color: 'hsl(var(--muted-foreground))',
                transition: 'color 0.2s ease'
              }} onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                 onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </a>
              <a href="#" style={{
                color: 'hsl(var(--muted-foreground))',
                transition: 'color 0.2s ease'
              }} onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                 onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                </svg>
              </a>
            </div>
            <p style={{ marginBottom: '8px' }}>&copy; {new Date().getFullYear()} VENUE. All rights reserved.</p>
            <div style={{
              marginTop: '8px',
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              fontSize: '12px'
            }}>
              <Link to="/terms" style={{
                color: 'hsl(var(--muted-foreground))',
                transition: 'color 0.2s ease',
                textDecoration: 'none'
              }} onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                 onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
              >Terms</Link>
              <Link to="/privacy" style={{
                color: 'hsl(var(--muted-foreground))',
                transition: 'color 0.2s ease',
                textDecoration: 'none'
              }} onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                 onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
              >Privacy</Link>
              <Link to="/shipping" style={{
                color: 'hsl(var(--muted-foreground))',
                transition: 'color 0.2s ease',
                textDecoration: 'none'
              }} onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                 onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
              >Shipping</Link>
              <Link to="/refunds" style={{
                color: 'hsl(var(--muted-foreground))',
                transition: 'color 0.2s ease',
                textDecoration: 'none'
              }} onMouseOver={(e) => e.currentTarget.style.color = 'hsl(var(--primary))'}
                 onMouseOut={(e) => e.currentTarget.style.color = 'hsl(var(--muted-foreground))'}
              >Refunds</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

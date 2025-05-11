// ProductCard component

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  colors?: string[];
  description?: string;
  onAddToCart?: (id: string) => void;
  onQuickView?: (id: string) => void;
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  badge,
  colors = [],
  description,
  onAddToCart,
  onQuickView,
}: ProductCardProps) {
  return (
    <div className="group relative flex flex-col w-full max-w-[350px] mx-auto">
      {/* Product Image Container */}
      <div className="relative mb-4 overflow-hidden bg-[#f9f9f9] border border-gray-100 rounded-sm">
        {/* Badge */}
        {badge && (
          <div className="absolute left-2 top-2 z-10 bg-[#e9e4dd] px-2 py-1 text-xs uppercase">
            {badge}
          </div>
        )}

        {/* Sale Badge */}
        {originalPrice && originalPrice > price && (
          <div className="absolute right-2 top-2 z-10 bg-red-600 px-2 py-1 text-xs text-white">
            ON SALE
          </div>
        )}

        {/* Image with fixed aspect ratio */}
        <div className="relative w-full h-0 pb-[125%]">
          <img
            src={image}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
          />
        </div>

        {/* Quick view button */}
        <button
          onClick={() => onQuickView?.(id)}
          className="absolute bottom-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Quick view"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </div>

      {/* Product Info */}
      <div className="flex flex-col text-center">
        <h3 className="mb-1 text-sm font-medium">{name}</h3>
        <div className="flex items-center justify-center gap-2">
          <p className="text-sm font-medium">${price.toFixed(2)}</p>
          {originalPrice && originalPrice > price && (
            <p className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</p>
          )}
        </div>

        {/* Description - only show if available */}
        {description && (
          <p className="mt-2 text-xs text-gray-500 line-clamp-2">{description}</p>
        )}

        {/* Color options */}
        {colors.length > 0 && (
          <div className="mt-2 flex gap-1 justify-center">
            {colors.map((color, index) => (
              <div
                key={index}
                className="h-4 w-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
                aria-label={`Color option ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Add to Cart Button */}
        {onAddToCart && (
          <button
            onClick={() => onAddToCart(id)}
            className="mt-3 py-2 px-4 bg-black text-white text-xs uppercase tracking-wider hover:bg-gray-800 transition-colors w-full"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
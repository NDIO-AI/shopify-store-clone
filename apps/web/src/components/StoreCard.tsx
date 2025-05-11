// StoreCard component

interface StoreCardProps {
  id: string;
  name: string;
  description?: string;
  image?: string;
  onVisitStore?: (id: string) => void;
}

export function StoreCard({
  id,
  name,
  description,
  image,
  onVisitStore,
}: StoreCardProps) {
  return (
    <div className="group relative overflow-hidden h-full flex flex-col border border-[hsl(var(--border))] rounded-sm">
      {image && (
        <div className="relative w-full overflow-hidden">
          {/* Fixed aspect ratio container */}
          <div className="pb-[75%] relative"> {/* 4:3 aspect ratio */}
            <img
              src={image}
              alt={name}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => onVisitStore?.(id)}
              className="transform rounded-full bg-white/90 px-6 py-2 text-sm font-medium text-[hsl(var(--foreground))] opacity-0 shadow-md transition-all duration-300 hover:bg-white group-hover:opacity-100"
            >
              View Collection
            </button>
          </div>
        </div>
      )}
      <div className="p-4 text-center flex-grow">
        <h3 className="text-lg font-medium tracking-tight">{name}</h3>
        {description && (
          <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))] line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
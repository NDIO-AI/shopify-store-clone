import * as React from "react";
import { Card, CardContent, CardFooter } from "./card";
import { Button } from "./button";

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  onAddToCart?: (id: string) => void;
}

export function ProductCard({
  id,
  name,
  price,
  image,
  description,
  onAddToCart,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="font-medium text-lg">${price.toFixed(2)}</p>
        </div>
        {description && (
          <p className="text-sm text-[hsl(var(--muted-foreground))] mt-2 line-clamp-2">
            {description}
          </p>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onAddToCart?.(id)}
          className="w-full"
          variant="secondary"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

import * as React from "react";
import { Card, CardContent, CardFooter } from "./card";
import { Button } from "./button";

export interface StoreCardProps {
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
    <Card className="overflow-hidden">
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-all hover:scale-105"
          />
        </div>
      )}
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        {description && (
          <p className="text-sm text-[hsl(var(--muted-foreground))] mt-2 line-clamp-3">
            {description}
          </p>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onVisitStore?.(id)}
          className="w-full"
          variant="outline"
        >
          Visit Store
        </Button>
      </CardFooter>
    </Card>
  );
}

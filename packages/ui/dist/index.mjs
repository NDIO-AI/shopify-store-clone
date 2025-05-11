// src/components/button.tsx
import * as React from "react";
import { cva } from "class-variance-authority";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/button.tsx
import { jsx } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-[hsl(var(--background))]",
  {
    variants: {
      variant: {
        default: "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))]/90",
        destructive: "bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] hover:bg-[hsl(var(--destructive))]/90",
        outline: "border border-[hsl(var(--input))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]",
        secondary: "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary))]/80",
        ghost: "hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]",
        link: "underline-offset-4 hover:underline text-[hsl(var(--primary))]"
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/card.tsx
import * as React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Card = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "p",
  {
    ref,
    className: cn("text-sm text-[hsl(var(--muted-foreground))]", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

// src/components/input.tsx
import * as React3 from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var Input = React3.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx3(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-[hsl(var(--background))] px-3 py-2 text-sm ring-offset-[hsl(var(--background))] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/product-card.tsx
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
function ProductCard({
  id,
  name,
  price,
  image,
  description,
  onAddToCart
}) {
  return /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden", children: [
    /* @__PURE__ */ jsx4("div", { className: "aspect-square w-full overflow-hidden", children: /* @__PURE__ */ jsx4(
      "img",
      {
        src: image,
        alt: name,
        className: "h-full w-full object-cover transition-all hover:scale-105"
      }
    ) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx4("h3", { className: "font-semibold text-lg", children: name }),
        /* @__PURE__ */ jsxs("p", { className: "font-medium text-lg", children: [
          "$",
          price.toFixed(2)
        ] })
      ] }),
      description && /* @__PURE__ */ jsx4("p", { className: "text-sm text-[hsl(var(--muted-foreground))] mt-2 line-clamp-2", children: description })
    ] }),
    /* @__PURE__ */ jsx4(CardFooter, { className: "p-4 pt-0", children: /* @__PURE__ */ jsx4(
      Button,
      {
        onClick: () => onAddToCart == null ? void 0 : onAddToCart(id),
        className: "w-full",
        variant: "secondary",
        children: "Add to Cart"
      }
    ) })
  ] });
}

// src/components/store-card.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
function StoreCard({
  id,
  name,
  description,
  image,
  onVisitStore
}) {
  return /* @__PURE__ */ jsxs2(Card, { className: "overflow-hidden", children: [
    image && /* @__PURE__ */ jsx5("div", { className: "aspect-video w-full overflow-hidden", children: /* @__PURE__ */ jsx5(
      "img",
      {
        src: image,
        alt: name,
        className: "h-full w-full object-cover transition-all hover:scale-105"
      }
    ) }),
    /* @__PURE__ */ jsxs2(CardContent, { className: "p-4", children: [
      /* @__PURE__ */ jsx5("h3", { className: "font-semibold text-lg", children: name }),
      description && /* @__PURE__ */ jsx5("p", { className: "text-sm text-[hsl(var(--muted-foreground))] mt-2 line-clamp-3", children: description })
    ] }),
    /* @__PURE__ */ jsx5(CardFooter, { className: "p-4 pt-0", children: /* @__PURE__ */ jsx5(
      Button,
      {
        onClick: () => onVisitStore == null ? void 0 : onVisitStore(id),
        className: "w-full",
        variant: "outline",
        children: "Visit Store"
      }
    ) })
  ] });
}
export {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  ProductCard,
  StoreCard,
  buttonVariants,
  cn
};
//# sourceMappingURL=index.mjs.map
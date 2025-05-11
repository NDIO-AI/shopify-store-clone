"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Input: () => Input,
  ProductCard: () => ProductCard,
  StoreCard: () => StoreCard,
  buttonVariants: () => buttonVariants,
  cn: () => cn
});
module.exports = __toCommonJS(index_exports);

// src/components/button.tsx
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var React2 = __toESM(require("react"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var Card = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var CardHeader = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var CardDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "p",
  {
    ref,
    className: cn("text-sm text-[hsl(var(--muted-foreground))]", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

// src/components/input.tsx
var React3 = __toESM(require("react"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var Input = React3.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var import_jsx_runtime4 = require("react/jsx-runtime");
function ProductCard({
  id,
  name,
  price,
  image,
  description,
  onAddToCart
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Card, { className: "overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "aspect-square w-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "img",
      {
        src: image,
        alt: name,
        className: "h-full w-full object-cover transition-all hover:scale-105"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(CardContent, { className: "p-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: "font-semibold text-lg", children: name }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { className: "font-medium text-lg", children: [
          "$",
          price.toFixed(2)
        ] })
      ] }),
      description && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-sm text-[hsl(var(--muted-foreground))] mt-2 line-clamp-2", children: description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CardFooter, { className: "p-4 pt-0", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var import_jsx_runtime5 = require("react/jsx-runtime");
function StoreCard({
  id,
  name,
  description,
  image,
  onVisitStore
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Card, { className: "overflow-hidden", children: [
    image && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "aspect-video w-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "img",
      {
        src: image,
        alt: name,
        className: "h-full w-full object-cover transition-all hover:scale-105"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(CardContent, { className: "p-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "font-semibold text-lg", children: name }),
      description && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-sm text-[hsl(var(--muted-foreground))] mt-2 line-clamp-3", children: description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CardFooter, { className: "p-4 pt-0", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
//# sourceMappingURL=index.js.map
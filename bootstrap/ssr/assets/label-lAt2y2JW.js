import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as LabelPrimitive from "@radix-ui/react-label";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const managePrompt = (Prompt) => {
  const colors = [
    {
      name: "Red",
      code: "#EF4444"
    },
    {
      name: "Yellow",
      code: "#F59E0B"
    },
    {
      name: "Green",
      code: "#10B981"
    },
    {
      name: "Blue",
      code: "#3B82F6"
    },
    {
      name: "Indigo",
      code: "#6366F1"
    },
    {
      name: "Purple",
      code: "#8B5CF6"
    },
    {
      name: "Pink",
      code: "#EC4899"
    },
    {
      name: "Cyan",
      code: "#06B6D4"
    },
    {
      name: "Lime",
      code: "#84CC16"
    },
    {
      name: "Rose",
      code: "#F43F5E"
    },
    {
      name: "Amber",
      code: "#F59E0B"
    },
    {
      name: "Violet",
      code: "#7C3AED"
    },
    {
      name: "Emerald",
      code: "#10B981"
    },
    {
      name: "Sky",
      code: "#0EA5E9"
    },
    {
      name: "Fuchsia",
      code: "#D946EF"
    },
    {
      name: "Cyan",
      code: "#06B6D4"
    },
    {
      name: "LightBlue",
      code: "#93C5FD"
    },
    {
      name: "LightGreen",
      code: "#6EE7B7"
    },
    {
      name: "LightPink",
      code: "#F9A8D4"
    },
    {
      name: "LightRed",
      code: "#FCA5A5"
    },
    {
      name: "LightYellow",
      code: "#FDE68A"
    },
    {
      name: "LightIndigo",
      code: "#A5B4FC"
    },
    {
      name: "LightPurple",
      code: "#D4A8F9"
    }
  ];
  let promptString = Prompt.prompt;
  let variables = promptString.match(/{@.*?}/g);
  if (variables) {
    variables = variables.filter((item, index) => {
      return variables.indexOf(item) === index;
    });
    let variableColors = variables.map((variable) => {
      return {
        variable,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    });
    variableColors.forEach((vc, index) => {
      let duplicate = variableColors.find(
        (vcc, vccIndex) => vcc.color.code === vc.color.code && index !== vccIndex
      );
      if (duplicate) {
        let newColor = colors.find(
          (color) => !variableColors.find((vc2) => vc2.color === color)
        );
        variableColors[index].color = newColor;
      }
    });
    promptString = promptString.replace(/{@.*?}/g, (match) => {
      let color = variableColors.find((vc) => vc.variable === match).color.code;
      return `<span style="color:${color}; background-color: 
            ${color}20; padding: 0rem 0.15rem; border-radius: 0.25rem
            ">${match}</span>`;
    });
  }
  return promptString;
};
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      className: cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    }
  );
});
Input.displayName = "Input";
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    }
  );
});
Button.displayName = "Button";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;
export {
  Button as B,
  Input as I,
  Label as L,
  cn as c,
  managePrompt as m
};

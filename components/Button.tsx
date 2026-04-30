import Link from "next/link";
import React, { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import { Variant } from "@/types";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type Props = {
  as?: "link" | "button";
  loading?: boolean;
  icon?: boolean;
  children: ReactNode | ReactNode[];
  className?: string;
  variant?: Variant;
} & (ComponentProps<typeof Link> | ButtonProps);

export default function Button({
  loading,
  variant,
  className,
  children,
  as = "link",
  icon = false,
  ...rest
}: Props) {
  const variantClasses = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    success: "bg-green-500 text-white",
    warning: "bg-orange-500 text-white",
    danger: "bg-destructive text-white",
    info: "bg-blue-500 text-white",
    light: "bg-background-light text-foreground",
    dark: "bg-foreground text-background",
    link: "text-foreground hover:text-primary",
    "no-color": ""
  }[variant || "primary"];

  const iconClasses = cn(
    "min-w-9 aspect-square text-xl p-0 inline-flex items-center justify-center rounded-md",
    variantClasses
  );

  const buttonClasses = cn(
    "group h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase font-anton tracking-widest outline-none transition-colors relative overflow-hidden",
    variantClasses,
    { [iconClasses]: icon },
    className
  );

  if (as === "button") {
    const props = rest as ButtonProps;
    return (
      <button className={buttonClasses} {...props}>
        <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150" />
        <span className="z-[1]">{loading ? "Processing..." : children}</span>
      </button>
    );
  }

  const props = rest as ComponentProps<typeof Link>;
  if (props.target === "_blank") {
    return (
      <a className={buttonClasses} href={props.href.toString()} target="_blank" rel="noreferrer">
        <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150" />
        <span className="z-[1]">{loading ? "Processing..." : children}</span>
      </a>
    );
  }

  return (
    <Link className={buttonClasses} {...props} href={props.href || "#"}>
      <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150" />
      <span className="z-[1]">{loading ? "Processing..." : children}</span>
    </Link>
  );
}

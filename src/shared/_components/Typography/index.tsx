import React, { memo } from "react";
import { cn } from "@/shared/libs";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
type ParagraphSize = "sm" | "md" | "lg";

type TypographyProps = {
  variant?: TypographyVariant;
  className?: string;
  children: React.ReactNode;
  pSize?: ParagraphSize;
} & Omit<
  React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
  "ref"
>;

const variantClasses: Record<TypographyVariant, string> = {
  h1: "text-6xl leading-[66px] font-bold self-stretch",
  h2: "text-5xl leading-[57.60px] font-bold self-stretch",
  h3: "text-4xl leading-[46.80px] font-bold self-stretch",
  h4: "text-3xl leading-[42px] font-bold self-stretch",
  h5: "text-2xl leading-[33.60px] font-bold self-stretch",
  h6: "text-xl leading-[30px] font-bold self-stretch",
  p: "",
};

const paragraphSizeClasses: Record<ParagraphSize, string> = {
  sm: "text-sm leading-tight",
  md: "text-base leading-normal",
  lg: "text-lg leading-[27px]",
};

const Typography = ({
  variant = "p",
  pSize = "md",
  children,
  className,
  ...props
}: TypographyProps) => {
  const Component = variant;
  const baseClasses = variantClasses[variant];

  // Apply paragraph size classes only if variant is "p"
  const sizeClasses = variant === "p" ? paragraphSizeClasses[pSize] : "";

  return (
    <Component className={cn(baseClasses, sizeClasses, className)} {...props}>
      {children}
    </Component>
  );
};

export default memo(Typography);

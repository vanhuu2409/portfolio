import { cn } from "@/shared/libs";
import React, { ButtonHTMLAttributes, memo } from "react";

type HButtonVariant =
  | "default"
  | "primary"
  | "ghost"
  | "success"
  | "error"
  | "warning"
  | "link"
  | "disabled";
type HButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

const getSizeClasses = (size: HButtonSize): string => {
  switch (size) {
    case "xs":
      return "px-2 py-1 text-xs";
    case "sm":
      return "px-3 py-1.5 text-sm";
    case "lg":
      return "px-6 py-3 text-lg";
    case "xl":
      return "px-8 py-4 text-xl";
    case "md":
    default:
      return "px-4 py-2.5 text-base";
  }
};

const getHButtonClasses = (variant: HButtonVariant): string => {
  const baseClasses = `w-full leading-tight text-center rounded-lg cursor-pointer transition-all duration-200 ease-in-out transform touch-manipulation active:rounded-xl active:opacity-90 border-0 relative`;

  const variantClasses: Record<HButtonVariant, string> = {
    default:
      "bg-slate-600 text-slate-50 after:border-slate-600 hover:bg-slate-500",
    primary:
      "bg-orange-300 text-slate-950 after:border-orange-300 hover:bg-orange-200",
    ghost:
      "bg-transparent text-slate-50 after:border-slate-50 hover:bg-slate-800 hover:after:border-slate-800",
    success:
      "bg-success-500 text-slate-950 after:border-success-500 hover:bg-success-400 hover:after:border-success-400",
    error:
      "bg-error-500 text-slate-950 after:border-error-500 hover:bg-error-400 hover:after:border-error-400",
    warning:
      "bg-warning-500 text-slate-950 after:border-warning-500 hover:bg-warning-400 hover:after:border-warning-400",
    disabled:
      "cursor-not-allowed bg-slate-700 text-slate-500 after:border-slate-700",
    link: "bg-transparent text-rose-300 underline hover:text-rose-200 after:border-transparent",
  };

  const pseudoElementClasses =
    variant !== "link" && variant !== "disabled"
      ? "after:content-[''] after:absolute after:inset-0 after:border after:rounded-lg after:pointer-events-none"
      : "";

  return `${baseClasses} ${variantClasses[variant]} ${pseudoElementClasses}`.trim();
};

interface HButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: HButtonVariant;
  size?: HButtonSize;
  className?: string;
}

const HButton: React.FC<HButtonProps> = ({
  variant = "default",
  size = "md",
  children,
  disabled = false,
  onClick,
  className = "",
  ...props
}) => {
  const _variant = disabled ? "disabled" : variant;
  return (
    <button
      className={cn(
        getHButtonClasses(_variant),
        getSizeClasses(size),
        className
      )}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default memo(HButton);

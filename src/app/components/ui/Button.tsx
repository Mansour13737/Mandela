import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) => {
  // پدینگ بر اساس سایز
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const base = `rounded-full font-semibold transition-all duration-300 shadow-md ${sizeStyles[size]} flex items-center justify-center`;

  const styles =
    variant === "default"
      ? `bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white ${base}`
      : `border border-white text-white hover:bg-white/10 ${base}`;

  return (
    <button className={`${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};
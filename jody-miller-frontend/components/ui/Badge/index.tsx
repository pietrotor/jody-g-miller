interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "sage";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variantClasses = {
    default: "text-accent-sage border-accent-sage/30",
    accent: "text-accent border-accent/30",
    sage: "text-accent-sage border-accent-sage/30",
  };

  return (
    <span
      className={`ui-label inline-block rounded-none border px-2 py-0.5 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

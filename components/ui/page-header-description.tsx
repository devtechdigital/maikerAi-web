import { cn } from "@/lib/utils";

interface PageHeaderDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function PageHeaderDescription({
  className,
  children,
  ...props
}: PageHeaderDescriptionProps) {
  return (
    <p
      className={cn(
        "text-lg text-muted-foreground sm:text-xl",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
} 
import { cn } from "@/lib/utils";

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function PageHeader({ className, children, ...props }: PageHeaderProps) {
  return (
    <section
      className={cn(
        "w-full pt-24 md:pt-28 pb-8",
        className
      )}
      {...props}
    >
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {children}
        </div>
      </div>
    </section>
  );
} 
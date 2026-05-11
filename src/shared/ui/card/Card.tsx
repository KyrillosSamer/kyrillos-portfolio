import { cn } from "@/shared/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card = ({ children, className, hover = false, onClick }: CardProps) => (
  <div
    onClick={onClick}
    className={cn(
      "bg-gray-900/60 border border-gray-800 rounded-xl",
      "transition-all duration-300",
      hover && "hover:border-gray-700 hover:shadow-lg hover:shadow-purple-500/5 hover:-translate-y-1",
      onClick && "cursor-pointer",
      className
    )}
  >
    {children}
  </div>
);

export const CardHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("p-5 border-b border-gray-800", className)}>{children}</div>
);

export const CardBody = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("p-5", className)}>{children}</div>
);

export const CardFooter = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("p-5 border-t border-gray-800", className)}>{children}</div>
);
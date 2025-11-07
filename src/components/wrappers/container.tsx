import React from "react";
import { cn } from "@/lib/utils"; // gunakan helper cn dari shadcn

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1350px] px-6 sm:px-8 md:px-12 lg:px-20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;

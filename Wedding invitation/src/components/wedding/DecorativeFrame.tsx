import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DecorativeFrameProps {
  children: ReactNode;
  className?: string;
  withCorners?: boolean;
}

const DecorativeFrame = ({ children, className, withCorners = true }: DecorativeFrameProps) => {
  return (
    <div className={cn("vintage-frame p-8 md:p-12", className)}>
      {withCorners && (
        <>
          <div className="corner-flourish top-left" />
          <div className="corner-flourish top-right" />
          <div className="corner-flourish bottom-left" />
          <div className="corner-flourish bottom-right" />
        </>
      )}
      {children}
    </div>
  );
};

export default DecorativeFrame;

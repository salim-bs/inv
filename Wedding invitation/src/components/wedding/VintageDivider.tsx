import { cn } from "@/lib/utils";

interface VintageDividerProps {
  icon?: React.ReactNode;
  className?: string;
}

const VintageDivider = ({ icon, className }: VintageDividerProps) => {
  return (
    <div className={cn("vintage-divider", className)}>
      {icon || (
        <span className="text-2xl text-primary">✦</span>
      )}
    </div>
  );
};

export default VintageDivider;

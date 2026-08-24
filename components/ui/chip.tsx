import { cn } from "@/lib/utils";
import { FC } from "react";

interface ChipProps {
  children: any;
  className?: string;
}
const Chip: FC<ChipProps> = ({ children, className }) => {
  return (
    <span
      className={cn(
        "bg-card border border-border text-sm px-2 py-1 rounded-lg",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Chip;

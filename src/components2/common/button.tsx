import { COLORS } from "@/common/constants/color";
import { HtmlHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

export const BtnPrimary = ({ children }: { children: ReactNode }) => {
  return (
    <Button
      className="flex items-center"
      style={{ background: COLORS.btn, color: COLORS.btnText }}
    >
      {children}
    </Button>
  );
};

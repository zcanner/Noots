import style from "../components/sass/button.module.scss";
import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

/**
 * A reusable button component.
 *
 * @param {object} props - The properties passed to the button component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {string} [props.className] - Additional class names to apply to the button.
 * @returns {JSX.Element} The rendered button component.
 */
export default function Button({
  children,
  className,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button className={`${style.buttonPrimary} ${className}`} {...props}>
      {children}
    </button>
  );
}

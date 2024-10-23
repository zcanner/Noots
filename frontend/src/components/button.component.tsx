import style from "../components/sass/button.module.scss";
import { ReactNode } from "react";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  buttonType?: "primary" | "secondary";
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
  buttonType,
  ...props
}: ButtonProps): JSX.Element {
  let buttonStyle: string;

  switch (buttonType) {
    case "primary":
      buttonStyle = style.buttonPrimary;
      break;
    case "secondary":
      buttonStyle = style.buttonSecondary;
      break;
    default:
      buttonStyle = style.buttonPrimary;
      break;
  }

  return (
    <a className={`${buttonStyle} ${className}`} {...props}>
      {children}
    </a>
  );
}

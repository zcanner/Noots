import { Link } from "react-router-dom";
import style from "./sass/navbar.module.scss";
import { FaDiscord, FaGithub, FaXTwitter } from "react-icons/fa6";
import Button from "./button.component";

type RecursiveLink = {
  [key: string]: string | RecursiveLink;
};

type FooterLinks = {
  [key: string]: RecursiveLink;
};

type FooterLinksProps = {
  value: RecursiveLink;
  heading: string;
};

function Footer() {
  const footerLinks: FooterLinks = {
    "Get started": {
      "Add Bot": "/add-bot",
      login: "/login",
    },
    "Get help": {
      Discord: "/discord",
      "About us": {
        About: "/about",
        "Privacy Policy": "/privacy-policy",
      },
    },
    Resources: {
      "Source code": "/source-code",
      "Create a theme": "/create-theme",
      "Frequently Asked Questions": "/faq",
      Documentation: "/documentation",
      Premium: {
        "Premium Features": "/premium-features",
        Pricing: "/pricing",
      },
    },
  };

  function FoorterLinks({ value, heading }: FooterLinksProps) {
    return (
      <div className="space-y-4">
        <h2 className="font-medium text-lg">{heading}</h2>
        {Object.entries(value).map(([key, value], index) => {
          if (typeof value === "object") {
            return <FoorterLinks key={index} heading={key} value={value} />;
          } else {
            return (
              <Link key={index} to={value}>
                <p className="opacity-70 py-1">{key}</p>
              </Link>
            );
          }
        })}
      </div>
    );
  }

  return (
    <footer className="border-t-2 mt-36">
      <div className="mx-auto max-w-[100%] md:max-w-[60%] pt-12 w-full">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div>
              <Link className="flex items-center gap-2" to="/">
                <img
                  className={`${style.navLogo} size-10`}
                  src="favico.svg"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="mt-auto">
              <span className="font-bold text-2xl">NOOTS</span>
              <h3 className="pt-2 text-lg font-medium">Follow me</h3>
              <div className="flex gap-4 pt-4">
                <FaGithub className="text-2xl" />
                <FaDiscord className="text-2xl" />
                <FaXTwitter className="text-2xl" />
              </div>
            </div>
          </div>
          <div className="flex gap-10 flex-col md:flex-row">
            {Object.entries(footerLinks).map(([key, value], index) => (
              <FoorterLinks key={index} heading={key} value={value} />
            ))}
          </div>
        </div>
        {/* divider */}
        <div className="border-t-2 mt-8" />
        <div className="py-6">
          <div className="flex justify-between items-center">
            <p className="text-sm opacity-40">
              Crafted with ❤️ by vivek - Copyright © 2024 Noots
            </p>
            <Button buttonType="primary">Get Started</Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

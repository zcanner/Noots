import style from "./sass/navbar.module.scss";
import { useEffect, useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import debounce from "lodash.debounce";

type NavbarProps = {
  isScrollActive: boolean;
  navLinks: { name: string; url: string }[];
};

/**
 * Returns a navbar component based on the screen size.
 * @returns {JSX.Element}
 */
export default function Navbar(): JSX.Element {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isScrollActive, setIsScrollActive] = useState(false);

  // thanks gpt for the debounce function :)
  useLayoutEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 150);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle scroll and add/remove class to the navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrollActive(true);
      } else {
        setIsScrollActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      name: "Pricing",
      url: "/",
    },
    {
      name: "Get started",
      url: "/",
    },
    {
      name: "Useful links",
      url: "/about",
    },
  ];

  return windowWidth > 768 ? (
    <NavLarg isScrollActive={isScrollActive} navLinks={navLinks} />
  ) : (
    <NavSmall isScrollActive={isScrollActive} navLinks={navLinks} />
  );
}

/**
 * Navbar component with a larger screen.
 * @returns {JSX.Element}
 */
function NavLarg({ isScrollActive, navLinks }: NavbarProps): JSX.Element {
  return (
    <ReusableHeaderNavbar isScrollActive={isScrollActive}>
      <div className="flex space-x-3 items-center">
        {navLinks.map((link, index) => (
          <Link key={index} className={style.navLink} to={link.url}>
            {link.name}
          </Link>
        ))}
      </div>
    </ReusableHeaderNavbar>
  );
}

/**
 * Navbar component with a smaller screen.
 * @returns {JSX.Element}
 */
function NavSmall({ isScrollActive, navLinks }: NavbarProps): JSX.Element {
  const [isClick, setClick] = useState(false);

  function handleMenuClick() {
    setClick(!isClick);
  }

  return (
    <>
      <ReusableHeaderNavbar isScrollActive={isScrollActive}>
        <div className="inline-flex items-center">
          <div onClick={() => handleMenuClick()}>
            {isClick ? (
              <IoCloseSharp className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </div>
        </div>
      </ReusableHeaderNavbar>
      {/* mobile menu */}
      {isClick && (
        <div
          className={`${style.headerMobileMenu} pt-16 fixed top-0 right-0 bottom-0 left-0 overflow-scroll overscroll-contain block`}
        >
          <div className="container py-4">
            <div className="flex flex-col gap-4 py-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  className={`${style.navLinkMobile} flex button-primary rounded p-3 items-center gap-2`}
                  to={link.url}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

type ReusableHeaderNavbarProps = {
  isScrollActive: boolean;
  children: JSX.Element;
};

/**
 * ReusableHeaderNavbar component renders a navigation bar with a logo and additional children elements.
 * The navigation bar can have a different style when scrolling is active.
 *
 * @param {Object} props - The properties object.
 * @param {boolean} props.isScrollActive - Determines if the scroll is active to apply a different style.
 * @param {React.ReactNode} props.children - The children elements to be rendered inside the navigation bar.
 *
 * @returns {JSX.Element} The rendered navigation bar component.
 */
function ReusableHeaderNavbar({
  isScrollActive,
  children,
}: ReusableHeaderNavbarProps): JSX.Element {
  return (
    <nav className={`${style.nav} ${isScrollActive ? style.navScrolled : ""}`}>
      <div className="container">
        <div className="flex text-n-60">
          <div className="mr-auto">
            <Link className="flex items-center gap-2" to="/">
              <img
                className={`${style.navLogo} size-10`}
                src="favico.svg"
                alt="logo"
              />
              <span className="font-bold text-lg">NOOTS</span>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </nav>
  );
}

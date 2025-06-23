import { useEffect, useRef, useState } from "react";
import Button from "./Button";

// Import semua gambar
import Hamburger from "../assets/iconhamburger.svg";
import HamburgerBiru from "../assets/iconhamburgerbiru.svg";
import IconCloseBiru from "../assets/iconclosebiru.svg";
import IconClose from "../assets/iconclose.svg";
import BlueLogo from "../assets/bluelogo.svg";
import WhiteLogo from "../assets/logoputih.svg";
import ArrowIcon from "../assets/arrow.svg";

// Daftar menu navigasi
const navItems = ["About", "Services", "Works", "Career"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const navContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollState = window.scrollY;

      if (currentScrollState > scrollPosition && currentScrollState > 400) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setScrollPosition(currentScrollState);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  return (
    <div
      ref={navContainerRef}
      className={`fixed top-0 w-full h-20 flex items-center justify-center z-50 transition-all duration-700
      ${isVisible ? "translate-y-0" : "-translate-y-full"}
      ${scrollPosition > 10 ? "bg-white opacity-95 shadow-sm" : "bg-transparent"}`}
    >
      <header className="relative flex h-full w-full">
        <nav className="flex w-full items-center justify-between px-4 md:px-30">
          {/* Logo */}
          <img
            loading="lazy"
            src={scrollPosition > 10 ? BlueLogo : WhiteLogo}
            alt="Logo Otobook EduConnect"
            className="cursor-pointer w-auto h-12 md:h-16 max-h-[90px]"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className={`py-2 px-6 text-base font-inter ${
                  scrollPosition > 10 ? "text-primary" : "text-white"
                } hover:text-primary/60 transition-all duration-200 hover:border-b-2 hover:border-b-primary`}
              >
                {item}
              </a>
            ))}
            <Button
              paddingx="px-6"
              title="Let's Talk"
              icon={ArrowIcon}
              bgcolor="bg-primary"
              textcolor="text-white"
              onClick={() =>
                window.open("https://wa.me/6289601321118", "_blank")
              }
            />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <img
                src={
                  !menuOpen
                    ? scrollPosition > 10
                      ? HamburgerBiru
                      : Hamburger
                    : scrollPosition > 10
                    ? IconCloseBiru
                    : IconClose
                }
                alt="Menu"
                className="w-6 h-6"
              />
            </button>

            {menuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white px-5 py-10 rounded-b-xl shadow-md z-50">
                <div className="flex flex-col gap-5">
                  {navItems.map((item, i) => (
                    <a
                      key={i}
                      href={`#${item.toLowerCase()}`}
                      className="font-inter text-primary text-lg leading-[130%] tracking-lg hover:text-blue-400"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                  <Button
                    paddingx="w-full"
                    title="Let's Talk"
                    icon={ArrowIcon}
                    bgcolor="bg-primary"
                    textcolor="text-white"
                    onClick={() =>
                      window.open("https://wa.me/6289601321118", "_blank")
                    }
                  />
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

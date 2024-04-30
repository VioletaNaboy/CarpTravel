"use client";

import { useState, useEffect } from "react";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import clsx from "clsx";

import NavLink from "./NavLink";

import logo from "../../public/logo.svg";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const pathname = usePathname();

  useEffect(() => {
    const handleBodyScroll = () => {
      if (isMobileMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleBodyScroll();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="flex justify-center fixed w-full py-[35px] px-[101px] text-sm text-white max-w-[100vw]">
      <div className="container flex justify-between items-center">
        <Link href="#hero">
          <Image src={logo} alt="Logo" width={61} height={34} priority />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-14">
            <li>
              <NavLink href="#about" currentPath={pathname}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink href="#services" currentPath={pathname}>
                Services
              </NavLink>
            </li>

            <li>
              <NavLink href="#career" currentPath={pathname}>
                Career
              </NavLink>
            </li>

            <li>
              <NavLink href="#gallery" currentPath={pathname}>
                Gallery
              </NavLink>
            </li>

            <li>
              <NavLink href="#contacts" currentPath={pathname}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          className="md:hidden text-s-mob font-normal z-100"
          onClick={toggleMobileMenu}
        >
          MENU
        </button>
      </div>
      <nav
        className={clsx("md:hidden", {
          hidden: !isMobileMenuOpen,
          "mobile-menu": isMobileMenuOpen,
        })}
      >
        <button
          type="button"
          className="md:hidden text-s-mob font-normal absolute top-[43px] right-[20px]"
          onClick={toggleMobileMenu}
        >
          CLOSE
        </button>
        <ul className="flex flex-col gap-[48px] md:items-center md:space-x-4 md:ml-auto">
          <li>
            <Link
              href="#about"
              className="text-s-mob font-normal uppercase"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="text-s-mob font-normal uppercase"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#career"
              className="text-s-mob font-normal uppercase"
              onClick={toggleMobileMenu}
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              href="#gallery"
              className="text-s-mob font-normal uppercase"
              onClick={toggleMobileMenu}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="#contacts"
              className="text-s-mob font-normal uppercase"
              onClick={toggleMobileMenu}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

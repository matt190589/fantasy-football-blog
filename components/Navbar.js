import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../public/images/profile_logo.png";
import NavItem from "./NavItem";
import utilStyles from "../styles/utils.module.css";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "This week", href: "/posts/Matt-Doherty-Leaves-FPL" },
  { text: "Last week", href: "/posts/Arsenal-assets-HaaTricks" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className="logo">
        <Link href={"/"}>
          <Image
            priority
            src="/images/profile_logo.png"
            className={utilStyles.borderSquare}
            height={144}
            width={200}
            alt="Fantasy Football Tipster logo"
          />
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className="nav__menu-bar"
        ></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="nav__menu-list">
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

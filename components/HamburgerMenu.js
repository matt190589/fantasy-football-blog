import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const NAV_LIST = [
  { text: "Home", href: "/" },
  {
    text: "This week",
    href: "/posts/Palace-punish-lacklustre-Leeds",
  },
  {
    text: "Last week",
    href: "/posts/Wat-kin-he-do-next",
  },
  { text: "Featured", href: "/posts/New-year-fantasy-targets" },
  // {
  //   text: "Captain Roulette",
  //   href: "/featurePage",
  // },
];

const HamburgerMenu = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="nav-container">
        <div className="nav-wrapper">
          <Link href={"/"}>
            <Image
              priority
              src="/images/profile_logo.png"
              className="nav-logo"
              alt="Fantasy Football Tipster logo"
              width={100}
              height={100}
            />
          </Link>
          <div onClick={() => setActive(!active)}>
            <div className={active ? "active-hamburger" : "hamburger"}></div>
          </div>
        </div>
        <div className={active ? "activeSidenav" : "sidenav"}>
          <div className="navlist">
            {NAV_LIST.map((item, i) => (
              <div key={i} className="navtext">
                <Link onClick={() => setActive(!active)} href={item.href}>
                  {item.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;

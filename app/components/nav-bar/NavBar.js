'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { navLinks } from '../data';
import { lang } from '../lang/en';
import styles from './nav-bar.module.css';

const LeaderLeftMenu = () => {
  return (
    <div className={styles.headerLeftMenu}>
      <div>
        <Image
          src="/asset/location-icon-with-bg.svg"
          width={30}
          height={30}
          alt="location icon"
          priority
        />
        <p>{lang.fineAStore}</p>
      </div>
      <button className="custom-btn">{lang.signIn}</button>
      <button className="custom-btn">{lang.join}</button>
    </div>
  );
};

const NavBar = () => {
  const [navLinkActive, setNavLinkActive] = useState(false);

  window.addEventListener('resize', () => {
    if (window.innerWidth < 800 && navLinkActive === true)
      horizontalNavHandler();
  });

  let horizontalNavHandler = () => {
    //Handles the opening of the horizontal navBar from the left of the screen
    setNavLinkActive(!navLinkActive);
  };

  return (
    <header className={styles.header}>
      <nav className="page-inner-width">
        <div className={styles.logoBox}>
          <a href="https://www.starbucks.com">
            <Image
              src="/asset/logo.svg"
              width={51}
              height={51}
              alt="site logo"
              priority
            />
          </a>
          <div>
            <ul
              className={`${styles.navLinks} ${
                navLinkActive && styles.navbarMenuActive
              }`}
            >
              {navLinks.map((el) => (
                <li key={el.url} onClick={horizontalNavHandler}>
                  <Link href={el.url}>{el.linkText}</Link>
                </li>
              ))}
            </ul>
            <div className={styles.verticalHeaderLeftMenu}>
              <hr />
              <LeaderLeftMenu />
            </div>
          </div>
        </div>

        <div className={styles.horizontalHeaderLeftMenu}>
          <LeaderLeftMenu />
        </div>

        <section
          className={styles.hamburgerMenu}
          onClick={horizontalNavHandler}
        >
          <Image
            height={50}
            width={50}
            src="/asset/hamburger-menu.svg"
            alt="hamburger-menu"
          />
        </section>
      </nav>
    </header>
  );
};

export default NavBar;

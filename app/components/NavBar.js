import Image from 'next/image';
import React from 'react';
import { navLinks } from './data';
import { lang } from './lang/en';

const NavBar = () => {
  return (
    <header class="header">
      <nav class="page-inner-width">
        <div class="logo-box">
          <a href="https://www.starbucks.com">
            <Image
              src="/asset/logo.svg"
              width={51}
              height={51}
              alt="site logo"
              priority
            />
          </a>
          <ul className="nav-links">
            {navLinks.map((el) => (
              <li key={el.url}>
                <a href={el.url}>{el.linkText}</a>
              </li>
            ))}
          </ul>
        </div>

        <div class="header-left-menu">
          <div class="find-store">
            <Image
              src="/asset/location-icon-with-bg.svg"
              width={30}
              height={30}
              alt="location icon"
              priority
            />
            <p>{lang.fineAStore}</p>
          </div>
          <button class="custom-btn margin-right">{lang.signIn}</button>
          <button class="custom-btn bg">{lang.join}</button>
        </div>
        <section className="hamburgerMenu">
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

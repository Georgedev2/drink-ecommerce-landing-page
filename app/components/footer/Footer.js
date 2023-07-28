"use client";
import React, { useState } from 'react';
import {
  aboutUs,
  careers,
  socialImpact,
  forBusinessPartners,
  orderAndPickUp,
  socialMedialDetails,
  breadcrumbData,
} from '../data';
import { lang } from '../lang/en';
import SocialMediaIcon from '../social-medial-icons/SocialMediaIcon';
import styles from './footer.module.css';
import BreadCrumbs from '../breadcrumbs/BreadCrumbs';

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleClick = () => {
    setIsExpanded((el) => !el);
  };

  return (
    <footer class={styles.pageFooter}>
      <section class={`page-inner-width ${styles.pageFooterList}`}>
        <div>
          <ul>
            <h3 class={styles.footerListTitle} onClick={handleClick}>{lang.aboutUs}</h3>
            {aboutUs.map((el) => (
              <li key={el.title}>
                <a href={el.link}>{el.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            <h3 class={styles.footerListTitle} onClick={handleClick}>
              {lang.careers}
            </h3>
            {careers.map((el) => (
              <li key={el.title}>
                <a href={el.link}>{el.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className={styles.ListItem}>
            <h3 class={styles.footerListTitle} onClick={handleClick}>{lang.socialImpact}</h3>
            {socialImpact.map((el) => (
              <li key={el.title}>
                <a href={el.link}>{el.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            <h3 class={styles.footerListTitle} onClick={handleClick}>{lang.forBusinessPartners}</h3>
            {forBusinessPartners.map((el) => (
              <li key={el.title}>
                <a href={el.link}>{el.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            <h3 class={styles.footerListTitle} onClick={handleClick}>{lang.orderAndPickUp}</h3>
            {orderAndPickUp.map((el) => (
              <li key={el.title}>
                <a href={el.link}>{el.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="page-inner-width">
        <div className={styles.socialMediaBox}>
          {socialMedialDetails.map((el) => (
            <SocialMediaIcon key={el.id} data={el} />
          ))}
        </div>
      </section>
      <section className="page-inner-width">
        <BreadCrumbs breadcrumbData={breadcrumbData} breadCrumbPipe="|" />
      </section>
      <section class={`${styles.copyRightText} page-inner-width`}>
        <hr class={styles.horizontalRule} />
        <p>{lang.copyRight}</p>
      </section>
    </footer>
  );
};

export default Footer;

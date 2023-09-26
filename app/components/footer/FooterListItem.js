'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './footer.module.css';

const FooterListItem = ({ data, label }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [accordionList, setAccordionList] = useState(data);
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.nextElementSibling.classList.toggle('show');
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeader} ref={ref}>
        <h3 className={styles.footerListTitle} onClick={() => handleClick()}>
          {label}
        </h3>
        <span className={styles.expandMore}>
          <Image
            width={30}
            height={30}
            alt="expand more"
            src="/asset/expand-more.svg"
          />
        </span>
      </div>
      <ul className={styles.accordionBody}>
        {data.map((el) => (
          <li key={el.title}>
            <a href={el.link}>{el.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterListItem;

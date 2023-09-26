"use client"
import Image from 'next/image';
import Footer from './components/footer/Footer';
import { lang } from './components/lang/en';
import NavBar from './components/nav-bar/NavBar';
import { getBg } from './components/utils';
import { trackUserEvent } from './components/utils/tracker';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {lang.bannerData.map(
        ({ id, title, displayImgFirst, bannerImg, desc, link }, idx, arr) => (
          <section key={id} className={`page-inner-width ${styles.banners}`}>
            <div
              className={`${styles.bannerImgBox} ${
                displayImgFirst ? '' : styles.displayNone
              }`}
            >
              <Image
                src={bannerImg}
                alt="banner image"
                width={800}
                height={500}
              />
            </div>

            <div className={`${styles.bannerCard} ${getBg(idx)}`}>
              <div
                className={`${
                  getBg(idx) == 'greenBackground' ? styles.whiteText : ''
                }`}
              >
                <h2
                  className={`${styles.cardTitle} ${
                    idx == arr.length - 1 ? styles.beKind : styles.font1
                  }`}
                >
                  {title}
                </h2>
                <p className={styles.paragraph}>{desc}</p>

                <button
                  className={`custom-btn ${styles.cardBtn} ${
                    getBg(idx) == 'greenBackground' ? styles.darkBgProperty : ''
                  }`}
                  onClick={() =>
                    trackUserEvent(link.linkText, {
                      buttonText: link.linkText,
                      bannerTitle: title,
                      bannerContent: desc,
                    })
                  }
                >
                  {link.linkText}
                </button>
              </div>
            </div>

            <div
              className={`${styles.bannerImgBox} ${
                displayImgFirst ? styles.displayNone : ''
              }`}
            >
              <Image
                src={bannerImg}
                alt="banner image"
                width={800}
                height={400}
              />
            </div>
          </section>
        )
      )}
      <section className={styles.preFooterTextBox}>
        <div>
          <p>{lang.preFooterText1}</p>
          <p>{lang.preFooterText2}</p>
        </div>
      </section>
    </main>
  );
}

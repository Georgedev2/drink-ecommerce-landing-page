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
import FooterListItem from './FooterListItem';

const Footer = () => {
  return (
    <footer className={styles.pageFooter}>
      <section className={`page-inner-width ${styles.pageFooterList}`}>
        <FooterListItem data={aboutUs} label={lang.aboutUs} />
        <FooterListItem data={careers} label={lang.careers} />
        <FooterListItem data={socialImpact} label={lang.socialImpact} />
        <FooterListItem
          data={forBusinessPartners}
          label={lang.forBusinessPartners}
        />
        <FooterListItem data={orderAndPickUp} label={lang.orderAndPickUp} />
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
      <section className={`${styles.copyRightText} page-inner-width`}>
        <hr className={styles.horizontalRule} />
        <p>{lang.copyRight}</p>
      </section>
    </footer>
  );
};

export default Footer;

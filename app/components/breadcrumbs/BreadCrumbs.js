import styles from "./breadcrumbs.module.css"

const BreadCrumbs = ({breadcrumbData,breadCrumbPipe}) => {
  return (
    <ul className={styles.breadCrumb}>
      {breadcrumbData.map((el, index, array) => (
        <li key={el.id}>
          <span>
            <a href={el.link}>{el.title}</a>
          </span>
          <span
            className={`${styles.pipe} ${
              index + 1 == array.length ? 'display-none' : ''
            }`}
          >
         {breadCrumbPipe}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default BreadCrumbs;

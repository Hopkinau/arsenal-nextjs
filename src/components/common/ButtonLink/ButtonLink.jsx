import styles from './ButtonLink.module.scss';
import Link from 'next/link';

function ButtonLink({ href, target, children }) {
  return (
    <Link href={`${href}`} passHref>
      <div className={styles.buttonLink} target={target ? "_blank" : "_self"}>
        {children}
      </div>
    </Link>
  );
}

export default ButtonLink;
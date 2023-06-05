import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.scss';
import Link from 'next/link';

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={styles.footerbottom}>
      <div className="container">
        <p className="text-right pr-5">&copy; {getCurrentYear()} Sports & Soccer</p>
      </div>

      <div className={styles.footerContent}>
        <div className={styles.navLinks}>
          <nav>
            <ul>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.socialLinks}>
          <a
            href="https://www.facebook.com/your_facebook_page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com/your_twitter_page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.github.com/your_github_page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import Link from 'next/link';
import styles from './Header.module.scss';
import {MdSportsSoccer} from 'react-icons/md';


function Header() {
  return (
    <header className={styles.header}>
      <MdSportsSoccer className={styles.icon}/>
      <nav>
        <ul>
          <li>
            <Link href='/'><span>Home</span>Page</Link>
          </li>
          <li>
            <Link href='/sports'><span>Sports</span>World</Link>
          </li>
          <li>
            <Link href='/soccer'><span>Soccer</span>World</Link>
          </li>
           
        </ul>
      </nav>
    </header>
  );
}

export default Header;
import Styles from '../styles/Navbar.module.scss';
import Link from 'next/link';
import { useRouter } from "next/router";

const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Posts', path: '/posts' },
    { id: 3, title: 'Contacts', path: '/contacts' },
];
import Image from 'next/image';

const Navbar = () => {
    const { pathname } = useRouter();

    return(
    <nav className={Styles.nav}>
        <div className={Styles.logo}>
        <Link href='/'><Image src="/logo.png" width="60" height="60" alt="webDev"/></Link>
        </div>
        <div className={Styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path} className={pathname === path ? Styles.active : null}>
              {title}
          </Link>
        ))}
        </div>
    </nav>
)}

export default Navbar;
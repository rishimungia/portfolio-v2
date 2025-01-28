import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href={'/'} className={styles.logo}>RM</Link>

            <div className={styles.navbarLinks}>
                <Link href="#">Projects</Link>
                <Link href="#">Resume</Link>
            </div>
        </nav>
    )
}
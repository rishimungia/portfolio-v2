import styles from './Footer.module.scss';

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <h2>Rishi Mungia</h2>
                <span>© {new Date().getFullYear()} All rights reserved</span>
            </div>
        </footer>
    )
}
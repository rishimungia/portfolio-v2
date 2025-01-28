import styles from "./Background.module.scss";

export default function Background ({ introName, color = 'var(--primary-500)' }: { introName?: boolean, color?: string }) {
    return (
        <div className={styles.background} style={{ "--color": color} as React.CSSProperties}>
            {introName && <div className={styles.introName}>ऋषि</div>}

            <div className={styles.gradient}></div>

            <div className={styles.filter}></div>
        </div>
    )
}
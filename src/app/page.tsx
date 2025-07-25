import styles from "./page.module.scss";

import Background from "@/components/Background/Background";
import AboutSection from "@/components/Home/AboutSection/AboutSection";
import ProjectsSection from "@/components/Home/ProjectsSection/ProjectsSection";

export default function Home() {
    return (
        <main className={styles.home}>
            {/* Intro Section */}
            <section className={styles.introSection}>
                <p className={styles.tagline}>
                    Crafting interactive worlds through{" "}
                    <span className={styles.web}>Web</span> and{" "}
                    <span className={styles.game}>Game</span> development
                </p>
            </section>

            <ProjectsSection />

            <AboutSection />

            <Background introName />
        </main>
    );
}

import styles from "./page.module.scss";

import Background from "@/components/Background/Background";
import Button from "@/components/Button/Button";
import AboutSection from "@/components/Home/AboutSection/AboutSection";
import ProjectsSection from "@/components/Home/ProjectsSection/ProjectsSection";

export default function Home() {
    return (
        <main className={styles.home}>
            {/* Intro Section */}
            <section className={styles.introSection}>
                <p className={styles.tagline}>
                    {("Crafting interactive worlds through web and game development").split(" ").map((word, index) => (
                        <span key={index} className={styles.word}>
                            {word}{" "}
                        </span>
                    ))}
                </p>

                {/* <Button>Schedule a Call</Button> */}
            </section>

            <ProjectsSection />

            <AboutSection />

            <Background introName />
        </main>
    );
}

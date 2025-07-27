import projectsData from "@/constants/projects";
import styles from "./ProjectSection.module.scss";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Button from "@/components/Button/Button";

export default function ProjectsSection () {
    return (
        <section className={styles.projectSection} id="projects">
            <h2>Projects</h2>
            <p>Co-authored with exuberant amounts of ☕.</p>

            <div className={styles.projectsGrid}>
                {projectsData.slice(0, 4).map((project, i) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                        gridSize={i % 3 === 0 ? 2 : undefined}
                    />
                ))}
            </div>

            <Button>All Projects</Button>
        </section>
    )
}
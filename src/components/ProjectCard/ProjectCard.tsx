import Image from "next/image";

import styles from "./ProjectCard.module.scss";

import { Project } from "@/constants/types";
import { hexToRgb } from "@/utils/common";
import Link from "next/link";

export default function ProjectCard({ project, gridSize = 1 }: { project: Project; gridSize?: number; }) {
    const projectColor = hexToRgb(project.color);

    return (
        <Link
            href={`/projects/${project.id}`}
            className={styles.projectCard}
            style={
                {
                    "--projectColor": `${projectColor.r}, ${projectColor.g}, ${projectColor.b}`,
                    "--gridSize": gridSize
                } as React.CSSProperties
            }
        >
            <div className={styles.imageContainer}>
                <Image
                    src={project.cardImage}
                    alt={project.title}
                    width={500}
                    height={500}
                    className={styles.image}
                />
                <Image
                    src={project.cardImage}
                    alt={project.title}
                    width={500}
                    height={500}
                    className={styles.imageShadow}
                />
            </div>

            <div className={styles.info}>
                <h3 className={styles.title}>{project.title}</h3>
                <span className={styles.description}>
                    {project.description}
                </span>

                <div className={styles.tags}>
                    {project.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className={styles.hoverGradient}></div>
        </Link>
    );
}

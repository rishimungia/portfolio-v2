import Image from "next/image";

import styles from "./Project.module.scss";

import { GoRepo } from "react-icons/go";

import Background from "@/components/Background/Background";
import projectsData from "@/constants/projects";
import Button from "@/components/Button/Button";

import { parseHexColor } from "@/utils/common";

export default async function Project ({ params }: { params: Promise<{ id: string }> }) {
    const projectId = (await params).id;
    const project = projectsData.find((project) => project.id === projectId);

    const projectColor = project ? parseHexColor(project.color) : parseHexColor("#FFF");
    
    if (project) return (
        <main className={styles.projectPage} style={{ "--projectColor": `${projectColor.r}, ${projectColor.g}, ${projectColor.b}` } as React.CSSProperties}>

            <main>
                <header className={styles.header}>
                    <h1 className={styles.title}>{project.title}</h1>
                    <p className={styles.description}>{project.description}</p>
                </header>

                <div className={styles.links}>
                    <Button tag="anchor" href={project.source}>
                        <GoRepo />
                        Repository 
                    </Button>
                </div>

                <div className={styles.coverImage}>
                    <Image src={project.coverImage} alt={project.title} width={1920} height={1080} />
                </div>

                <div className={styles.tags}>
                    {project.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>


                <div className={styles.content}>
                    {/* <span className={styles.title}>{project.title}</span> */}
                    <project.contentMdx />
                </div>
            </main>

            <Background color={`hsl(${projectColor.h}, ${projectColor.s * 0.55}%, ${projectColor.l * 0.55}%)`}/>
        </main>
    )
}

export async function generateStaticParams () {
    return projectsData.map((project) => ({
        id: project.id,
    }));
}

export const dynamicParams = false
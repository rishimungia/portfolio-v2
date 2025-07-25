import Link from "next/link";
import styles from "./AboutSection.module.scss";

import { PiReadCvLogo, PiEnvelopeSimple } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedin, FaGithub, FaSass, FaAws, FaUnity, FaFigma } from "react-icons/fa6";
import { RiCss3Fill, RiHtml5Fill, RiJavascriptFill, RiNextjsFill, RiNodejsFill, RiReactjsFill, RiTailwindCssFill, RiGithubFill, RiVercelFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoGit, BiLogoCPlusPlus, BiLogoRedux, BiLogoMongodb, BiLogoGraphql, BiLogoVisualStudio } from "react-icons/bi";
import { SiOpengl, SiVulkan, SiThreedotjs, SiQt, SiAdobecreativecloud, SiJira } from "react-icons/si";

import LocationCard from "./LocationCard/LocationCard";
import Button from "@/components/Button/Button";

export default function AboutSection() {
    return (
        <section className={styles.aboutSection}>
            <h2>About Me</h2>

            <div className={styles.grid}>
                <LocationCard />
                <div className={styles.aboutCard}>
                    <p className={styles.aboutContent}>
                        Adaptive problem-solver skilled in Full-stack, Web3 and
                        Game development with a strong focus on performance
                        optimisation and pixel-perfect design.
                    </p>
                </div>
                <div className={styles.contact}>
                    <div className={styles.contactCard}>
                        <PiEnvelopeSimple />
                        <Link href={"#"}>rishi.mungia@gmail.com</Link>
                    </div>
                    <div className={styles.contactCard} id={styles.resume}>
                        <span>
                            <PiReadCvLogo />
                            <Link href={'#'}>Résumé</Link>
                        </span>
                        <Button><MdOutlineFileDownload /></Button>
                    </div>
                </div>

                <div className={styles.socials}>
                    <Link href={'#'} className={styles.socialCard}>
                        <FaLinkedin />
                        <span>/in/rishi-mungia</span>
                    </Link>
                    <Link href={'#'} className={styles.socialCard}>
                        <FaGithub />
                        <span>/rishimungia</span>
                    </Link>
                </div>
            </div>

            <div className={styles.carouselContainer}>
                <div className={styles.carousel}>
                    {TECH_STACK.map((tech, index) => (
                        <div key={index} className={styles.tech}>
                            {tech.icon}
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.carousel}>
                    {TECH_STACK.map((tech, index) => (
                        <div key={index} className={styles.tech}>
                            {tech.icon}
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className={styles.carouselContainer} id={styles.tools}>
                <div className={styles.carousel}>
                    {TOOLS.map((tech, index) => (
                        <div key={index} className={styles.tech}>
                            {tech.icon}
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.carousel}>
                    {TOOLS.map((tech, index) => (
                        <div key={index} className={styles.tech}>
                            {tech.icon}
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const TECH_STACK = [
    {
        icon: <RiHtml5Fill />,
        name: "HTML5"
    },
    {
        icon: <RiCss3Fill />,
        name: "CSS3"
    },
    {
        icon: <RiTailwindCssFill />,
        name: "Tailwind CSS",
    },
    {
        icon: <FaSass />,
        name: "SASS"
    },
    {
        icon: <RiJavascriptFill />,
        name: "JavaScript"
    },
    {
        icon: <BiLogoTypescript />,
        name: "TypeScript"
    },
    {
        icon: <RiReactjsFill />,
        name: "React"
    },
    {
        icon: <RiNextjsFill />,
        name: "Next.js"
    },
    {
        icon: <BiLogoRedux />,
        name: "Redux"
    },
    {
        icon: <SiThreedotjs />,
        name: "Three.js"
    },
    {
        icon: <RiNodejsFill />,
        name: "Node.js"
    },
    {
        icon: <BiLogoGraphql />,
        name: "GraphQL"
    },
    {
        icon: <BiLogoMongodb />,
        name: "MongoDB"
    },
    {
        icon: <BiLogoCPlusPlus />,
        name: "C++"
    },
    {
        icon: <SiOpengl />,
        name: "OpenGL"
    },
    {
        icon: <SiVulkan />,
        name: "Vulkan"
    },
];

const TOOLS  = [
    {
        icon: <BiLogoGit />,
        name: "Git"
    },
    {
        icon: <RiGithubFill />,
        name: "GitHub"
    },
    {
        icon: <RiVercelFill />,
        name: "Vercel"
    },
    {
        icon: <FaAws />,
        name: "AWS"
    },
    {
        icon: <SiJira />,
        name: "Jira"
    },
    {
        icon: <SiAdobecreativecloud />,
        name: "Adobe CC"
    },
    {
        icon: <FaFigma />,
        name: "Figma"
    },
    {
        icon: <FaUnity />,
        name: "Unity"
    },
    {
        icon: <SiQt />,
        name: "Qt"
    },
    {
        icon: <BiLogoVisualStudio />,
        name: "Visual Studio"
    },
]
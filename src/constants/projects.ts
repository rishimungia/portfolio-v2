import { Project } from "./types";
const { default: PegasusCabMdx } = await import('@/constants/markdown/PegasusCab.mdx');
const { default: TerrainRendererOpenGLMdx } = await import('@/constants/markdown/TerrainRendererOpenGL.mdx');
const { default: NanoSlayerMdx } = await import('@/constants/markdown/NanoSlayer.mdx');
const { default: CovidSOSMdx } = await import('@/constants/markdown/CovidSOS.mdx');
const { default: VulkanRendererMdx } = await import('@/constants/markdown/VulkanRenderer.mdx');

const projectsData: Project[] = [
    {
        id: "vulkan-renderer",
        title: "Vulkan Renderer",
        description: "Vulkan Renderer with Physically Based Rendering",
        cardImage: "/images/vulkan-renderer/card.png",
        coverImage: "/images/vulkan-renderer/cover.png", 
        tags: ["C++", "GLSL", "Vulkan"],
        source: "#",
        color: "#e62240",

        contentMdx: VulkanRendererMdx
    },
    {
        id: "pegasus-cab",
        title: "Pegasus Cab",
        description: "Script Mod for Grand Theft Auto V",
        cardImage: "/images/pegasus-cab/card.png",
        coverImage: "/images/pegasus-cab/cover.png", 
        tags: ["C#", "Script Hook V .NET"],
        source: "https://github.com/rishimungia/pegasus-cab",
        color: "#6A9F47",

        contentMdx: PegasusCabMdx
    },
    {
        id: "opengl-terrain",
        title: "Terrain Renderer",
        description: "Simple terrain renderer built using OpenGL",
        cardImage: "/images/opengl-renderer/terrain-card.png",
        coverImage: "/images/opengl-renderer/terrain-cover.png", 
        tags: ["C++", "OpenGL", "GLSL"],
        source: "https://github.com/rishimungia/opengl-terrain-renderer",
        color: "#8D9F60",

        contentMdx: TerrainRendererOpenGLMdx
    },
    {
        id: "nano-slayer",
        title: "Nano Slayer",
        description: "2D Action Platformer Game made using Unity Engine",
        cardImage: "/images/nano-slayer/nano-slayer-card-2.png",
        coverImage: "/images/nano-slayer/nano-slayer-cover.png",
        source: "https://github.com/rishimungia/NanoSlayer-Redux",
        tags: ["Unity", "C#", "Photoshop"],
        color: "#8368FF",

        contentMdx: NanoSlayerMdx
    },
    {
        id: "covidsos-bot",
        title: "COVIDSOS Bot",
        description: "Twitter Bot to help people during the COVID19 pandemic",
        cardImage: "/images/covid-sos/tweet-bot-card.png",
        coverImage: "/images/covid-sos/tweet-bot-cover.png",
        source: "https://github.com/rishimungia/COVIDSOS-TweetBot",
        tags: ["Python", "Tweepy"],
        color: "#5268fd",

        contentMdx: CovidSOSMdx
    },
];

export default projectsData;
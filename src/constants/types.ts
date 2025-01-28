import { Element, MDXProps } from "mdx/types";

export type Project = {
    id: string;
    title: string;
    description: string;
    cardImage: string;
    coverImage: string;
    tags: string[];
    source: string;

    contentMdx: (props: MDXProps) => Element;

    color: string;
}
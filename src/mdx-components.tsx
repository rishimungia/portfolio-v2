import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { stringToId } from "./utils/common";
import Image, { ImageProps } from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    p: ({ children }) => <p style={{ minWidth: '100%', fontSize: '1.125rem' }}>{children}</p>,
    h1: ({ children }) => <h1 style={{ fontWeight: 400, marginBlock: '1rem' }}><Link id={stringToId(children)} href={`#${stringToId(children)}`} className="mdx-heading">{children}</Link></h1>,
    h2: ({ children }) => <h2 style={{ fontWeight: 400, marginBlock: '1rem' }}><Link id={stringToId(children)} href={`#${stringToId(children)}`} className="mdx-heading">{children}</Link></h2>,
    h3: ({ children }) => <h3 style={{ fontWeight: 400, marginBlock: '0.5rem' }}><Link id={stringToId(children)} href={`#${stringToId(children)}`} className="mdx-heading">{children}</Link></h3>,

    code: ({ children }) => <code style={{ background: 'var(--primary-500)', fontSize: 'medium' }}>{children}</code>,

    ul: ({ children }) => <ul style={{ paddingLeft: '2rem' }}>{children}</ul>,
    li: ({ children }) => <li style={{ minWidth: '100%', marginBlock: '0.5rem' }}>{children}</li>,

    img: (props) => <Image className="mdx-image" width={1920} height={1080} {...(props as ImageProps)}/>,

    blockquote: ({ children }) => <blockquote className="mdx-blockquote">{children}</blockquote>
  };
}
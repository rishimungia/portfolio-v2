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
    h3: ({ children }) => <h3 style={{ fontWeight: 400, marginBlock: '1rem 0.5rem' }}><Link id={stringToId(children)} href={`#${stringToId(children)}`} className="mdx-heading">{children}</Link></h3>,
    h4: ({ children }) => <h4 style={{ fontWeight: 400, marginBlock: '1rem 0.5rem' }}><Link id={stringToId(children)} href={`#${stringToId(children)}`} className="mdx-heading">{children}</Link></h4>,

    code: ({ children }) => <code className="mdx-code">{children}</code>,

    ul: ({ children }) => <ul style={{ paddingLeft: '2rem' }}>{children}</ul>,
    li: ({ children }) => <li style={{ minWidth: '100%', marginBlock: '0.5rem' }}>{children}</li>,

    a: ({ children, ...props }) => <Link {...props} target="_blank" className="mdx-link">{children}</Link>,

    img: (props) => <span className="mdx-image"><Image width={1920} height={1080} {...(props as ImageProps)}/>{props.alt && <label>{props.alt}</label>}</span>,

    blockquote: ({ children }) => <blockquote className="mdx-blockquote">{children}</blockquote>
  };
}
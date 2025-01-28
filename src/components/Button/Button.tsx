"use client";
import { useRef } from "react";
import { useCursor } from "../Providers/Cursor";
import styles from "./Button.module.scss";

export default function Button({
    tag = "button",
    children,
    onClick,
    href,
}: {
    tag?: "button" | "anchor";
    children?: React.ReactNode;
    onClick?: () => void;
    href?: string;
}) {
    const { position } = useCursor();
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

    const getAdjustedPosition = () => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            return {
                x: position.x - rect.left - 16,
                y: position.y - rect.top - 16,
            };
        }
        return position;
    };

    const adjustedPosition = getAdjustedPosition();

    const Component = tag === "anchor" ? "a" : "button";

    return (
        <Component onClick={onClick} className={styles.button} href={href} target="_blank" ref={buttonRef as any}>
            {children}
            <div 
                className={styles.glow} 
                style={{
                    transform: `translate(${adjustedPosition.x}px, ${adjustedPosition.y}px)`,
                }}
            ></div>
        </Component>
    );
}

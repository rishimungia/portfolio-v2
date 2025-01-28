"use client";

import { usePathname } from "next/navigation";

import { createContext, useContext, useState, useEffect } from "react";

const CursorContext = createContext({
    position: { x: 0, y: 0 },
    isDown: false,
    isHovering: false,
    setIsHovering: (isHovering: boolean) => {},
});

export function CursorProvider({ children }: { children?: React.ReactNode }) {
    const path = usePathname();

    const [position, setPosition] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });
    const [isDown, setIsDown] = useState<boolean>(false);
    const [isHovering, setIsHovering] = useState<boolean>(false);

    useEffect(() => {
        const mouseMoveHandler = (event: MouseEvent) => {
            const { clientX, clientY, buttons } = event;

            setPosition({ x: clientX, y: clientY });

            if (buttons > 0) setIsDown(true);
            else setIsDown(false);
        };
        document.addEventListener("mousemove", mouseMoveHandler);

        const mouseDownHandler = (event: MouseEvent) => {
            const { type } = event;

            if (type === "mousedown") setIsDown(true);
            else setIsDown(false);
        };
        document.addEventListener("mouseup", mouseDownHandler);
        document.addEventListener("mousedown", mouseDownHandler);

        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
            document.removeEventListener("mousedown", mouseDownHandler);
            document.removeEventListener("mouseup", mouseDownHandler);
        };
    }, []);

    useEffect(() => {
        setIsHovering(false);
    }, [path]);

    return (
        <CursorContext.Provider
            value={{ position, isDown, isHovering, setIsHovering }}
        >
            {children}
        </CursorContext.Provider>
    );
}

export function useCursor() {
    return useContext(CursorContext);
}

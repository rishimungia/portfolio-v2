"use client";
import { useEffect, useRef } from "react";
import createGlobe from "cobe";

import styles from "./LocationCard.module.scss";
import Renderer from "phenomenon";
import { useSpring } from "motion/react";

import { IoLocationOutline } from "react-icons/io5";

export default function LocationCard() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const cardRef = useRef(null);

    const pointerInteracting = useRef<number>(null);
    const pointerInteractionMovement = useRef(0);

    const phi = useSpring(4.75, {
        stiffness: 50,
        damping: 10,
        mass: 0.1,
        bounce: 1
    });

    useEffect(() => {
        let globe: Renderer;

        if (cardRef.current) {
            const card = cardRef.current as HTMLDivElement;
            const width = card.offsetWidth;

            globe = createGlobe(canvasRef.current!, {
                devicePixelRatio: 2,
                width: width * 2,
                height: width * 2,
                phi: 4.75,
                theta: 0.2,
                dark: 1,
                diffuse: 1.2,
                mapSamples: 16000,
                mapBrightness: 6,
                baseColor: [0.3, 0.3, 0.3],
                markerColor: [1, 1, 1],
                glowColor: [0.5, 0.5, 0.5],
                markers: [{ location: [53.8, -1.55], size: 0.06 }],

                onRender: (state) => {
                    state.phi = phi.get();
                },
            });
        }

        return () => {
            globe?.destroy();
        };
    }, [cardRef.current]);

    return (
        <div className={styles.card} ref={cardRef}>
            <span className={styles.location}>
                <IoLocationOutline />
                Leeds, UK
            </span>
            <canvas
                ref={canvasRef}
                className={styles.globe}
                onPointerDown={(e) => {
                    pointerInteracting.current =
                        e.clientX - pointerInteractionMovement.current;
                    canvasRef.current!.style.cursor = "grabbing";
                }}
                onPointerUp={() => {
                    pointerInteracting.current = null;
                    canvasRef.current!.style.cursor = "grab";
                }}
                onPointerOut={() => {
                    pointerInteracting.current = null;
                    canvasRef.current!.style.cursor = "grab";
                }}
                onMouseMove={(e) => {
                    if (pointerInteracting.current !== null) {
                        const delta = e.clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta;
                        phi.set(delta/100);
                    }
                }}
                onTouchMove={(e) => {
                    if (pointerInteracting.current !== null && e.touches[0]) {
                        const delta =
                            e.touches[0].clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta;
                        phi.set(delta/50);
                    }
                }}
            />
        </div>
    );
}

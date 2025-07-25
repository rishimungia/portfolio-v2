"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import styles from "./GodRays.module.scss";
import Camera from "./Camera";
import LightSource from "./LightSource";
import { useRef } from "react";
import Figure from "./Figure";
import { EffectComposer, GodRays } from "@react-three/postprocessing";

export default function BackgroundGodRays() {
    const lightRef = useRef<THREE.Mesh>(null);

    return (
        <Canvas className={styles.canvas}>
            <Camera />
            <Figure />
            <LightSource ref={lightRef} position={[0, 0, -10]} />
            {lightRef.current ? (
                <EffectComposer>
                    <GodRays
                        sun={lightRef.current}
                        blendFunction={THREE.AdditiveBlending}
                        samples={20}
                        density={0.9}
                        decay={0.8}
                        weight={0.75}
                        exposure={5}
                        clampMax={0.95}
                        kernelSize={4}
                        height={480}
                    />
                </EffectComposer>
            ) : null}
        </Canvas>
    );
}
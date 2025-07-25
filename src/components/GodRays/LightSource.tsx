import { forwardRef, useMemo, useImperativeHandle, JSX } from 'react'
import { useFrame } from '@react-three/fiber'
import { CircleGeometry, MeshBasicMaterial, Mesh } from 'three'
import * as THREE from 'three'
import { noise } from '@/constants/shaders/noise.glsl'

const LightSource = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const uniforms = useMemo(() => ({ time: { value: 0 } }), [])

  const geometry = useMemo(() => new CircleGeometry(50, 64), [])

  const material = useMemo(() => {
    const mat = new MeshBasicMaterial({ color: 0xFF212126 })
    mat.defines = { USE_UV: '' }

    mat.onBeforeCompile = (shader) => {
      shader.uniforms.time = uniforms.time
      shader.fragmentShader = `
        uniform float time;
        ${shader.fragmentShader}
      `
        .replace('void main() {', `${noise}\nvoid main() {`)
        .replace(
          'vec4 diffuseColor = vec4( diffuse, opacity );',
          `
          vec2 uv = vUv - 0.5;
          vec3 col = vec3(0);
          float f = smoothstep(0.5, 0., length(uv));
          f = pow(f, 4.);
          float n = snoise(vec3(uv * 7., time)) * 0.5 + 0.5;
          n = n * 0.5 + 0.5;          
          col = mix(col, diffuse, f * n);
          vec4 diffuseColor = vec4( col, opacity );
        `
        )
    }

    return mat
  }, [uniforms])

  const meshRef = useMemo(() => new THREE.Mesh(geometry, material), [geometry, material])

  useFrame((_, delta) => {
    uniforms.time.value += delta
  })

  useImperativeHandle(ref, () => meshRef)

  return <primitive object={meshRef} {...props} />
})

LightSource.displayName = 'LightSource'
export default LightSource

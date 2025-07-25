import { useMemo } from 'react'
import { Vector2, Path, Shape, ShapeGeometry, MeshBasicMaterial } from 'three'
import { useThree } from '@react-three/fiber'

const Figure = () => {
  const geometry = useMemo(() => {
    const basePts: Vector2[] = []
    const cnt = new Vector2(0, 0)
    const aStep = Math.PI * 0.5

    const points = [
      [0.5, 5],
      [0.75, 1.5],
      [2.5, 3]
    ]

    points.forEach((p, idx, arr) => {
      const arrLen = arr.length * 2
      const lastIdx = arrLen - 1
      for (let i = 0; i < 4; i++) {
        const currQuadrant = arrLen * i
        basePts[currQuadrant + idx] = new Vector2(p[1], p[0]).rotateAround(cnt, aStep * i)
        basePts[currQuadrant + lastIdx - idx] = new Vector2(p[0], p[1]).rotateAround(cnt, aStep * i)
      }
    })

    const shape = new Shape([
      new Vector2(-100, 100),
      new Vector2(-100, -100),
      new Vector2(100, -100),
      new Vector2(100, 100)
    ])

    shape.holes.push(new Path(basePts.reverse()))

    return new ShapeGeometry(shape)
  }, [])

  const material = useMemo(() => new MeshBasicMaterial({ color: 0x000 }), [])

  return <mesh geometry={geometry} material={material} />
}

export default Figure

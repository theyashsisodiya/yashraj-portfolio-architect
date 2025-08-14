import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

function Stars(props: any) {
  const ref = useRef<any>()
  const sphere = useMemo(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }), [])
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#646cff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

function FloatingCubes() {
  const ref = useRef<any>()
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.1
    }
  })

  return (
    <group ref={ref}>
      {Array.from({ length: 12 }, (_, i) => (
        <mesh
          key={i}
          position={[
            (i % 4 - 1.5) * 2,
            Math.floor(i / 4 - 1) * 2,
            -5 + (i % 3) * 2
          ]}
        >
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial
            color="#646cff"
            transparent
            opacity={0.6}
            wireframe
          />
        </mesh>
      ))}
    </group>
  )
}

export const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <FloatingCubes />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  )
}
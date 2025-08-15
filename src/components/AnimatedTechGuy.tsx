import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Box, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

// 3D Tech Guy Working on Computer
function TechGuyModel() {
  const groupRef = useRef<any>()
  
  useFrame((state) => {
    if (groupRef.current) {
      // Subtle breathing animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05
      // Slight typing motion
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 3) * 0.02
    }
  })

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Head */}
      <Sphere args={[0.3]} position={[0, 1.5, 0]}>
        <meshStandardMaterial color="#ffdbac" />
      </Sphere>
      
      {/* Body */}
      <Cylinder args={[0.25, 0.3, 0.8]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color="#4a5568" />
      </Cylinder>
      
      {/* Arms */}
      <Cylinder args={[0.08, 0.08, 0.6]} position={[-0.4, 0.8, 0]} rotation={[0, 0, Math.PI / 6]}>
        <meshStandardMaterial color="#ffdbac" />
      </Cylinder>
      <Cylinder args={[0.08, 0.08, 0.6]} position={[0.4, 0.8, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <meshStandardMaterial color="#ffdbac" />
      </Cylinder>
      
      {/* Hands on keyboard */}
      <Sphere args={[0.06]} position={[-0.6, 0.5, 0.2]}>
        <meshStandardMaterial color="#ffdbac" />
      </Sphere>
      <Sphere args={[0.06]} position={[0.6, 0.5, 0.2]}>
        <meshStandardMaterial color="#ffdbac" />
      </Sphere>
      
      {/* Legs */}
      <Cylinder args={[0.1, 0.1, 0.7]} position={[-0.15, 0, 0]}>
        <meshStandardMaterial color="#2d3748" />
      </Cylinder>
      <Cylinder args={[0.1, 0.1, 0.7]} position={[0.15, 0, 0]}>
        <meshStandardMaterial color="#2d3748" />
      </Cylinder>
      
      {/* Computer Screen */}
      <Box args={[1.2, 0.8, 0.05]} position={[0, 1.2, 0.8]}>
        <meshStandardMaterial color="#1a1a2e" />
      </Box>
      
      {/* Screen Content */}
      <Box args={[1.1, 0.7, 0.02]} position={[0, 1.2, 0.82]}>
        <meshStandardMaterial 
          color="#00f5ff" 
          emissive="#00f5ff"
          emissiveIntensity={0.3}
        />
      </Box>
      
      {/* Keyboard */}
      <Box args={[0.8, 0.3, 0.05]} position={[0, 0.5, 0.5]}>
        <meshStandardMaterial color="#333" />
      </Box>
      
      {/* Chair */}
      <Cylinder args={[0.4, 0.4, 0.1]} position={[0, 0.2, -0.3]}>
        <meshStandardMaterial color="#8b5cf6" />
      </Cylinder>
      <Cylinder args={[0.05, 0.05, 0.5]} position={[0, 0.8, -0.3]}>
        <meshStandardMaterial color="#374151" />
      </Cylinder>
    </group>
  )
}

export const AnimatedTechGuy = () => {
  return (
    <div className="w-full h-64 flex justify-center items-center">
      <Canvas camera={{ position: [0, 2, 4], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#00f5ff" />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#ff00ff" />
        <TechGuyModel />
      </Canvas>
    </div>
  )
}
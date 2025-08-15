import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Sphere, Text3D, Environment } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import * as THREE from 'three'

// Floating Neural Particles
function NeuralParticles(props: any) {
  const ref = useRef<any>()
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 2.5 }), [])
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
      ref.current.rotation.z += delta / 20
    }
  })
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f5ff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

// AI Data Cubes
function AIDataCubes() {
  const ref = useRef<any>()
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.3
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <group ref={ref}>
      {Array.from({ length: 20 }, (_, i) => (
        <mesh
          key={i}
          position={[
            (i % 5 - 2) * 3,
            Math.floor(i / 5 - 1.5) * 3,
            -8 + (i % 4) * 2
          ]}
        >
          <boxGeometry args={[0.15, 0.15, 0.15]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? "#00f5ff" : i % 3 === 1 ? "#ff00ff" : "#ff4081"}
            transparent
            opacity={0.7}
            wireframe
          />
        </mesh>
      ))}
    </group>
  )
}

// Floating Tech Icons
function FloatingTechSpheres() {
  const spheres = useRef<any[]>([])
  
  useFrame((state) => {
    spheres.current.forEach((sphere, i) => {
      if (sphere) {
        sphere.position.y = Math.sin(state.clock.elapsedTime + i) * 0.5
        sphere.rotation.x += 0.01
        sphere.rotation.y += 0.02
      }
    })
  })

  return (
    <group>
      {Array.from({ length: 8 }, (_, i) => (
        <mesh
          key={i}
          ref={(el) => (spheres.current[i] = el)}
          position={[
            Math.cos(i * Math.PI * 2 / 8) * 4,
            0,
            Math.sin(i * Math.PI * 2 / 8) * 4 - 6
          ]}
        >
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#00f5ff" : "#ff00ff"}
            transparent
            opacity={0.8}
            emissive={i % 2 === 0 ? "#001f3f" : "#3f001f"}
          />
        </mesh>
      ))}
    </group>
  )
}

// 3D Computer Terminal
function TechTerminal() {
  const terminalRef = useRef<any>()
  
  useFrame((state) => {
    if (terminalRef.current) {
      terminalRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      terminalRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={terminalRef} position={[3, 0, -4]}>
      {/* Monitor */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 0.5, 0.05]}>
        <boxGeometry args={[1.8, 1, 0.02]} />
        <meshStandardMaterial 
          color="#00f5ff" 
          emissive="#00f5ff"
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
      {/* Base */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[0.4, 0.6, 0.3]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  )
}

// Neural Network Connections
function NeuralConnections() {
  const linesRef = useRef<any>()
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.z = state.clock.elapsedTime * 0.1
    }
  })

  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i < 50; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        )
      )
    }
    return pts
  }, [])

  return (
    <group ref={linesRef}>
      {points.map((point, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([0, 0, 0, point.x, point.y, point.z])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#00f5ff" transparent opacity={0.1} />
        </line>
      ))}
    </group>
  )
}

export const Enhanced3DBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#00f5ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
        <spotLight 
          position={[0, 10, 0]} 
          angle={0.3} 
          penumbra={1} 
          intensity={0.5}
          color="#ff4081"
        />
        
        <NeuralParticles />
        <AIDataCubes />
        <FloatingTechSpheres />
        <TechTerminal />
        <NeuralConnections />
      </Canvas>
    </div>
  )
}
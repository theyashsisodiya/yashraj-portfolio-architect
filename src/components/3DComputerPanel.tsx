import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, Text3D, Sphere } from '@react-three/drei'

function ComputerPanelModel() {
  const panelRef = useRef<any>()
  const lightsRef = useRef<any[]>([])
  
  useFrame((state) => {
    if (panelRef.current) {
      panelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      panelRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
    }
    
    // Animated indicator lights
    lightsRef.current.forEach((light, i) => {
      if (light) {
        light.material.emissiveIntensity = 
          0.5 + Math.sin(state.clock.elapsedTime * (2 + i * 0.5)) * 0.3
      }
    })
  })

  return (
    <group ref={panelRef}>
      {/* Main Panel */}
      <Box args={[4, 2.5, 0.2]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#1a1a2e" 
          metalness={0.8}
          roughness={0.2}
        />
      </Box>
      
      {/* Screen */}
      <Box args={[3.5, 2, 0.1]} position={[0, 0, 0.1]}>
        <meshStandardMaterial 
          color="#00f5ff" 
          emissive="#00f5ff"
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </Box>
      
      {/* Status Indicators */}
      {Array.from({ length: 5 }, (_, i) => (
        <Sphere 
          key={i}
          ref={(el) => (lightsRef.current[i] = el)}
          args={[0.05]} 
          position={[-1.5 + i * 0.3, -1, 0.15]}
        >
          <meshStandardMaterial
            color={i % 2 === 0 ? "#00ff41" : "#ff0080"}
            emissive={i % 2 === 0 ? "#00ff41" : "#ff0080"}
            emissiveIntensity={0.5}
          />
        </Sphere>
      ))}
      
      {/* Side panels */}
      <Box args={[0.3, 2.5, 0.1]} position={[-2, 0, 0]}>
        <meshStandardMaterial color="#333" />
      </Box>
      <Box args={[0.3, 2.5, 0.1]} position={[2, 0, 0]}>
        <meshStandardMaterial color="#333" />
      </Box>
      
      {/* Control buttons */}
      {Array.from({ length: 6 }, (_, i) => (
        <Box 
          key={i}
          args={[0.15, 0.15, 0.05]} 
          position={[1.8, 0.8 - i * 0.3, 0.15]}
        >
          <meshStandardMaterial
            color="#666"
            emissive={i === 2 ? "#00f5ff" : "#000"}
            emissiveIntensity={i === 2 ? 0.3 : 0}
          />
        </Box>
      ))}
    </group>
  )
}

interface Panel3DProps {
  title: string
  value: string
  subtitle?: string
}

export const ThreeDComputerPanel = ({ title, value, subtitle }: Panel3DProps) => {
  return (
    <div className="relative w-full h-80 bg-gradient-to-br from-card/20 to-background/40 rounded-lg border border-primary/20 backdrop-blur-sm overflow-hidden">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#00f5ff" />
          <pointLight position={[-5, 5, 5]} intensity={0.5} color="#ff00ff" />
          <ComputerPanelModel />
        </Canvas>
      </div>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 bg-background/10 backdrop-blur-[1px]">
        <h3 className="text-xl font-bold text-primary mb-2 animate-pulse-glow">
          {title}
        </h3>
        <p className="text-3xl font-bold text-foreground cyber-glitch">
          {value}
        </p>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-2 left-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
      <div className="absolute bottom-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
    </div>
  )
}
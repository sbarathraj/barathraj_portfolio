import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars: React.FC = (props: any) => {
  const ref = useRef<any>();
  const count = 5000; // Reduced number of stars

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const [x, y, z] = random.inSphere(new Float32Array(3), { radius: 2 });
      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 60;
      ref.current.rotation.y -= delta / 80;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled {...props}>
      <PointMaterial
        transparent
        color="#a259f7" // Changed color to match ParticleBackground
        size={0.01}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const ThreeDBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;
"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ShaderMaterial, Color, Vector2 } from 'three';

// GLSL for Perlin noise
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform float u_time;
  uniform vec3 u_color_a;
  uniform vec3 u_color_b;
  uniform vec2 u_resolution;

  // Perlin Noise functions (simplified for 2D)
  vec2 random2(vec2 st) {
      st = vec2( dot(st,vec2(127.1,311.7)),
                dot(st,vec2(269.5,183.3)) );
      return -1.0 + 2.0 * fract(sin(st)*43758.5453123);
  }

  float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);

      vec2 u = f*f*(3.0-2.0*f);

      return mix( mix( dot( random2(i + vec2(0.0,0.0)), f - vec2(0.0,0.0) ),
                       dot( random2(i + vec2(1.0,0.0)), f - vec2(1.0,0.0) ), u.x),
                  mix( dot( random2(i + vec2(0.0,1.0)), f - vec2(0.0,1.0) ),
                       dot( random2(i + vec2(1.0,1.0)), f - vec2(1.0,1.0) ), u.x), u.y);
  }

  float fbm(vec2 st) {
      float v = 0.0;
      float a = 0.5;
      vec2 shift = vec2(100.0);
      for (int i = 0; i < 5; ++i) {
          v += a * noise(st);
          st = st * 2.0 + shift;
          a *= 0.5;
      }
      return v;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv.y *= u_resolution.y / u_resolution.x;

    vec2 q = vec2(0.);
    q.x = fbm( uv + 0.2 * u_time);
    q.y = fbm( uv + 0.2 * u_time);

    vec2 r = vec2(0.);
    r.x = fbm( uv + 1.0*q + vec2(1.7,9.2) + 0.5*u_time );
    r.y = fbm( uv + 1.0*q + vec2(8.3,2.8) + 0.4*u_time );

    float f = fbm(uv + r + 0.2*u_time);

    // Normalize f to be between 0 and 1 for color mixing
    f = f * 0.5 + 0.5; // Assuming fbm returns -1 to 1, convert to 0 to 1

    f = smoothstep(0.4, 0.6, f);

    vec3 color = mix(u_color_a, u_color_b, f);

    gl_FragColor = vec4(color, 1.0);
  }
`;

interface PerlinBackgroundProps {
  colorA?: string;
  colorB?: string;
  speed?: number;
}

const PerlinBackground: React.FC<PerlinBackgroundProps> = ({
  colorA = '#000000',   // Black
  colorB = '#ffffff',   // White
  speed = 0.05,
}) => {
  const material = useRef<ShaderMaterial>(null!);

  useFrame(({ clock, size }) => {
    if (material.current) {
      material.current.uniforms.u_time.value = clock.getElapsedTime() * speed;
      material.current.uniforms.u_resolution.value.set(size.width, size.height);
    }
  });

  const uniforms = useMemo(() => ({
    u_time: { value: 0 },
    u_resolution: { value: new Vector2() },
    u_color_a: { value: new Color(colorA) },
    u_color_b: { value: new Color(colorB) },
  }), [colorA, colorB]);

  return (
    <mesh scale={[100, 100, 1]} >
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const PerlinCanvas: React.FC<PerlinBackgroundProps> = (props) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, // Ensure it's in the background
      }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <PerlinBackground {...props} />
      </Canvas>
    </div>
  );
};

export default PerlinCanvas;


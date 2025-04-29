'use client';
import React from 'react';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Three = () => {
    const mountRef = useRef(null);

  useEffect(() => {
    // Scene
    const scence=new THREE.Scene(); // we create  a 3d worls whre we can add all object , light and camera 

 


    const camera= new THREE.PerspectiveCamera(
        75,mountRef.current.clientWidth/mountRef.current.clientHeight, 0.1,1000
    );




    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // Cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);
    return (
        <div>
             <div
      ref={mountRef}
      style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}
    ></div>
        </div>
    );
};

export default Three;
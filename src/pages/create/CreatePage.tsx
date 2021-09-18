import React,{Suspense, useRef} from "react";
import styles from "./CreatePage.module.css";
import {Header, Rock} from "../../components";
import * as THREE from "three"
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF, Environment, Stage, OrbitControls } from '@react-three/drei'



export const CreatePage: React.FC = () => {
  
  // const {rotate_x, setrotatex } = useState(-Math.PI / 2)
  const ref=useRef()

  const crystal_center = useLoader(GLTFLoader, './forWeb/crystal_center.gltf')
  const crystal_fly = useLoader(GLTFLoader, './forWeb/crystal_fly.gltf')
  const crystal_left_bottom = useLoader(GLTFLoader, './forWeb/crystal_left_bottom.gltf')
  const crystal_left_top = useLoader(GLTFLoader, './forWeb/crystal_left_top.gltf')
  const crystal_right_bottom = useLoader(GLTFLoader, './forWeb/crystal_right_bottom.gltf')
  const crystal_right_top = useLoader(GLTFLoader, './forWeb/crystal_right_top.gltf')
  const Ore_main = useLoader(GLTFLoader, './forWeb/Ore_main.gltf')

  // useFrame((state, delta) => ((ref.current as THREE.Scene).rotation.x += 0.01))
  /**
           
   */
  return (
    <>
      <Header />
      {/* 页面内容 content */}
      <div className={styles["page-content"]}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} scale={0.5}/>
              <primitive object={crystal_center.scene} rotation-y={-Math.PI} scale={0.5}/>
              <primitive object={crystal_fly.scene} rotation-y={-Math.PI} scale={0.5}/>
              <primitive object={crystal_left_bottom.scene} rotation-y={-Math.PI} scale={0.5}/>
              <primitive object={crystal_left_top.scene} rotation-y={-Math.PI} scale={0.5}/>
              <primitive object={crystal_right_bottom.scene} rotation-y={-Math.PI} scale={0.5}/>
              <primitive object={crystal_right_top.scene} rotation-y={-Math.PI} scale={0.5}/>
              <primitive object={Ore_main.scene} rotation-y={-Math.PI} scale={0.5}/>
            {/* <OrbitControls autoRotate enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.8} addEventListener={false} hasEventListener={false} removeEventListener={false} dispatchEvent={false} /> */}

        </Canvas>
        <div>
          <button>Claim</button>
          <button>Evolve</button>
        </div>
      </div>
    </>
  );
}


// const scene = 
  // var renderer, width, height;
  // const initScene =() => {
  //   width = window.innerWidth;
  //   height = window.innerHeight;
  //   renderer = new THREE.WebGLRenderer({
  //       antialias: true
  //   });
  //   renderer.setSize(width, height);
  //   document.getElementById('canvas-frame').appendChild(renderer.domElement);
  //   renderer.setClearColor(0x000000, 1.0);
  // }

  
  // const camera;
  // const initCamera = () => {
  //     camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  //     camera.position.set(400,400,400)
  //     camera.up.set(0,1,0);
  //     camera.lookAt(0,0,0);
  // }

  // const loadModels=()=>{

  //   const loader = new GLTFLoader();
  //   loader.load( './myModel.glb', gltf => {

  //   scene.add( gltf.scene );

  //   });
  // }
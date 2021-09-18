import React,{Suspense, useRef} from "react";
import styles from "./CreatePage.module.css";
import {Header, Rock} from "../../components";
import * as THREE from "three"
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF, Environment, Stage, OrbitControls } from '@react-three/drei'

export const CreatePage: React.FC = () => {
  
  // const {rotate_x, setrotatex } = useState(-Math.PI / 2)
  // const ref=useRef()

  // 接收一个 web3 addresss:
  const address = "0xbC108A8Cc826784dC2F98003392180d1ac9EAa9b"

  // 分片
  const color01 = parseInt(address.slice(2,8),16)
  const color02 = parseInt(address.slice(8,14),16)
  const color03 = parseInt(address.slice(14,20),16)
  const color04 = parseInt(address.slice(20,26),16)
  const color05 = parseInt(address.slice(26,32),16)
  const color06 = parseInt(address.slice(32,38),16)

  const color01str = address.slice(2,8)
  const color02str = address.slice(8,14)
  const color03str = address.slice(14,20)
  const color04str = address.slice(20,26)
  const color05str = address.slice(26,32)
  const color06str = address.slice(32,38)

  // load 模型
  const crystal_center = useLoader(GLTFLoader, './forWeb/crystal_center.gltf')
  const crystal_fly = useLoader(GLTFLoader, './forWeb/crystal_fly.gltf')
  const crystal_left_bottom = useLoader(GLTFLoader, './forWeb/crystal_left_bottom.gltf')
  const crystal_left_top = useLoader(GLTFLoader, './forWeb/crystal_left_top.gltf')
  const crystal_right_bottom = useLoader(GLTFLoader, './forWeb/crystal_right_bottom.gltf')
  const crystal_right_top = useLoader(GLTFLoader, './forWeb/crystal_right_top.gltf')
  const Ore_main = useLoader(GLTFLoader, './forWeb/Ore_main.gltf')

  // const model = crystal_left_bottom.scene
  var newMaterial01 = new THREE.MeshStandardMaterial({color: color01});
  crystal_fly.scene.traverse((o) => {
    if (o.isMesh) o.material = newMaterial01;
  });

  var newMaterial02 = new THREE.MeshStandardMaterial({color: color02});
  crystal_left_bottom.scene.traverse((o) => {
    if (o.isMesh) o.material = newMaterial02;
  });
  
  var newMaterial03 = new THREE.MeshStandardMaterial({color: color03});
  crystal_left_top.scene.traverse((o) => {
    if (o.isMesh) o.material = newMaterial03;
  });

  var newMaterial04 = new THREE.MeshStandardMaterial({color: color04});
  crystal_right_bottom.scene.traverse((o) => {
    if (o.isMesh) o.material = newMaterial04;
  });

  var newMaterial05 = new THREE.MeshStandardMaterial({color: color05});
  crystal_right_top.scene.traverse((o) => {
    if (o.isMesh) o.material = newMaterial05;
  });
  
  const scale=0.6

  // useFrame((state, delta) => ((ref.current as THREE.Scene).rotation.x += 0.01))
  /**
           
   */
  return (
    <>
      <Header />
      {/* 页面内容 content */}
      <div className={styles["page-content"]}
        style={{ 
          backgroundImage: `url("./bg.jpg")`, 
          backgroundSize: 'autofit',
          backgroundRepeat: 'no-repeat' }}
      >
        <div style={{height: '70%'}}>
          <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
              <primitive object={crystal_center.scene} rotation-y={-Math.PI} scale={scale}/>
              <primitive object={crystal_fly.scene} rotation-y={-Math.PI} scale={scale}/>
              <primitive object={crystal_left_bottom.scene} rotation-y={-Math.PI} scale={scale}/>
              <primitive object={crystal_left_top.scene} rotation-y={-Math.PI} scale={scale}/>
              <primitive object={crystal_right_bottom.scene} rotation-y={-Math.PI} scale={scale}/>
              <primitive object={crystal_right_top.scene} rotation-y={-Math.PI} scale={scale}/>
              <primitive object={Ore_main.scene} rotation-y={-Math.PI} scale={scale}/>
            {/* <OrbitControls autoRotate enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.8} addEventListener={false} hasEventListener={false} removeEventListener={false} dispatchEvent={false} /> */}
          </Canvas> 
        </div>
      
        <div className={styles['button-container']}>
          <div className={styles['button']} style={{ height:"48px", width: "115px", backgroundImage: `url("./bigger-hl.png")`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', color: 'white'}} >
            Claim
          </div>
          <div className={styles['button']} style={{ height:"48px", width: "115px", backgroundImage: `url("./smaller.png")`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', color: 'white'}}>
            Evolve
          </div>
        </div>
        <div>Meta Data: 0x {color01str} <span>{color02str}</span> {color03str} {color04str} {color05str} {color06str} </div>
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
import React,{Suspense, useRef, useState} from "react";
import styles from "./CreatePage.module.css";
import {Header, Rock} from "../../components";
import * as THREE from "three"
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF, Environment, Stage, OrbitControls } from '@react-three/drei'
const Web3 = require("web3") 
declare let window: any;


export const CreatePage: React.FC = () => {
  // const {rotate_x, setrotatex } = useState(-Math.PI / 2)
  // const ref=useRef()

  // 接收一个 web3 addresss:

  const address0 = "0x0000000000000000000000000000000000000000"
  const [address, setAdd] = useState(address0)
  
  // 检测 storage 更新 页面 add
  if( address == address0 && localStorage.getItem("address")!=undefined) {
    setAdd(localStorage.getItem("address") as string)
  }

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
  const claimRock = async () => {

    var web3Provider;
    var web3;

    var item = '0x6F19ae62D0EB170BbB7afd6CAcF4bcFaC25790F0'; 
    var abi=[{
          "inputs": [
            {
              "internalType": "address",
              "name": "_manager",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "item",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "applyer",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Mint",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "TokenProps",
          "outputs": [
            {
              "internalType": "bytes3",
              "name": "rock1_color",
              "type": "bytes3"
            },
            {
              "internalType": "bytes3",
              "name": "rock2_color",
              "type": "bytes3"
            },
            {
              "internalType": "bytes3",
              "name": "rock3_color",
              "type": "bytes3"
            },
            {
              "internalType": "bytes3",
              "name": "rock4_color",
              "type": "bytes3"
            },
            {
              "internalType": "bytes3",
              "name": "rock5_color",
              "type": "bytes3"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "manager",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "tokenId",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [
            {
              "internalType": "bytes3",
              "name": "rock1_color",
              "type": "bytes3"
            }
          ],
          "name": "RecordCurrentTokenProps",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract INFTChallegeCore",
              "name": "item",
              "type": "address"
            }
          ],
          "name": "MintNft",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        }
    ];
    var contractAddr = "0xBBcD24Ec8e6f7FD230dCB1b93e95d7696F5Cef6C";

    if (window.ethereum) {
      web3Provider = window.ethereum;
      try {
        // Request account access
        await window.ethereum.enable();
      } catch (error) {
        // User denied account access...
        console.error("User denied account access")
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      web3Provider = window.web3.currentProvider;
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
      web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }

    web3 = new Web3(web3Provider);
    var myContract = new web3.eth.Contract(abi, contractAddr); //合约实例

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];
      console.log('mintat'+account)
      myContract.methods.MintNft(item).send({from:account}).then(ret => console.log(ret)).catch(err => console.log(err));
  })
  }

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
          <div className={styles['button']} style={{ height:"48px", width: "115px", backgroundImage: `url("./bigger-hl.png")`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', color: 'white'}} onClick={claimRock} >
            Claim
          </div>
          <div className={styles['button']} style={{ height:"48px", width: "115px", backgroundImage: `url("./smaller.png")`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', color: 'white'}}  >
            Evolve
          </div>
        </div>
        <div className={styles['address-list']}><span style={{color: '#F08331'}}>Meta Data: </span> <span style={{color: '#ffffff'}}> 0x </span> <span style={{color: '#'+color01str}}>{color01str}</span> <span style={{color: '#'+color02str}}>{color02str}</span> <span style={{color: '#'+color03str}}>{color03str} </span> <span style={{color: '#'+color04str}}> {color04str}</span> <span style={{color: '#'+color05str}}> {color05str}</span> <span style={{color: '#'+color06str}}> {color06str}</span> </div>
      </div>
    </>
  );
}

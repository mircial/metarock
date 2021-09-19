import React,{useState} from "react";
import styles from "./Header.module.css";
import { GlobalOutlined } from "@ant-design/icons";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import Web3 from 'web3';
// import logo from "../../assets/logo.svg";
declare let window: any;

// nothing
export const Header: React.FC = () => {

  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();
  var address = ""
  var web3;

  const [add, setAdd] = useState("Connect Wallet");

  const ethEnabled = async () => {
    if (typeof window.ethereum !== 'undefined') {
        // Instance web3 with the provided information from the MetaMask provider information
        web3 = new Web3(window.ethereum);
        try {
            // Request account access
            await window.ethereum.enable();
            return true
        } catch (e) {
            // User denied access
            return false
        }
    }
    return false;
  }

  const clickConnect = async () => {
    // this.setState({step: 3});  // to confirm page..
    console.log(localStorage.getItem("address"))
    if (!await ethEnabled()) {
        alert("How dare you~");
    }
    address = await web3.eth.getAccounts(); 
    if(address.length>0){
      localStorage.setItem("address",address[0])
      setAdd(address[0].substring(0, 10)+"...")
    }
    // const balance = await web3.eth.getBalance(this.address);
    // console.log('blance: ' + balance/1e18);
      
  }

  if( add=="Connect Wallet" && localStorage.getItem("address") != undefined){
    console.log('new')
    setAdd((localStorage.getItem("address") as string).substring(0, 10)+"...")
  }
  
  return (
    <div className={styles["header"]}>
      <div className={styles["header-main"]}>
        <div onClick={() => history.push("/")} className={styles["header-logo"]}>
          <img src='./rockslogo2.svg' height='50px' alt="logo"  />
          <h3 className={styles["header-title"]}>
            METAROCKS
          </h3>
        </div>

        <div style={{width: '50%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <span className={styles["menu-container"]}>
            <div className={styles["menu-item"]} onClick={()=>history.push("/")}>Home</div>
            <div className={styles["menu-item"]} onClick={()=>history.push("/create")}>Create</div>
            <div className={styles["menu-item"]} onClick={()=>history.push("/evolve")}>Evolve</div>
          </span>

          <div className={styles["address-block"]} onClick={clickConnect} >
            { add }
          </div>
        </div>
      </div>
    </div>
  );
};
//address.substring(0, 10)+"..."
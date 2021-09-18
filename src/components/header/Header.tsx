import React from "react";
import styles from "./Header.module.css";
import { GlobalOutlined } from "@ant-design/icons";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";

// import logo from "../../assets/logo.svg";

export const Header: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();
  const address = "0xbC108A8Cc826784dC2F98003392180d1ac9EAa9b"

  const addressText = address.substring(0, 10)+"..."

  const ethEnabled = async () => {
    // if (typeof window.ethereum !== 'undefined') {
    //     // Instance web3 with the provided information from the MetaMask provider information
    //     this.web3 = new Web3(window.ethereum);
    //     try {
    //         // Request account access
    //         await window.ethereum.enable();
    //         return true
    //     } catch (e) {
    //         // User denied access
    //         return false
    //     }
    // }
    return false;
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
            {/* <div className={styles["menu-item"]} onClick={()=>history.push("/evolve")}>Connect</div> */}
          </span>

          <div className={styles["address-block"]}>
            { addressText }
          </div>
        </div>
      </div>
    </div>
  );
};
//address.substring(0, 10)+"..."
import React from "react";

import styles from "./HomePage.module.css";
import { useHistory } from "react-router-dom";
import {Header } from "../../components";

export const HomePage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <Header />
      {/* 页面内容 content */}
      <div className={styles["page-content"]}
        style={{ 
          backgroundImage: `url("./homebg.jpg")`, 
          backgroundRepeat: 'no-repeat', 
          backgroundSize: 'cover',
          backgroundPosition: 'center center' }}>
            <img className={styles["create-now"]} onClick={()=>history.push("/create")} src='./create-now.png'/>
            <img className={styles["big-circle"]}  src='./rock-circle.png'></img>
            <div className={styles["bottom"]}> 
              <span>
                learn more
              </span>
              <div className={styles["bottom-link"]}>
                <span onClick={()=>history.push("/opensea")}>
                  Opensea <img src='./Arrow.png'/></span>
                <span onClick={()=>history.push("/rarible")}>
                  Rarible <img src='./Arrow.png'/></span> 
                <span onClick={()=>history.push("/etherscan")} >
                  Etherscan <img src='./Arrow.png'/></span> 
              </div>
            </div>
      </div>
    </>
  );
}

//
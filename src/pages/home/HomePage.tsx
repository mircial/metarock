import React from "react";

import { Row, Col, Typography } from "antd";
import styles from "./HomePage.module.css";
import {Header } from "../../components";

export class HomePage extends React.Component {
  render() {
    console.log(this.props)
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
        </div>
      </>
    );
  }
}

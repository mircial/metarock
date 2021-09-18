import React from "react";
import styles from "./Header.module.css";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";

// import logo from "../../assets/logo.svg";

export const Header: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();
  return (
    <div className={styles["app-header"]}>
      <Layout.Header className={styles["main-header"]}>
        <span onClick={() => history.push("/")}>
          <img src='./rockslogo2.svg' height='50px' alt="logo"  />
          
          <Typography.Title level={3} className={styles.title}>
            METAROCKS
          </Typography.Title>

        </span>

        <Button onClick={()=>history.push("/")}>Home</Button>
        <Button onClick={()=>history.push("/create")}>Create</Button>
        <Button onClick={()=>history.push("/evolve")}>Evolve</Button>
        
      </Layout.Header>
    </div>
  );
};

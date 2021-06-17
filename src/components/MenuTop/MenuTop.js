import React from "react";
import { Menu } from "antd";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./MenuTop.scss";
import {
  PATH_HOME,
  PATH_NEW_MOVIES,
  PATH_TOP_MOVIES,
  PATH_SEARCH,
} from "../../routing/paths";

export default function MenuTop() {
  return (
    <div className="menu-top">
      <div className="menu-top__logo">
        <Logo />
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to={PATH_HOME}>Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={PATH_NEW_MOVIES}>Ultimos Lanzamientos</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to={PATH_TOP_MOVIES}>Populares</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to={PATH_SEARCH}>Buscador</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

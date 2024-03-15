import React, { useState } from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import {
  LayoutFilled,
  AppstoreFilled,
  // UserOutlined,
  // SettingOutlined,
  SettingFilled,
  NotificationFilled,
} from "@ant-design/icons";

import { routes } from "../../util/constants";
// import logo from "../../assests/img/cloud.png";

import logo from "../../assests/img/sales.jpg";

export default function SiderMenu(props) {
  return (
    <div
      className={props.collapsed ? "sider-menu" : "sider-menu menu-position"}
    >
      <div className="side-header">
        <div className="brand-name">
          <div className="brand-logo">
            <div>
              <img className="logo" src={logo} alt="Logo" />
            </div>
            <span className="app-name" style={{ fontSize: "16px" }} mode="full">
              Sales Dashboard
            </span>
            <span className="app-name" mode="full"></span>
          </div>
        </div>
      </div>

      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[window.location.pathname]}
      >
        <Menu.Item key={routes.ADMIN_DASHBOARD} icon={<LayoutFilled />}>
          <NavLink
            className="sider-links text-decoration-none"
            to={routes.ADMIN_DASHBOARD}
          >
            Sales Overview
          </NavLink>
        </Menu.Item>
        <Menu.Item icon={<AppstoreFilled />}>
          <NavLink className="sider-links text-decoration-none">Stores</NavLink>
        </Menu.Item>
        <Menu.Item icon={<NotificationFilled />}>
          <NavLink className="sider-links text-decoration-none">
            Notifications
          </NavLink>
        </Menu.Item>
        <Menu.Item icon={<SettingFilled />}>
          <NavLink className="sider-links text-decoration-none">
            Settings
          </NavLink>
        </Menu.Item>
        <Menu.Item icon={<LayoutFilled />}>
          <NavLink className="sider-links text-decoration-none">
            Light Theme
          </NavLink>
        </Menu.Item>
      </Menu>
    </div>
  );
}

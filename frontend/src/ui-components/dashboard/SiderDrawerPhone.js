import React, { useState } from "react";
import { Menu, Drawer } from "antd";
import {
  LayoutFilled,
  AppstoreFilled,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { routes } from "../../util/constants";
import logo from "../../assests/img/NewLogo.png";

export default function SiderDrawerPhone() {
  const [visible, setVisible] = useState(false);
  const [placement] = useState("left");
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <span>
      <MenuUnfoldOutlined onClick={showDrawer} className="trigger-phone" />
      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={visible}
        key={placement}
      >
        <div className="side-header-small">
          <div className="brand-name">
            <div className="brand-logo">
              <div>
                <img
                  className="ms-3"
                  src={logo}
                  alt="Logo"
                  style={{ margin: "0px 0px 0px 30px" }}
                />
              </div>
              <span
                style={{
                  fontSize: "19px",
                  margin: "-6px 0px 0px 10px",
                  color: "#fff",
                }}
                className="app-name"
                mode="full"
              >
                Opportunity Tracker
              </span>
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
              className="sider-links text-decoration-none "
              to={routes.ADMIN_DASHBOARD}
            >
              Dashboard
            </NavLink>
          </Menu.Item>
        </Menu>
      </Drawer>
    </span>
  );
}

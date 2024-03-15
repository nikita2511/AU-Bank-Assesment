import React from "react";
import { Layout, Dropdown, Avatar } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import SiderDrawerPhone from "../dashboard/SiderDrawerPhone";
import { HomeOutlined } from "@ant-design/icons/lib/icons";

const { Header } = Layout;

export default function HeaderAdmin(props) {
  const items = [
    {
      label: (
        <Link
          to="/dashboard"
          className="ms-4 fs-4"
          style={{ textDecoration: "none" }}
        >
          <HomeOutlined style={{ fontSize: "14px" }} />
          <span
            className="ms-4 menu-item-name"
            style={{ paddingLeft: "5px", fontSize: "14px" }}
          >
            Home
          </span>
        </Link>
      ),
      key: "0",
    },

    {
      label: (
        <span className="ms-4 fs-4">
          <LogoutOutlined style={{ fontSize: "14px" }} />
          <span
            className="ms-4 menu-item-name"
            style={{ paddingLeft: "5px", fontSize: "14px" }}
          >
            Sign Out
          </span>
        </span>
      ),
      key: "1",
    },
  ];
  return (
    <Header
      className="header-admin site-layout-background"
      style={{ padding: 0 }}
    >
      {React.createElement(
        props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: "trigger",
          onClick: props.toggle,
        }
      )}
      <SiderDrawerPhone user={props.user} />

      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <div
          className="avatar-user-details"
          onClick={(e) => e.preventDefault()}
        >
          <div className="avatar-box">
            <span className="avatar-name">
              <strong>Hello User</strong>
            </span>
            <div className="avatar-img">
              <Avatar
                style={{ backgroundColor: "#3b404f" }}
                size={40}
                icon={<UserOutlined />}
              />
            </div>
          </div>
        </div>
      </Dropdown>
    </Header>
  );
}

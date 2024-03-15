import React, { useState } from "react";
import { Layout } from "antd";
import HeaderAdmin from "../layouts/HeaderAdmin";
import SiderMenu from "./SiderMenu";

import moment from "moment";
import { routes } from "../../util/constants";
import Dashboard from "../Dashboard";

import { useLocation } from "react-router-dom";

const { Sider, Content, Footer } = Layout;

export default function AdminDashboard(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [sideCollapsed, setSideCollapsed] = useState(false);
  const [viewToggleBtn, setViewToggleBtn] = useState(true);
  const location = useLocation();

  const toggle = () => {
    setCollapsed(!collapsed);

    setSideCollapsed(false);
  };
  // const onSwitchChange = (checked) => {
  //   setSideCollapsed(checked);
  //   if (!sideCollapsed) {
  //     setViewToggleBtn(false);
  //   }
  // };
  const handleMouseEnter = () => {
    setViewToggleBtn(true);
  };
  const handleMouseLeave = () => {
    setViewToggleBtn(false);
  };
  const { pathname } = props.location;
  function renderPathName(pathname) {
    switch (pathname) {
      default:
        return <Dashboard location={location} />;
    }
  }

  return (
    <>
      <Layout className="admin-dash ">
        <Sider
          width={260}
          breakpoint="sm"
          collapsedWidth={sideCollapsed ? "80" : "0"}
          theme="light"
          trigger={null}
          collapsible
          collapsed={sideCollapsed ? sideCollapsed : collapsed}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={collapsed ? "display-switch" : ""}>
            <div className={!sideCollapsed ? "toogle-off" : "toogle-on"}>
              <span
                className={
                  sideCollapsed && !viewToggleBtn
                    ? "collapsed-switch-visible"
                    : ""
                }
              ></span>
            </div>
          </div>
          <SiderMenu
            history={props.history}
            user={props.user}
            collapsed={collapsed}
          ></SiderMenu>
        </Sider>
        <Layout className="site-layout">
          <HeaderAdmin
            toggle={toggle}
            collapsed={collapsed}
            // user={instance.getActiveAccount()}
            signOut={props.signOut}
          />

          <Content
            style={{
              margin: "30px 10px",

              minHeight: "100vh",
            }}
          >
            {renderPathName(pathname)}
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            ©{moment().year()} Created by EAST-Team
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

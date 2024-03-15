import React from "react";
import { Breadcrumb } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { HomeFilled } from "@ant-design/icons";

const BreadCrumbs = (props) => {
  let location = props.location;

  const navigate = useNavigate();
  const loc = location;
  const pathname = loc.pathname;

  let pathnames = pathname.split("/").filter((item) => item);

  const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div>
      <Breadcrumb>
        <Link to="/">
          <HomeFilled />
        </Link>
        &nbsp; / &nbsp;
        {pathnames.map((name, index) => {
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <>
              <Breadcrumb.Item>{capatilize(name)}</Breadcrumb.Item>
            </>
          ) : (
            <>
              <Breadcrumb.Item>
                <label
                  style={{
                    color: "#857fe8",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  type="link"
                  onClick={() => {
                    let current_index = pathnames.length - 1;
                    let desired_index = pathnames.indexOf(name.toLowerCase());
                    let navigate_index = current_index - desired_index;
                    navigate(-navigate_index);
                  }}
                >
                  {capatilize(name)}
                </label>
              </Breadcrumb.Item>
            </>
          );
        })}
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumbs;

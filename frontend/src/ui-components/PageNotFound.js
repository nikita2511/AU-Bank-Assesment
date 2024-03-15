import { Result, Button } from "antd";
import React from "react";
import { routes } from "../util/constants";
import { Link } from "react-router-dom";

function PageNotFound(props) {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to={routes.ADMIN_DASHBOARD}>
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
}

export default PageNotFound;

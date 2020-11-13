import React from "react";
import { Avatar, Button } from "antd";
import { BellOutlined, MenuOutlined } from "@ant-design/icons";
function Headers() {
  return (
    <div className="row align-items-center justify-content-between">
      <div className="col-2">
        <Avatar
          size="large"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </div>
      <div className="col-6">
        <h4 style={{ margin: 0 }}>username</h4>
        <p className="text-muted" style={{ margin: 0 }}>
          username
        </p>
      </div>
      <div className="col-4">
        <div className="row">
          <div className="col-6">
            <Button type="text" icon={<BellOutlined />} size="large" />
          </div>
          <div className="col-6">
            <Button type="text" icon={<MenuOutlined />} size="large" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headers;

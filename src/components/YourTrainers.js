import { Avatar } from "antd";
import React from "react";

export default function Footers() {
  return (
    <div>
      <h4>Your Trainers</h4>
      <div className="row">
        <div className="col-3">
          <Avatar
            size="large"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </div>
        <div className="col">
          <span>John Kavangah</span>
          <br />
          <span className="text-muted"> Mma coach</span>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <Avatar
            size="large"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </div>
        <div className="col">
          <span>John Kavangah</span>
          <br />
          <span className="text-muted"> Mma coach</span>
        </div>
      </div>
    </div>
  );
}

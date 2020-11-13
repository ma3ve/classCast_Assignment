import React from "react";
import { Progress, Divider } from "antd";
import {
  HourglassOutlined,
  HeartOutlined,
  AppleOutlined,
} from "@ant-design/icons";
export default function Health() {
  return (
    <div>
      <h4 style={{ margin: 0 }}>Health</h4>
      <div className="row">
        <HealthItem
          percentage={50}
          color="blue"
          Icon={<HourglassOutlined style={{ color: "blue" }} />}
          head="6:25"
          units="Hours"
        />
        <Divider type="vertical" style={{ height: 100 }} />
        <HealthItem
          percentage={20}
          color="red"
          Icon={<HeartOutlined style={{ color: "red" }} />}
          head="120"
          units="Bpm"
        />
        <Divider type="vertical" style={{ height: 100 }} />

        <HealthItem
          percentage={70}
          color="green"
          Icon={<AppleOutlined style={{ color: "green" }} />}
          head="6:25"
          units="Hours"
        />
      </div>
    </div>
  );
}

function HealthItem({ percentage, color, head, units, Icon }) {
  return (
    <div>
      <div className="col-12">
        <h1 style={{ margin: 0 }}>{head}</h1>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-6">{Icon}</div>
          <div className="col-6">{units}</div>
        </div>
      </div>
      <div className="col-12">
        <Progress
          percent={percentage}
          size="small"
          strokeColor={color}
          showInfo={false}
        />
      </div>
    </div>
  );
}

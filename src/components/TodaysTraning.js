import React from "react";
import { InfoOutlined } from "@ant-design/icons";
export default function TodaysTraning() {
  return (
    <>
      <h3>Todays Tranings</h3>
      <div
        className="row"
        style={{
          backgroundColor: "blue",
          color: "white",
          textAlign: "center",
          padding: "20px",
          borderRadius: "25px",
          margin: "10px 10px 5px 10px",
        }}
      >
        <div className="col-3">
          <h5 style={{ color: "white" }}>Box</h5>
          <span>sports club</span>
          <br />
          <span
            style={{
              backgroundColor: "white",
              borderRadius: "25px",
              color: "black",
              padding: "0 10px",
            }}
          >
            10:00
          </span>
        </div>
        <div className="col-3">
          <h1 style={{ color: "white" }}>40</h1>
          <span>min</span>
          <br />
          <span>warmup</span>
        </div>
        <div className="col-3">
          <div className="col-3">
            <h1 style={{ color: "white" }}>40</h1>
            <span>min</span>
            <br />
            <span>streches</span>
          </div>
        </div>
        <div className="col-3 align-self-center">
          <InfoOutlined style={{ fontSize: 50, fontWeight: "lighter" }} />
        </div>
      </div>
      <div
        className="row"
        style={{
          backgroundColor: "red",
          color: "white",
          textAlign: "center",
          padding: "20px",
          borderRadius: "25px",
          margin: "5px 10px 10px 5px",
        }}
      >
        <div className="col-3">
          <h6 style={{ color: "white" }}>CrossFit</h6>
          <span>sports club</span>
          <br />
          <span
            style={{
              backgroundColor: "white",
              borderRadius: "25px",
              color: "black",
              padding: "0 10px",
            }}
          >
            12:00
          </span>
        </div>
        <div className="col-3">
          <h1 style={{ color: "white" }}>20</h1>
          <p>min</p>
          <p>warmup</p>
        </div>
        <div className="col-3">
          <div className="col-3">
            <h1 style={{ color: "white" }}>20</h1>
            <p>min</p>
            <p>pullUps</p>
          </div>
        </div>
        <div className="col-3 align-self-center">
          <InfoOutlined style={{ fontSize: 50, fontWeight: "lighter" }} />
        </div>
      </div>
    </>
  );
}

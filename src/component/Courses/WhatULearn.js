import React from "react";

const WhatULearn = () => {
  return (
    <>
      <div className="row" style={{ fontFamily: "bor" }}>
        <div className="col-4 pagra">
          <strong style={{ marginLeft: "4rem", fontSize: "1.3rem" }}>
            WHAT YOU'LL LEARN?
          </strong>
          <div className="text-muted">
            <p
              style={{
                marginLeft: "4rem",
                fontSize: "1.3rem",
                marginTop: "2rem",
              }}
            >
              {" "}
              <i
                class="fa-solid fa-check"
                style={{
                  color: "green",
                  fontWeight: "bolder",
                  fontSize: "2rem",
                }}
              ></i>{" "}
              Complete Frontend & Backend Development
            </p>
            <p style={{ marginLeft: "4rem", fontSize: "1.3rem" }}>
              {" "}
              <i
                class="fa-solid fa-check"
                style={{
                  color: "green",
                  fontWeight: "bolder",
                  fontSize: "2rem",
                }}
              ></i>{" "}
              Complete Database - SQL & MongoDB
            </p>
            <p style={{ marginLeft: "4rem", fontSize: "1.3rem" }}>
              {" "}
              <i
                class="fa-solid fa-check"
                style={{
                  color: "green",
                  fontWeight: "bolder",
                  fontSize: "2rem",
                }}
              ></i>{" "}
              Complete MERN Stack (MongoDB, Express, React, Node)
            </p>
            <p style={{ marginLeft: "4rem", fontSize: "1.3rem" }}>
              {" "}
              <i
                class="fa-solid fa-check"
                style={{
                  color: "green",
                  fontWeight: "bolder",
                  fontSize: "2rem",
                }}
              ></i>{" "}
              Real Life and Industry Grade Projects
            </p>
            <p style={{ marginLeft: "4rem", fontSize: "1.3rem" }}>
              {" "}
              <i
                class="fa-solid fa-check"
                style={{
                  color: "green",
                  fontWeight: "bolder",
                  fontSize: "2rem",
                }}
              ></i>{" "}
              TAs for Doubt Assistance
            </p>
            <p style={{ marginLeft: "4rem", fontSize: "1.3rem" }}>
              {" "}
              <i
                class="fa-solid fa-check"
                style={{
                  color: "green",
                  fontWeight: "bolder",
                  fontSize: "2rem",
                }}
              ></i>{" "}
              LIVE sessions on how to get a job, resume, freelance, open source
              & more
            </p>
          </div>
        </div>
        <div className="col-4" style={{ marginLeft: "3rem" }}>
          <div style={{ marginLeft: "2rem", fontSize: "2rem" }}>
            <i class="fa-solid fa-eye" style={{color:'#0f1aff'}}></i> <br />
          </div>
          <strong>LECTURES</strong>
          <p
            className="text-muted"
            style={{ fontSize: "1.2rem", marginTop: "1.2rem", color: "" }}
          >
            100+ Hrs Video Lectures that cover <p>MERN stack in detail. </p>
          </p>
          <p className="" style={{ fontSize: "1.4em", color: "blue" }}>
            Batch start date <strong>15th February, 2024. </strong>
            Alternate Day Classes{" "}
          </p>
        </div>
        <div className="col-4" style={{ width: "20rem" }}>
          <div
            style={{ marginLeft: "4rem", padding: ".4rem", fontSize: "2rem" }}
          >
            <i class="fa-solid fa-video" style={{color:"#0f1aff"}}></i>
          </div>
          <strong>MENTORSHIP SESSIONS</strong>
          <p style={{ fontSize: "1.2rem", marginTop: "1rem", color:"" }}>
            12+ Hours of Live Sessions on all important topics.
          </p>
          <li
            style={{ listStyle: "none", fontSize: "1.1rem", color: "#0f1aff" }}
          >
            Course Duration <strong> - 4.5 months </strong>{" "}
          </li>
          <li
            style={{ listStyle: "none", fontSize: "1.1rem", color: "#0f1aff" }}
          >
            Course access is for <strong> two years.</strong>
          </li>
        </div>
      </div>
    </>
  );
};

export default WhatULearn;

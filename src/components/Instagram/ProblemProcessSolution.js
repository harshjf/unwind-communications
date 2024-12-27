import React from "react";
import Problem from "./Problem";
import Process from "./Process";
import Solution from "./Solution";

const ProblemProcessSolution = () => {
  return (
    <>
      <div
        /* style={{
          border: "1px solid rgba(0, 0, 0, 0.2)",
          marginLeft: "30px",
          marginRight: "30px",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }} */
        className="challenge"
        id="services"
      >
        <h1
          style={{
            textAlign: "center",
            marginTop: "30px",
            color: "#041d33",
            fontWeight: "700",
          }}
        >
          <b>
            HOW WE <span style={{ color: "#973d5d" }}>TACKLE</span> THE
            CHALLENGE
          </b>
        </h1>

        <Problem />

        <Process />

        <Solution />
      </div>
    </>
  );
};

export default ProblemProcessSolution;

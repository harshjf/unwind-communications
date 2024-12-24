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
        id="challenge"
      >
        <h1
          style={{
            textAlign: "center",
            marginTop: "30px",
            /* marginBottom: "20px", */
            color: "#973d5d",
            fontSize: "36px",
            fontWeight: "700",
          }}
        >
          How We Tackle the Challenge
        </h1>

        <Problem />

        <Process />

        <Solution />
      </div>
    </>
  );
};

export default ProblemProcessSolution;

import React, { useEffect, useState } from "react";

const TrafficLight = () => {
  const [currentColor, setCurrentColor] = useState("green");

  useEffect(() => {
    let timer;
    switch (currentColor) {
      case "green":
        timer = setTimeout(() => setCurrentColor("yellow"), 3000);
        break;
      case "yellow":
        timer = setTimeout(() => setCurrentColor("red"), 2000);
        break;
      case "red":
        timer = setTimeout(() => setCurrentColor("yellow"), 5000);
        break;
      default:
        timer = setTimeout(() => setCurrentColor("green"), 2000);
    }

    return () => clearTimeout(timer);
  }, [currentColor]);
  //
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          margin: "0 auto",
          backgroundColor: currentColor,
          transition: "background-color 0.5s ease",
        }}
      ></div>
    </div>
  );
};

export default TrafficLight;

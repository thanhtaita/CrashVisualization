import "./App.css";
import vegaEmbed from "vega-embed";
import { useEffect, useState } from "react";
import { v2_1 } from "./visualization/v2_1";
import { v2_2 } from "./visualization/v2_2";
import { v2_3 } from "./visualization/v2_3";
import { v2_4 } from "./visualization/v2_4";

function App() {
  const [selectedGraph, setSelectedGraph] = useState("A");

  useEffect(() => {
    vegaEmbed("#vis4", v2_4)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Embed visualizations based on the selected graph
    switch (selectedGraph) {
      case "A":
        vegaEmbed("#vis1", v2_1)
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
        break;
      case "B":
        vegaEmbed("#vis2", v2_2)
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
        break;
      case "C":
        vegaEmbed("#vis3", v2_3)
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
        break;
      default:
        break;
    }
  }, [selectedGraph]);

  return (
    <div>
      <div className="visual-container">
        <div className="left">
          <div className="options">
            <label>
              <input
                type="radio"
                name="graph"
                value="A"
                checked={selectedGraph === "A"}
                onChange={() => setSelectedGraph("A")}
              />
              First crash type
            </label>
            <label>
              <input
                type="radio"
                name="graph"
                value="B"
                checked={selectedGraph === "B"}
                onChange={() => setSelectedGraph("B")}
              />
              Speed limit - Light condition
            </label>
            <label>
              <input
                type="radio"
                name="graph"
                value="C"
                checked={selectedGraph === "C"}
                onChange={() => setSelectedGraph("C")}
              />
              Prime contributory cause - Control device
            </label>
          </div>

          <div className="visuals">
            {/* Conditional rendering based on the selected graph */}
            {selectedGraph === "A" && (
              <div className="main-interact">
                <div className="visualization" id="vis1"></div>
              </div>
            )}
            {selectedGraph === "B" && (
              <div className="main-interact">
                <div className="visualization" id="vis2"></div>
              </div>
            )}
            {selectedGraph === "C" && (
              <div className="main-interact">
                <div className="visualization" id="vis3"></div>
              </div>
            )}
          </div>
        </div>
        {/* <div className="col-md-6 col-content">
          <div className="visualization" id="vis4"></div>
        </div> */}
      </div>
    </div>
  );
}

export default App;

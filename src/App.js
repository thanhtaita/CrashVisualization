import "./App.css";
import vegaEmbed from "vega-embed";
import { useEffect, useState } from "react";
import { v1_6 } from "./visualization/v1_6";
import { v2_1 } from "./visualization/v2_1";
import { v2_2 } from "./visualization/v2_2";
import { v2_3 } from "./visualization/v2_3";
import { v2_4 } from "./visualization/v2_4";
import { v3_1 } from "./visualization/v3_1";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";

function App() {
  const [selectedGraph, setSelectedGraph] = useState("A");
  const [rightGraph, setRightGraph] = useState(1);

  useEffect(() => {
    // Embed all visualizations
    vegaEmbed("#vis6", v1_6)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));

    vegaEmbed("#vis5", v3_1)
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

  useEffect(() => {
    // Embed visualizations based on the right graph
    switch (rightGraph) {
      case 1:
        vegaEmbed("#vis5", v3_1)
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
        break;
      case 2:
        vegaEmbed("#vis6", v1_6)
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
        break;
      case 3:
        vegaEmbed("#vis4", v2_4)
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
        break;
      default:
        break;
    }
  }, [rightGraph]);

  const handleRightArrow = () => {
    if (rightGraph < 3) {
      setRightGraph(rightGraph + 1);
    }
  };

  const handleLeftArrow = () => {
    if (rightGraph > 1) {
      setRightGraph(rightGraph - 1);
    }
  };

  return (
    <div>
      <div className="visual-container">
        <div className="left">
          <div className="options">
            <div className="option">
              <input
                type="radio"
                name="graph"
                value="A"
                checked={selectedGraph === "A"}
                onChange={() => setSelectedGraph("A")}
              />
              <div>
                <div>Traffic way type</div>
                <div>First crash type</div>
              </div>
            </div>
            <div className="option">
              <input
                type="radio"
                name="graph"
                value="B"
                checked={selectedGraph === "B"}
                onChange={() => setSelectedGraph("B")}
              />
              <div>
                <div>Traffic way type</div>
                <div>Posted Speed limit</div>
                <div>Light condition</div>
              </div>
            </div>
            <div className="option">
              <input
                type="radio"
                name="graph"
                value="C"
                checked={selectedGraph === "C"}
                onChange={() => setSelectedGraph("C")}
              />
              <div>
                <div>Traffic way type</div>
                <div>Prime contributory cause</div>
                <div>Control device</div>
              </div>
            </div>
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
        <div className="right">
          <SlArrowLeftCircle
            color="rgba(0, 0, 0, 0.5)"
            size={25}
            className="arrow-left"
            onClick={handleLeftArrow}
          />
          <SlArrowRightCircle
            color="rgba(0, 0, 0, 0.5)"
            size={25}
            className="arrow-right"
            onClick={handleRightArrow}
          />
          {rightGraph === 1 && (
            <div className="map-interact">
              <div className="visualization" id="vis5"></div>
            </div>
          )}
          {rightGraph === 3 && (
            <div className="bar-dot-chart">
              <div className="visualization" id="vis4"></div>
            </div>
          )}
          {rightGraph === 2 && (
            <div className="line-bar-chart">
              <div className="visualization" id="vis6"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

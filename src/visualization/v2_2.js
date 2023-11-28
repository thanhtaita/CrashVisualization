import data2 from "../data/v2_2.json";
export const v2_2 = {
  config: {
    view: { continuousWidth: 300, continuousHeight: 300 },
    background: "#fbfbfb",
  },
  vconcat: [
    {
      mark: { type: "bar" },
      encoding: {
        color: { field: "LIGHTING_CONDITION", type: "nominal" },
        x: {
          aggregate: "count",
          field: "LIGHTING_CONDITION",
          type: "quantitative",
        },
        y: { field: "LIGHTING_CONDITION", type: "nominal" },
      },
      height: 100,
      transform: [{ filter: { param: "param_2" } }],
      width: 400,
      config: {
        legend: {
          // Adjust legend spacing and position
          titleFontSize: 12,
          labelFontSize: 10,
          labelPadding: 8,
          symbolSize: 150,
          offset: 50, // Adjust the offset to move the legend closer to the chart
        },
      },
    },
    {
      mark: { type: "point" },
      encoding: {
        color: {
          condition: {
            param: "param_2",
            field: "LIGHTING_CONDITION",
            type: "nominal",
          },
          value: "lightgray",
        },
        y: { field: "TRAFFICWAY_TYPE", type: "nominal" },
        x: { field: "POSTED_SPEED_LIMIT", type: "quantitative" },
      },
      height: 350,
      name: "view_3",
      width: 350,
    },
  ],
  data: { name: "data-8f2c762da44d12ba74ebcc10c8e767b6" },
  params: [
    { name: "param_2", select: { type: "interval" }, views: ["view_3"] },
  ],
  $schema: "https://vega.github.io/schema/vega-lite/v5.16.3.json",
  datasets: {
    "data-8f2c762da44d12ba74ebcc10c8e767b6": data2,
  },
};

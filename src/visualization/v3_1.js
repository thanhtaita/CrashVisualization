import data3_1 from "../data/v3_1.json";
export const v3_1 = {
  config: {
    view: { continuousWidth: 150, continuousHeight: 150 },
    spacing: 0,
    background: "transparent",
  },
  hconcat: [
    {
      mark: { type: "geoshape" },
      encoding: {
        color: {
          condition: {
            param: "param_6",
            empty: false,
            value: "lightgray",
          },
          field: "count",
          scale: { exponent: 0.9, type: "pow" },
          type: "quantitative",
        },
        tooltip: [
          { field: "count", type: "quantitative" },
          { field: "zip", type: "nominal" },
        ],
      },
      height: 400,
      projection: { type: "equalEarth" },
      title: "Heatmap of Crashes in Chicago",
      width: 240,
    },
    {
      mark: { type: "bar" },
      encoding: {
        color: {
          condition: {
            param: "param_6",
            empty: false,
            value: "lightgray",
          },
          field: "count",
          scale: { exponent: 0.9, type: "pow" },
          type: "quantitative",
        },
        tooltip: [
          { field: "count", type: "quantitative" },
          { field: "zip", type: "nominal" },
        ],
        x: { field: "count", type: "quantitative" },
        y: {
          field: "zip",
          sort: { field: "count", op: "sum", order: "descending" },
          type: "nominal",
        },
      },
      name: "view_7",
    },
  ],
  data: { name: "data-b0ae0833670706e11ad47ef16bc1d5ff" },
  params: [
    {
      name: "param_6",
      select: { type: "point", encodings: ["y"], on: "mouseover" },
      views: ["view_7"],
    },
  ],
  $schema: "https://vega.github.io/schema/vega-lite/v5.16.3.json",
  datasets: {
    "data-b0ae0833670706e11ad47ef16bc1d5ff": data3_1,
  },
};

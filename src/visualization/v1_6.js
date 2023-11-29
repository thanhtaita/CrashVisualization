import data6 from "../../src/data/v1_6.json";
export const v1_6 = {
  config: {
    view: { continuousWidth: 300, continuousHeight: 300 },
    background: "transparent",
  },
  layer: [
    {
      mark: { type: "bar" },
      encoding: {
        color: {
          field: "FIRST_CRASH_TYPE",
          legend: null,
          type: "ordinal",
        },
        x: { field: "FIRST_CRASH_TYPE", type: "ordinal" },
        y: {
          field: "crashes_count",
          title: "Number of Crashes",
          type: "quantitative",
        },
      },
    },
    {
      mark: { type: "line", color: "red" },
      encoding: {
        tooltip: [
          { field: "FIRST_CRASH_TYPE", type: "nominal" },
          { field: "crashes_count", type: "quantitative" },
          { field: "total_injuries_fatal", type: "quantitative" },
        ],
        x: { field: "FIRST_CRASH_TYPE", type: "ordinal" },
        y: {
          axis: { orient: "right" },
          field: "total_injuries_fatal",
          type: "quantitative",
        },
      },
    },
  ],
  data: { name: "data-481526a5003df8db9efbc6091c349b28" },
  resolve: { scale: { y: "independent" } },
  $schema: "https://vega.github.io/schema/vega-lite/v5.16.3.json",
  datasets: {
    "data-481526a5003df8db9efbc6091c349b28": data6,
  },
};

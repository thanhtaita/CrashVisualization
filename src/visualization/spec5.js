export const spec5 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: {
    url: "../../public/data/data.json",
    format: { type: "json", property: "features" },
  },
  mark: { type: "geoshape", filled: true },
  encoding: {
    color: {
      field: "properties.count",
      type: "quantitative",
      scale: { scheme: "orangered" },
    },
    tooltip: [
      { field: "properties.count", type: "quantitative" },
      { field: "properties.zip", type: "nominal" },
    ],
  },
  projection: { type: "equalEarth" },
  width: 800,
  height: 600,
  title: "Heatmap of Crashes in Chicago",
};

import data3 from "../data/v2_3.json";
export const v2_3 = {
  config: {
    view: { continuousWidth: 300, continuousHeight: 300 },
    background: "transparent",
  },
  repeat: {
    column: [
      "PRIM_CONTRIBUTORY_CAUSE",
      "TRAFFICWAY_TYPE",
      "TRAFFIC_CONTROL_DEVICE",
    ],
  },
  spec: {
    layer: [
      {
        mark: { type: "bar" },
        encoding: {
          color: { value: "#ddd" },
          x: { field: { repeat: "column" } },
          y: { aggregate: "count", type: "quantitative" },
        },
        name: "view_4",
      },
      {
        mark: { type: "bar" },
        encoding: {
          color: { value: "#ad828c" },
          x: { field: { repeat: "column" } },
          y: { aggregate: "count", type: "quantitative" },
        },
        transform: [{ filter: { param: "param_3" } }],
      },
    ],
    data: { name: "data-99f295c3cff98eef75bbb32562f866ce" },
    height: 250,
    width: 170,
  },
  params: [
    {
      name: "param_3",
      select: { type: "interval", encodings: ["x"] },
      views: [
        "child__column_PRIM_CONTRIBUTORY_CAUSE_view_4",
        "child__column_TRAFFICWAY_TYPE_view_4",
        "child__column_TRAFFIC_CONTROL_DEVICE_view_4",
      ],
    },
  ],
  $schema: "https://vega.github.io/schema/vega-lite/v5.16.3.json",
  datasets: {
    "data-99f295c3cff98eef75bbb32562f866ce": data3,
  },
};

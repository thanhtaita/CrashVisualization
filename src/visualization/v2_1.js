import data1 from "../data/v2_1.json";
export const v2_1 = {
  config: {
    view: { continuousWidth: 300, continuousHeight: 300 },
    background: "transparent",
  },
  hconcat: [
    {
      mark: { type: "circle", size: 200 },
      encoding: {
        color: {
          condition: {
            param: "param_1",
            empty: true,
            field: "id",
            type: "ordinal",
            legend: null,
          },
          value: "lightgray",
        },
        x: { field: "x", title: "FIRST CRASH TYPE", type: "nominal" },
        y: { field: "y", title: "TRAFFIC WAY TYPE", type: "nominal" },
      },
      height: 200,
      name: "view_1",
      width: 200,
    },
    {
      mark: { type: "line" },
      encoding: {
        color: { field: "id", legend: null, type: "ordinal" },
        x: { field: "TIME", type: "nominal" },
        y: {
          field: "NUMBER OF ACCIDENTS",
          scale: { domain: [0, 14601] },
          type: "quantitative",
        },
      },
      height: 200,
      name: "view_2",
      transform: [{ filter: { param: "param_1", empty: true } }],
      width: 200,
    },
  ],
  data: { name: "data-f45efc67572d8e0e8a56dc143befe366" },
  params: [
    {
      name: "param_1",
      select: { type: "point", fields: ["id"] },
      views: ["view_1", "view_2"],
    },
  ],
  $schema: "https://vega.github.io/schema/vega-lite/v5.16.3.json",
  datasets: {
    "data-f45efc67572d8e0e8a56dc143befe366": data1,
  },
};

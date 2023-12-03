import data4 from "../data/v2_4.json";
export const v2_4 = {
  config: {
    view: { continuousWidth: 300, continuousHeight: 300 },
    background: "transparent",
  },
  title: {
    text: "TRAFFIC CRASHES BY WEATHER CONDITION",
    anchor: "middle", // Center the title horizontally
    align: "center", // Center the title vertically
    offset: 20,
  },
  vconcat: [
    {
      data: { name: "data-2100aa5174ce30596cf60bcb65339c1d" },
      mark: { type: "bar" },
      encoding: {
        color: {
          condition: {
            param: "param_5",
            empty: true,
            field: "WEATHER_CONDITION",
            type: "nominal",
          },
          value: "lightgray",
        },
        tooltip: [
          { field: "WEATHER_CONDITION", type: "nominal" },
          { field: "count", type: "quantitative" },
        ],
        x: { field: "WEATHER_CONDITION", type: "nominal" },
        y: { field: "count", type: "quantitative" },
      },
      name: "view_6",
      title: "Number of Crashes by Weather Condition",
      height: 280,
      width: 400,
    },
    {
      data: { name: "data-2465a16e4a186837fbf9eae833481c29" },
      mark: { type: "circle", size: 60 },
      encoding: {
        color: { field: "WEATHER_CONDITION", type: "nominal" },
        tooltip: [
          { field: "CRASH_DATE", type: "temporal" },
          { field: "WEATHER_CONDITION", type: "nominal" },
        ],
        x: { field: "CRASH_DATE", timeUnit: "year", type: "temporal" },
        y: { field: "WEATHER_CONDITION", type: "nominal" },
      },
      title: "Crashes by Weather Condition",
      transform: [{ filter: { param: "param_5", empty: true } }],
      height: 300,
      width: 450,
    },
  ],
  params: [
    {
      name: "param_5",
      select: { type: "point", fields: ["WEATHER_CONDITION"] },
      bind: {
        input: "select",
        options: [
          "BLOWING SAND, SOIL, DIRT",
          "BLOWING SNOW",
          "CLOUDY/OVERCAST",
          "FOG/SMOKE/HAZE",
          "FREEZING RAIN/DRIZZLE",
          "OTHER",
          "RAIN",
          "SEVERE CROSS WIND GATE",
          "SLEET/HAIL",
          "SNOW",
          "UNKNOWN",
        ],
      },
      views: ["view_6"],
    },
  ],
  $schema: "https://vega.github.io/schema/vega-lite/v5.16.3.json",
  datasets: data4,
};

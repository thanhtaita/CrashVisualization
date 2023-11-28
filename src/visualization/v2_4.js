import data4 from "../data/v2_4.json";
export const v2_4 = {
  config: {
    view: { continuousWidth: 300, continuousHeight: 300 },
    background: "#fbfbfb",
  },
  $schema: "https://vega.github.io/schema/vega/v5.json",
  data: [
    {
      name: "_server_source_1",
      values: data4,
      transform: [
        {
          type: "formula",
          expr: "toDate(datum['CRASH_DATE'])",
          as: "CRASH_DATE",
        },
      ],
    },
    { name: "param_2_store" },
    {
      name: "source_0",
      values: [
        {
          WEATHER_CONDITION: "BLOWING SAND, SOIL, DIRT",
          count: 7,
          count_start: 0,
          count_end: 7,
        },
        {
          WEATHER_CONDITION: "BLOWING SNOW",
          count: 366,
          count_start: 0,
          count_end: 366,
        },
        {
          WEATHER_CONDITION: "CLOUDY/OVERCAST",
          count: 21460,
          count_start: 0,
          count_end: 21460,
        },
        {
          WEATHER_CONDITION: "FOG/SMOKE/HAZE",
          count: 1055,
          count_start: 0,
          count_end: 1055,
        },
        {
          WEATHER_CONDITION: "FREEZING RAIN/DRIZZLE",
          count: 1294,
          count_start: 0,
          count_end: 1294,
        },
        {
          WEATHER_CONDITION: "OTHER",
          count: 2260,
          count_start: 0,
          count_end: 2260,
        },
        {
          WEATHER_CONDITION: "RAIN",
          count: 62831,
          count_start: 0,
          count_end: 62831,
        },
        {
          WEATHER_CONDITION: "SEVERE CROSS WIND GATE",
          count: 120,
          count_start: 0,
          count_end: 120,
        },
        {
          WEATHER_CONDITION: "SLEET/HAIL",
          count: 899,
          count_start: 0,
          count_end: 899,
        },
        {
          WEATHER_CONDITION: "SNOW",
          count: 25466,
          count_start: 0,
          count_end: 25466,
        },
        {
          WEATHER_CONDITION: "UNKNOWN",
          count: 39291,
          count_start: 0,
          count_end: 39291,
        },
      ],
    },
    {
      name: "source_1",
      source: "_server_source_1",
      transform: [
        {
          type: "filter",
          expr: '!length(data("param_2_store")) || vlSelectionTest("param_2_store", datum)',
        },
        {
          type: "timeunit",
          field: "CRASH_DATE",
          units: ["year"],
          as: ["year_CRASH_DATE", "year_CRASH_DATE_end"],
        },
        {
          type: "filter",
          expr: '(isDate(datum["year_CRASH_DATE"]) || (isValid(datum["year_CRASH_DATE"]) && isFinite(+datum["year_CRASH_DATE"])))',
        },
        {
          type: "project",
          fields: ["CRASH_DATE", "WEATHER_CONDITION", "year_CRASH_DATE"],
        },
      ],
    },
    {
      name: "source_0_color_domain_WEATHER_CONDITION_0",
      values: [
        { WEATHER_CONDITION: "BLOWING SAND, SOIL, DIRT" },
        { WEATHER_CONDITION: "BLOWING SNOW" },
        { WEATHER_CONDITION: "CLOUDY/OVERCAST" },
        { WEATHER_CONDITION: "FOG/SMOKE/HAZE" },
        { WEATHER_CONDITION: "FREEZING RAIN/DRIZZLE" },
        { WEATHER_CONDITION: "OTHER" },
        { WEATHER_CONDITION: "RAIN" },
        { WEATHER_CONDITION: "SEVERE CROSS WIND GATE" },
        { WEATHER_CONDITION: "SLEET/HAIL" },
        { WEATHER_CONDITION: "SNOW" },
        { WEATHER_CONDITION: "UNKNOWN" },
      ],
    },
    {
      name: "source_1_color_domain_WEATHER_CONDITION_1",
      source: "source_1",
      transform: [
        {
          type: "aggregate",
          groupby: ["WEATHER_CONDITION"],
          fields: [],
          ops: [],
          as: [],
        },
        {
          type: "formula",
          expr: "datum['WEATHER_CONDITION']",
          as: "sort_field",
        },
        { type: "project", fields: ["WEATHER_CONDITION"] },
      ],
    },
    {
      name: "source_0_view_2_x_domain_WEATHER_CONDITION",
      values: [
        { WEATHER_CONDITION: "BLOWING SAND, SOIL, DIRT" },
        { WEATHER_CONDITION: "BLOWING SNOW" },
        { WEATHER_CONDITION: "CLOUDY/OVERCAST" },
        { WEATHER_CONDITION: "FOG/SMOKE/HAZE" },
        { WEATHER_CONDITION: "FREEZING RAIN/DRIZZLE" },
        { WEATHER_CONDITION: "OTHER" },
        { WEATHER_CONDITION: "RAIN" },
        { WEATHER_CONDITION: "SEVERE CROSS WIND GATE" },
        { WEATHER_CONDITION: "SLEET/HAIL" },
        { WEATHER_CONDITION: "SNOW" },
        { WEATHER_CONDITION: "UNKNOWN" },
      ],
    },
    {
      name: "source_1_concat_1_y_domain_WEATHER_CONDITION",
      source: "source_1",
      transform: [
        {
          type: "aggregate",
          groupby: ["WEATHER_CONDITION"],
          fields: [],
          ops: [],
          as: [],
        },
        {
          type: "formula",
          expr: "datum['WEATHER_CONDITION']",
          as: "sort_field",
        },
        { type: "project", fields: ["WEATHER_CONDITION"] },
      ],
    },
  ],
  signals: [
    { name: "view_2_height", value: 200 },
    { name: "concat_1_y_step", value: 20 },
    {
      name: "concat_1_height",
      update:
        "bandspace(domain('concat_1_y').length, 1, 0.5) * concat_1_y_step",
    },
    {
      name: "unit",
      value: {},
      on: [
        { events: "mousemove", update: "isTuple(group()) ? group() : unit" },
      ],
    },
    {
      name: "param_2_WEATHER_CONDITION",
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
    },
    {
      name: "param_2",
      update: 'vlSelectionResolve("param_2_store", "union", true, true)',
    },
  ],
  marks: [
    {
      type: "group",
      name: "view_2_group",
      encode: {
        update: {
          height: { signal: "view_2_height" },
          width: { signal: "width" },
        },
      },
      signals: [
        {
          name: "param_2_tuple",
          update:
            "param_2_WEATHER_CONDITION !== null ? {fields: param_2_tuple_fields, values: [param_2_WEATHER_CONDITION]} : null",
        },
        {
          name: "param_2_tuple_fields",
          value: [{ type: "E", field: "WEATHER_CONDITION" }],
        },
        {
          name: "param_2_modify",
          on: [
            {
              events: { signal: "param_2_tuple" },
              update: 'modify("param_2_store", param_2_tuple, true)',
            },
          ],
        },
      ],
      marks: [
        {
          type: "rect",
          name: "view_2_marks",
          from: { data: "source_0" },
          encode: {
            update: {
              description: {
                signal:
                  '"WEATHER_CONDITION: " + (isValid(datum["WEATHER_CONDITION"]) ? datum["WEATHER_CONDITION"] : ""+datum["WEATHER_CONDITION"]) + "; count: " + (format(datum["count"], ""))',
              },
              x: { field: "WEATHER_CONDITION", scale: "view_2_x" },
              fill: [
                {
                  field: "WEATHER_CONDITION",
                  scale: "color",
                  test: '!length(data("param_2_store")) || vlSelectionTest("param_2_store", datum)',
                },
                { value: "lightgray" },
              ],
              width: { signal: "max(0.25, bandwidth('view_2_x'))" },
              y: { field: "count_end", scale: "view_2_y" },
              ariaRoleDescription: { value: "bar" },
              y2: { field: "count_start", scale: "view_2_y" },
              tooltip: {
                signal:
                  '{"WEATHER_CONDITION": isValid(datum["WEATHER_CONDITION"]) ? datum["WEATHER_CONDITION"] : ""+datum["WEATHER_CONDITION"], "count": format(datum["count"], "")}',
              },
            },
          },
          style: ["bar"],
          interactive: true,
        },
      ],
      axes: [
        {
          scale: "view_2_y",
          tickCount: { signal: "ceil(view_2_height/40)" },
          domain: false,
          ticks: false,
          maxExtent: 0,
          gridScale: "view_2_x",
          orient: "left",
          aria: false,
          grid: true,
          minExtent: 0,
          zindex: 0,
          labels: false,
        },
        {
          scale: "view_2_x",
          labelAlign: "right",
          labelBaseline: "middle",
          orient: "bottom",
          labelAngle: 270,
          grid: false,
          title: "WEATHER_CONDITION",
          zindex: 0,
        },
        {
          scale: "view_2_y",
          grid: false,
          tickCount: { signal: "ceil(view_2_height/40)" },
          orient: "left",
          title: "count",
          labelOverlap: true,
          zindex: 0,
        },
      ],
      title: {
        text: "Number of Crashes by Weather Condition",
        frame: "group",
      },
      style: "cell",
    },
    {
      type: "group",
      name: "concat_1_group",
      encode: {
        update: {
          height: { signal: "concat_1_height" },
          width: { signal: "width" },
        },
      },
      marks: [
        {
          type: "symbol",
          name: "concat_1_marks",
          from: { data: "source_1" },
          encode: {
            update: {
              fill: { field: "WEATHER_CONDITION", scale: "color" },
              x: { field: "year_CRASH_DATE", scale: "concat_1_x" },
              y: { field: "WEATHER_CONDITION", scale: "concat_1_y" },
              shape: { value: "circle" },
              tooltip: {
                signal:
                  '{"CRASH_DATE": timeFormat(datum["CRASH_DATE"], \'%b %d, %Y\'), "WEATHER_CONDITION": isValid(datum["WEATHER_CONDITION"]) ? datum["WEATHER_CONDITION"] : ""+datum["WEATHER_CONDITION"]}',
              },
              size: { value: 60 },
              ariaRoleDescription: { value: "circle" },
              description: {
                signal:
                  '"CRASH_DATE (year): " + (timeFormat(datum["year_CRASH_DATE"], timeUnitSpecifier(["year"], {"year-month":"%b %Y ","year-month-date":"%b %d, %Y "}))) + "; WEATHER_CONDITION: " + (isValid(datum["WEATHER_CONDITION"]) ? datum["WEATHER_CONDITION"] : ""+datum["WEATHER_CONDITION"]) + "; CRASH_DATE: " + (timeFormat(datum["CRASH_DATE"], \'%b %d, %Y\'))',
              },
              opacity: { value: 0.7 },
            },
          },
          style: ["circle"],
          interactive: true,
        },
      ],
      axes: [
        {
          scale: "concat_1_x",
          aria: false,
          orient: "bottom",
          tickMinStep: {
            signal:
              "datetime(2002, 0, 1, 0, 0, 0, 0) - datetime(2001, 0, 1, 0, 0, 0, 0)",
          },
          gridScale: "concat_1_y",
          domain: false,
          zindex: 0,
          minExtent: 0,
          labels: false,
          ticks: false,
          tickCount: { signal: "ceil(width/40)" },
          grid: true,
          maxExtent: 0,
        },
        {
          scale: "concat_1_x",
          tickMinStep: {
            signal:
              "datetime(2002, 0, 1, 0, 0, 0, 0) - datetime(2001, 0, 1, 0, 0, 0, 0)",
          },
          tickCount: { signal: "ceil(width/40)" },
          labelFlush: true,
          format: {
            signal:
              'timeUnitSpecifier(["year"], {"year-month":"%b %Y ","year-month-date":"%b %d, %Y "})',
          },
          labelOverlap: true,
          orient: "bottom",
          title: "CRASH_DATE (year)",
          grid: false,
          zindex: 0,
        },
        {
          scale: "concat_1_y",
          orient: "left",
          grid: false,
          title: "WEATHER_CONDITION",
          zindex: 0,
        },
      ],
      title: { text: "Crashes by Weather Condition", frame: "group" },
      style: "cell",
    },
  ],
  scales: [
    {
      name: "color",
      type: "ordinal",
      domain: {
        fields: [
          {
            data: "source_0_color_domain_WEATHER_CONDITION_0",
            field: "WEATHER_CONDITION",
          },
          {
            data: "source_1_color_domain_WEATHER_CONDITION_1",
            field: "WEATHER_CONDITION",
          },
        ],
        sort: true,
      },
      range: "category",
    },
    {
      name: "view_2_x",
      type: "band",
      domain: {
        data: "source_0_view_2_x_domain_WEATHER_CONDITION",
        field: "WEATHER_CONDITION",
        sort: true,
      },
      range: [0, { signal: "width" }],
      paddingInner: 0.1,
      paddingOuter: 0.05,
    },
    {
      name: "view_2_y",
      type: "linear",
      domain: { data: "source_0", fields: ["count_start", "count_end"] },
      range: [{ signal: "view_2_height" }, 0],
      nice: true,
      zero: true,
    },
    {
      name: "concat_1_x",
      type: "time",
      domain: { data: "source_1", field: "year_CRASH_DATE" },
      range: [0, { signal: "width" }],
    },
    {
      name: "concat_1_y",
      type: "point",
      domain: {
        data: "source_1_concat_1_y_domain_WEATHER_CONDITION",
        field: "WEATHER_CONDITION",
        sort: true,
      },
      range: { step: { signal: "concat_1_y_step" } },
      padding: 0.5,
    },
  ],
  background: "white",
  padding: 5,
  layout: { padding: 20, columns: 1, bounds: "full", align: "each" },
  legends: [
    {
      fill: "color",
      symbolType: "circle",
      title: "WEATHER_CONDITION",
      encode: { symbols: { update: { opacity: { value: 0.7 } } } },
    },
  ],
  width: 250,
};

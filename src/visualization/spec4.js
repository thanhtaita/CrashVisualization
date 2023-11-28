// // import "../../public/data/seattle-weather.csv";
// const dataUrl = "../../public/data/seattle-weather.csv";

// let spec4 = {};
// fetch(dataUrl)
//   .then((response) => response.text())
//   .then((data) => {
//     console.log(data);
//     const convertedData = JSON.parse(data);
//     console.log(convertedData);

//     // Create the Vega-Lite specification inside the .then block
//     spec4 = {
//       $schema: "https://vega.github.io/schema/vega-lite/v5.json",
//       data: { values: convertedData },
//       mark: { type: "bar", cornerRadiusTopLeft: 3, cornerRadiusTopRight: 3 },
//       encoding: {
//         x: { timeUnit: "month", field: "date", type: "ordinal" },
//         y: { aggregate: "count" },
//         color: { field: "weather" },
//       },
//     };

//     // Now you can use spec4 for rendering or other purposes
//     console.log(spec4);
//   })
//   .catch((error) => {
//     // Handle fetch errors
//     console.error(error.message);
//   });

// export { spec4 };

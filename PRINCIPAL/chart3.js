// Load the data from the CSV file using d3.dsv
d3.dsv(',','Barrios_2.csv', d3.autoType).then((data) => {
  // Create the bar chart using Plot.js
  let datafilter = data.filter(d => d.ratio >= 0.10)
  console.log(datafilter)

  let chart3 = Plot.plot({
    marks: [
    Plot.barX(
        data,
        { x: "ratio",
          y: "domicilio_barrio",
          sort: { y: "x", reverse: true },
          fill: "grey",
        }) ,
        Plot.barX(
          datafilter,
          { x: "ratio",
            y: "domicilio_barrio",
            sort: { y: "xx", reverse: true },
            fill: "red",
          }) ,
    ],
    color: {
    legend: true,
    scheme: 'blue',
    },  
    grid: true,
    line: false,
    nice: true,
    width: 700,
    height: 800,
    style: {
    color: "black",
    fontFamily: "helvetica",
    fontSize: "13px",
    },
    marginLeft: 150,
    marginRight: 55,
    marginTop: 7,
    marginBottom: 100,
    insetTop: 10,
    insetBottom: 10,
    insetLeft: 10,
    insetRight: 10,
    x: {
    label:"Cantidad de denuncias / densidad de población",
    ticks:10,
    },
    y: {
    label:"Barrios",
    }
});
  d3.select('#chart3').append(() => chart3);
});

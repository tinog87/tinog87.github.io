

d3.dsv(';',"vehiculos.csv", d3.autoType).then((data) => {

  let chart3 = Plot.plot({
    marks: [
      Plot.barY(
        data,
        Plot.groupX({ y: "count" },
         { x: "canal", 
         y: "Prestacion", ///
         sort: { x: "y", reverse: true },
         
        }) ),
    ],
    color: {
      legend: true,
      scheme: 'blues',
    },
    grid:true,
    line:true,
    nice:false,
    width: 800,
    height: 500,
    style: {
      color: "black",
      fontFamily: "helvetica",
      fontSize: "10px",
    },
    marginLeft: 55,
    marginRight: 55,
    marginTop: 50,
    marginBottom: 100,
    insetTop: 10,
    insetBottom: 10,
    insetLeft:10,
    insetRight: 10,
    x: {
      label:"Canal",
    },
    y: {
      label:"Count",
      ticks:5
    }
  });
  
  d3.select("#chart3").append(() => chart3);
});

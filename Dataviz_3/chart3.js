
d3.dsv(';',"vme.csv", d3.autoType).then((data) => {

  let chart3 = Plot.plot({
    marks: [
      Plot.barY(
        data,
        Plot.groupX({ y: "count" },
         { x: "fecha_ingreso", 
         y: "", 
         sort: { x: "y", reverse: true },
        }) ),
    ],
    color: {
      legend: true,
      scheme: 'blues',
    },
    grid:true,
    line:true,
    nice:true,
    width: 1000,
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
      tickRotate: -29,
      round : true,
    },
    y: {
      label:"Count",
    }
  });
  
  d3.select("#chart3").append(() => chart3);
});

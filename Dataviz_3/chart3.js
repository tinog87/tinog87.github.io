d3.dsv(";","vme.csv", d3.autoType).then((data) => {
  let chart3 = Plot.plot({
    marks: [
      Plot.barY(data, Plot.groupX({ 
        y: "sum" },
        {x: "fecha_ingreso",
        y: "fecha_ingreso",
      })
      )],
    marginLeft: 70,
    width: 300,
  color: {
    legend: false,
    scheme: 'blues',
  },
  grid:true,
  line:true,
  nice:true,
  width: 600,
  height: 500,
  style: {
    color: "white",
    fontFamily: "Helvetica",
    fontSize: "12px",
    overflow: "visible",
    background: "transparent",
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
    label:"Fechas",
    tickRotate: -70,
    round : true,
   },
   y: {
    label:"xx",
   }
  });
  d3.select("#chart3").append(() => chart3);

});




d3.dsv(';',"vme.csv", d3.autoType).then((data) => {
  let ocho_enero = data.filter(d => d.fecha_ingreso == "08/01/2021")
  console.log(ocho_enero)
  let horasExactas = ["1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 AM", "13:00 PM", "14:00 PM", "15:00 PM", "16:00 PM", "17:00 PM", "18:00 PM", "19:00 PM", "20:00 PM", "21:00 PM", "22:00 PM", "23:00 PM", "00:00 PM"];


  let chart32 = Plot.plot({
    marks:[
      Plot.line(
        ocho_enero, Plot.groupX({ 
          y: "count" }, 
        { x: "hora_ingreso", 
          y: "", 
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
      domain: horasExactas},
    y: {
      label:"Count",
    }
  });
  
  d3.select("#chart32").append(() => chart32);
});

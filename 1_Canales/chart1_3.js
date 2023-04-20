//d3.dsv(',',"resultado_filtrado_2.csv", d3.autoType).then((data) => {
    let datafilter = data.filter(d => d.cantidad_denuncias > 420)
    console.log(datafilter)
    let chart1_3 = Plot.plot({
      marks: [
        Plot.barX(datafilter,
           { x: "denuncias_app", 
           y: "domicilio_barrio",
          } ),
      ],
      y: {  
        domain: ["VILLA SOLDATI", "VILLA URQUIZA", "BELGRANO", "PALERMO", "CABALLITO"]

      },
      x: {
        domain: [0.00,20.00,40.00,60.0,71.38,73.21,79.78,81.36,95.93,100.00],
      },
      color: {
        legend: true,
      },
      grid:true,
      line:true,
      nice:false,
      width: 800,
      height: 900,
      style: {
        color: "black",
        fontFamily: "helvetica",
        fontSize: "14px",
      },
      marginLeft: 170,
      marginRight: 55,
      marginTop: 50,
      marginBottom: 100,
      insetTop: 10,
      insetBottom: 10,
      insetLeft:10,
      insetRight: 10,

    });
    
    d3.select("#chart1_3").append(() => chart1_3);
  });
  
// Load the data from the CSV file using d3.dsv
d3.dsv(',','Barrios_2.csv', d3.autoType).then((data) => {
    // Create the bar chart using Plot.js
    let chart3 = Plot.plot({
      marks: [
      Plot.barX(
          data,
          { x: "ratio",
            y: "domicilio_barrio",
            sort: { y: "x", reverse: true },
          }) ,
      ],
      color: {
      legend: true,
      scheme: 'blues',
      },
      grid:true,
      line:true,
      nice:true,
      width: 500,
      height: 800,
      style: {
      color: "black",
      fontFamily: "helvetica",
      fontSize: "10px",
      },
      marginLeft: 150,
      marginRight: 55,
      marginTop: 7,
      marginBottom: 100,
      insetTop: 10,
      insetBottom: 10,
      insetLeft:10,
      insetRight: 10,
      x: {
      label:"Cantidad de denuncias / densidad de población",
      tickRotate: -29,
      round : true,
      },
      y: {
      label:"Barrios",
      }
  });
  
    
    d3.select('#chart3').append(() => chart3);
  });
  
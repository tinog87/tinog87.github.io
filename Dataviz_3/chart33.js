
d3.dsv(';',"vme.csv", d3.autoType).then((data) => {
let ocho_enero = data.filter(d => d.fecha_ingreso == "08/01/2021")
console.log(ocho_enero)
let chart33 = Plot.plot({
    marks: [
    Plot.barY(
        ocho_enero,
        Plot.groupX({ y: "count" },
        { x: "domicilio_barrio", 
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

d3.select("#chart33").append(() => chart33);
});

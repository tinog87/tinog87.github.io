d3.dsv(';',"vme.csv", d3.autoType).then((data) => {
let ocho_enero = data.filter(d => d.fecha_ingreso == "08/01/2021" && d.domicilio_barrio == "PALERMO")
console.log(ocho_enero)
let chart34 = Plot.plot({
    marks: [
    Plot.barY(
        ocho_enero,
        Plot.groupX({ y: "count" },
        { x: "subcategoria", 
        y: "subcategoria", 
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
    domain: ['DENUNCIA VIAL','DEFENSA DEL CONSUMIDOR', 'VEHICULOS ABANDONADOS'],
    

    },
    y: {
    label:"Count",
    }
});

d3.select("#chart34").append(() => chart34);
});

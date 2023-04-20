d3.dsv(',',"resultado_filtrado_2.csv", d3.autoType).then((data) => {
    // Filtrar solo las denuncias del barrio Villa Urquiza
    ///let datafilter = data.filter(d => d.domicilio_barrio === "VILLA URQUIZA")
    
    // Crear el gráfico de torta
    let chart6 = Plot.plot({
      marks: [
        Plot.arc({
          data: [
            { value: Denuncias_app, label: "APP DENUNCIA VIAL" },
            { value: 100 - Denuncias_app, label: "Otros" },
          ],
          x: 400,
          y: 400,
          innerRadius: 200,
          outerRadius: 300,
          cornerRadius: 20,
          padAngle: 0.05,
          fill: d => d.label === "APP DENUNCIA VIAL" ? "#2ca02c" : "#d62728",
          stroke: "white",
          strokeWidth: 2,
          tooltip: d => `${d.label}: ${d.value.toFixed(2)}%`,
          label: {
            text: d => d.label,
            fill: "white",
            fontFamily: "helvetica",
            fontSize: "24px",
          },
        }),
      ],
      width: 800,
      height: 800,
      marginLeft: 100,
      marginRight: 100,
      marginTop: 100,
      marginBottom: 100,
    });
    
    d3.select("#chart6").append(() => chart6);
  });
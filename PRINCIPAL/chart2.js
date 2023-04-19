const mapaFetch = d3.json('barrios-caba.geojson')
const dataFetch = d3.dsv(',', 'resultado_filtrado.csv', d3.autoType)

Promise.all([mapaFetch, dataFetch]).then(([barrios, data]) => {
  
  /* Agrupamos reclamos x barrio */
  const reclamosPorBarrio = d3.group(data, d => d.domicilio_barrio) // crea un Map
  console.log('reclamosPorBarrio', reclamosPorBarrio)
  
  /* Mapa Coroplético */
  let chart2 = Plot.plot({
    // https://github.com/observablehq/plot#projection-options
    projection: {
      type: 'mercator',
      domain: barrios, // Objeto GeoJson a encuadrar
    },
    color: {
      // Quantize continuo (cant. denuncias) -> discreto (cant. colores)
      type: 'quantize', 
      n: 8,
      scheme: 'ylorbr',
      label: 'Cantidad de denuncias',
      legend: true,
    },
    marks: [
      Plot.geo(barrios, {
        fill: d => {
          let nombreBarrio = d.properties.BARRIO;
          let cantReclamos = reclamosPorBarrio.get(nombreBarrio)?.length || 0;
          return cantReclamos;
        },
        stroke: '#000',
        title: d => {
          let nombreBarrio = d.properties.BARRIO;
          let cantReclamos = reclamosPorBarrio.get(nombreBarrio)?.length || 0;
          let cantidadHabitantes = reclamosPorBarrio.get(nombreBarrio)?.[0]?.habitantes || 'N/A';
          let ratio = reclamosPorBarrio.get(nombreBarrio)?.[0]?.ratio || 'N/A';
          let duracionTotal = reclamosPorBarrio.get(nombreBarrio)?.[0]?.duracion_total || 'N/A'; // Agrega la nueva variable duracion_total
          return `${d.properties.BARRIO}\n${cantReclamos} denuncias\nCantidad de Habitantes: ${cantidadHabitantes}\nRatio: ${ratio}\nDuracion Total Denuncias: ${duracionTotal.toFixed(0)} dias`; // Actualiza el título con la nueva variable y quita los decimales
        },
      }),
    ],
  })

  /* Agregamos al DOM la visualización chartMap */
  d3.select('#chart2').append(() => chart2)
})

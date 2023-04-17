const mapaFetch = d3.json('../Datasets/barrios-caba.geojson')
const dataFetch = d3.dsv(';', '../Datasets/147_vehiculos_mal_estacionados.csv', d3.autoType)

Promise.all([mapaFetch, dataFetch]).then(([barrios, data]) => {
  
  /* Mapa Coroplético */
  let chart2 = Plot.plot({
    // https://github.com/observablehq/plot#projection-options
    projection: {
      type: 'mercator',
      domain: barrios, // Objeto GeoJson a encuadrar
    },
    color: {
      scheme: 'ylorbr',
    },
    marks: [
      Plot.density(data, { x: 'lon', y: 'lat', fill: 'density',bandwidth: 15, thresholds: 30 }),
      Plot.geo(barrios, {
        stroke: 'black',
        title: d => `${d.properties.BARRIO}\n${d.properties.DENUNCIAS} denuncias`,
      }),
      Plot.text(barrios, {
        fontSize: 12, // Increased font size
        
        fontWeight: 600, // Increased font weight
        stroke: "white", // Adds white outer stroke to text (for readability)
        fill: "black", // Text fill color
        textAnchor: "start", // Left align text with the x- and y-coordinates
      }),
    ],
  })

  /* Agregamos al DOM la visualización chartMap */
  d3.select('#chart2').append(() => chart2)
})

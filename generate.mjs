import { geoProjection, geoPath } from 'd3-geo';
fetch('https://raw.githubusercontent.com/adarshbiradar/maps-geojson/master/india.json')
  .then(res => res.json())
  .then(geojson => {
    const projection = geoProjection((x, y) => {
      const lng = x * 180 / Math.PI;
      const lat = y * 180 / Math.PI;
      const px = (lng + 180) * (800 / 360);
      const py = (90 - lat) * (400 / 180);
      return [px, py];
    });
    const path = geoPath().projection(projection);
    const svgPath = path(geojson.features[0]); 
    import('fs').then(fs => fs.writeFileSync('indiaPath.txt', svgPath));
  });


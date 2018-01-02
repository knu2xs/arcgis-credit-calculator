import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

let creditObjectArray = [{
  name: 'Feature Service Storage',
  description: 'Feature Services Storage (excludes feature attachments) - in MB',
  credits: 2.4,
  units: 10
}, {
  name: 'Tile or Data Storage',
  description: 'Tile and Data Storage (map tiles, feature attachments, scene layer packages, and documents) - in GB',
  credits: 1.2,
  units: 1
}, {
  name: 'Geocoding',
  description: '',
  credits: 40,
  units: 1000
}, {
  name: 'Simple Routes',
  description: '',
  credits: 0.04,
  units: 1
}, {
  name: 'Optimized Routes',
  description: '',
  credits: 0.5,
  units: 1
}, {
  name: 'Drive-Times (Service Areas)',
  description: '',
  credits: 0.5,
  units: 1
}, {
  name: 'Closest Facilities',
  description: '',
  credits: 0.5,
  units: 1,
}, {
  name: 'Multi-Vehicle Routes (VRP)',
  description: '',
  credits: 1,
  units: 1
}, {
  name: 'Location-Allocation',
  description: '',
  credits: 0.1,
  units: 1
}, {
  name: 'Origin Destination Cost Matrix - per pair',
  description: '',
  credits: 0.0005,
  units: 1
}, {
  name: 'Spatial Analysis - per feature',
  description: '',
  credits: 1,
  units: 1000,
}, {
  name: 'Elevation Analysis - per feature',
  description: '',
  credits: 1,
  units: 1000
}, {
  name: 'Business Search',
  description: '',
  credits: 10,
  units: 1000
}, {
  name: 'Demographic Maps and Layers - per pan, zoom, or identify',
  description: '',
  credits: 10,
  units: 1000
}, {
  name: 'Data Enrichment',
  description: 'Data Enrichment - per attribute (data variables multiplied by total feature records)',
  credits: 10,
  units: 1000
}, {
  name: 'Infographics',
  description: '',
  credits: 10,
  units: 1000
}, {
  name: 'Report',
  description: '',
  credits: 10,
  units: 1
}, {
  name: 'Tile Generation',
  description: '',
  credits: 1,
  units: 10000
}, {
  name: 'Scene Layer Generation From Features - textured multipatch',
  description: '',
  credits: 1,
  units: 1000
}, {
  name: 'Scene Layer Generation From Features - untextured multipatch',
  description: '',
  credits: 1,
  units: 5000
}];

for (let i = 0; i < creditObjectArray.length; i++) {
  creditObjectArray[i].creditRate = creditObjectArray[i].credits / creditObjectArray[i].units;
}

export default Route.extend({
  model() {
    return creditObjectArray;
  }
});

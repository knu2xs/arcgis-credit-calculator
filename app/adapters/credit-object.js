import DS from 'ember-data';

// all the credit objects
const _data = [
  {
    name: 'Feature Service Storage',
    description: 'Feature Services Storage (excludes feature attachments)',
    unitMeasure: 'MB',
    creditRate: 2.4,
    unitRate: 10
  }, {
    name: 'Tile or Data Storage',
    description: 'Tile and Data Storage (map tiles, feature attachments, scene layer packages, and documents)',
    unitMeasure: 'GB',
    creditRate: 1.2,
    unitRate: 1
  }, {
    name: 'Geocoding',
    description: '',
    unitMeasure: 'per location',
    creditRate: 40,
    unitRate: 1000
  }, {
    name: 'Simple Routes',
    description: '',
    unitMeasure: 'per route',
    creditRate: 0.04,
    unitRate: 1
  }, {
    name: 'Optimized Routes',
    description: '',
    unitMeasure: 'per route',
    creditRate: 0.5,
    unitRate: 1
  }, {
    name: 'Drive-Times (Service Areas)',
    description: '',
    unitMeasure: 'per service area',
    creditRate: 0.5,
    unitRate: 1
  }, {
    name: 'Closest Facilities',
    description: '',
    unitMeasure: 'per origin/facility pair',
    creditRate: 0.5,
    unitRate: 1,
  }, {
    name: 'Multi-Vehicle Routes (VRP)',
    description: '',
    unitMeasure: 'per route',
    creditRate: 1,
    unitRate: 1
  }, {
    name: 'Location-Allocation',
    description: '',
    unitMeasure: 'per pair',
    creditRate: 0.1,
    unitRate: 1
  }, {
    name: 'Origin Destination Cost Matrix',
    description: '',
    unitMeasure: 'per pair',
    creditRate: 0.0005,
    unitRate: 1
  }, {
    name: 'Spatial Analysis',
    description: '',
    unitMeasure: 'per feature',
    creditRate: 1,
    unitRate: 1000,
  }, {
    name: 'Elevation Analysis',
    description: '',
    unitMeasure: 'per feature',
    creditRate: 1,
    unitRate: 1000
  }, {
    name: 'Business Search',
    description: '',
    unitMeasure: 'per business location',
    creditRate: 10,
    unitRate: 1000
  }, {
    name: 'Demographic Maps and Layers',
    description: '',
    unitMeasure: 'per pan, zoom, or identify',
    creditRate: 10,
    unitRate: 1000
  }, {
    name: 'Data Enrichment',
    description: 'Data Enrichment',
    unitMeasure: 'per attribute (data variables multiplied by total feature records)',
    creditRate: 10,
    unitRate: 1000
  }, {
    name: 'Infographics',
    description: '',
    unitMeasure: 'per render',
    creditRate: 10,
    unitRate: 1000
  }, {
    name: 'Report',
    description: '',
    unitMeasure: 'per report',
    creditRate: 10,
    unitRate: 1
  }, {
    name: 'Tile Generation',
    description: '',
    unitMeasure: 'per tile',
    creditRate: 1,
    unitRate: 10000
  }, {
    name: 'Scene Layer Generation From Features - textured multipatch',
    description: '',
    unitMeasure: 'per tile',
    creditRate: 1,
    unitRate: 1000
  }, {
    name: 'Scene Layer Generation From Features - untextured multipatch',
    description: '',
    unitMeasure: 'per tile',
    creditRate: 1,
    unitRate: 5000
  }
];

// add an id, because Ember Data demands it
for (let i = 0; i < _data.length; i++) {
  _data[i].id = i + 1;
}

export default DS.Adapter.extend({

  findAll: function () {
    return _data;
  }

});

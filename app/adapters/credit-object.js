import DS from 'ember-data';

// all the credit objects
const _data = [
  {
    name: 'Feature Service Storage',
    description: 'Feature Services Storage (excludes feature attachments) - in MB',
    creditRate: 2.4,
    unitRate: 10
  }, {
    name: 'Tile or Data Storage',
    description: 'Tile and Data Storage (map tiles, feature attachments, scene layer packages, and documents) - in GB',
    creditRate: 1.2,
    unitRate: 1
  }, {
    name: 'Geocoding',
    description: '',
    creditRate: 40,
    unitRate: 1000
  }, {
    name: 'Simple Routes',
    description: '',
    creditRate: 0.04,
    unitRate: 1
  }, {
    name: 'Optimized Routes',
    description: '',
    creditRate: 0.5,
    unitRate: 1
  }, {
    name: 'Drive-Times (Service Areas)',
    description: '',
    creditRate: 0.5,
    unitRate: 1
  }, {
    name: 'Closest Facilities',
    description: '',
    creditRate: 0.5,
    unitRate: 1,
  }, {
    name: 'Multi-Vehicle Routes (VRP)',
    description: '',
    creditRate: 1,
    unitRate: 1
  }, {
    name: 'Location-Allocation',
    description: '',
    creditRate: 0.1,
    unitRate: 1
  }, {
    name: 'Origin Destination Cost Matrix - per pair',
    description: '',
    creditRate: 0.0005,
    unitRate: 1
  }, {
    name: 'Spatial Analysis - per feature',
    description: '',
    creditRate: 1,
    unitRate: 1000,
  }, {
    name: 'Elevation Analysis - per feature',
    description: '',
    creditRate: 1,
    unitRate: 1000
  }, {
    name: 'Business Search',
    description: '',
    creditRate: 10,
    unitRate: 1000
  }, {
    name: 'Demographic Maps and Layers - per pan, zoom, or identify',
    description: '',
    creditRate: 10,
    unitRate: 1000
  }, {
    name: 'Data Enrichment',
    description: 'Data Enrichment - per attribute (data variables multiplied by total feature records)',
    creditRate: 10,
    unitRate: 1000
  }, {
    name: 'Infographics',
    description: '',
    creditRate: 10,
    unitRate: 1000
  }, {
    name: 'Report',
    description: '',
    creditRate: 10,
    unitRate: 1
  }, {
    name: 'Tile Generation',
    description: '',
    creditRate: 1,
    unitRate: 10000
  }, {
    name: 'Scene Layer Generation From Features - textured multipatch',
    description: '',
    creditRate: 1,
    unitRate: 1000
  }, {
    name: 'Scene Layer Generation From Features - untextured multipatch',
    description: '',
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

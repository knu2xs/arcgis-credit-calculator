import DS from 'ember-data';

// all the credit objects
const _data = [
  {
    name: 'Feature Service Storage',
    description: 'Feature Services Storage (excludes feature attachments)',
    unitMeasure: 'MB',
    creditRate: 2.4,
    unitRate: 10,
    docRest: 'http://resources.arcgis.com/en/help/arcgis-rest-api/#/Feature_Service/02r3000000z2000000/',
    docAgolDev: 'https://developers.arcgis.com/features/visualization/'
  }, {
    name: 'Tile or Data Storage',
    description: 'Tile and Data Storage (map tiles, feature attachments, scene layer packages, and documents)',
    unitMeasure: 'GB',
    creditRate: 1.2,
    unitRate: 1,
    docRest: 'http://resources.arcgis.com/en/help/arcgis-rest-api/#/Vector_Tile_Service/02r3000002nt000000/',
    docAgolDev: 'https://developers.arcgis.com/features/visualization/'
  }, {
    name: 'Geocoding',
    description: '',
    unitMeasure: 'location',
    creditRate: 40,
    unitRate: 1000,
    docRest: 'http://resources.arcgis.com/en/help/arcgis-rest-api/#/Geocode_Service/02r3000000q9000000/',
    docAgolDev: 'https://developers.arcgis.com/features/geocoding/'
  }, {
    name: 'Simple Routes',
    description: '',
    unitMeasure: 'route',
    creditRate: 0.04,
    unitRate: 1,
    docRest: 'http://resources.arcgis.com/en/help/arcgis-rest-api/#/Route_service_with_synchronous_execution/02r300000036000000/',
    docAgolDev: 'https://developers.arcgis.com/features/directions/'
  }, {
    name: 'Optimized Routes',
    description: '',
    unitMeasure: 'route',
    creditRate: 0.5,
    unitRate: 1,
    docRest: '',
    docAgolDev: 'https://developers.arcgis.com/features/directions/'
  }, {
    name: 'Drive-Times (Service Areas)',
    description: '',
    unitMeasure: 'service area',
    creditRate: 0.5,
    unitRate: 1,
    docRest: 'http://resources.arcgis.com/en/help/arcgis-rest-api/#/Service_Area_service_with_synchronous_execution/02r3000000n2000000/',
    docAgolDev: 'https://developers.arcgis.com/features/directions/'
  }, {
    name: 'Closest Facilities',
    description: '',
    unitMeasure: 'origin/facility pair',
    creditRate: 0.5,
    unitRate: 1,
    docRest: 'http://resources.arcgis.com/en/help/arcgis-rest-api/#/Closest_Facility_service_with_synchronous_execution/02r3000000n7000000/',
    docAgolDev: 'https://developers.arcgis.com/features/directions/'
  }, {
    name: 'Multi-Vehicle Routes (VRP)',
    description: '',
    unitMeasure: 'route',
    creditRate: 1,
    unitRate: 1,
    docRest: 'http://resources.arcgis.com/en/help/arcgis-rest-api/#/Vehicle_Routing_Problem_service/02r3000000n4000000/',
    docAgolDev: 'https://developers.arcgis.com/features/directions/'
  }, {
    name: 'Location-Allocation',
    description: '',
    unitMeasure: 'pair',
    creditRate: 0.1,
    unitRate: 1,
    docRest: 'http://resources.arcgis.com/en/help/arcgis-rest-api/#/Location_Allocation_service/02r30000026s000000/',
    docAgolDev: 'https://developers.arcgis.com/features/directions/'
  }, {
    name: 'Origin Destination Cost Matrix',
    description: '',
    unitMeasure: 'pair',
    creditRate: 0.0005,
    unitRate: 1,
    docRest: 'http://resources.arcgis.com/en/help/arcgis-rest-api/#/Origin_Destination_Cost_Matrix_service/02r3000002r2000000/',
    docAgolDev: 'https://developers.arcgis.com/features/directions/'
  }, {
    name: 'Spatial Analysis',
    description: '',
    unitMeasure: 'feature',
    creditRate: 1,
    unitRate: 1000,
    docRest: '',
    docAgolDev: 'https://developers.arcgis.com/rest/analysis/api-reference/getting-started.htm'
  }, {
    name: 'Elevation Analysis',
    description: '',
    unitMeasure: 'feature',
    creditRate: 1,
    unitRate: 1000,
    docRest: '',
    docAgolDev: 'https://developers.arcgis.com/rest/elevation/api-reference/get-started-with-elevation-services.htm'
  }, {
    name: 'Business Search',
    description: '',
    unitMeasure: 'business location',
    creditRate: 10,
    unitRate: 1000,
    docRest: '',
    docAgolDev: ''
  }, {
    name: 'Demographic Maps and Layers',
    description: '',
    unitMeasure: 'pan, zoom, or identify',
    creditRate: 10,
    unitRate: 1000,
    docRest: '',
    docAgolDev: ''
  }, {
    name: 'Data Enrichment',
    description: 'Data Enrichment',
    unitMeasure: 'attribute (data variables multiplied by total feature records)',
    creditRate: 10,
    unitRate: 1000,
    docRest: '',
    docAgolDev: 'https://developers.arcgis.com/features/geo-enrichment/'
  }, {
    name: 'Infographics',
    description: '',
    unitMeasure: 'render',
    creditRate: 10,
    unitRate: 1000,
    docRest: '',
    docAgolDev: ''
  }, {
    name: 'Report',
    description: '',
    unitMeasure: 'report',
    creditRate: 10,
    unitRate: 1,
    docRest: '',
    docAgolDev: ''
  }, {
    name: 'Tile Generation',
    description: '',
    unitMeasure: 'tile',
    creditRate: 1,
    unitRate: 10000,
    docRest: '',
    docAgolDev: ''
  }, {
    name: 'Scene Layer Generation From Features - textured multipatch',
    description: '',
    unitMeasure: 'tile',
    creditRate: 1,
    unitRate: 1000,
    docRest: '',
    docAgolDev: ''
  }, {
    name: 'Scene Layer Generation From Features - untextured multipatch',
    description: '',
    unitMeasure: 'tile',
    creditRate: 1,
    unitRate: 5000,
    docRest: '',
    docAgolDev: ''
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

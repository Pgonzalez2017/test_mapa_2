var wms_layers = [];


        var lyr_StamenTerrain_0 = new ol.layer.Tile({
            'title': 'Stamen Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL</a>',
                url: 'http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png'
            })
        });
var format_1_1 = new ol.format.GeoJSON();
var features_1_1 = format_1_1.readFeatures(json_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_1.addFeatures(features_1_1);
var lyr_1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_1, 
                style: style_1_1,
                interactive: true,
                title: '<img src="styles/legend/1_1.png" /> 1'
            });
var format_2_2 = new ol.format.GeoJSON();
var features_2_2 = format_2_2.readFeatures(json_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_2.addFeatures(features_2_2);
var lyr_2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_2, 
                style: style_2_2,
                interactive: true,
                title: '<img src="styles/legend/2_2.png" /> 2'
            });
var format_3_3 = new ol.format.GeoJSON();
var features_3_3 = format_3_3.readFeatures(json_3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_3.addFeatures(features_3_3);
var lyr_3_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3_3, 
                style: style_3_3,
                interactive: true,
                title: '<img src="styles/legend/3_3.png" /> 3'
            });

lyr_StamenTerrain_0.setVisible(true);lyr_1_1.setVisible(true);lyr_2_2.setVisible(true);lyr_3_3.setVisible(true);
var layersList = [lyr_StamenTerrain_0,lyr_1_1,lyr_2_2,lyr_3_3];
lyr_1_1.set('fieldAliases', {'id': 'id', });
lyr_2_2.set('fieldAliases', {'id': 'id', });
lyr_3_3.set('fieldAliases', {'id': 'id', });
lyr_1_1.set('fieldImages', {'id': 'TextEdit', });
lyr_2_2.set('fieldImages', {'id': 'TextEdit', });
lyr_3_3.set('fieldImages', {'id': 'TextEdit', });
lyr_1_1.set('fieldLabels', {'id': 'no label', });
lyr_2_2.set('fieldLabels', {'id': 'no label', });
lyr_3_3.set('fieldLabels', {'id': 'no label', });
lyr_3_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
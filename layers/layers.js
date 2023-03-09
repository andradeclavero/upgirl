var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_ConcentracinUsuariasApp_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Concentración Usuarias App",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ConcentracinUsuariasApp_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8000235.941419, -4001982.197359, -7827625.319683, -3851268.163836]
                            })
                        });
var format_LocalizacinConductoras_2 = new ol.format.GeoJSON();
var features_LocalizacinConductoras_2 = format_LocalizacinConductoras_2.readFeatures(json_LocalizacinConductoras_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalizacinConductoras_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalizacinConductoras_2.addFeatures(features_LocalizacinConductoras_2);
var lyr_LocalizacinConductoras_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalizacinConductoras_2, 
                style: style_LocalizacinConductoras_2,
                interactive: true,
                title: '<img src="styles/legend/LocalizacinConductoras_2.png" /> Localización Conductoras'
            });
var format_LocalizacinUsuarias_3 = new ol.format.GeoJSON();
var features_LocalizacinUsuarias_3 = format_LocalizacinUsuarias_3.readFeatures(json_LocalizacinUsuarias_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalizacinUsuarias_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalizacinUsuarias_3.addFeatures(features_LocalizacinUsuarias_3);
var lyr_LocalizacinUsuarias_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalizacinUsuarias_3, 
                style: style_LocalizacinUsuarias_3,
                interactive: true,
                title: '<img src="styles/legend/LocalizacinUsuarias_3.png" /> Localización Usuarias'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ConcentracinUsuariasApp_1.setVisible(true);lyr_LocalizacinConductoras_2.setVisible(true);lyr_LocalizacinUsuarias_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ConcentracinUsuariasApp_1,lyr_LocalizacinConductoras_2,lyr_LocalizacinUsuarias_3];
lyr_LocalizacinConductoras_2.set('fieldAliases', {'Nombre': 'Nombre', 'ApellidoPa': 'Apellido Paterno', 'ApellidoMa': 'Apellido Materno', 'Descripcio': 'Descripción', 'direccion': 'Dirección', 'comuna': 'Comuna', 'region_1': 'Región', });
lyr_LocalizacinUsuarias_3.set('fieldAliases', {'Nombre': 'Nombre', 'ApellidoPa': 'Apellido Paterno', 'ApellidoMa': 'Apellido Materno', 'Descripcio': 'Descripción', 'direccion': 'Dirección', 'comuna': 'Comuna', 'region_1': 'Región', });
lyr_LocalizacinConductoras_2.set('fieldImages', {'Nombre': 'TextEdit', 'ApellidoPa': 'TextEdit', 'ApellidoMa': 'TextEdit', 'Descripcio': 'TextEdit', 'direccion': 'TextEdit', 'comuna': 'TextEdit', 'region_1': 'TextEdit', });
lyr_LocalizacinUsuarias_3.set('fieldImages', {'Nombre': 'TextEdit', 'ApellidoPa': 'TextEdit', 'ApellidoMa': 'TextEdit', 'Descripcio': 'TextEdit', 'direccion': 'TextEdit', 'comuna': 'TextEdit', 'region_1': 'TextEdit', });
lyr_LocalizacinConductoras_2.set('fieldLabels', {'Nombre': 'inline label', 'ApellidoPa': 'inline label', 'ApellidoMa': 'inline label', 'Descripcio': 'inline label', 'direccion': 'inline label', 'comuna': 'inline label', 'region_1': 'inline label', });
lyr_LocalizacinUsuarias_3.set('fieldLabels', {'Nombre': 'inline label', 'ApellidoPa': 'inline label', 'ApellidoMa': 'inline label', 'Descripcio': 'inline label', 'direccion': 'inline label', 'comuna': 'inline label', 'region_1': 'inline label', });
lyr_LocalizacinUsuarias_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
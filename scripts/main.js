var map;
require([
  "esri/map", 
  "esri/arcgis/utils", 
  "esri/dijit/Legend",
  "esri/dijit/Search",
  "esri/geometry/Extent",
  "esri/graphic",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/geometry/screenUtils",
  "dojo/dom",
  "dojo/dom-construct",
  "dojo/query",
  "dojo/_base/Color",
  "esri/dijit/LocateButton",
  "dojo/domReady!"
  ], function(Map, 
    arcgisUtils, 
    Legend, 
    Search, 
    Extent, 
    Graphic, 
    SimpleMarkerSymbol, 
    screenUtils, 
    dom, 
    domConstruct, 
    query, 
    Color,
    LocateButton){

    arcgisUtils.createMap("c3b543dba1db4586aa4f7f7f677590ac", "mapDiv", {
      mapOptions: {
        logo: false,
        maxZoom: 13,
        minZoom: 3
      }
    }).then(function (response) {

      map = response.map;

      var legend = new Legend({
        map: map,
        layerInfos:(arcgisUtils.getLegendLayers(response))
      }, "legendDiv");

      legend.startup();

      var search = new Search({ 
        map: map, 
      }, dom.byId("search"));

    search.startup();

    var geoLocate = new LocateButton({
      map: map,
      highlightLocation: true
      }, "LocateButton");

    geoLocate.startup();

    });
  });

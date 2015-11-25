var map_data = "//" + location.host + location.pathname + "loc.json"
$.getJSON(map_data, function(data) {
    
    
    // SKOBBLER
    var skobblerApiKey = "070b3f599377c0f1008b3a445ad680d8",
        //skobblerUrl = 'http://tiles{s}.api.skobbler.net/tiles/{z}/{x}/{y}.png?api_key=' + skobblerApiKey,
        skobblerUrl = 'https://tiles{s}-' + skobblerApiKey + '.skobblermaps.com/TileService/tiles/2.0/0100111010/0/{z}/{x}/{y}.png' ,
        skobblerAttribution =  'Map data &copy; <a href="http://www.openstreetmap.org" target="_blank">OpenStreetMap</a> contributors, <a href="http://www.openstreetmap.org/copyright" target="_blank">Terms</a>, Tiles courtesy of <a href="http://www.skobbler.com" target="_blank">skobbler</a>';

    // OPENSTREETMAP
    var osmUrl = 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
        osmAttribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';


    var skobblerMap = L.tileLayer(skobblerUrl, { subdomains: [1,2,3,4], attribution: skobblerAttribution, maxZoom: 18 }),
        osmMap =      L.tileLayer(osmUrl, { attribution: osmAttribution });
        
    var panopins = [];
    var allMarkers = [];
    
    $.each(data, function( label, details ) {
        var position = L.latLng(details.lat, details.lng);
        var title = details.title;
        var url = [site_url,details.url].join("/");
        var label = ([
            "<strong>" + title+ "</strong><br />",
            "<a href=" + url + ">open</a>"
            ]).join("\n");
        panopin = L.marker(position).bindPopup(label).openPopup();
        panopins.push(panopin);
        allMarkers.push(position);
    });   

    var bounds = L.latLngBounds(allMarkers);
    var cities = L.layerGroup(panopins);

    var map = L.map('map', {layers:[skobblerMap,cities]})

    map.fitBounds(bounds);

    var baseMaps = {
        "Skobbler": skobblerMap,
        "OpenStreetMap": osmMap
    };

    var overlayMaps = {
        "Panoramms":cities
    };
    L.control.layers(baseMaps, overlayMaps).addTo(map);

});




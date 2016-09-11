var tour_data = "//" + location.host + location.pathname + "tour.json"

$.getJSON(tour_data, function(data) {
    pv = pannellum.viewer('panorama', data);
    console.log(pv.getHfov());
});

var tour_data = "//" + location.host + location.pathname + "tour.json"

$.getJSON(tour_data, function(data) {
    pannellum.viewer('panorama', data);
    console.log(data);
});

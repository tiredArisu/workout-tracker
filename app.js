navigator.geolocation.getCurrentPosition(success, error);

function success(pos) {
  const { latitude, longitude } = pos.coords;
  var map = L.map("workoutMap").setView([latitude, longitude], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  L.marker([latitude, longitude]).bindPopup("I'm here!").addTo(map);
}

function error() {
  console.log("Couldn't get current position");
}

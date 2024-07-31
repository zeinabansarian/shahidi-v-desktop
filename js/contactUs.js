let mapDiv = document.querySelector(".mapIn"),
  xLat = mapDiv.getAttribute("data-x"),
  yLat = mapDiv.getAttribute("data-y");
  console.log(xLat);
  console.log(yLat);
var map = L.map("map", { center: [yLat, xLat], zoom: 14 }),
  tiles = new L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      minZoom: "10",
    }
  ).addTo(map);



  tiles.getContainer().style.filter = 'grayscale(1) invert(1)';
  greenIcon = L.icon({ iconUrl: "images/location-64.png", iconSize: [32,34] });
  marker = L.marker([yLat, xLat], { icon: greenIcon });
marker.addTo(map);

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false, 
}

//Create Map
const map = L.map('mapid', options).setView([-14.8536658, -40.8420066], 18);

//Create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
).addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
});

//Create and add marker
L.marker([-14.8536658, -40.8420066], { icon })
.addTo(map);

/* Image gallery */

function selectImage(event) {
    const button = event.currentTarget;
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach((button) => {
        button.classList.remove("active")
    });

    button.classList.add("active");

    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    imageContainer.src = image.src;
}
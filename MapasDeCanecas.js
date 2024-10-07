let map;
const canecas = [
    { position: { lat: 6.2442, lng: -75.5812 }, info: "Caneca 1: Plásticos, vidrio y metales" },
    { position: { lat: 6.2452, lng: -75.5822 }, info: "Caneca 2: Papeles y cartones" },
    // Añade más canecas según sea necesario
];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: { lat: 6.2442, lng: -75.5812 }, // Centro del mapa
    });

    canecas.forEach((caneca, index) => {
        const marker = new google.maps.Marker({
            position: caneca.position,
            map: map,
            title: `Caneca ${index + 1}`,
        });

        marker.addListener("click", () => {
            document.getElementById("caneca-info").innerText = caneca.info;
        });
    });
}

window.onload = initMap;

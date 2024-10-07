// Función para ajustar el tamaño del video y centrarlo
function ajustarVideo() {
    const videoContainer = document.querySelector('.video-container');
    const video = document.querySelector('video');
    
    // Obtener el ancho y alto de la ventana
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Definir dimensiones máximas para el video (por ejemplo, 80% del ancho de la ventana)
    const maxVideoWidth = windowWidth * 0.8;
    const maxVideoHeight = windowHeight * 0.6;

    // Establecer el ancho y alto del video
    video.style.width = `${maxVideoWidth}px`;
    video.style.height = `${maxVideoHeight}px`;

    // Centrar el video dentro del contenedor
    videoContainer.style.display = 'flex';
    videoContainer.style.justifyContent = 'center';
    videoContainer.style.alignItems = 'center';
}

// Ejecutar la función cuando la página cargue
window.onload = ajustarVideo;

// Ajustar el video cuando la ventana se redimensiona
window.onresize = ajustarVideo;

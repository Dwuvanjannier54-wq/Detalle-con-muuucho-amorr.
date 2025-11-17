// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Just stop your crying, it's a sign of the times", time: 17 },
  { text: "Welcome to the final show", time: 22 },
  { text: "Hope you're wearing your best clothes", time: 26 },
  { text: "You can't bribe the door", time: 31 },
  { text: " on your way to the sky", time: 34 },
  { text: "You look pretty good down here", time: 39 },
  { text: "But you ain't really good", time: 43 },
  { text: "We never learn, we've been here before", time: 48 },
  { text: "Why are we always stuck and running from", time: 53 },
  { text: "¿The bullets?", time: 56 },
  { text: "¿The bullets?", time: 60 },
  { text: "We never learn, we've been here before", time: 64 },
  { text: "Why are we always stuck and running from", time: 68 },
  { text: "¿The bullets?", time: 71 },
  { text: "The bullets", time: 76 },
  { text: "Just stop your crying", time: 81 },
  { text: "it's a sign of the times", time: 82 },
  { text: "We gotta get away from here", time: 87 },
  { text: "We gotta get away from here", time: 90 },
  { text: "Just stop your crying", time: 96 },
  { text: "it'll be alright", time: 99 },
  { text: "They told me that the end is near", time: 102 },
  { text: "We gotta get away from here", time: 107},
  { text: "Just stop your cryings", time: 113 },
  { text: "Have the time of your life", time: 115 },
  { text: "Breaking throught the atmosphere", time: 119 },
  { text: "And things are pretty good from here", time: 122 },
  { text: "Remember everything will be alright", time: 128 },
  { text: "We can meet again somewhere", time: 135 },
  { text: "Somewhere far away from Here", time: 139 },
  { text: "We never learn, we've been here before", time: 145 },
  { text: "Why are we always stuck and running from", time: 148 },
  { text: "¿The bullets?", time: 152 },
  { text: "¿The bullets?", time: 157 },
  { text: "We never learn, we've been here before", time: 160 },
  { text: "Why are we always stuck and running from", time: 164 },
  { text: "¿The bullets?", time: 168 },
  { text: "¿The bullets?", time: 172 },
  { text: "Just stop your crying, it's a sign of the times", time: 177 },
  { text: "We gotta get away from here", time: 183 },
  { text: "We gotta get away from here", time: 187 },
  { text: "Stop your crying, baby, it'll be alright", time: 192 },
  { text: "They told me that the end is near", time: 199 },
  { text: "We gotta get away from here", time: 203 },
  { text: "We never learn, we've been here before", time: 208 },
  { text: "Why are we always stuck and running from", time: 212 },
  { text: "¿The bullets?", time: 216 },
  { text: "¿The bullets?", time: 219 },
  { text: "We never learn, we've been here before", time: 224 },
  { text: "Why are we always stuck and running from", time: 228 },
  { text: "¿The bullets?", time: 232 },
  { text: "¿The bullets?", time: 235 },
  { text: "We don't talk enough", time: 240 },
  { text: "We should open up", time: 245},
  { text: "Before it's all too much", time: 249 },
  { text: "¿Will we ever learn?", time: 257 },
  { text: "We've been here before", time: 261 },
  { text: "It's just what we know", time: 265 },
  { text: "Just stop your crying, it's a sign of the times", time: 273 },
  { text: "We gotta get away", time: 279 },
  { text: "We gotta get away", time: 282},
  { text: "We gotta get away", time: 287 },
  { text: "We gotta get away", time: 291 },
  { text: "We gotta get away", time: 294 },
  { text: "We got to, we got to run", time: 302 },
  { text: "We got to, we got to run", time: 306 },
  { text: "We got to, we got to run away", time: 310 },
  { text: "...", time: 315 },
  { text: "We gotta get away", time: 294 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
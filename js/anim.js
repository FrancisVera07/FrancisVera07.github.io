// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "So what we get drunk", time: 2 },
  { text: "So what we smoke weed", time: 3 },
  { text: "We're just having fun", time: 5 },
  { text: "We don't care who sees (shit)", time: 7 },
  { text: "So what we go out", time: 9 },
  { text: "That's how it's supposed to be", time: 12 },
  { text: "Living young and wild and free,", time: 17 },

  { text: "Uh, uh-uhm, so what I keep 'em rolled up", time: 21 },
  { text: "Saggin' my pants, not caring what I show", time: 22 },
  { text: "Keep it real with my niggas", time: 24 },
  { text: "Keep it player for these hoes", time: 25 },

  { text: "It look clean, don't it?", time: 26 },
  { text: "Washed it the other day, watch how you lean on it", time: 28 },
  { text: "Give me some 5-0-1 jeans on it", time: 29 },
  { text: "Roll joints bigger than King Kong's fingers", time: 32 },
  { text: "And smoke them hoes down 'til they stingers", time: 34 },
  { text: "You a class clown and if I skip for the day", time: 36 },
  { text: "I'm with your bitch smokin' grade A", time: 38 },

  { text: "You know what", time: 39 },
  { text: "It's like I'm 17 again", time: 40 },
  { text: "Peach fuzz on my face", time: 42 },
  { text: "Lookin' on the case", time: 43 },
  { text: "Tryna find a hella taste", time: 44 },

  { text: "Oh my God, I'm on the chase, Chevy", time: 46 },
  { text: "It's gettin' kinda heavy, relevant, sellin' it", time: 48 },
  { text: "Dippin' away, time keeps slippin' away", time: 52 },
  { text: "Zip in the safe, flippin' for pay", time: 54 },
  { text: "Tippin' like I'm drippin' in paint", time: 56 },
  { text: "Up front, four blunts, like, 'Khalifa put the weed in a J'", time: 59 },

  { text: "So what we get drunk", time: 60 },
  { text: "So what we smoke weed", time: 63 },
  { text: "We're just having fun", time: 65 },
  { text: "We don't care who sees", time: 67 },
  { text: "So what we go out", time: 69 },
  { text: "That's how it's supposed to be", time: 72 },
  { text: "Living young and wild and free", time: 77 },

  { text: "Uh, and I don't even care", time: 81 },
  { text: "'Cause if me and my team in there", time: 82 },
  { text: "There's gon' be some weed in the air", time: 83 },
  { text: "Tell 'em, Mac", time: 85 },

  { text: "Blowin' everywhere we goin' and now you knowin'", time: 86 },
  { text: "When I step right up, get my lighter so I can light up", time: 88 },
  { text: "That's how it should be done", time: 90 },
  { text: "Soon as you thinkin' you're down", time: 91 },
  { text: "Find how to turn things around", time: 92 },
  { text: "Now things are lookin' up", time: 94 },

  { text: "From the ground up, pound up, this Taylor Gang", time: 96 },
  { text: "So turn my sound up and mount up and do my thang", time: 98 },
  { text: "Now I'm chillin', fresh outta class, feelin'", time: 101 },
  { text: "Like I'm on my own and I could probably own a building", time: 104 },
  { text: "Got my own car, no job, no children", time: 107 },
  { text: "Had a science project, me and Mac killed it", time: 110 },

  { text: "T-H-C, M-A-C, D-E-V, H-D-3, high as me", time: 113 },
  { text: "This is us, we gon' fuss", time: 116 },
  { text: "And we gon' fight and we gon' rolls", time: 118 },
  { text: "And live off life", time: 120 },

  { text: "So what we get drunk", time: 121 },
  { text: "So what we smoke weed", time: 124 },
  { text: "We're just having fun", time: 126 },
  { text: "We don't care who sees", time: 128 },
  { text: "So what we go out", time: 130 },
  { text: "That's how it's supposed to be", time: 133 },
  { text: "Living young and wild and free", time: 138 },

  { text: "Yeah, roll one, smoke one", time: 141 },
  { text: "When you live like this you're supposed to party", time: 143 },
  { text: "Roll one, smoke one, and we all just having fun", time: 148 },
  { text: "So we just, roll one, smoke one", time: 151 },
  { text: "When you live like this you're supposed to party", time: 154 },
  { text: "Roll one, smoke one, and we all just having fun", time: 158 },

  { text: "So what we get drunk", time: 159 },
  { text: "So what we smoke weed", time: 163 },
  { text: "We're just having fun", time: 165 },
  { text: "We don't care who sees", time: 168 },
  { text: "So what we go out", time: 170 },
  { text: "That's how it's supposed to be", time: 173 },
  { text: "Living young and wild and free", time: 177 },

  { text: "Muchas Felicidades, jeje.", time: 180 },
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
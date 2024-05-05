/*
// Definir las cartas
const cartas = [
  { palo: "Corazones", valor: 1 },
  { palo: "Diamantes", valor: 2 },
  { palo: "Picas", valor: 3 },
  { palo: "Tréboles", valor: 4 },
  { palo: "Corazones", valor: 5 },
  // ... y así sucesivamente para todas las cartas
];

// Función para barajar las cartas
function barajarCartas(cartas) {
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
  return cartas;
}

// Función para mostrar una carta
function mostrarCarta(carta) {
  console.log(`${carta.palo} - ${carta.valor}`);
}

// Función para jugar una ronda
function jugarRonda() {
  // Barajar las cartas
  const cartasBarajadas = barajarCartas(cartas.slice()); // Crear una copia de la baraja

  // Seleccionar dos cartas al azar
  const carta1 = cartasBarajadas.pop();
  const carta2 = cartasBarajadas.pop();

  // Mostrar las cartas boca abajo
  console.log("Carta 1:");
  mostrarCarta(carta1);

  console.log("Carta 2:");
  mostrarCarta(carta2);

  // Preguntar al usuario cuál carta cree que es la más alta
  const cartaElegida = prompt("¿Qué carta crees que es la más alta? (1 o 2)");

  // Determinar si el usuario acertó
  const cartaGanadora = carta1.valor > carta2.valor ? carta1 : carta2;
  const resultado = cartaElegida === (carta1 === cartaGanadora ? "1" : "2") ? "Correcto!" : "Incorrecto.";

  // Mostrar el resultado y actualizar el puntaje
  console.log(resultado);
  // ... (Aquí se actualizaría el puntaje del jugador)

  // Preguntar si el usuario quiere jugar otra ronda
  if (prompt("¿Quieres jugar otra ronda? (sí/no)").toLowerCase() === "sí") {
    jugarRonda();
  } else {
    console.log("¡Gracias por jugar!");
  }
}

// Iniciar el juego
jugarRonda();
```

handler.help = ['cartas']
handler.tags = ['fun']
handler.command = ['cartas', 'game-cartas', 'gamecartas'] 
//handler.register = true 
export default handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
*/
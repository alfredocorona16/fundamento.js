
// const bola = document.querySelector('div');
// const message = document.querySelector('h1');

// const eightBall = () => {
//     message.innerText = "le diste click! 🔥";
// }

// Ball.addEventListener('clic', eightBall);

const messages = [
    "Sí, definitivamente",
    "aauauauauauauuauaua",
    "el davlo",
    "Pregunta de nuevo más tarde",
    "Es muy probable",
    "Mis fuentes dicen que no",
    "La respuesta es sí",
    "Dudoso, pero posible",
    "No estoy seguro"
];


const messageElement = document.getElementById('message');


const randomIndex = Math.floor(Math.random() * messages.length);

messageElement.textContent = messages[randomIndex];
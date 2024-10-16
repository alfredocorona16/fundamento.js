const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const centroX = lienzo.width / 2;
const centroY = lienzo.height / 2;

ctx.fillStyle = '#02223d';
ctx.fillRect(0, 0, 800, 400);

ctx.strokeStyle = 'black';
ctx.lineWidth = 2;

ctx.fillStyle = 'grey';
ctx.fillRect(250, 60, 300, 190);
ctx.strokeRect(250, 60, 300, 190);

ctx.fillStyle = 'grey';
ctx.fillRect(150, 231, 300, 19);
ctx.strokeRect(150, 231, 300, 19);

ctx.fillStyle = 'red';
ctx.fillRect(537, 237, 10, 10);
ctx.strokeRect(537, 237, 10, 10);

ctx.fillStyle = 'red';
ctx.fillRect(80, 160, 160, 90);
ctx.strokeRect(80, 160, 160, 90);

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(130, 260, 30, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'lightgrey';
ctx.fillRect(255, 65, 90, 180);
ctx.strokeRect(255, 65, 90, 180);

ctx.fillStyle = 'lightgray';
ctx.beginPath();
ctx.arc(130, 260, 13, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(300, 260, 30, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'lightgrey';
ctx.fillRect(354, 65, 90, 180);
ctx.strokeRect(354, 65, 90, 180);

ctx.fillStyle = 'lightgrey';
ctx.fillRect(453, 65, 90, 180);
ctx.strokeRect(453, 65, 90, 180);

ctx.fillStyle = 'lightgray';
ctx.beginPath();
ctx.arc(300, 260, 13, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(450, 260, 30, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'lightgray';
ctx.beginPath();
ctx.arc(450, 260, 13, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(515, 260, 30, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'lightgray';
ctx.beginPath();
ctx.arc(515, 260, 13, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'red';
ctx.fillRect(150, 80, 90, 80);
ctx.strokeRect(150, 80, 90, 80);

ctx.fillStyle = 'lightblue';
ctx.fillRect(150, 90, 70, 60);
ctx.strokeRect(150, 90, 70, 60);

ctx.fillStyle = 'yellow';
ctx.fillRect(80, 165, 10, 10);
ctx.strokeRect(80, 165, 10, 10);

ctx.fillStyle = '#8B4513';
ctx.fillRect(0, 291, 800, 150);
ctx.strokeRect(0, 291, 800, 150);

ctx.fillStyle = 'green';
ctx.fillRect(0, 291, 800, 25);
ctx.strokeRect(0, 291, 800, 25);

ctx.fillStyle = '#f8f848';
ctx.beginPath();
ctx.arc(580, 15, 50, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();

ctx.fillStyle = '#135a06';
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(90, 140);
ctx.lineTo(190, 200);
ctx.fill();

ctx.fillStyle = '#8B4513';
ctx.fillRect(50, 140, 20, 150);
ctx.strokeRect(50, 140, 20, 150);

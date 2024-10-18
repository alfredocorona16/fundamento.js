const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const ball = {
    x: 0,
    y: 0,
    show: function () {
        ctx.fillStyle = `hsl(${this.x},50%,50%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.fill();
    }
}

let x = 10;
let y = 10;
let right = true;
let down = true;

setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    ball.x = x;
    ball.y = y;
    ball.show();
    x++;
    y++;
    if (right) {
        x += 10;
    } else {
        x -= 10;
    }
    if (down) {
        y += 10;
    } else {
        y -= 10;
    }
    if (x > 595) {
        right = false;
    }
    if (x < 10) {
        right = true;
    }
    if (y > 395) {
        down = false;
    }
    if (y < 10) {
        down = true;
    }
}, 100);
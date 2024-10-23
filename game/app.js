const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
const scoreElement = document.querySelector('.score');
const gameOverModal = document.getElementById('gameOver');
const finalScoreElement = document.getElementById('finalScore');
ctx.font = '24px Arial';

let score = 0;

const snake = [
    { x: 2, y: 1 },
    { x: 1, y: 1 },
    { x: 0, y: 1 }
];

const food = {
    x: 0,
    y: 0,
    fadeIn: function () {
        this.x = Math.floor(Math.random() * 30);
        this.y = Math.floor(Math.random() * 20);
    }
};

function eat() {
    if (snake[0].x === food.x && snake[0].y === food.y) {
        food.fadeIn();
        snake.push({ ...snake[snake.length - 1] });
        score++;
        updateScore();
    }
}

function nextMove() {
    for (let i = snake.length - 1; i > 0; i--) {
        snake[i] = { ...snake[i - 1] };
    }
}

function checkCollision() {
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            return true;
        }
    }
    if (snake[0].x < 0 || snake[0].x > 29 || snake[0].y < 0 || snake[0].y > 19) {
        return true;
    }
    return false;
}

function updateScore() {
    scoreElement.innerText = `Puntaje: ${score}`;
}

let direction = { x: 1, y: 0 };
food.fadeIn();
const gameLoop = setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);

    nextMove();
    
    snake[0].x += direction.x;
    snake[0].y += direction.y;

    ctx.fillText('🍕', food.x * 20, food.y * 20);
    snake.forEach(s => ctx.fillText('🥺', s.x * 20, s.y * 20));

    eat();

    if (checkCollision()) {
        clearInterval(gameLoop);
        showGameOver();
    }
}, 100);

document.querySelector('body').addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'd') {
        direction = { x: 1, y: 0 };
    } else if (e.key === 'ArrowDown' || e.key === 's') {
        direction = { x: 0, y: 1 };
    } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        direction = { x: -1, y: 0 };
    } else if (e.key === 'ArrowUp' || e.key === 'w') {
        direction = { x: 0, y: -1 };
    }
});

function showGameOver() {
    finalScoreElement.innerText = `Tu puntaje fue: ${score}`;
    gameOverModal.style.display = 'block';
}

function tryAgain() {
    document.location.reload();
}

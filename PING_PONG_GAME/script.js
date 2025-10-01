const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

// Game constants
const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 100;
const BALL_SIZE = 15;
const PLAYER_X = 20;
const AI_X = canvas.width - PADDLE_WIDTH - 20;
const PADDLE_SPEED = 6;
const BALL_SPEED = 6;

let playerY = (canvas.height - PADDLE_HEIGHT) / 2;
let aiY = (canvas.height - PADDLE_HEIGHT) / 2;
let ball = {
    x: canvas.width / 2 - BALL_SIZE / 2,
    y: canvas.height / 2 - BALL_SIZE / 2,
    vx: BALL_SPEED * (Math.random() > 0.5 ? 1 : -1),
    vy: BALL_SPEED * (Math.random() * 2 - 1)
};

function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x + BALL_SIZE / 2, ball.y + BALL_SIZE / 2, BALL_SIZE / 2, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
}

function drawNet() {
    ctx.setLineDash([10, 15]);
    ctx.strokeStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);
}

function resetBall() {
    ball.x = canvas.width / 2 - BALL_SIZE / 2;
    ball.y = canvas.height / 2 - BALL_SIZE / 2;
    ball.vx = BALL_SPEED * (Math.random() > 0.5 ? 1 : -1);
    ball.vy = BALL_SPEED * (Math.random() * 2 - 1);
}

// Mouse control for player paddle
canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    let mouseY = e.clientY - rect.top;
    playerY = mouseY - PADDLE_HEIGHT / 2;
    // Keep paddle within bounds
    playerY = Math.max(0, Math.min(canvas.height - PADDLE_HEIGHT, playerY));
});

function aiMove() {
    // Simple AI: move towards the ball's y position
    let targetY = ball.y + BALL_SIZE / 2 - PADDLE_HEIGHT / 2;
    if (aiY < targetY) {
        aiY += PADDLE_SPEED;
        if (aiY > targetY) aiY = targetY;
    } else if (aiY > targetY) {
        aiY -= PADDLE_SPEED;
        if (aiY < targetY) aiY = targetY;
    }
    aiY = Math.max(0, Math.min(canvas.height - PADDLE_HEIGHT, aiY));
}

function updateBall() {
    ball.x += ball.vx;
    ball.y += ball.vy;

    // Top and bottom wall collision
    if (ball.y <= 0 || ball.y + BALL_SIZE >= canvas.height) {
        ball.vy *= -1;
        ball.y = Math.max(0, Math.min(canvas.height - BALL_SIZE, ball.y));
    }

    // Player paddle collision
    if (
        ball.x <= PLAYER_X + PADDLE_WIDTH &&
        ball.y + BALL_SIZE > playerY &&
        ball.y < playerY + PADDLE_HEIGHT
    ) {
        ball.vx *= -1;
        // Add some "spin"
        ball.vy += (ball.y + BALL_SIZE / 2 - (playerY + PADDLE_HEIGHT / 2)) * 0.15;
        ball.x = PLAYER_X + PADDLE_WIDTH;
    }

    // AI paddle collision
    if (
        ball.x + BALL_SIZE >= AI_X &&
        ball.y + BALL_SIZE > aiY &&
        ball.y < aiY + PADDLE_HEIGHT
    ) {
        ball.vx *= -1;
        ball.vy += (ball.y + BALL_SIZE / 2 - (aiY + PADDLE_HEIGHT / 2)) * 0.15;
        ball.x = AI_X - BALL_SIZE;
    }

    // Left/right wall: reset ball
    if (ball.x < 0 || ball.x + BALL_SIZE > canvas.width) {
        resetBall();
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawNet();
    drawRect(PLAYER_X, playerY, PADDLE_WIDTH, PADDLE_HEIGHT, "#0af");
    drawRect(AI_X, aiY, PADDLE_WIDTH, PADDLE_HEIGHT, "#fa0");
    drawBall();
}

function gameLoop() {
    aiMove();
    updateBall();
    draw();
    requestAnimationFrame(gameLoop);
}

resetBall();
gameLoop();
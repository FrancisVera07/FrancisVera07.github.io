const TwoPI = Math.PI * 2;
var colors = ['#E71D36', '#FF9F1C', '#2EC4B6', '#FDFFFC'];
var max_fireflies = 500;
var fireflies = [];
var canvas = document.getElementById('can');
var ctx = canvas.getContext('2d');
var w, h, center_x, center_y, max_distance, min_distance;

function setup() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    center_x = w / 2;
    center_y = h / 2;
    max_distance = Math.max(center_x, center_y);
    min_distance = Math.min(center_x, center_y);
}

function Firefly() {
    this.velocity = 0;
    var random_angle = Math.random() * TwoPI;
    this.x = center_x + Math.sin(random_angle) * (Math.random() * (max_distance - min_distance) + min_distance);
    this.y = center_y + Math.cos(random_angle) * (Math.random() * (max_distance - min_distance) + min_distance);
    this.angle_of_attack = Math.atan2(this.y - center_y, this.x - center_x);
    this.vel = (Math.random() * 5) + 5;
    this.color = colors[~~(colors.length * Math.random())];
    this.xvel = this.vel * Math.cos(this.angle_of_attack);
    this.yvel = this.vel * Math.sin(this.angle_of_attack);
    this.size = 2 + Math.random() * 2;
    this.phase_diff = Math.random() * TwoPI;
}

Firefly.prototype.move = function (dt) {
    if (isOnHeart(this.x, this.y)) {
        this.size -= 0.001;
        return;
    }
    this.x += this.xvel * dt;
    this.y += this.yvel * dt;
};

Firefly.prototype.render = function (ctx, now) {
    if (this.size < 1) {
        return;
    }
    ctx.globalAlpha = Math.max(Math.abs(Math.sin((now + this.phase_diff) / (~~(this.size * 100)))), 0.4);
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 20 / this.size;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, TwoPI, false);
    ctx.closePath();
    ctx.fill();
};

function render() {
    var now = Date.now();
    var dt = (Date.now() - last) / 1000;
    last = now;
    ctx.clearRect(0, 0, w, h);
    fireflies.forEach(function (f) {
        f.move(dt);
        f.render(ctx, now);
    });
    fireflies = fireflies.filter(f => f.size > 1);
    if (fireflies.length < max_fireflies && now - last_emit > 100) {
        fireflies.push(new Firefly());
        last_emit = now;
    }
    requestAnimationFrame(render);
}

function isOnHeart(x, y) {
    x = ((x - center_x) / (min_distance * 1.2)) * 1.8;
    y = ((y - center_y) / (min_distance)) * -1.8;
    return (Math.pow((x * x + y * y - 1), 3) - (x * x * y * y * y) <= 0);
}

var last = Date.now();
var last_emit = 0;

// Initial setup
setup();
render();

// Handle resizing of window
window.addEventListener('resize', setup);

// jQuery for interaction
$(document).ready(function () {
    $("button").click(function () {
        $(".pop").fadeIn(300);
    });
    $(".pop > span, .pop").click(function () {
        $(".pop").fadeOut(300);
    });
});

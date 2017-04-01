// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';

    this.reset();
    console.log(this.x);
    console.log(this.y);

    // Create the initial score of 0 points
    this.currentScore = 0;
    this.score = "Score: " + String(this.currentScore);
}

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // this.x = (this.x + x) * dt;

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    this.score = "Score: " + String(this.currentScore);

    ctx.font = "20pt Impact";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText(this.score, 430, 580);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeText(this.score, 430, 580);
}

Player.prototype.handleInput = function(key) {
    // Move left
    if (key == "left" && this.x > 0) {
        // player.update(dt, -100, 0);
        this.x = this.x - 100;
    // More right
    } else if (key == "right" && this.x < 400) {
        this.x = this.x + 100;
    // Move up
    } else if (key == "up") {
        if (this.y > 100) {
            this.y = this.y - 80; 
        // If the Player reached the top of the map, award points
        } else {
            this.currentScore = this.currentScore + 20;
            this.render();
            this.reset();
        }
    // Move down
    } if (key == "down" && this.y < 375) {
        this.y = this.y + 80;
    }
};

// Reset the Player's position to the start of the game
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 385;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();

var collision = false;

var enemy0 = new Enemy();
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var allEnemies = [enemy0, enemy1, enemy2];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        65: 'left',
        87: 'up',
        68: 'right',
        83: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

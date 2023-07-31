let w = window.innerWidth;
let h = window.innerHeight;
let gameController;
let loginScreen;
let inGameScreen;
let DEBUG_MODE;

function preload(){
    gameController = new GameController();
    loginScreen = new LoginScreen(gameController);
    inGameScreen = new InGameScreen(null, null);

    // Preload Assets
    loginScreen.preload();
    inGameScreen.preload();
}

function setup() {
    createCanvas(w, h);

    // Setup Elements
    loginScreen.setup();
    inGameScreen.setup();

    window.onresize = function() {
        // assigns new values for width and height variables
        w = window.innerWidth;
        h = window.innerHeight;
        resizeCanvas(w, h);
    }

    // Debug mode is only for development
    DEBUG_MODE = true;
}

function draw() {
    // Set Default Background Color
    background("#0A2D32");

    // Draw Game State
    switch(gameController.getCurrentState()) {
        case "LOGIN_SCREEN":
            loginScreen.draw();
            break;
        case "IN_GAME":
            inGameScreen.draw();
            break;
    }
}

function keyPressed() {
    // Keys for changing game states while in debug mode

    if (!DEBUG_MODE) { return; }
    if (keyCode == LEFT_ARROW) {
        gameController.goToInGameScreen(loginScreen, inGameScreen);
    }
    else if (keyCode == RIGHT_ARROW) {
        gameController.goToLoginScreen(inGameScreen, loginScreen);
    }
}


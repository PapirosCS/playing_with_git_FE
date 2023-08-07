let w = window.innerWidth;
let h = window.innerHeight;
let gameController;
let loginScreen;
let inGameScreen;
let registerScreen;
let DEBUG_MODE;

function preload(){
    gameController = new GameController();
    loginScreen = new LoginScreen(gameController);
    inGameScreen = new InGameScreen(null, null);
    registerScreen = new RegisterScreen();

    // Preload Assets
    loginScreen.preload();
    inGameScreen.preload();
    registerScreen.preload();
}

function setup() {
    createCanvas(w, h);

    // Setup Elements
    loginScreen.setup();
    inGameScreen.setup();
    registerScreen.setup();


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
        case "REGISTER_SCREEN":
            registerScreen.draw();
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

function mousePressed(){
    if (gameController.getCurrentState() == "LOGIN_SCREEN"){
        const buttonClicked = loginScreen.buttonCheck(mouseX, mouseY);
        if (buttonClicked == "login"){
            gameController.goToInGameScreen(loginScreen, inGameScreen);
        }
        else if (buttonClicked == "register"){
            gameController.goToRegisterScreen(loginScreen, registerScreen);
            // toDo create a register page
        }
    }
    if (gameController.getCurrentState() == "REGISTER_SCREEN"){
        const buttonClicked = registerScreen.buttonCheck(mouseX, mouseY);
        if (buttonClicked == "register"){
            // todo verify information and add to database

            gameController.goToLoginScreen(inGameScreen, loginScreen);
        }
        
    }
}


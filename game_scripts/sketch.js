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
    if (gameController.getCurrentState() === "IN_GAME") {
        // If ENTER
        if (keyCode === 13) {
            inGameScreen.submitAnswer();
        }
    }

    if (!DEBUG_MODE) { return; }
    if (keyCode === LEFT_ARROW) {
        const mockLevelJSON = JSON.parse("{\n" +
            "  \"index\": \"1\",\n" +
            "  \"name\": \"Tutorial\",\n" +
            "  \"stages\": [\n" +
            "    {\n" +
            "      \"displayMessage\": \"Welcome to Playing with Git!\",\n" +
            "      \"displayPrompt\": false,\n" +
            "      \"imageFilename\": \"\",\n" +
            "      \"promptSolution\": \"\"\n" +
            "    },\n" +
            "    {\n" +
            "      \"displayMessage\": \"Please enter the command 'git help'\",\n" +
            "      \"displayPrompt\": true,\n" +
            "      \"imageFilename\": \"\",\n" +
            "      \"promptSolution\": \"git help\"\n" +
            "    },\n" +
            "    {\n" +
            "      \"displayMessage\": \"Great! Now please make a commit with a comment 'hello world' (Use single quotation marks)\",\n" +
            "      \"displayPrompt\": true,\n" +
            "      \"imageFilename\": \"\",\n" +
            "      \"promptSolution\": \"git commit -m 'hello world'\"\n" +
            "    },\n" +
            "    {\n" +
            "      \"displayMessage\": \"This is a stage without prompt, just click 'Next'\",\n" +
            "      \"displayPrompt\": false,\n" +
            "      \"imageFilename\": \"\",\n" +
            "      \"promptSolution\": \"\"\n" +
            "    },\n" +
            "    {\n" +
            "      \"displayMessage\": \"End this level by pushing to the remote repository\",\n" +
            "      \"displayPrompt\": true,\n" +
            "      \"imageFilename\": \"\",\n" +
            "      \"promptSolution\": \"git push\"\n" +
            "    },\n" +
            "    {\n" +
            "      \"displayMessage\": \"You completed the level. Click 'Next' to continue\",\n" +
            "      \"displayPrompt\": false,\n" +
            "      \"imageFilename\": \"\",\n" +
            "      \"promptSolution\": \"\"\n" +
            "    }\n" +
            "  ]\n" +
            "}");
        inGameScreen.setLevel(new Level(mockLevelJSON));
        gameController.goToInGameScreen(loginScreen, inGameScreen);
    }
    else if (keyCode === RIGHT_ARROW) {
        gameController.goToLoginScreen(inGameScreen, loginScreen);
    }
}

function mousePressed(){
    if (gameController.getCurrentState() == "IN_GAME") {
       const buttonClicked = inGameScreen.buttonCheck(mouseX, mouseY);
    }
    if (gameController.getCurrentState() == "LOGIN_SCREEN"){
        const buttonClicked = loginScreen.buttonCheck(mouseX, mouseY);
        if (buttonClicked){
            if (buttonClicked.type == "login"){
                gameController.goToInGameScreen(loginScreen, inGameScreen);
            }
            else if (buttonClicked.type == "register"){
                registerScreen.setup();
                gameController.goToRegisterScreen(loginScreen, registerScreen);
            }
        }

    }
    if (gameController.getCurrentState() == "REGISTER_SCREEN"){
        const buttonClicked = registerScreen.buttonCheck(mouseX, mouseY);
        if (buttonClicked){
            if (buttonClicked.type == "register"){
                // todo verify information and add to database
                gameController.goToLoginScreen(registerScreen, loginScreen);
            }
        }
    }
}


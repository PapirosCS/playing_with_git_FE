function GameController() {
    // Hardcoded game states strings
    const GAME_STATES = [ "LOGIN_SCREEN", "LEVEL_SELECTION", "IN_GAME" ];

    // Sets the initial state for logging in or signing up
    this.currentState = GAME_STATES[0];


    // State Transitions
    this.goToLoginScreen = function(currentUIScreen, newUI) {
        this.currentState = GAME_STATES[0];
        currentUIScreen.destroyUI();
        newUI.enableControls();
    }
    this.goToLevelSelection = function(currentUIScreen, newUI) {
        this.currentState = GAME_STATES[1];
        currentUIScreen.destroyUI();
        newUI.enableControls();
    }
    this.goToInGameScreen = function(currentUIScreen, newUI) {
        this.currentState = GAME_STATES[2];
        currentUIScreen.destroyUI();
        newUI.enableControls();
    }

    // State GET
    this.getCurrentState = function() { return this.currentState; }
}
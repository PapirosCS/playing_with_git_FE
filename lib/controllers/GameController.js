// Hardcoded game states strings
const GAME_STATES = [ "LOGIN_SCREEN", "LEVEL_SELECTION", "IN_GAME", "REGISTER_SCREEN" ];

class GameController {
    // static get method to return hardcoded game state strings
    static get GAME_STATES() {
        return GAME_STATES;
    }

    constructor(){
        // Sets the initial state for logging in or signing up
        this.currentState = GameController.GAME_STATES[0];
    }

    // State Transitions
    goToLoginScreen(currentUIScreen, newUI) {
        this.currentState = GameController.GAME_STATES[0];
        currentUIScreen.destroyUI();
        newUI.enableControls();
    }
    goToLevelSelection(currentUIScreen, newUI) {
        this.currentState = GameController.GAME_STATES[1];
        currentUIScreen.destroyUI();
        newUI.enableControls();
    }
    goToInGameScreen(currentUIScreen, newUI) {
        this.currentState = GameController.GAME_STATES[2];
        currentUIScreen.destroyUI();
        newUI.enableControls();
    }
    goToRegisterScreen(currentUIScreen, newUI) {
        this.currentState = GameController.GAME_STATES[3];
        currentUIScreen.destroyUI();
        newUI.enableControls();
    }

    // State GET
    getCurrentState() { return this.currentState; }
}
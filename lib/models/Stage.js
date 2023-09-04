// Each step of the game progress is called a "Stage"
// The step should have:+
// 1. displayMessage: message to be displayed in the message box
// 2. displayPrompt bool: if true, then the prompt is display an the user is expected to enter a command.
//    if false, a "Next" button is displayed for the user to progress between stages.
// 3. imageFilename: the filename of the image to be displayed in the stage.
// 4. promptSolution string: the command that needs to be entered by the user in the prompt in order to progress.
class Stage {
    constructor(displayMessage, displayPrompt, imageFilename, promptSolution){
        this.displayMessage = displayMessage;
        this.displayPrompt = displayPrompt;
        this.imageFilename = imageFilename;
        this.promptSolution = promptSolution;
    }
}
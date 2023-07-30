function InGameScreen(loggedUser, level) {
    // Current user, must be of type User
    this.loggedUser = loggedUser;
    // Current level, must be of type Level
    this.level = level;

    // UI Components
    let backgroundImage;
    let promptInput;

    this.preload = function() {
        backgroundImage = loadImage("../images/ingame_background.png");
    }

    this.setup = function() {
        promptInput = createInput("");
    }

    this.draw = function() {
        push();
        // Background rounded rectangle
        translate(120, 60);
        backgroundImage.resize(width * 0.8, height * 0.8);
        image(backgroundImage, 0, 0);

        // Background fixed rectangle
        const backInterfaceWidth = backgroundImage.width - 80;
        const backInterfaceHeight = backgroundImage.height - 80;
        translate(20, 20);
        fill("#CDE7E5");
        rect(20, 20, backInterfaceWidth, backInterfaceHeight, 20);


        // UserInfo Box
        translate(20, 20);
        fill("#364544");
        rect(20, 20, backInterfaceWidth / 6, backInterfaceHeight / 3);

        // Tutorials Menu
        rect(20, backInterfaceHeight / 3 + 40, backInterfaceWidth / 6, backInterfaceHeight * 1.7 / 3)


        // Top Menu
        translate(backInterfaceWidth / 6 + 20, 0);
        rect(20, 20, backInterfaceWidth * 4.7 / 6, backInterfaceHeight / 6, 20);

        // Game Render
        translate(20, backInterfaceHeight / 6 + 40);
        fill("#FFFFFF");
        rect(0, 0, backInterfaceWidth * 4.7 / 6, backInterfaceHeight * 3.8 / 6, 20);

        // Prompt or next button
        fill("#364544");
        rect(0, 20 +  backInterfaceHeight * 3.8 / 6, backInterfaceWidth * 4.7 / 6, backInterfaceHeight * 0.6 / 6, 20);

        // Check if there is a level loaded. We need to avoid null objects
        if(level) {
            switch(level.getCurrentState().displayPrompt) {
                case true:
                    promptInput.position(0, 20 +  backInterfaceHeight * 3.8 / 6);
                case false:
                    // TODO add button
            }
        }
        pop();
    }

    this.enableControls = function() {
        promptInput.show();
    }

    this.destroyUI = function() {
        promptInput.hide();
    }
}
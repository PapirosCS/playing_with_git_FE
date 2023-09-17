class InGameScreen {

    constructor(loggedUser, level){
        // Current user, must be of type User
        this.loggedUser = loggedUser;
        // Current level, must be of type Level
        this.level = level;

        // UI Components
        this.backgroundImage;
        this.promptInput;
        this.nextButton = new Button();
        this.nextButton.assignTag('next')
        this.documentationButton = new Button();
        this.documentationButton.assignTag('documentation');
        this.w3schools = new Button();
        this.w3schools.assignTag('w3schools');
        this.howToPlayButton = new Button();
        this.howToPlayButton.assignTag('howToPlay');
        this.aboutTheGameButton = new Button();
        this.aboutTheGameButton.assignTag('about');
        this.teamButton = new Button();
        this.teamButton.assignTag('team');
        this.usefulCommandsButton = new Button();
        this.usefulCommandsButton.assignTag('usefulCommands');
        this.contactButton = new Button();
        this.contactButton.assignTag('contact');
        this.selectLevelButton = new Button();
        this.selectLevelButton.assignTag('selectLevel');
        this.exitButton = new Button();
        this.exitButton.assignTag('exit');

        this.buttons = [this.nextButton, this.documentationButton, this.w3schools, this.howToPlayButton,
            this.aboutTheGameButton, this.teamButton, this.usefulCommandsButton, this.contactButton,
            this.selectLevelButton, this.exitButton];

        this.levelSelectActivated = false;
        const levels = [];
        levels.push([...Array(6)])
        levels.push([...Array(6)])
        levels.push([...Array(7)])
        levels.push([...Array(5)])
        levels.push([...Array(7)])
        levels.push([...Array(6)])
        levels.push([...Array(6)])
        levels.push([...Array(5)])
        this.levelSelectMenu = new LevelSelect(levels);
    }


    preload() {
        this.backgroundImage = loadImage("images/ingame_background.png");
        this.profileImage = loadImage("images/video-game-gamepad-outline-icon.png");
    }

    setup() {
        this.promptInput = createInput("").attribute("placeholder", "Write your command and press Enter when ready");
        this.promptInput.hide();
        this.levelSelectMenu.assign();
        this.levelSelectMenu.buttonSetup();
    }

    draw() {
        this.promptInput.size(500, 40);
        // Cords
        let currentX = 120;
        let currentY = 60;
        // Background rounded rectangle
        this.backgroundImage.resize(width * 0.8, height * 0.8);
        image(this.backgroundImage, currentX, currentY);

        // Background fixed rectangle
        const backInterfaceWidth = this.backgroundImage.width - 80;
        const backInterfaceHeight = this.backgroundImage.height - 80;

        currentX += 20;
        currentY += 20;
        fill("#CDE7E5");
        rect(currentX, currentY, backInterfaceWidth, backInterfaceHeight, 20);


        // UserInfo Box
        currentX += 20;
        currentY += 20;
        fill("#364544");
        rect(currentX, currentY, backInterfaceWidth / 6, backInterfaceHeight / 3);
        image(this.profileImage, currentX + (backInterfaceWidth / 24), currentY + 20, backInterfaceWidth / 12, 100);
        textSize(30);
        stroke(0);
        strokeWeight(3);
        fill(255);
        textAlign(CENTER);
        text("Welcome back!", currentX + (backInterfaceWidth / 24), currentY + 140, backInterfaceWidth / 12, 100);
        noStroke();

        // Tutorials Menu
        fill("#364544");
        rect(currentX, currentY + backInterfaceHeight / 3 + 40, backInterfaceWidth / 6, backInterfaceHeight * 1.7 / 3)
        currentX += 10;
        currentY +=  50 + backInterfaceHeight / 3;
        this.documentationButton.assign(
            currentX,
            currentY,
            backInterfaceWidth / 6 - 20,
            (backInterfaceHeight / 3 + 40) / 7,
            10,
            10,
            10,
            10,
            "Git Documentation",
            color(159, 193, 191));
        this.documentationButton.draw();
        this.w3schools.assign(
            currentX,
            currentY + (backInterfaceHeight / 3 + 40) / 7 + 10,
            backInterfaceWidth / 6 - 20,
            (backInterfaceHeight / 3 + 40) / 7,
            10,
            10,
            10,
            10,
            "W3 Schools Guide",
            color(159, 193, 191));
        this.w3schools.draw();
        this.howToPlayButton.assign(
            currentX,
            currentY + 2 * (backInterfaceHeight / 3 + 40) / 7 + 20,
            backInterfaceWidth / 6 - 20,
            (backInterfaceHeight / 3 + 40) / 7,
            10,
            10,
            10,
            10,
            "How to Play",
            color(159, 193, 211));
        this.howToPlayButton.draw();
        this.aboutTheGameButton.assign(
            currentX,
            currentY + 3 * (backInterfaceHeight / 3 + 40) / 7 + 30,
            backInterfaceWidth / 6 - 20,
            (backInterfaceHeight / 3 + 40) / 7,
            10,
            10,
            10,
            10,
            "About The Game",
            color(159, 193, 211));
        this.aboutTheGameButton.draw();
        this.teamButton.assign(
            currentX,
            currentY + 4 * (backInterfaceHeight / 3 + 40) / 7 + 40,
            backInterfaceWidth / 6 - 20,
            (backInterfaceHeight / 3 + 40) / 7,
            10,
            10,
            10,
            10,
            "About The Team",
            color(159, 193, 211));
        this.teamButton.draw();
        this.usefulCommandsButton.assign(
            currentX,
            currentY + 5 * (backInterfaceHeight / 3 + 40) / 7 + 50,
            backInterfaceWidth / 6 - 20,
            (backInterfaceHeight / 3 + 40) / 7,
            10,
            10,
            10,
            10,
            "Useful Commands",
            color(59, 93, 11));
        this.usefulCommandsButton.draw();
        this.contactButton.assign(
            currentX,
            currentY + 6 * (backInterfaceHeight / 3 + 40) / 7 + 60,
            backInterfaceWidth / 6 - 20,
            (backInterfaceHeight / 3 + 40) / 7,
            10,
            10,
            10,
            10,
            "Contact Us",
            color(59, 93, 11));
        this.contactButton.draw();
        currentX -= 10;
        currentY -= 50 + backInterfaceHeight / 3;

        // Top Menu
        fill("#364544");
        currentX += backInterfaceWidth / 6 + 20;
        rect(currentX, currentY, backInterfaceWidth * 4.7 / 6, backInterfaceHeight / 6, 20);
        this.selectLevelButton.assign(
            currentX + 20,
            currentY + 20,
            backInterfaceWidth * 4.7 / 12 - 40,
            backInterfaceHeight / 6 - 40,
            10,
            10,
            10,
            10,
            "Select Level",
            color(159, 193, 211));
        this.selectLevelButton.draw();
        this.exitButton.assign(
            currentX + 20 + backInterfaceWidth * 4.7 / 12,
            currentY + 20,
            backInterfaceWidth * 4.7 / 12 - 40,
            backInterfaceHeight / 6 - 40,
            10,
            10,
            10,
            10,
            "Exit",
            color(159, 193, 211));
        this.exitButton.draw();

        // Game Render
        currentY += backInterfaceHeight / 6 + 20;
        fill("#FFFFFF");
        rect(currentX, currentY, backInterfaceWidth * 4.7 / 6, backInterfaceHeight * 3.8 / 6, 20);

        // Prompt or next button
        currentY += 20;
        fill("#364544");
        rect(currentX, currentY +  backInterfaceHeight * 3.8 / 6, backInterfaceWidth * 4.7 / 6, backInterfaceHeight * 0.6 / 6, 20);


        // Check if there is a level loaded. We need to avoid null objects
        if (this.level != null) {
            textSize(20);
            textAlign(LEFT);
            text(this.level.getCurrentStage().displayMessage, currentX, currentY, backInterfaceWidth * 4.7 / 6, backInterfaceHeight * 3.8 / 6)
            currentY += backInterfaceHeight * 3.9 / 6;
            currentX += 20;
            switch(this.level.getCurrentStage().displayPrompt) {
                case "true":
                    this.promptInput.size(backInterfaceWidth * 4.5 / 6)
                    this.promptInput.show();
                    this.promptInput.position(currentX, currentY);
                    break;
                case "false":
                    this.promptInput.hide();
                    this.nextButton.assign(
                        currentX,
                        currentY,
                        backInterfaceWidth * 4.5 / 6,
                        50,
                        10,
                        10,
                        10,
                        10,
                        "Next",
                        color(0, 255, 0));
                    this.nextButton.draw();
                    break;
            }
        }

        if (this.levelSelectActivated === true){
            this.promptInput.hide();
            this.levelSelectMenu.draw();
        }
    }

    enableControls() {
        this.promptInput.show();
    }

    destroyUI() {
        this.promptInput.hide();
    }

    buttonCheck(mouseX, mouseY) {
        if (this.levelSelectActivated === false){
            for(let i = 0; i < this.buttons.length; i++) {
                if(mouseX > this.buttons[i].posX && mouseX < this.buttons[i].posX + this.buttons[i].w &&
                    mouseY > this.buttons[i].posY && mouseY < this.buttons[i].posY + this.buttons[i].h) {
    
                    switch (this.buttons[i].retrieveTag()) {
                        case 'next':
                            // If next button is disabled
                            if (this.level.getCurrentStage().displayPrompt === "true") return;
                            // Advance to next stage
                            this.level.nextStage();
                            if (this.level.isLevelFinished()) {
                                this.level = null;
                            }
                            break;
                        case 'documentation':
                            // Open GIT official documentation
                            window.open('https://git-scm.com/doc', '_blank').focus();
                            break;
                        case 'w3schools':
                            // Open W3Schools tutorial
                            window.open('https://www.w3schools.com/git/', '_blank').focus();
                            break;
                        case 'howToPlay':
                            alert("Follow the storyline and enter the Git commands requested. Remember to use single quotes for strings (').");
                            break;
                        case 'about':
                            alert("Game created for the Agile Software Projects module from University of London.");
                            break;
                        case 'team':
                            alert("Created by Wai Lee, Zoheir Benetebbiche, Victor Gonzalez, Pablo Cabezas and Tim Wong.");
                            break;
                        case 'usefulCommands':
                            alert("git help, git commit -m 'message', git push, git log, git pull, git clone.");
                            break;
                        case 'contact':
                            alert("Please email us at contact_email@playingwithgit.com");
                            break;
                        case 'selectLevel':
                            this.levelSelectActivated = true;
                            break;
                        case 'exit':
                            gameController.goToLoginScreen(inGameScreen, loginScreen);

                    }
                }
            }
            return null;
        }
        const level_indexes = this.levelSelectMenu.buttonCheck(mouseX, mouseY);
        if (level_indexes && this.levelSelectActivated){
            // TODO level contains coordinates to the level in a 2d array, need to set the level here.
            this.levelSelectActivated = false;
            gameController.getLevel(level_indexes[0] + 1).then((r) => {
                const APILevel = r["level"];
                const level = new Level(APILevel)
                this.setLevel(level);
                this.level.currentStageIndex = level_indexes[1];
            })
        }
        return null;
    }

    // Level Methods
    setLevel(level) {
        this.level = level;
    }

    submitAnswer() {
        if (this.level.submitAnswer(this.promptInput.value())){
            this.promptInput.value("");
        }
        if (this.level.isLevelFinished()) {
            const nextLevel = this.level.index + 1
            this.level = null;
            alert("Level finished! Progressing to the next level.")
            gameController.getLevel(nextLevel).then((r) => {
                const APILevel = r["level"];
                const level = new Level(APILevel)
                this.setLevel(level);
                level.currentStageIndex = 0;
            })
        }
    }
}

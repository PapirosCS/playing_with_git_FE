class RegisterScreen {

    constructor(gameController){
        this.gameController = gameController;
        this.box1;
        this.box2;
        this.emailInput;
        this.firstNameInput;
        this.lastNameInput;
        this.passwordInput;
        this.passwordConfirmationInput;
        this.registerButton = new Button();
    }

    preload() {
        this.box1 = loadImage("images/login_background_image_1.png")
        this.box2 = loadImage("images/login_background_image_2.png")
    }

    setup() {
        this.emailInput = createInput("");
        this.emailInput.addClass("input", "email");
        this.emailInput.center();
        this.emailInput.size(300, 22);
        this.passwordInput = createInput("", "password");
        this.passwordInput.addClass("input");
        this.passwordInput.size(300, 22);
    }

    draw() {
        const boxWidth = width/2;
        const boxHeight = height/1.5;
        const boxX = (width - boxWidth) / 2;
        const boxY = (height - boxHeight) / 2;
        this.box1.resize(boxWidth, boxHeight);
        this.box2.resize(boxWidth, boxHeight);
        image(this.box1, boxX, boxY);
        image(this.box2, boxX, boxY);
    }

    buttonCheck(mouseX, mouseY){

    }

    enableControls() {

    }

    destroyUI() {

    }
}
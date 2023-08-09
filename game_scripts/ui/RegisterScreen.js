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
        this.emailInput.size(300, 22);
        this.passwordInput = createInput("", "password");
        this.passwordInput.addClass("input");
        this.passwordInput.size(300, 22);
        this.passwordConfirmationInput = createInput("", "password");
        this.passwordConfirmationInput.addClass("input");
        this.passwordConfirmationInput.size(300, 22);
        this.firstNameInput = createInput("", "text");
        this.firstNameInput.addClass("input");
        this.firstNameInput.size(300, 22);
        this.lastNameInput = createInput("", "text");
        this.lastNameInput.addClass("input");
        this.lastNameInput.size(300, 22);
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

        textAlign(CENTER);
        textSize(30);
        const rowHeight = boxHeight/20
        text("Register", width/2, boxY + rowHeight * 4);
        textAlign(LEFT, BOTTOM);
        textSize(10);
        text(" Your Email:", width / 2 - (this.emailInput.width/2), boxY + rowHeight * 5 );
        this.emailInput.position(width / 2 - (this.emailInput.width/2), boxY + rowHeight * 5);
        text(" Your First Name:", width / 2 - (this.emailInput.width/2), boxY + rowHeight * 7 );
        this.firstNameInput.position(width / 2 - (this.emailInput.width/2), boxY + rowHeight * 7);
        text(" Your Last Name:", width / 2 - (this.emailInput.width/2), boxY + rowHeight * 9 );
        this.lastNameInput.position(width / 2 - (this.emailInput.width/2), boxY + rowHeight * 9);
        text(" Password:", width / 2 - (this.passwordInput.width/2), boxY + rowHeight * 11 );
        this.passwordInput.position(width / 2 - (this.passwordInput.width/2), boxY + rowHeight * 11);
        text(" Please Retype Password:", width / 2 - (this.passwordInput.width/2), boxY + rowHeight * 13 );
        this.passwordConfirmationInput.position(width / 2 - (this.passwordInput.width/2), boxY + rowHeight * 13);
        this.registerButton.assign((width/2) - 150, 
                                        boxY + rowHeight * 16, 
                                        300,
                                        22,
                                        10,
                                        10,
                                        10,
                                        10,
                                        "Register",
                                        color(255, 0, 0));
        this.registerButton.draw();
    }

    buttonCheck(mouseX, mouseY){
        if(mouseX > this.registerButton.posX && mouseX < this.registerButton.posX + this.registerButton.w &&
            mouseY > this.registerButton.posY && mouseY < this.registerButton.posY + this.registerButton.h){
                const email = this.emailInput.value();
                const firstName = this.firstNameInput.value();
                const lastName = this.lastNameInput.value();
                const password = this.passwordInput.value();
                const passwordConfirmation = this.passwordConfirmationInput.value();
                return {
                    type: "register",
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    password: password,
                    passwordConfirmation: passwordConfirmation,
                };
        }
    }

    enableControls() {

    }

    destroyUI() {
        this.emailInput.hide();
        this.firstNameInput.hide();
        this.lastNameInput.hide();
        this.passwordInput.hide();
        this.passwordConfirmationInput.hide();
    }
}
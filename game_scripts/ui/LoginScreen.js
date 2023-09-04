class LoginScreen {

    constructor(gameController){
        this.gameController = gameController;
        this.box1;
        this.box2;
        this.emailInput;
        this.passwordInput;
        this.loginButton = new Button();
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
        text("PLAYING WITH GIT", width/2, boxY + rowHeight * 6);
        textAlign(LEFT, BOTTOM);
        textSize(10);
        text(" Your Email:", width / 2 - (this.emailInput.width/2), boxY + rowHeight * 8 );

        this.emailInput.position(width / 2 - (this.emailInput.width/2), boxY + rowHeight * 8);
        text(" Password:", width / 2 - (this.passwordInput.width/2), boxY + rowHeight * 10 );
        this.passwordInput.position(width / 2 - (this.passwordInput.width/2), boxY + rowHeight * 10);
        this.loginButton.assign((width/2) - 150, 
                                        boxY + rowHeight * 12, 
                                        300,
                                        22,
                                        10,
                                        10,
                                        10,
                                        10,
                                        "Login",
                                        color(0, 255, 0));
        this.loginButton.draw();
        this.registerButton.assign((width/2) - 150, 
                                        boxY + rowHeight * 14, 
                                        300,
                                        22,
                                        10,
                                        10,
                                        10,
                                        10,
                                        "Create a new account",
                                        color(255, 0, 0));
        this.registerButton.draw();
    }

    buttonCheck(mouseX, mouseY){
        if(mouseX > this.loginButton.posX && mouseX < this.loginButton.posX + this.loginButton.w &&
            mouseY > this.loginButton.posY && mouseY < this.loginButton.posY + this.loginButton.h){
                const email = this.emailInput.value();
                const password = this.passwordInput.value();
                return {
                    type: "login",
                    email: email,
                    password: password,
                };
        }
        if(mouseX > this.registerButton.posX && mouseX < this.registerButton.posX + this.registerButton.w &&
            mouseY > this.registerButton.posY && mouseY < this.registerButton.posY + this.registerButton.h){
                return {
                    type: "register",
                };
        }
        return null;
    }

    enableControls() {
        this.emailInput.show();
        this.passwordInput.show();
    }

    destroyUI() {
        this.emailInput.hide();
        this.passwordInput.hide();
    }
}
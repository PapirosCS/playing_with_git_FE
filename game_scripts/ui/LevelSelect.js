class LevelSelect {
    constructor(levelsJson){
        this.x;
        this.y;
        this.width;
        this.height;
        this.buttons = [];
        for (let i = 0; i < levelsJson.length; i++){
            const levelButtons = [];
            for (let j = 0; j < levelsJson[i].length; j++){
                let button = new Button();
                button.text = `Stage ${j}`;
                levelButtons.push(button);
            }
            this.buttons.push(levelButtons);
        }
    }

    assign(){
        this.x = width / 5;
        this.y = height / 5;
        this.width = this.x * 3;
        this.height = this.y * 3;
    }

    buttonSetup(){
        const buttonHeight = this.height / ((this.buttons.length + 1) * 2);
        const buttonWidth = this.width / ((this.buttons[0].length + 1) * 1.2) - 20;
        for (let i = 0; i < this.buttons.length; i++){
            for (let j = 0; j < this.buttons[i].length; j++){
                let stage = `Stage ${j + 1}`;
                if(i == 2 || i == 4){
                    if (j + 2 == this.buttons[i].length){
                        stage = "Review Stage";
                    }
                    if (j + 1 == this.buttons[i].length){
                        stage = "Bonus Stage";
                    }
                } else {
                    if (j + 1 == this.buttons[i].length){
                        stage = "Review Stage";
                    }
                }

                this.buttons[i][j].assign(
                    this.x + (buttonWidth * j * 1.2) + (buttonWidth * 0.2),
                    this.y + (buttonHeight * 2) + (buttonHeight * (i * 2)),
                    buttonWidth,
                    buttonHeight,
                    10,
                    10,
                    10,
                    10,
                    stage,
                    color(159, 193, 211),
                    15
                );
                this.buttons[i][j].assignTag(i, j);
            }
        }
    }

    draw(){
        fill(0, 0, 0, 100);
        rect(0, 0, width, height);
        stroke(0, 0, 0);
        fill(255, 255, 255);
        rect(this.x, this.y, this.width, this.height, 20);
        for(let i = 0; i < this.buttons.length; i++){
            let textY = this.buttons[i][0].posY - (this.buttons[i][0].h / 2);
            let textX = this.buttons[i][0].posX;
            textAlign(LEFT, CENTER);
            strokeWeight(1);
            textSize(15);
            fill(0);
            text(`Level ${i + 1}`, textX, textY);
            for (let j = 0; j < this.buttons[i].length; j++){
                this.buttons[i][j].draw();
                textY = this.buttons[i][j].posY + this.buttons[i][j].height
            }
        }
    }

    buttonCheck(mouseX, mouseY) {
        for(let i = 0; i < this.buttons.length; i++) {
            for (let j = 0; j < this.buttons[i].length; j++){
                if(mouseX > this.buttons[i][j].posX && mouseX < this.buttons[i][j].posX + this.buttons[i][j].w &&
                    mouseY > this.buttons[i][j].posY && mouseY < this.buttons[i][j].posY + this.buttons[i][j].h) {
                    return this.buttons[i][j].retrieveTag();
                }
            }
        }
        return null;
    }
};
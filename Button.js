class Button {
    constructor() {

        //  x-coordinate of the rectangle.
        this.posX;

        //  y-coordinate of the rectangle.
        this.posY;

        //  width of the rectangle.
        this.w;

        //  height of the rectangle.
        this.h;

        //  radius of top-left corner.
        this.tl;

        //  radius of top-right corner.
        this.tr;

        //  radius of bottom-right corner.
        this.br;

        //  radius of bottom-left corner.
        this.bl;

        // Name of the button
        this.text;

        // Color of the button
        this.colour;
    }

    assign (x, y, w, h, tl, tr, br, bl, text, colour){
        //  x-coordinate of the rectangle.
        this.posX = x;

        //  y-coordinate of the rectangle.
        this.posY = y;

        //  width of the rectangle.
        this.w = w;

        //  height of the rectangle.
        this.h = h;

        //  radius of top-left corner.
        this.tl = tl;

        //  radius of top-right corner.
        this.tr = tr;

        //  radius of bottom-right corner.
        this.br = br;

        //  radius of bottom-left corner.
        this.bl = bl;

        // Name of the button
        this.text = text;

        // Color of the button
        this.colour = colour;
    }

    draw() {
        fill(this.colour);
        rect(this.posX, this.posY, this.w, this.h, this.tl, this.tr, this.br, this.bl);
        textAlign(CENTER, CENTER);
        textSize(20);
        fill(0);
        text(this.text, this.posX + this.w / 2, this.posY + this.h / 2);
    }
}
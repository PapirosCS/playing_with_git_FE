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

        //
        this.tag;
    }

    assign (x, y, w, h, tl, tr, br, bl, text, colour, textSize = 20){
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

        this.textSize = textSize;
    }

    draw() {
        fill(this.colour);
        rect(this.posX, this.posY, this.w, this.h, this.tl, this.tr, this.br, this.bl);
        textAlign(CENTER, CENTER);
        textSize(this.textSize);
        fill(0);
        text(this.text, this.posX + this.w / 2, this.posY + this.h / 2);
    }

    assignTag(tagA, tagB = null) {

        if (tagB === null){
            this.tag = tagA;
            return;
        }
        this.tag = [tagA, tagB];
    }

    retrieveTag() {
        return this.tag ? this.tag : null;
    }
}
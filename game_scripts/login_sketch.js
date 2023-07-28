
let w = window.innerWidth;
let h = window.innerHeight;  
let box1;
let box2;
let emailInput;
let passwordInput;


function preload(){
    box1 = loadImage("images/login_background_image_1.png")
    box2 = loadImage("images/login_background_image_2.png")

}

function setup() {
  createCanvas(w, h);
  emailInput = createInput("");
  emailInput.addClass("input", "email");
  emailInput.center();
  emailInput.size(300, 22);
  passwordInput = createInput("", "password");
  passwordInput.addClass("input");
  passwordInput.size(300, 22);
}

function draw() {
    background("#0A2D32")
    const boxWidth = width/2;
    const boxHeight = height/1.5;
    const boxX = (width - boxWidth) / 2;
    const boxY = (height - boxHeight) / 2;
    box1.resize(boxWidth, boxHeight);
    box2.resize(boxWidth, boxHeight);
    image(box1, boxX, boxY);
    image(box2, boxX, boxY);
    textAlign(CENTER);
    textSize(30);
    const rowHeight = boxHeight/20
    text("PLAYING WITH GIT", width/2, boxY + rowHeight * 6);
    textAlign(LEFT, BOTTOM);
    textSize(10);
    text(" Your Email:", width / 2 - (emailInput.width/2), boxY + rowHeight * 8 );

    emailInput.position(width / 2 - (emailInput.width/2), boxY + rowHeight * 8);
    text(" Password:", width / 2 - (passwordInput.width/2), boxY + rowHeight * 10 );
    passwordInput.position(width / 2 - (passwordInput.width/2), boxY + rowHeight * 10);
  }

window.onresize = function() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;  
  resizeCanvas(w, h);
}
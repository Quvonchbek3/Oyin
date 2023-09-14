let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function (){
    const guess = Number(document.querySelector(".guess").value);
    if(!guess){
        document.querySelector(".message").textContent = 
        "Iltimos o`yinga raqam kiriting !";
    }else if(guess === secretNumber){
        document.querySelector(".message").textContent = "Javob to`g`ri";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#009933";
        document.querySelector(".number").style.width = "30rem";
        if(score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }else if(guess > secretNumber) {
        if (score >1){
            document.querySelector(".message").textContent = "Pastroq kiriting";
            score--;
            document.querySelector(".score").textContent = score;
        }else{
            document.querySelector(".message").textContent = "Raqam kirita olmaysiz !!";
            document.querySelector(".score").textContent = 0;
        }
    }else if(guess < secretNumber){
        if(score>1){
            document.querySelector(".message").textContent ="Balandroq kiriting";
            score--;
            document.querySelector(".score").textContent = score;
        }else {
            document.querySelector(".message").textContent = "Raqam kirita olmaysiz !!";
            document.querySelector(".score").textContent = 0;
        }}});
document.querySelector(".again").addEventListener("click", function (){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "O`yin boshlandi...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").textContent = "";
    document.querySelector(".number").textContent = "??";
    document.querySelector("body").style.backgroundColor = "#000000d8";
    document.querySelector(".number").style.width = "15rem"
})
function gameRun() {
        
    let firstDice = Math.floor(Math.random() * 6)
    let secondDice = Math.floor(Math.random() * 6)
    
    if (firstDice < secondDice) {
        let secondWinMessage = document.querySelector("h1").innerHTML = " Player 2 Wins 🚩 "
    } if (firstDice > secondDice) {
        let firstWinMessage = document.querySelector("h1").innerHTML = " 🚩 Player 1 Wins "        
    } if (firstDice === secondDice) {
        let draw = document.querySelector("h1").innerHTML = " 🚩 DRAW 🚩 "
        
    }
    function diceImage(){
        if (firstDice === 0) {
            document.querySelector(".img1").setAttribute("src", "images/dice1.png")
        }
        if (firstDice === 1) {
            document.querySelector(".img1").setAttribute("src", "images/dice2.png")
        }
        if (firstDice === 2) {
            document.querySelector(".img1").setAttribute("src", "images/dice3.png")
        }
        if (firstDice === 3) {
            document.querySelector(".img1").setAttribute("src", "images/dice4.png")
        }
        if (firstDice === 4) {
            document.querySelector(".img1").setAttribute("src", "images/dice5.png")
        }
        if (firstDice === 5) {
            document.querySelector(".img1").setAttribute("src", "images/dice6.png")
    
        }
        if (secondDice === 0) {
            document.querySelector(".img2").setAttribute("src", "images/dice1.png")
        }
        if (secondDice === 1) {
            document.querySelector(".img2").setAttribute("src", "images/dice2.png")
        }
        if (secondDice === 2) {
            document.querySelector(".img2").setAttribute("src", "images/dice3.png")
        }
        if (secondDice === 3) {
            document.querySelector(".img2").setAttribute("src", "images/dice4.png")
        }
        if (secondDice === 4) {
            document.querySelector(".img2").setAttribute("src", "images/dice5.png")
        }
        if (secondDice === 5) {
            document.querySelector(".img2").setAttribute("src", "images/dice6.png")
        }
            }
    diceImage()
}

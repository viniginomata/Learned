//Putting a listener in all the buttons with this loop.
for(let i = 0 ; i < document.querySelectorAll(".drum").length; i++)
document.querySelectorAll("button")[i].addEventListener("keydown",function(){
    let buttonInnerHTML = this.innerHTML /* <<< This variable became the text content by using innerHTML. If we write console.log(buttonInnerHTML) the pc give to us only the text*/

    playSound(buttonInnerHTML);

    document.addEventListener("keydown",function(event){
        playSound(event.key)


    });
// Every button has a event listener. Now I have to identify which key was pressed

    function playSound(key){

        switch (key){
            case "w":
                let audio = new Audio("sounds/tom-1.mp3");
                audio.play();
            break;
            case "a":
                let audio1 = new Audio("sounds/tom-2.mp3");
                audio1.play();
            break;
            case "s":
                let audio2 = new Audio("sounds/tom-3.mp3");
                audio2.play();
            break;
            case "d":
                let audio3 = new Audio("sounds/tom-4.mp3");
                audio3.play();
            break;
            case "j":
                let audio4 = new Audio("sounds/crash.mp3");
                audio4.play();
            break;
            case "k":
                let audio5 = new Audio("sounds/kick-bass.mp3");
                audio5.play();
            break;
            case "l":
                let audio6 = new Audio("sounds/snare.mp3");
                audio6.play();
            break;
            default:console.log(buttonInnerHTML);
        }
    }


})


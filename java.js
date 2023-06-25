let randomizer = document.getElementById("randomizer");
let youGot = document.getElementById("youGot");
let name = document.getElementById("name");
let dater = document.getElementById("dater");
let ending = document.getElementById("ending");
let bed = document.getElementById("bed");
let theDate1 = document.getElementById("theDate1");
let theDate2 = document.getElementById("theDate2");
let theDate3 = document.getElementById("theDate3");

function ranNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let thedate;

function randomize(){
    thedate = ranNum(1,2)
    switch(thedate){
        case 1: youGot.innerText = "Your dater is:";
        console.log(thedate);
        name.innerText = "Dank Brook";
        dater.src = "./images/dank brook.png";
        dater.alt = "Dank Brook"
    
        ending.innerText = "Smashed Ending";
        bed.src = "./images/bed2.png";
    
        theDate1.innerText = "You don't know what exactly pulled you to him. Was it the glorious Afro shaped like a fidget spinner? Or was it his overall chill aura? Or maybe perhaps, was it his gentlemanliness? If that's even a word, that is.";
        theDate2.innerHTML = "Whatever it may be, when he first arrived on the date scene, you expected him to ask \"May I see your panties?\"But he didn't. Instead, he simply asked \"¿Quieres?\"";
        theDate3.innerHTML = "It was an offer you couldn't say no to. One thing led to another, you were already in bed with him. One would think that he can't do much since he's all bones, but he proved to you that it's not about the flesh, it's about how you use it.";
        break;

        case 2:
        console.log(thedate);
        youGot.innerText = "Your dater is:";
        name.innerText = "Big Brain Luffy";
        dater.src = "./images/big brain luffy.png";
    
        ending.innerText = "Forever Alone Ending";
        bed.src = "./images/bed1.png";
    
        theDate1.innerText = "During the whole date, he asked you NOTHING. The audacity. Instead, he kept on babbling about random stuff you didn't care about.";
        theDate2.innerHTML = "Does he know that there's exactly 46 items on the restaurant's menu? There's also 57 tiles on the floor. 89 cars passed by the nearby road since the last time he was silent. The lightbulb on the ceiling flickers once every 23 seconds.";
        theDate3.innerHTML = "When you arrived home, you cried for 2 hours on your bed, wondering what you did wrong."
        break;
    }
}

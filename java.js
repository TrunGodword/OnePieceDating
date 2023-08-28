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
    thedate = ranNum(20,20);
    switch(thedate){
        case 1: 
        youGot.innerText = "Your dater is:";
        name.innerText = "Dank Brook";
        dater.src = "./images/dank brook.png";
        dater.style.visibility = "visible";
    
        ending.innerText = "Smashed Ending";
        bed.src = "./images/bed2.png";
        bed.style.visibility = "visible";
    
        theDate1.innerText = "You don't know what exactly pulled you to him. Was it the glorious Afro shaped like a fidget spinner? Or was it his overall chill aura? Or maybe perhaps, was it his gentlemanliness? If that's even a word, that is.";
        theDate2.innerHTML = "Whatever it may be, when he first arrived on the date scene, you expected him to ask \"May I see your panties?\" But he didn't. Instead, he simply asked you, \"¿Quieres?\"";
        theDate3.innerHTML = "It was an offer you couldn't say no to. One thing led to another, and you were already in bed with him. One would think that he can't do much since he's all bones, but he proved to you that it's not about the flesh, it's about how you bone it.";
        break;

        case 2:
        youGot.innerText = "Your dater is:";
        name.innerText = "Big Brain Luffy( Art by ProfessorGemini )";
        dater.src = "./images/big brain luffy.png";
        dater.style.visibility = "visible";
    
        ending.innerText = "Forever Alone Ending";
        bed.src = "./images/bed1.png";
        bed.style.visibility = "visible";
    
        theDate1.innerText = "During the whole date, he asked you NOTHING. The audacity. Instead, he kept on babbling about random stuff you didn't care about.";
        theDate2.innerHTML = "Does he know that there's exactly 46 items on the restaurant's menu? There's also 57 tiles on the floor. 89 cars passed by the nearby road since the last time he was silent. The lightbulb on the ceiling flickers once every 23 seconds.";
        theDate3.innerHTML = "When you arrived home, you cried for 2 hours on your bed, wondering what you did wrong."
        break;

        case 3:
        youGot.innerText = "Your dater is:";
        name.innerText = "Loli Nami";
        dater.src = "./images/loli nami.png";
        dater.style.visibility = "visible";
    
        ending.innerText = "Jail Ending";
        bed.src = "./images/bed6.png";
        bed.style.visibility = "visible";
    
        theDate1.innerText = "As you two were taking a stroll in the park, Pedo Sanji called the cops on you.";
        theDate2.innerHTML = "However, both him and you were arrested for pedophilia. You're his cellmate now.";
        theDate3.innerHTML = "Pedo Sanji has been considering returning back to his Okama days lately, so you sleep with one eye open every night.";
        break;

        case 4:
        youGot.innerText = "Your dater is:";
        name.innerText = "Ascended Buggy( Art by Serum X )";
        dater.src = "./images/Ascended Buggy.png";
        dater.style.visibility = "visible";
        
        ending.innerText = "Happy Ending";
        bed.src = "./images/bed7.png";
        bed.style.visibility = "visible";
        
        theDate1.innerText = "You came looking for copper and found gold. What was supposed to be just a one time blind date turned out to be much more, as Ascended Buggy taught you the importance of self love.";
        theDate2.innerHTML = "Rather than looking for someone who can fill the empty void in your soul, you are looking for someone who could be your partner in life now, for your heart shines with your love for yourself.";
        theDate3.innerHTML = "You are no longer horny. You are finally happy.";
        break;

        case 5:
        youGot.innerText = "Your dater is:";
        name.innerText = "Nico Robin(ashamed)";
        dater.src = "./images/ashamed nico robin.png";
        dater.style.visibility = "visible";
    
        ending.innerText = "Forever Alone Ending";
        bed.src = "./images/bed1.png";
        bed.style.visibility = "visible";
    
        theDate1.innerText = "You really don't know what you did wrong, or what you even did. She arrived to the meeting place, took a good look at you and claimed, \"It would hurt my human pride.\" She then left before repeating the same statement again.";
        theDate2.innerHTML = "Was it your drip? I mean, One Piece characters dress wacky sometimes but you didn't really expect her to be THAT conscious of it.";
        theDate3.innerHTML = "Perhaps next time, you should dress better. ¯\\_(ツ)_/¯";
        break;

        case 6:
        youGot.innerText = "Your dater is:";
        name.innerText = "Paraplegic Buggy";
        dater.src = "./images/awakened buggy.png";
        dater.style.visibility = "visible";
    
        ending.innerText = "True Man's World Ending";
        bed.src = "./images/bed8.png";
        bed.style.visibility = "visible";
    
        theDate1.innerText = "This is... curious. I mean, you expected to land a date with THE Buggy The Clown but you didn't expect him to tag you along for his Steel Ball Sail race. The King of the World is trying to steal the corpse of Joyboy and it's only up to you and Buggy to stop him.";
        theDate2.innerHTML = "Utilizing the power of Banach-Tarski paradox, you came close to stopping him, almost. Unfortunately, he wounded you fatally at the end, and you don't know if you'll live to see tomorrow.";
        theDate3.innerHTML = "In your last few moments, however, you saw Buggy getting hit by the helm of your ship, shouting, \"Awakened Bara Bara no mi: Model Infinite Split!\"";
        break;

        case 7:
        youGot.innerText = "Your dater is:";
        name.innerText = "Bald Sanji";
        dater.src = "./images/baldji.png";
        dater.style.visibility = "visible";
    
        ending.innerText = "Kill It With Fire Ending";
        bed.src = "./images/bed6.png";
        bed.style.visibility = "visible";
    
        theDate1.innerText = "You don't know what came over you. Perhaps it was some kind of Pavlovian response, although you don't remember encountering something like him before. The moment you saw Baldji entering the restaurant, you just blacked out.";
        theDate2.innerHTML = "When your senses returned, you were standing in the middle of the restaurant as it was burning to the ground. There were people screaming outside, and the cops were urging you to come out.";
        theDate3.innerHTML = "But that doesn't matter. What matters is that Baldji was dead right in front of you. You don't know if he will go to hell, but you sure as hoped that his dead served as a welcome invite to it.";
        break;

        case 8:
        youGot.innerText = "Your dater is:";
        name.innerText = "Berkman Buggy";
        dater.src = "./images/Buggy Guts.png";
        dater.style.visibility = "visible";
    
        ending.innerText = "Causality Ending";
        bed.src = "./images/bed13.png";
        bed.style.visibility = "visible";
    
        theDate1.innerText = "In this world, is the destiny of mankind controlled by some transcendental entity or law? Is it like the foot of God hovering above? At least it is true that man has no control; even over his own will. You have encountered Buggy Berkman the Red Nose Swordsman in his journey against fate itself. ";
        theDate2.innerHTML = "What you wanted was a date with him, but what he wanted from you was merely an information on a group known as \"The God Foot.\" Damn it, Mr.3! Why did you need to sacrifice the Buggy Pirates just for your dream of having an island of your own?";
        theDate3.innerHTML = " Buggy is now trapped between seeking revenge against Galdino, and seeking a cure for his beloved Alvida. You asked if you can help him, but he politely declined your offer. Ultimately, you left the man to his struggles, for everything is dictated by the flow of causality.";
        break;

        case 9:
        youGot.innerText = "Your dater is:";
        name.innerText = "Buggy Hanma";
        dater.src = "./images/buggy hanma.png";
        dater.style.visibility = "visible";
    
        ending.innerText = "\"I am male, and all others are not\" Ending";
        bed.src = "./images/secret ending.png";
        bed.style.visibility = "visible";
    
        theDate1.innerText = "Umm... you didn't ask for this date, actually. You were just chilling in a random restaurant, minding your own business when suddenly, Buggy Hanma materialized behind you.";
        theDate2.innerHTML = "The strongest creature in the world, Buggy Hanma, has appeared to challenge you. You cannot escape this in any way, for he just might activate his Demon Nose and snort your entire existence away like cocaine.";
        theDate3.innerHTML = "He heard you beat your meat as he was passing by one of your friends. So now, he wants to see if you can beat him, or his meat. Who knows what fate has in store for you. I can only pray to God that he doesn't bring out the woman in you.";
        break;

        case 10:
        youGot.innerText = "Your dater is:";
        name.innerText = "CBT Nico Robin";
        dater.src = "./images/cbt nico robin.png";
        dater.style.visibility = "visible";
    
        ending.innerText = "Cock and Ball Torture Ending";
        bed.src = "./images/bed9.png";
        bed.style.visibility = "visible";
    
        theDate1.innerText = "Ouch!";
        theDate2.innerHTML = "I mean...";
        theDate3.innerHTML = "It's actually not that bad?";
        break;

        case 11:
        youGot.innerText = "Your dater is:";
        name.innerText = "Tony Tony Chopper the Cotton Candy Lover";
        dater.src = "./images/chopper(bad ending).png";
        dater.style.visibility = "visible";
    
        ending.innerText = "Jail Ending";
        bed.src = "./images/bed6.png";
        bed.style.visibility = "visible";
    
        theDate1.innerText = "What the hell was going on in your mind, you pervert?";
        theDate2.innerHTML = "That's a raccoon dog! Don't you know that bestiality is immoral and utter depraved?";
        theDate3.innerHTML = "You're just disgusting. Expect the cops to arrive at your location in a few minutes.";
        break;

        case 12:
        youGot.innerText = "Your dater is:";
        name.innerText = "Edward \"Whitebeard\" Newgate";
        dater.src = "./images/cockbeard.png";
        dater.style.visibility = "visible";
    
        ending.innerText = "The One Piece is Real Ending";
        bed.src = "./images/bed10.png";
        bed.style.visibility = "visible";
    
        theDate1.innerText = "Can we get much higher?";
        theDate2.innerHTML = "So high~";
        theDate3.innerHTML = "";
        break;

        case 13:
        youGot.innerText = "Your dater is:";
        name.innerText = "Condoriano...?";
        dater.src = "./images/condoriano nico robin.png";
        dater.style.visibility = "visible";
    
        ending.innerText = "Good Ending";
        bed.src = "./images/bed7.png";
        bed.style.visibility = "visible";
    
        theDate1.innerText = "Lucky you. Won a date with the Marine HQ Commander and Special Inspector Condoriano.";
        theDate2.innerHTML = "Although, for some reason, something feels so off about her but that doesn't matter anyway. The date went great and you two had great chemistry. In fact, at the end of the date, she gave you a kiss on the cheek! What a great time, huh?";
        theDate3.innerHTML = "She stopped picking up your calls or reading your messages afterwards but you are thankful for the memories, and you will cherish it dearly as long as you live.";
        break;

        case 14:
        youGot.innerText = "Your dater is:";
        name.innerText = "Con D. Oriano";
        dater.src = "./images/Condoriano.png";
        dater.style.visibility = "visible";
    
        ending.innerText = "Seed Bearer Ending";
        bed.src = "./images/bed4.png";
        bed.style.visibility = "visible";
    
        theDate3.innerText = "It was a great date.";
        theDate1.innerHTML = "Join Con D. Oriano's journey, as he one shots all of your favorite characters at the same time, and any of your favorite verse. He has come down to smite down every single powerscaling headcanon out there with his might.";
        theDate2.innerHTML = "The Undisputed Top 1 has chosen you as his significant other, and you shall bear his seed, regardless of whether it's biologically possible or not.";
        break;

        case 15:
        youGot.innerText = "Your dater is:";
        name.innerText = "Cool Nico Robin";
        dater.src = "./images/cool nico robin.png";
        dater.style.visibility = "visible";
    
        ending.innerText = "Forever Alone Ending";
        bed.src = "./images/bed1.png";
        bed.style.visibility = "visible";
    
        theDate1.innerText = "She wasn't impressed.";
        theDate2.innerHTML = "";
        theDate3.innerHTML = "";
        break;

        case 16:
        youGot.innerText = "Your dater is:";
        name.innerText = "Crocodile(young)";
        dater.src = "./images/Crocomommy.png";
        dater.style.visibility = "visible";
    
        ending.innerText = "\"Smashed Until the Floor Collapsed\" Ending";
        bed.src = "./images/bed5.png";
        bed.style.visibility = "visible";
    
        theDate1.innerText = "She gave you only one \"Ara ara\" and it was all over.";
        theDate2.innerHTML = "Perhaps Monkey D. Luffy has many other siblings he doesn't know of.";
        theDate3.innerHTML = "";
        break;

        case 17:
        youGot.innerText = "Your dater is:";
        name.innerText = "BUGGY Brando";
        dater.src = "./images/DIO Buggy.png";
        dater.style.visibility = "visible";
    
        ending.innerText = "Walk like an Alabastan Ending";
        bed.src = "./images/bed12.png";
        bed.style.visibility = "visible";
    
        theDate1.innerText = "Oh? You're approaching him? Instead of running away, you're coming right to him? Even though your grandfather set you up with a different date like an exam student scrambling to finish the problems on an exam until the last moments before the chime.";
        theDate2.innerHTML = "Very well then, if you really want to date BUGGY Brando, the user of \"Za Nose,\" feel free. Prepare for a really bizarre adventure ahead of you, as you travel through Grand Line and New World to get to BUGGY Brando.";
        theDate3.innerHTML = "Satisfy your lust for Battle Tendency with the Phantom Blood of your enemies as your Stardust Crusader group disprove that Diamond is Unbreakable against the Golden Wind in the Stone Ocean of life. Could the Jojo lion exist in the Jojo lands? Only BUGGY Brando holds the answer.";
        break;

        case 18:
        youGot.innerText = "Your dater is:";
        name.innerText = "Glassless Doflamingo";
        dater.src = "./images/doffy eyes.png";
        dater.style.visibility = "visible";
    
        ending.innerText = "Dipped Out Ending";
        bed.src = "./images/bed1.png";
        bed.style.visibility = "visible";
    
        theDate1.innerText = "You went home.";
        theDate2.innerHTML = "";
        theDate3.innerHTML = "";
        break;

        case 19:
        youGot.innerText = "Your dater is:";
        name.innerText = "Elbaf Usopp( bad ending )";
        dater.src = "./images/Elbaf Usopp(bad ending).png";
        dater.style.visibility = "visible";
    
        ending.innerText = "Death Ending";
        bed.src = "./images/bed14.png";
        bed.style.visibility = "visible";
    
        theDate1.innerText = "That wasn't a date at all. Somehow, for some reason, you ended up being matched with Elbaf Usopp from Ohara's thumbnail.";
        theDate2.innerHTML = "There was not a single shred of humanity in his eyes. Just look!";
        theDate3.innerHTML = "Who allowed this man to walk the streets of Grand Line so freely? Well, it doesn't matter now. Whoever they may be, they are now responsible for your life. Well... what little time you have left of it anyway.";
        break;

        case 20:
        youGot.innerText = "Your dater is:";
        name.innerText = "Elbaf Usopp( Art by u/shnobro)";
        dater.src = "./images/Elbaf Usopp(good ending).png";
        dater.style.visibility = "visible";
    
        ending.innerText = "Brave Warrior of the Sea Ending";
        bed.src = "./images/bed15.png";
        bed.style.visibility = "visible";
    
        theDate1.innerText = "";
        theDate2.innerHTML = "";
        theDate3.innerHTML = "";
        break;

        default: 
        youGot.innerText = "Your dater is:";
        name.innerText = "Name";
        dater.src = "./images/cockbeard.png";
        dater.style.visibility = "visible";
    
        ending.innerText = "Ending";
        bed.src = "./images/bed1.png";
        bed.style.visibility = "visible";
    
        theDate1.innerText = "";
        theDate2.innerHTML = "";
        theDate3.innerHTML = "";
    }
}
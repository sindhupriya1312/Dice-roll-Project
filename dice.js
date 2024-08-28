
let dice = document.getElementById('dice');
let btn = document.getElementById('roll-btn');
let num = document.getElementById('num');
let audio = document.getElementById('roll-sound-1');
let audio2 = document.getElementById('roll-sound-2');

let rotate = 0;
btn.addEventListener('click', () => {

       audio.play();

       rotate += 360;
       dice.style.transform = `rotate(${rotate}deg)`;

       num.innerHTML = ' ';

       let diceRoll = Math.floor(Math.random() * 6) + 1;

       dice.classList.remove('shadow');

       btn.style.backgroundColor = 'white'
       btn.style.color = 'black'

       setTimeout(() => {
              dice.classList.add('shadow');
              num.innerHTML = diceRoll;
              btn.style.backgroundColor = 'black'
              btn.style.color = 'white'
              audio2.play();
       }, 800);
});


// document.addEventListener('DOMContentLoaded', () => {
//        const dice = document.getElementById('dice');
//        const rollBtn = document.getElementById('roll-btn');
//        const rollSound = document.getElementById('roll-sound');
   
//        rollBtn.addEventListener('click', () => {
//            // Add rolling class to animate the dice
//            dice.classList.add('rolling');
   
//            // Remove the rolling class after animation
//            setTimeout(() => {
//                dice.classList.remove('rolling');
//    dice.innerHTML=''
//                // Generate random number between 1 and 6
//                const randomNumber = Math.floor(Math.random() * 6) + 1;
   
//                // Update the dice content
//                dice.textContent = randomNumber;
   
//                // Play sound
//                rollSound.play();
//            }, 200); // Match the duration of the dice roll animation
//        });
//    });
   



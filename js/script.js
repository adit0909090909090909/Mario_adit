const mario = document.querySelector('.mario');


const jump = () => {
   mario.classList.add('jump');


   setTimeout(() => {
       mario.classList.remove('jump');
   }, 500);
}


document.addEventListener('keydown', jump);



const pipe = document.querySelector('.pipe');
const loop = setInterval(() => {
   const pipePosition = pipe.offsetLeft;


   if (pipePosition <= 120) {
       pipe.style.animation = "none";
       pipe.style.left = `${pipePosition}px`;
   }
}, 10)


const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px','');
 
 
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;
    }
 }, 10)
 
 
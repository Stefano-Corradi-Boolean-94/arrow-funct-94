
const btn = document.querySelector('.btn');
const counterBtn = document.querySelector('.counterBtn');
const showCounter = document.querySelector('.showCounter');
const h1 = document.querySelector('h1');
let counter = 0;


// btn.addEventListener('click',function(){
//   console.log(this);
//   const funct = () => {
// //  prendo lo scope del genitore che è il bottone
//     console.log('this interno ',this);
//   }
//   funct();
// })

// this non restituisce il bottone ma Window
btn.addEventListener('click', () => console.log(this) );

counterBtn.addEventListener('click', () => counter++);
showCounter.addEventListener('click', () => h1.innerHTML = counter);
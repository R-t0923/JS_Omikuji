'use strict';

{
  const bth = document.getElementById('bth');

  bth.addEventListener('click',()=>{
    //const results = ['大吉',"中吉","凶","末吉"];
    // const results = ['大吉',"大吉","凶","大吉"];
    // bth.textContent = results[Math.floor(Math.random() * results.length)];
    const n =Math.random();
    if (n < 0.05) {
      bth.textContent = "大吉";
    } else if (n < 0.2) {
      bth.textContent = "中吉";
    } else {
      bth.textContent = "凶";
    }
  });
}
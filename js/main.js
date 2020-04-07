'use strict';

{
  const bth = document.getElementById('bth');

  bth.addEventListener('click',()=>{
    const n = Math.floor(Math.random() * 3);
    // bth.textContent = n;


    switch (n) {
      case 0:
        bth.textContent = "大吉";
        break;
      case 1:
        bth.textContent = "中吉";
        break;
      case 2:
        bth.textContent = "凶";
        break;
    }
  });
}
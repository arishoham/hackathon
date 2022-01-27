let container = document.createElement('div')
container.setAttribute('class','chicken-container')
let body = document.querySelector('body')
body.prepend(container)

chickenTimeout = []
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.msg === 'add') {
      chickenTimeout.push(setInterval(addChicken,100))
    }

    if(request.msg === 'remove') {
      chickenTimeout.forEach((cur) => {
        clearInterval(cur)
      })
      chickenTimeout = [];
      const chickens = document.querySelectorAll('.chicken')
      for(let i = 0; i < chickens.length; i++) {
        chickens[i].remove();
      }
    }
  }
);

setTimeout(move,250)

function move() {
  const chickens = document.querySelectorAll('.chicken')
  for(let i = 0; i < chickens.length; i++) {
    if(i % 2 === 0) {
      if((Number(chickens[i].style.left.replace('vw',''))) < 0) {chickens[i].style.left = '100vw'}
      else {chickens[i].style.left = (Number(chickens[i].style.left.replace('vw','')) - 1) + 'vw'}
    }
    if(i % 2 === 1) {
      if((Number(chickens[i].style.top.replace('vh',''))) < 0) {chickens[i].style.top = '100vh'}
      else{chickens[i].style.top = (Number(chickens[i].style.top.replace('vh','')) - 1) + 'vh'}
    }
  }
  setTimeout(move,250)
}

function addChicken() {
  let container = document.querySelector('.chicken-container')
  let el = document.createElement('img')
  let arr = ['https://img.itch.zone/aW1hZ2UvOTkzMzM4LzU2NTI4ODUuZ2lm/original/sKI1J7.gif', 'https://img.itch.zone/aW1hZ2UvOTkzMzM4LzU2ODU1MzkuZ2lm/794x1000/tgYfVd.gif', 'https://img.itch.zone/aW1hZ2UvOTkzMzM4LzU2NTI4ODIuZ2lm/794x1000/Tmysrj.gif','https://img.itch.zone/aW1hZ2UvOTkzMzM4LzU2ODU1MzcuZ2lm/794x1000/3PZgwG.gif']
  el.setAttribute('src',arr[Math.floor(Math.random()*4)])
  el.setAttribute('class','chicken')
  el.style.width = '30px'
  el.style.zIndex = '1000'
  el.style.position = 'fixed'
  el.style.top = Math.random()*100 + 'vh'
  el.style.left = Math.random()*100 + 'vw'
  
  container.append(el)
}

// alert('Hello, world!');

//console.log('test')

//Chickens

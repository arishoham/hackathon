
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.greeting = 'add chicken') {
      body = document.querySelector('body')
      el = document.createElement('img')
      arr = ['https://img.itch.zone/aW1hZ2UvOTkzMzM4LzU2NTI4ODUuZ2lm/original/sKI1J7.gif', 'https://img.itch.zone/aW1hZ2UvOTkzMzM4LzU2ODU1MzkuZ2lm/794x1000/tgYfVd.gif', 'https://img.itch.zone/aW1hZ2UvOTkzMzM4LzU2NTI4ODIuZ2lm/794x1000/Tmysrj.gif','https://img.itch.zone/aW1hZ2UvOTkzMzM4LzU2ODU1MzcuZ2lm/794x1000/3PZgwG.gif']
      el.setAttribute('src',arr[Math.floor(Math.random()*4)])
      el.setAttribute('id','ari_test')
      el.style.width='30px'
      el.style.zIndex='1000'
      el.style.position='absolute'
      el.style.top = Math.random()*100 + 'vh'
      el.style.left = Math.random()*100 + 'vw'
      console.log(Math.random()*100 + 'vm')
      body.prepend(el)
    }
  }
);

// alert('Hello, world!');

//console.log('test')

//Chickens

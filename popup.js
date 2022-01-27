

document.getElementById("btn1").addEventListener("click", (e)=>{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {msg: 'add'} , function(response) {
      console.log(response.farewell);
    });
  });
});

document.getElementById("btn2").addEventListener("click", (e)=>{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {msg: 'remove'}, function(response) {
      console.log(response.farewell);
    });
  });
});

let chickenFlag = false;
document.getElementById("btn1").addEventListener("click",()=>{
  if(!chickenFlag) {
    audioObj = new Audio('music.mp3');
    audioObj.play();
    chickenFlag = true;
  }
})

document.getElementById("btn2").addEventListener("click",()=>{
  audioObj.pause();
  chickenFlag = false;
})

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//     console.log(response.farewell);
//   });
// });




// console.log('test')
// body = document.querySelector('body')
// el = document.createElement('img')
// el.setAttribute('src','https://img.itch.zone/aW1hZ2UvOTkzMzM4LzU2NTI4ODUuZ2lm/original/sKI1J7.gif')
// el.setAttribute('id','ari_test')
// el.style.width='30px'
// el.style.zIndex='1000'
// el.style.position='absolute'

// body.prepend(el)
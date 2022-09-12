let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button')

myHeading.textContent = 'Hello world!';

// document.querySelector('html').onclick = function() {
//     alert('别戳我，我怕疼。');
// }

myButton.onclick = function() {
    setUserName();
}
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }
  

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;

    }
  }
  

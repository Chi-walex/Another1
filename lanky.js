let myClass = document.querySelector('.myclass');
let myLevel = document.createElement('h2');
myClass.appendChild(myLevel);
myLevel.textContent = 'my gee of life';
myLevel.style.color = 'red';
myClass.display = 'inline';
console.log(myClass);
let box = document.querySelector('.box');
let btn = document.querySelector('button');

let width = box.clientWidth;
let height = box.clientHeight;

console.log(box.getBoundingClientRect().left);
console.log(document.documentElement.clientWidth);

btn.addEventListener('click', function() {
    box.style.height = box.scrollHeight + 'px';
})

scrollBy(0, 200);  //перемещает на 200px вниз

scrollTo(0, 200) // перемещает к координатам 200px сверху
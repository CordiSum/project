let wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a'),
    // btn = document.getElementsByTagName('button'),
    btn = document.querySelectorAll('button');   /* назначаем один и тот же обработчик собыйти на множество элементов, для работы через forEach */ 

// btn[0].onclick = function() {
//     alert('Вы нажали первую кнопку!');
// };

// btn[0].onclick = function() {
//     alert('Вы опять нажали первую кнопку!');
// };

btn[0].addEventListener('click', function(event) {
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

wrap.addEventListener('click', function() {
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);    
});

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('Вышли!');
    });
});
// btn[0].addEventListener('mouseenter', function() {
//     alert('Вы навели на первую кнопку');
// });

const person = {
    name: 'Lydia',
    age: 21
};

for (const item in person[name]) {
    console.log(item)
}

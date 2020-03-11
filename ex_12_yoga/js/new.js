// let age = document.getElementById('age');

// function showUser(surname, name) {
//     alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }

// showUser.apply(age, ["Дмитрий","Беркут"]);

class Options {
    constructor ( height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    newDiv() {
        var  div = document.createElement('div');
        div = document.body.appendChild(div);
        return div;
    }
}

var blockDiv = new Options( 50, 300);
var cssText = new Options( '', '', 'red', 24, 'center' )


console.log(blockDiv.newDiv('asddas'));




// class Rectangle {
//     constructor(height, width) { // можно использовать параметры по умолчанию напр. width = 20
//         this.height = height;
//         this.width = width;
//     }
//     calcArea() {
//         return this.height * this.width;
//     }
// }

// const square = new Rectangle(10, 10);

// console.log(square.calcArea());
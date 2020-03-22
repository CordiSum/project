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

    createDiv(text) {
        var  div = document.createElement('div');
        div.style.cssText = this.cssText();
        div.innerText = text;
        document.body.appendChild(div);
        
        return div;
    }

    cssText() {
        return `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`
    }
}


var newDiv = new Options( 50, 300, 'red', 24, 'center' )


newDiv.createDiv('BLOCK');
///Let
let a = 'Variable a';
let b = 'Variable b';

{
    a = 'New Variable A'
    let b = 'Local Variable B';
    console.log('Scope A:', a);
    console.log('Scope B:', b);
    
}
console.log('A:', a);
console.log('B:', b);

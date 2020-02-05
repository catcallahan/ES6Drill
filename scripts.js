let favMovie = (name = 'world', movie = 'The Room')=> console.log(`My name is ${name} and my favorite movie is ${movie}`);

favMovie();


let getFirstName = (fullName) => { 
    let firstName = fullName.split(' ');
    console.log(firstName[0])
};


let getFirstNameConcise = name => console.log(name[0])

getFirstName('Cat Callahan');
getFirstNameConcise('Cat Callahan'.split(' '));

let obj = (x,y) => ({
    exponant: x^y,
    product: x*y
});

let maths = obj(2,3);
console.log(`${maths.product}, ${maths.exponant}`);

let person = (name, location, favFood) => console.log(name, location, favFood)

let arr = ['Cat', 'Japan', 'Passion Fruit'];

person(...arr);

let myName = 'Cat'

let thisFunc = pmeter => str = [...pmeter];

for(i =0; i<3; i++){
    console.log(thisFunc(myName[i]))
}



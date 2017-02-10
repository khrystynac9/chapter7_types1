var x;
if (x == undefined) {
    console.log("x isn’t defined! just deal with it");
}
console.log(x);



function bla() {
var customer = {
    name: "jenny"
};
console.log(customer.name);
console.log(customer.phone);
}
bla();


var customer = {
    name: "jenny"
};
console.log(customer.adress);

var tet = null;
console.log(typeof tet);

console.log(typeof undefined);

var bjf = 0/0; 
console.log(bjf);

console.log(1/0);

if (99 == "99") {
    console.log("it's true");
}


function Duck(sound) {
    this.sound = sound;
    this.quack = function() {
        console.log(this.sound);
    };
}
var toy = new Duck("quack quack");
toy.quack();
console.log(typeof toy);
console.log(toy instanceof Duck);
//object method1
const person1 = {
    firstName: "krishna",
    lastName: "moorthy",
    age: 50,
    eyeColor: "blue"
};
console.log(person1)

//object method2
const person2 = {} //variable ={}
person2.fstName = "muni";
person2.lstName = "Sethu";
person2.age1 = 23;
person2.hair = "black";
console.log(person2)

const person = new Object();//new object()
person.firstName1 = "John";
person.lastName2 = "Doe";
person.age3 = 50;
person.eyeColor4 = "blue";
console.log(person);

//method5
const person3 = {
    fname: " John",
    lname: " Doe",
    age3: 22
};
let txt = '';
for (let x in person3) {
    txt += person3[x];
}
console.log(txt)
let x = "";
const employee = {
    company: "kkk",
    team: 'instrumentation',
    client: "shell",
    memberS: [{ name: "ChittiBabu", salaryAge: ["50000", 37] },
    { name: "varathan", salaryAge: ["60000", 37] },
    { name: "bala", salaryAge: ["15,000", 37] }
    ]
};
for (let i in employee.memberS) {
    x += "<h2>" + employee.memberS[i].name + "</h2>";

}
console.log(x)


//new constructor
const Person = function (first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create two Person objects
console.log(new Person("sathya", "moorthy", 50, "black"));
console.log(new Person("Anu", "Radha", 48, "brown"));

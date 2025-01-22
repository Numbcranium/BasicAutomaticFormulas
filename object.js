


let student = {
    Firstname: "Michael",
    Lastname: "Enoch",
    Age: 30,
    Gender: "Male",
    isStudent: true,
    address: {
        city: "Port-harcourt",
        zip: 500102
    },
    greet: function () {
        return "Hello " + this.Firstname
    }
}
// let fName = student.Firstname
// console.log(fName);
// student.Firstname = "Victory"
student.Age = 75
// console.log(student.address.zip);
console.log(student);



let person = new Object()
person.name = "Michael"
person.age = "40"
person.gender = "Male"
console.log(person);


//  const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
// };

// let info = Object.keys(person);
// info.forEach((info) => { 
//     console.log(`${person[info]} is my ${info}`);
// });

// for (const key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(key);j
        
//     }
// }
// for (const key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(key);
        
//     }
// }

// delete person.age;
// let keys = Object.keys(person);
// console.log(person);
// console.log(keys);
// let values = Object.values(person);
// console.log(values);
// let entries = Object.entries(person);
// console.log(entries);


// let stud = {
//     name: 'Eleanor',
//     age: 25,
//     gender: 'Female'
// };

// let info = Object.keys(stud);
// let number = info.length;
// console.log(number);






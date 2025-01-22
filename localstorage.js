//local storage is a javascript tool that helps you save data in your browser and that data remains in the browser even if that browser is closed//
//basic functions in local storage are: setItem(save),getItem(retreive),removeItem(delete),clear(deleteAll),length(total number of items in local storage)//
//it only saves strings and it saves the string in key-value pairs//
//to convert a string to a number,we use ParseInt()//

// localStorage.setItem("name", "Divine");
// localStorage.setItem("age", 25);
// let studentName = localStorage.getItem("name")
// console.log(studentName);

// localStorage.removeItem("age")

localStorage.clear();

// is a way to structure data in a way that humans and computers understand//
// in a jason, even the keys are converted to strings//
//two methods in json are: Stringify and Parse(to change it back to what it was originally)//


let studentDetails = {
    studentName: "Samuel",
    studentId: '13002',
    age: 10,
    course: "ADSE"
}

let newObj = JSON.stringify(studentDetails);

localStorage.setItem("student", newObj);


let details = localStorage.getItem("student");
let originalDetails = JSON.parse(details)
// console.log(details);
// console.log(originalDetails);

let student = [
    {
        studentName: "Samuel",
        studentId: '13002',
        age: 16,
        course: "ADSE"  
    },
    {
        studentName: "Eleanor",
        studentId: '13003',
        age: 17,
        course: "ADSE"
    }
];

let newStud = JSON.stringify(student);
localStorage.setItem("allStudents", newStud);

let retrStud = localStorage.getItem("allStudents");
let convStud = JSON.parse(retrStud);
console.log(convStud);
;



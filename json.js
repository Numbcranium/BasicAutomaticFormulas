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

localStorage.setItem("student", newObj)
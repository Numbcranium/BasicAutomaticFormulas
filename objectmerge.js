let lecture = {
    course: "Javascript",
    time: "9am",
    duration: "1h 30mins"
}

let hall = {
    room: "Room101",
    floor: 1
}

let joinedObj = {...lecture, ...hall}
console.log(joinedObj);

let Classroom = require("./classroom");

let RogersClass = new Classroom("Roger", "2B");
console.log("Professor " + RogersClass.professor)
console.log("Room Number: " + RogersClass.roomNumber)
console.log(RogersClass.numStudents() + " students");
console.log(RogersClass.students+ "\n")

RogersClass.addStudent("Lamont", "Math", 3.5);
console.log(RogersClass.numStudents() + " students");
console.log(RogersClass.students+ "\n")

RogersClass.addStudent("Aimee", "HR", 3.9);
console.log(RogersClass.numStudents() + " students");
console.log(JSON.stringify(RogersClass.students,null,2) + "\n")
let Student = require("./student");


let Classroom = function (professor, roomNumber) {
    this.students = [];
    this.professor = professor;
    this.roomNumber = roomNumber;
    this.numStudents = function () { return this.students.length; };
    this.addStudent = function (name, favSubject, gpa) {
    this.students.push(new Student(name, favSubject, gpa));
    };
};

module.exports = Classroom;
let Student = require("./student");


let Classroom = function (professor, roomNumber) {
    this.students = [];
    this.numStudents = function () { return this.students.length; };
    this.professor = professor;
    this.roomNumber = roomNumber;
    this.addStudent = function (name, favSubject, gpa) {
        this.students.push(new Student(name, favSubject, gpa));
    };
};

module.exports = Classroom;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./../Models/Student");
var StudentService = /** @class */ (function () {
    function StudentService() {
        // this.studentName = "Rahul"
        // this.rollNo=989
        // this.marks=95
        this.studentArray = new Array();
        this.studentArray.push(new Student_1.Student("Rahul", 989, 95));
        this.studentArray.push(new Student_1.Student("Ajay", 990, 34));
        this.studentArray.push(new Student_1.Student("Atul", 991, 99));
        this.studentArray.push(new Student_1.Student("Mike", 992, 67));
        this.studentArray.push(new Student_1.Student("Chris", 993, 78));
        this.studentArray.push(new Student_1.Student("John", 994, 89));
    }
    StudentService.prototype.GetStudents = function () {
        return this.studentArray;
    };
    StudentService.prototype.SaveStudents = function (s) {
        return this.studentArray.push(s);
    };
    return StudentService;
}());
exports.StudentService = StudentService;
var AnotherStudentLogic = /** @class */ (function () {
    function AnotherStudentLogic() {
        // this.studentName = "Rahul"
        // this.rollNo=989
        // this.marks=95
        this.student = new Array();
        this.student.push(new Student_1.Student("Rahul", 989, 195));
        this.student.push(new Student_1.Student("Ajay", 990, 324));
        this.student.push(new Student_1.Student("Atul", 991, 949));
        this.student.push(new Student_1.Student("Mike", 992, 657));
        this.student.push(new Student_1.Student("Chris", 993, 768));
        this.student.push(new Student_1.Student("John", 994, 879));
    }
    AnotherStudentLogic.prototype.GetStudents = function () {
        return this.student;
    };
    return AnotherStudentLogic;
}());
exports.AnotherStudentLogic = AnotherStudentLogic;
//# sourceMappingURL=StudentService.js.map
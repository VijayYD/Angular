var student = /** @class */ (function () {
    function student() {
        console.log("constructor");
        this.rollNo = 1172307;
        this.fname = "vijay";
        this.lname = "vittal";
    }
    student.prototype.saveStudent = function () {
        console.log("Saved  " + (this.rollNo) + "- " + this.fname + " - " + this.lname);
    };
    return student;
}());
var s = new student();
s.saveStudent();

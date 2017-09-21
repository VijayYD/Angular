"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var StudentService_1 = require("./Logic/StudentService");
var core_1 = require("@angular/core");
var Student_1 = require("./Models/Student");
var MyComponent = /** @class */ (function () {
    // studentName:string;
    // rollNo:number;
    // marks:number;
    function MyComponent(sLogic) {
        this.sLogic = sLogic;
        this.name = "Rahul";
        // this.studentName = "Rahul"
        // this.rollNo=989
        // this.marks=95
        this.isAddNewStudent = false;
        this.student = sLogic.GetStudents();
    }
    MyComponent.prototype.SaveStudent = function () {
        this.isAddNewStudent = false;
        this.sLogic.SaveStudents(new Student_1.Student("Raj", 999, 20));
    };
    MyComponent.prototype.Increase = function () {
        //this.marks = this.marks + 5;
    };
    MyComponent.prototype.ShowStudentView = function () {
        this.isAddNewStudent = true;
    };
    MyComponent.prototype.HideStudentView = function () {
        this.isAddNewStudent = false;
    };
    MyComponent = __decorate([
        core_1.Component({
            selector: 'a-tag',
            templateUrl: "./app.component.html",
            providers: [{ provide: StudentService_1.StudentService, useClass: StudentService_1.StudentService }]
        }),
        __metadata("design:paramtypes", [StudentService_1.StudentService])
    ], MyComponent);
    return MyComponent;
}());
exports.MyComponent = MyComponent;
//# sourceMappingURL=myApp.comp.js.map
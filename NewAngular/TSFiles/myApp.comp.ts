import { StudentService, AnotherStudentLogic } from './Logic/StudentService';
import {Component} from "@angular/core"
import {Student} from "./Models/Student"
@Component(
    {
        selector:'a-tag',
        templateUrl:"./app.component.html",
        providers:[{provide:StudentService, useClass:StudentService}]
    }
)
export class MyComponent
{
    student:Array<Student>;
    name = "Rahul"
    isAddNewStudent:boolean
    // studentName:string;
    // rollNo:number;
    // marks:number;
    constructor(private sLogic:StudentService)
    {
        // this.studentName = "Rahul"
        // this.rollNo=989
        // this.marks=95
        this.isAddNewStudent = false;
        this.student = sLogic.GetStudents()
        
    }
    SaveStudent():void
    {
        this.isAddNewStudent = false;
        this.sLogic.SaveStudents(new Student("Raj", 999, 20));
    }
    Increase(): void{
        //this.marks = this.marks + 5;
    }

    ShowStudentView(): void{
        this.isAddNewStudent = true;
    }
    
    HideStudentView(): void{
        this.isAddNewStudent = false;

    }
}
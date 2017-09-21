import { Student } from './../Models/Student';

export class StudentService{
    studentArray:Array<Student>;
    constructor()
    {
        // this.studentName = "Rahul"
        // this.rollNo=989
        // this.marks=95
        this.studentArray = new Array<Student>();
        this.studentArray.push(new Student("Rahul", 989, 95));
        this.studentArray.push(new Student("Ajay", 990, 34));
        this.studentArray.push(new Student("Atul", 991, 99));
        this.studentArray.push(new Student("Mike", 992, 67));
        this.studentArray.push(new Student("Chris", 993, 78));
        this.studentArray.push(new Student("John", 994, 89));
    }

    GetStudents()
    {
        return this.studentArray;
    }
    SaveStudents(s:Student)
    {
        return this.studentArray.push(s);
    }
}

export class AnotherStudentLogic{
    student:Array<Student>;
    constructor()
    {
        // this.studentName = "Rahul"
        // this.rollNo=989
        // this.marks=95
        this.student = new Array<Student>();
        this.student.push(new Student("Rahul", 989, 195));
        this.student.push(new Student("Ajay", 990, 324));
        this.student.push(new Student("Atul", 991, 949));
        this.student.push(new Student("Mike", 992, 657));
        this.student.push(new Student("Chris", 993, 768));
        this.student.push(new Student("John", 994, 879));
    }

    GetStudents()
    {
        return this.student;
    }
}
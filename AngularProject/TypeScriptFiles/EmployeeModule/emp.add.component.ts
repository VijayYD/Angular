import { Employee } from './../Models/employee';
import {Component,Output,EventEmitter} from "@angular/core"
import {EmployeeService} from "../Logics/EmployeeService"
@Component({
    selector:'employee-add',
    templateUrl:'./emp.add.component.html'
})
export class EmployeeAddComponent{
    @Output() OnSave:EventEmitter<void>=new EventEmitter<void>();
    @Output() OnCancel:EventEmitter<void>=new EventEmitter<void>();
    n:string 
    s:number
    emp:Employee = new Employee("",0)
    constructor(private eLogic:EmployeeService){
    }
    SaveEmployee():void{
        this.eLogic.SaveEmployee
        (this.emp);
        this.OnSave.emit();
    }
    HideAddNew():void{
        this.OnCancel.emit();
    }
}
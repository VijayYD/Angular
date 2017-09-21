class student
{
    rollNo:number
    fname:string
    lname:string
    marks:number
    constructor()
    {
        console.log("constructor");
        this.rollNo=1172307
        this.fname = "vijay"
        this.lname = "vittal"
    }

    saveStudent()
    {
console.log("Saved  " +(this.rollNo)+"- "+this.fname+" - "+this.lname)
    }


}

let s = new student();
s.saveStudent();
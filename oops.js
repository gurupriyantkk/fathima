class Person{
    constructor(name,age){
        this.name=name;
       this.age=age;
    }
    printPerson(){
        console.log(this.name,this.age);
    }
    }

var p= new Person("hari",25)
p.printPerson()
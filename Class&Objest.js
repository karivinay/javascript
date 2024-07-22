let data = "secret information"

class User{
    constructor(name,email) {
        this.name = name;
        this.email =email;
    }
    viewData() {
        console.log("data =",data)
    }
}
class Admin extends User{
    editData(){
        data = "some new value";
    }
}

let student1 = new User("vinay","abc@gmail.com");
let student2 = new User("kumar","def@gmail.com");

let admin1 = new Admin("admin","admin@gmail.com");

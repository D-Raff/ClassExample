class Person{
    // if we have a function within a class we call it a method
    // we use a constructor function to provide default values for our properties
    static count = 0
    //we use static because we dont want to access it as an object
    constructor(){
        this.firstName = 'Please provide your first name'
        this.lastName = 'Please provide your last name'
        this.age = 0
        // if we use this for count, it targets this particular object so it would make it 1 for every object we add. therefore we use the class name so it adds 1 for every instance of this class
        Person.count += 1
    }
    // setters allow us to update values
    set FirstName(value){
        this.firstName = value
    }
    // if you only have a getter then the files become read only. we get values
    //Setters and getters must be uppercase because we need them to be different to the ones we defined in the constructor
    get FirstName(){
        return this.firstName
    }
    set LastName(value){
        this.lastName = value
    }
    get LastName(){
        return this.lastName
    }
    set Age(value){
        this.age = value
    }
    get Age(){
        return this.age
    }
    // display method (function to display the information)
    display(){
        console.log(`
        =======Person ID: ${this.count}=======
        First Name: ${this.FirstName}
        Last Name: ${this.LastName}
        Age: ${this.Age}
        ======================================
        `);
    }
}

export{
    Person
}
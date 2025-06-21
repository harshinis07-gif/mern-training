let person = {
  name: "Harshini",
  age: 21,
  isStudent: true,
  city: "Chennai",
 greet: function() {
    console.log("Hello, my name is " + this.name );
  }
};
person.greet();
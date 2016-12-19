function Animal (name) {
  this.name = name;
};

Animal.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

function Dog (name, coatColor) {
  Animal.call(this, name);

  this.coatColor = coatColor;
}

// The surrogate will be used to construct `Dog.prototype`.
function Surrogate () {}
// A `Surrogate` instance should delegate to `Animal.prototype`.
Surrogate.prototype = Animal.prototype;

// Set `Dog.prototype` to a `Surrogate` instance.
// `Surrogate.__proto__` is `Animal.prototype`, but `new
// Surrogate` does not invoke the `Animal` constructor function.
Dog.prototype = new Surrogate();

Dog.prototype.bark = function () {
  console.log("Bark!");
};

// We're not even going to run `Animal`'s constructor, so why bother
// passing the name?
const dog1 = new Dog("James");
const dog2 = new Animal("Jack");




// `this.name` is `undefined`
dog1.sayHello();
dog2.sayHello();

class MyClass {
    constructor() {
      this._privateProperty = 10; // Private property
      this.publicProperty = 20; // Public property
    }
  
    _privateMethod() { // Private method
      console.log('Private method called');
    }
  
    publicMethod() { // Public method
      console.log('Public method called');
    }
  }
  
  const obj = new MyClass();
  console.log(obj._privateProperty); // Accessing private property (convention)
  console.log(obj.publicProperty); // Accessing public property
  obj._privateMethod(); // Calling private method (convention)
  obj.publicMethod(); // Calling public method
// ---------------//
const privateData = new WeakMap();

class MyClass {
  constructor() {
    privateData.set(this, { privateProperty: 10 }); // Private property
    this.publicProperty = 20; // Public property
  }

  privateMethod() { // Private method
    const data = privateData.get(this);
    console.log('Private method called');
    console.log('Private property value:', data.privateProperty);
  }

  publicMethod() { // Public method
    console.log('Public method called');
  }
}

const obj = new MyClass();
console.log(obj.publicProperty); // Accessing public property
obj.publicMethod(); // Calling public method
obj.privateMethod(); // Calling private method (via public method)

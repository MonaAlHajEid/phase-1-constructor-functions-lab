// Define the Scooter class
class Scooter {
    constructor(year, color, model) {
      this.year = year;
      this.color = color;
      this.model = model;
    }
  }
  
  // Define the Driver class
  class Driver {
    constructor(name, age, experience) {
      this.name = name;
      this.age = age;
      this.experience = experience;
    }
  }
  
  // Define the PickupLocation class
  class PickupLocation {
    constructor(address, city) {
      this.address = address;
      this.city = city;
    }
  }
  

// Scooter constructor function
function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
  }
  
  // Driver constructor function
  function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
  
  // PickupLocation constructor function
  function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
  }
  
  // Example usage:
  const myScooter = new Scooter(2022, 'Red', 'XYZ');
  const myDriver = new Driver('John Doe', 30, '5 years');
  const myPickupLocation = new PickupLocation('123 Main St', 'Cityville');
  
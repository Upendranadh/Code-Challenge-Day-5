class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  retriveName() {
    let name = () => {
      console.log(this.name);
    };
    name();
    console.log(this.name);
  }
}
let upendra = new Person("Upendranadh", "age");
upendra.retriveName();

class Person {
  constructor(name, race, height, weight, gender, birthdate) {
    this.name = name;
    this.race = race;
    this.height = height;
    this.weight = weight;
    this.gender = gender;
    this.birthdate = birthdate;
  }

  personAge() {
    let now = new Date();
    let birthdate = new Date(this.birthdate);
    let elapsed = now - birthdate; // elapsed time in milliseconds
    let age = Math.floor(elapsed / (1000 * 3600 * 24 * 365)); //milleseconds * 1000 to get seconds, by seconds in an hour, by hours in a day, by days in a year
    return age;
  }
}

export default Person;

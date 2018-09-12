
class Student {
  constructor (firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName(){
    return `Your full name is ${this.firstName} ${this.lastName}.`;
  }
  markLate(){
    this.tardies++;
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`
  }
  addScore(score){
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage(){
    let total = this.scores.reduce(function(a,b){return a+b});
    return total / this.scores.length
  }
  static EnrollStudents(){
    return "ENROLLING STUDENTS!"
  }
}

// 1. the method to create new objects must be called constructor
// 2. the class keyword creates a constant, so you cannot redefine it.

let firstStudent = new Student('Thomas', 'Hanna');
let secondStudent = new Student('Colt', 'Steele');


// second example

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

Point.distance(p1,p2)
//task 3 - closure and loops
function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function() {
      return seat;
    };
  }

  let students = [];

  for (let i = 0; i < numbersOfStudents; i++) {

    let seatNumber = i + 1;
    let student = studentSeat(seatNumber);
    students.push(student());
  }

  return students;
}
// closure
let classRoom = createClassRoom(10);

// console.log("Seat numbers of students in class:", classRoom);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());

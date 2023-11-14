//task 3 - closure and loops
function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    //return a func that returns the seat number
    return function() {
      return seat;
    }
  }

  //create and populate students array
  let students = [];

  for (let i = 0; i < numbersOfStudents; i++) {
    //call studentSeat with current iteration+1
    //and add return value to the students arr
    let seatNumber = i + 1;
    let student = studentSeat(seatNumber);
    students.push(student); //push the function (not the result of calling it)
  }

  return students;
}
// closure classroom with 10 students
let classRoom = createClassRoom(10);

// console.log("Seat numbers of students in class:", classRoom);

// console.log(classRoom[0]());
// console.log(classRoom[3]());
// console.log(classRoom[9]());

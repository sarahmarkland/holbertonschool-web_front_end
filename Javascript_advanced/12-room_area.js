//task 12

const roomDimensions = {
  width: 50,
  length: 100,
  getArea() {
    return this.width * this.length;
  }

};

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);
console.log(roomDimensions.getArea());
console.log(boundGetArea());

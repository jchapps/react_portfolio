class NumList {
  constructor(array) {
    this.array = array;
  }

  sorted() {
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < this.array.length; i += 1) {
        if (this.array[i - 1] > this.array[i]) {
          done = false;
          let tmp = this.array[i - 1];
          this.array[i - 1] = this.array[i];
          this.array[i] = tmp;
        }
      }
    }
    return this.array;
  }

  reversed() {
    let leftIndex = 0;
    let rightIndex = this.array.length - 1;

    while (leftIndex < rightIndex) {
      let temp = this.array[leftIndex];
      this.array[leftIndex] = this.array[rightIndex];
      this.array[rightIndex] = temp;

      leftIndex++;
      rightIndex--;
    }
    return this.array;
  }
}

let example = new NumList([7, 1, 2, 3]);
console.log(example.sorted());

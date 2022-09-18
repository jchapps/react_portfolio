//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 3
const permutation = function (nums) {
  let result = [];
  const permute = (i, nums) => {
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }
    for (let p = i; p < nums.length; p++) {
      [nums[i], nums[p]] = [nums[p], nums[i]];
      permute(i + 1, nums);
      [nums[i], nums[p]] = [nums[p], nums[i]];
    }
  };
  permute(0, nums);
  console.log(result);
  return result;
};

permutation([1, 2, 3]);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 2

class NumList {
  constructor(array) {
    this.array = array;
  }

  sorted() {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < this.array.length; i += 1) {
        if (this.array[i - 1] > this.array[i]) {
          done = false;
          var tmp = this.array[i - 1];
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
      // Swap the elements with temp variable
      let temp = this.array[leftIndex];
      this.array[leftIndex] = this.array[rightIndex];
      this.array[rightIndex] = temp;

      // Move indices to the middle
      leftIndex++;
      rightIndex--;
    }
    return this.array;
  }
}

let example = new NumList([1, 3, 5, 2, 4]);
// console.log(example.sort());
console.log(example.reversed());

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 3

const genHexString = (len) => {
  const hex = "0123456789ABCDEF";
  let output = "";
  for (let i = 0; i < len; ++i) {
    output += hex.charAt(Math.floor(Math.random() * hex.length));
  }
  return output;
};

const generateRandomHex = (filesize) => {
  console.log("Generate random hex numbers", filesize);

  // Use exponential to generate data
  let data = "";
  const x = (filesize >>> 0).toString(2).split("");
  for (let i = 0; i < x.length; i++) {
    data = data + data;
    if (x[i] == "1") {
      data += genHexString(8);
    }
  }

  console.log("Random Hex data successfully generated");

  const raw = new Uint8Array(data.length);
  for (let i = 0; i < data.length; i++) {
    raw[i] = data.charCodeAt(i);
  }

  return raw;
};

const generateFile = (filesize) => {
  filesize *= 1024 * 128;
  const data = generateRandomHex(filesize);

  const a = document.createElement("a");
  const blob = new Blob([data], { type: "text/plain" });
  console.log("blob size", blob.size);

  const url = URL.createObjectURL(blob);

  a.setAttribute("href", url); // Set "a" element link
  a.setAttribute("download", "RandomFile"); // Set download filename
  a.click();
  URL.revokeObjectURL(a.href);
};

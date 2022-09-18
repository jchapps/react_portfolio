const permutation = function (nums) {
  const result = [];
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

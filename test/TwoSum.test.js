const twoSum = require("../TwoSum")

test('should return an array conataining index that sums up the target', () => {
    let number = [3,7,2,4];
    let result = [1,2];
    expect(twoSum(number,9)).toEqual(result);
})

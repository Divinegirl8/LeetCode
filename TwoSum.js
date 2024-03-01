var twoSum = function(nums, target) {
    let result = [];

    for(let index = 0,count = 0; index < nums.length;index++){
        for(let index2 =0; index2 < index;index2++){
            let sum = nums[index] + nums[index2];

            if (sum == target){
               result[count++] = index2;
               result[count++] = index;
            }
        }
    }
    return result;

};

module.exports = twoSum


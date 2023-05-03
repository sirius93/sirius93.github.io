# Leetcode 1 : Two sum problem

My solution to the leetcode two sum problem using javascript.

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};
    let arr = [];
    for (let i = 0; i < nums.length; i++){
        hash[nums[i]] = i;
    }
    console.log(hash,nums)
    for (let j = 0; j < nums.length; j++){
        let possiblenum = target - nums[j];
        if(hash[possiblenum] && hash[possiblenum] != j  ){
            arr.push(hash[possiblenum])
            arr.push(j)
            return arr;
        }
    }
    return arr;
};
```

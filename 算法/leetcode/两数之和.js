/**
 * 
 * @param {*} nums 
 * @param {*} target
 * 利用hash映射，值为key，index为下标序号
 * 遍历当前数组，寻找 target - currentValue 是否在hash中存在，如果存在就找到和当前currentValue匹配的值
 * 若不存在就将当前值存入hash中
 */
function twoSum(nums, target){
    const hashMap = new Map()
    for(let i=0; i<nums.length; i++){
        let temp = target - nums[i]
        if(hashMap.has(temp)){
            return [hashMap.get(temp), i]
        }
        hashMap.set(nums[i], i);
    }
}
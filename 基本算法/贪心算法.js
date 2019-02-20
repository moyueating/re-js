// 贪心算法，是一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是最好或最优的算法
// 1.建立数学模型来描述问题。
// 2.把求解的问题分成若干个子问题。
// 3.对每一子问题求解，得到子问题的局部最优解。
// 4.把子问题的解局部最优解合成原来解问题的一个解。
// 解决背包问题


var values = [10, 40, 30, 50, 35, 40, 30]
var weights = [35, 30, 60, 50, 40, 10, 25]
var M = 155

function greedy(values, weights, capacity){
  let remainCapacity = capacity
  let totalValue = 0
  const sortArr = values.map((cur, index) => {
    const weight = weights[index]
    return {
      value: cur,
      weight: weight,
      ratio: cur / weight
    }
  })

  // 按照性价比降序排列
  sortArr.sort(function(a, b) {
    return b.ratio - a.ratio
  })
  console.log(sortArr)

  sortArr.map(function(item ,index) {
    const num = parseInt(remainCapacity / item.weight)
    remainCapacity -= num * item.weight
    totalValue += item.value
  })

  return {
    totalValue,
    remainCapacity
  }

}


greedy(values, weights, M)


// 贪心算法资料  
// https://lilywei739.github.io/js/2018/03/16/AdvancedAlgorithms-2.html
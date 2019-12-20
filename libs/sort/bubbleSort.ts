/*
  冒泡排序算法时间复杂度：O(N^2)，空间复杂度O(N)
  从第一个元素开始，与
*/

/**
 *
 * @param list
 * @param compareFunc
 */

function bubbleSort(list: any[], compareFunc?: Function) {
  for (let i = 0; i < list.length; i++) {
    for(let j = i; j < list.length; j++) {
      if (list[i] > list[j]) {
        const temp = list[i]
        list[i] = list[j]
        list[j] = temp
      }
    }
  }
  return list
}

export default bubbleSort

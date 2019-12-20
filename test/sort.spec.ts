import { describe } from 'mocha'
import { bubbleSort } from '../libs/sort'

describe('sort algorithms', () => {
  it('bubble sort', (done) => {
    const array = [1, 34, 3, 22, 10, 7]

    const result = bubbleSort(array)

    console.log(result)

    done()
  })
})

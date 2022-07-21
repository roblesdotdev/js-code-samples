import {
  newEmptyArray,
  newSizedArray,
  newSizedFilledArray,
  addToEnd,
  removeFromEnd,
  addToFront,
  removeFromFront,
  addToSpecifiedPos,
  removeFromSpecifiedPos,
} from './arrays'

describe('Create and initialize arrays', () => {
  it('Should create an empty array', () => {
    expect(newEmptyArray<any>()).toEqual([])
  })

  it('Should create an array with a specified size', () => {
    expect(newSizedArray<any>(10).length).toBe(10)
  })

  it('should create an array with a specified size and value', () => {
    const res = newSizedFilledArray<number>(5, 0)
    expect(res.length).toBe(5)
    expect(res).toEqual([0, 0, 0, 0, 0])
  })
})

describe('Add and remove elements', () => {
  it('Should add an elemnt to the end of array', () => {
    let res = addToEnd([1, 2], 3)
    expect(res.length).toBe(3)
    expect(res).toEqual([1, 2, 3])
  })
  
  it('Should remove an element from the end of array', () => {
    let res = removeFromEnd([1, 2, 3])
    expect(res.length).toBe(2)
    expect(res).toEqual([1, 2])
  })

  it('Should add an element to the front of array', () => {
    let res = addToFront([1, 2], 0)
    expect(res.length).toBe(3)
    expect(res).toEqual([0, 1, 2])
  })

  it('Should remove an element from the front of array', () => {
    let res = removeFromFront([0, 1, 2])
    expect(res.length).toBe(2)
    expect(res).toEqual([1, 2])
  })

  it('Should add an element to the specified position', () => {
    let res = addToSpecifiedPos([1, 2, 3], 1, 100)
    expect(res.length).toBe(4)
    expect(res).toEqual([1, 100, 2, 3])
  })

  it('Should remove an element from the specified position', () => {
    let res = removeFromSpecifiedPos([1, 100, 2, 3], 1)
    expect(res.length).toBe(3)
    expect(res).toEqual([1, 2, 3])
  })
})


export const newEmptyArray = <T>(): T[] => {
  return []
}

export const newSizedArray = <T>(size: number): T[] => {
  return new Array(size)
}

export const newSizedFilledArray = <T>(size: number, value: T): T[] => {
  return Array.from({length: size}, () => value)
}

export const addToEnd = <T>(a: T[], el: T): T[] => {
  a.push(el)
  return a
}

export const removeFromEnd = (a: any[]): any[] => {
  a.pop()
  return a
}

export const addToFront = <T>(a: T[], e: T): T[] => {
  a.unshift(e)
  return a
}

export const removeFromFront = (a: any[]): any[] => {
  a.shift()
  return a
}

export const addToSpecifiedPos = <T>(
  arr: T[], pos: number, el: T
): T[] => {
  arr.splice(pos, 0, el)
  return arr
}

export const removeFromSpecifiedPos = (
  arr: any[], pos: number
): any[] => {
  arr.splice(pos, 1)
  return arr
}

import { describe, it, expect } from 'vitest'

describe('Example Test Suite', () => {
  it('should add numbers correctly', () => {
    const sum = 2 + 3
    expect(sum).toBe(5)
  })

  it('should subtract numbers correctly', () => {
    const difference = 5 - 3
    expect(difference).toBe(2)
  })
})

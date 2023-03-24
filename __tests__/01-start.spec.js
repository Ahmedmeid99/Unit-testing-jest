const { say, sum, sumAll } = require('../modules/main.js')

test.skip("Say Hello Massage", () => {
    expect(say()).toBe("hello world")
})

test("Sum No numbers", () => {
    expect(sum()).toBe(0)
})

test("Sum One numbers", () => {
    expect(sum(10)).toBe(10)
})

test("Sum Two numbers", () => {
    expect(sum(10, 20)).toBe(30)
})

test('sum all numbers when no entered number', () => {
    expect(sumAll()).toBe(0)
})

test('sum all numbers', () => {
    expect(sumAll(10, 20, 1)).toBe(31)
})
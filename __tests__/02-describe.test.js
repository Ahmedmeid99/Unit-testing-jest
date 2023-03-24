const { say, sum, sumAll } = require('../modules/main.js')
///////////////////////////
describe('', () => {

    test("Say Hello Massage", () => {
        expect(say()).toBe("hello world")
    })
})


///////////////////////////
describe('Sum => sum several of Numbers', () => {

    test("if no entered number", () => {
        expect(sum()).toBe(0)
    })

    test("if one entered number", () => {
        expect(sum(10)).toBe(10)
    })

    test("Sum Two numbers", () => {
        expect(sum(10, 20)).toBe(30)
    })
})
///////////////////////////
describe('sumAll => sum all entered numbers', () => {

    test('if no entered number', () => {
        expect(sumAll()).toBe(0)
    })
    test('if one entered number', () => {
        expect(sumAll(10)).toBe(10)
    })

    test('many of numbers', () => {
        expect(sumAll(10, 20, 1)).toBe(31)
    })
})
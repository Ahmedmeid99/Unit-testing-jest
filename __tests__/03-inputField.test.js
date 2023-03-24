const checkName = require('../modules/02-inputField')

describe.only('check input value', () => {
    it('if value is empty', () => {
        expect(checkName()).toBe("this field is unvalid")
    })
    it('if value is more than 10 char', () => {
        expect(checkName("ahmed_eid_ali")).toBe("ahmed_eid_")
    })
    it('if value has space in the start or in the end ', () => {
        expect(checkName("ahmed ")).toBe("ahmed")
        expect(checkName(" ahmed")).toBe("ahmed")
    })
    it('if value has _ in the start', () => {
        expect(checkName("_ahmed")).toBe("ahmed")
    })
});

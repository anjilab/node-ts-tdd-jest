import mathOperations from "../../src/basic-test-learning";

describe("Math operation tests", () =>{
    test('Adding 1 and 2 should return 3', () =>{
        expect(mathOperations.sum(1,2)).toBe(3)
    })
})
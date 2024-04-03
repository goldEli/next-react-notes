import { deepClone } from "./fe";

describe('fe', () => {
    it("deep clone", () => {
       const obj = {} 
       const newObj = deepClone(obj)

       expect(newObj).toEqual(obj)
    })
    
});
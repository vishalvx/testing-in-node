
const { expect } = require("@jest/globals");
const { getNewUser, mapObjectToArray } =require("./utils.js")


//first describe the tests
describe('mapObjectArray' , ()=>{
    //first test 
    test("test map Object to Array",()=>{
        const result= mapObjectToArray({age:20,height:140},(key,value)=>{
            return value+=10;
        })
        expect(result).toEqual([30,150]);
    })
    //second test count total call back
    test("Callback get Called",()=>{
        const mockCb= jest.fn();
        const result = mapObjectToArray({age:30,height:150},mockCb);

        expect(mockCb.mock.calls.length).toBe(2);
    })
})
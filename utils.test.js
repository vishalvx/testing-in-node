
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

/**
 * Sometime we need to check/test both outcome like getting use or fail to get user
 * so we need to test worse case too..
 */ 

//second tests with async
describe('getNewUser()',()=>{
    //first test :- get correct user
    test("get User Test",async ()=>{
        const user=await getNewUser(1);
        //are we getting object of user or not
        expect(user).toBeTruthy();
        // are we getting user which i asked for ? ..
        expect(user.id).toBe(1);
    })
    //second test : - if we not getting user are we getting error or not
    test("Not Found User",async ()=>{
        //simple term it check catch block should run bcz we test error part  
        //expect.assertions(1) :- To pass the test we must need to get atleast 1 expect

        expect.assertions(1)

        try{
            //error making code
            const user= await getNewUser(10);

        }catch(e){
            expect(e).toBeTruthy();
        }
    })
})

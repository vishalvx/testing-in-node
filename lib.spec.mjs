//this is testing file 
import {add} from "./mylib.mjs"
import assert from "assert";

console.log("Testing add() \n Should return sum of 2 numbers  ")

try {
    assert.strictEqual(add(1,2),3);
    console.log("✅ SUCCESS!!")
} catch (error) {
    console.log("🚫 FAIL!!")
    console.log(error)
}
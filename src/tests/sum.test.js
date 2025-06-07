import { expect,test } from "vitest";
import {sum} from './sum.js';

test('add 1+2 to equal 3' , ()=>{
    expect(sum(1,2)).toBe(3)
})

test('add 10+12 to equal 22' , ()=>{
    expect(sum(10,12)).toBe(22)
})



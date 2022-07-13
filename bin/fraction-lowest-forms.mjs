#!/usr/bin/env node

const reduce_fraction = function (numerator, denominator) {
  // handle spectial cases like
  // * one is 1
  // * negative
  // * one is multiple of another?

  // starting from 2 and increase to divide both numerator and denominator
  let divider = 2
  while (divider <= numerator && divider <= denominator) {
    if (numerator % divider === 0 && denominator % divider === 0) {
      numerator /= divider
      denominator /= divider
    } else {
      divider++
    }
  }

  return {
    top: numerator,
    bottom: denominator,
  }
}

if (process.argv.length !== 4) {
  console.error("The program expects two arguments")
  process.exit(1)
}

let numerator = process.argv[2]
let denominator = process.argv[3]
numerator = parseInt(numerator)
denominator = parseInt(denominator)

let {top, bottom} = reduce_fraction(numerator, denominator)
console.log(`Result: ${top}, ${bottom}`)

// const test_it = function (numerator, denominator) {
//   let {top, bottom} = reduce_fraction(numerator, denominator)
//   console.log(`Result: ${top}, ${bottom}`)
// }
//
// test_it(3, 4)
// test_it(333, 444)
// test_it(1024, 768)
// test_it(1920, 1080)
// test_it(1, 1)
//
// console.assert(3 === 4, "Failed")

#!/usr/bin/env node

import { program } from "commander"

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

let numerator
let denominator

program.usage('<numerator> <denominator>')
  .description('Prints the lowest forms of a fraction.')
  .action(function (a, b) {
    numerator = a
    denominator = b
  })
  .arguments('<numerator> <denominator>')
  .parse(process.argv)

numerator = parseInt(numerator)
if (isNaN(numerator)) {
  console.log('numerator must be a number')
  process.exit(1)
}
denominator = parseInt(denominator)
if (isNaN(denominator)) {
  console.log('denominator must be a number')
  process.exit(1)
}

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

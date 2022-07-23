#!/usr/bin/env node

import { program } from "commander"

program.usage('<numbers...>')
  .argument('<numbers...>', 'numbers to convert')
  .description('Convert numbers into HEX')
  .action(function (numbers) {
    for (let ii = 0; ii < numbers.length; ii++) {
      const number = parseInt(numbers[ii])
      if (isNaN(number)) {
        console.log(`${numbers[ii]} is not a number`)
        process.exit(1)
      }
      console.log((number.toString(16)).padStart(2, 0).toUpperCase())
      // console.log(`${numbers[ii]} is ${number.toString(16)}`)
    }
  })
  .parse(process.argv)



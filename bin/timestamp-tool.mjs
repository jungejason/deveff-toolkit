#!/usr/bin/env node
import {cli3} from "../src/cli.mjs"

/**
 * timestamp tool
 */

// let options = require('../src/cli.mjs').cli3(process.argv)
let options = cli3(process.argv)
const input = options.template

let date
let isMs
if (input === undefined) {
  date = new Date()
} else {
  var numInput = parseInt(input)
  if (numInput < 9999999999) {
    isMs = false
    numInput *= 1000
  } else {
    isMs = true
  }
  date = new Date(numInput)
}

if (input === undefined) {
  let currentTsMs = date.getTime()
  console.log("**Current TS**")
  console.log(currentTsMs, Math.floor(currentTsMs / 1000))
} else {
  console.log("**TS from input**")
  console.log(input)
  console.log("Guessing it's " + (isMs ? "Milliseconds" : "Seconds"))
}
console.log("UTC: ", date)
console.log("Local:", date.toLocaleDateString(), date.toLocaleTimeString())

const localeDateTimeWithDelta = function (baseDate, deltaHours) {
  const msHour = 60 * 60 * 1000
  const resultDate = new Date(baseDate.getTime() + deltaHours * msHour)
  return resultDate.toLocaleDateString() + " " + resultDate.toLocaleTimeString()
}

console.log("Local time half day ago:")
console.log(localeDateTimeWithDelta(date, -12))
console.log("Local time half day later:")
console.log(localeDateTimeWithDelta(date, 12))

console.log("Local time three hour go:")
console.log(localeDateTimeWithDelta(date, -3))
console.log("Local time three hour later:")
console.log(localeDateTimeWithDelta(date, 3))
// 06/09/2022 1:29:05 PM to 06/09/2022 1:49:05 PM
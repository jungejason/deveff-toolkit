#!/usr/bin/env node

const parseChunks = function(lines) {
  const chunksForAllLines = []
  for (let ii = 0; ii < lines.length; ii++) {
    const line = lines[ii].trim()
    const chunks = line.split("|").map(x => x.trim())
    const chunksLen = chunks.length
    if (chunks[0] !== "") {
      throw "Line is not starting with |. Line: " + ii + ": " + line;
    }
    if (chunks[chunksLen - 1] !== "") {
      throw "Line is not ending with |. Line: " + ii + ": " + line;
    }

    // Filter out the last line if it's empty
    const lineCount = lines.length
    if (!(ii === lineCount - 1 && chunks.length === 1 && chunks[0] === '')) {
      chunksForAllLines[ii] = chunks.slice(1, -1)
    }

    // console.log(ii)
    // console.log(line)
    // console.log(chunks)
  }
  return chunksForAllLines
}

const processLines = function (lines) {
  try {
    const chunksForAllLines = parseChunks(lines)

    // console.log("Middle.");

    for (let ii = 0; ii < chunksForAllLines.length; ii++) {
      // console.log(ii)
      // console.log(chunksForAllLines[ii])
    }

    let numChunksPerLine = chunksForAllLines[0].length
    const maxLengths = []

    for (let jj = 0; jj < numChunksPerLine; jj++) {
      maxLengths[jj] = 0
    }

    for (let ii = 0; ii < chunksForAllLines.length; ii++) {
      const chunks = chunksForAllLines[ii]
      if (chunks.length !== numChunksPerLine) {
        throw "Row ii doesn't have same number of |.Line: " + ii + ": " + line;
      }

      for (let jj = 0; jj < numChunksPerLine; jj++) {
        maxLengths[jj] = Math.max(chunks[jj].length, maxLengths[jj])
      }
    }

    // console.log(maxLengths)

    for (let ii = 0; ii < chunksForAllLines.length; ii++) {
      const chunks = chunksForAllLines[ii]
      for (let jj = 0; jj < chunks.length; jj++) {
        chunks[jj] = chunks[jj] + " ".repeat(maxLengths[jj] - chunks[jj].length)
      }
      console.log(`| ${chunksForAllLines[ii].join(" | ")} |`,)
    }

  } catch (e) {
    console.error('Failed to handle the input!')
    // TODO: return origin text when we can't handle it
    console.error(e)
  }

  /*
  0
  [ '', 'Function', 'Key', '' ]
  1
  [ '', '--------------', '-----------------', '' ]
  2
  [ '', 'Lock Screen', 'Cmd + Ctrl + Q', '' ]
   */

  // Each chunk should start with '' and end with ''
  // EAch chunk should have same length

  // console.log("Done.")
}

const processContent = function (content) {
  const lines = content.split('\n')
  // console.log(lines)

  processLines(lines)
}

const getInput = function () {
  return new Promise(function (resolve, reject) {
    const stdin = process.stdin;
    let data = '';

    stdin.setEncoding('utf8');
    stdin.on('data', function (chunk) {
      data += chunk;
    });

    stdin.on('end', function () {
      resolve(data);
    });

    stdin.on('error', reject);
  });
}

getInput().then(processContent).catch(console.error);

// // Read in all lines
// const {readFileSync} = require('fs');
// const content = readFileSync('/Users/jun.ge/tmp/t2.md', 'utf8').toString()
// // console.log("Content:")
// const lines = content.split('\n')
// // console.log(lines)
//
// Prerequisite: Each line should start with |

// Count the number of | and position each line
// TODO: handle the case where | is part of content instead of table column
// TODO: special handle the second row
// TODO: ignore last empty line
/*
{ index_of_| => position }
Lines
0         1         2         3
0123456789012345678901234567890123456789
| Function | Key |
|--------------|-----------------|
| Lock Screen  | Cmd + Ctrl + Q  |

original_positions:
0 => {
  0 => "Function", len=8
  1 => "Key" len=3
  is_separator=false
},
1 => {
  0 => "---------", len=15 // len ignored
  1 => "------" len=20 // len ignored
  is_separator=true
},
3 => {
  0 => "Lock Screen", len=11
  1 => "Cmd + Ctrl + Q" len = 14
}

// Get the max of each section
chunk_max => {
  0 => 15,
  1 => 14
}

// print each line with max filled by whitespace
0         1         2         3
0123456789012345678901234567890123456789
| Function        | Key            |
|-----------------|----------------|
| Lock Screen     | CMD + Ctrl + Q |

*/

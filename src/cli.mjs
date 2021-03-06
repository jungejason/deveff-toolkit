import arg from 'arg'

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--git': Boolean,
      '--yes': Boolean,
      '--install': Boolean,
      '-g': '--git',
      '-y': '--yes',
      '-i': '--install',
    },
    {
      argv: rawArgs.slice(2),
    }
  )
  return {
    skipPrompts: args['--yes'] || false,
    git: args['--git'] || false,
    template: args._[0],
    runInstall: args['--install'] || false,
  }
}

export function cli(args) {
  let options = parseArgumentsIntoOptions(args)
  console.log(options)

  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', function(data) {
    process.stdout.write(data);
  });
}

export function cli3(args) {
  return parseArgumentsIntoOptions(args)
}


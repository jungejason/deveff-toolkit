# Developer Effectiveness Toolkit

**WARNING: This project is in its early stage. Use at your own risk.**

A cli tool for various tasks to improve developer effectiveness. It includes the following areas:
* text processing 
* timestamp processing

## Install a new command
Add and entry in package.json

```
...
"bin": {
    ...
    "create-project": "bin/create-project",
},
...
```

Then run

```shell
npm link
```

Now you can run it 

```shell
╰─ create-project
{
    skipPrompts: false,
    git: false,
    template: undefined,
    runInstall: false
}

╰─ create-project --yes time this
{ skipPrompts: true, git: false, template: 'time', runInstall: false }

╰─ echo "abc" | create-project
{
  skipPrompts: false,
  git: false,
  template: undefined,
  runInstall: false
}
abc
```

## Compile a tool into a standalone executable
```shell
╰─ nexe bin/timestamp-tool.mjs
ℹ nexe 4.0.0-rc.1
✔ Already downloaded...
✔ Compiling result
✔ Entry: 'bin/timestamp-tool.mjs' written to: timestamp-tool
✔ Finished in 0.138s

╰─ ./timestamp-tool
**Current TS**
1657650078708 1657650078
UTC:  2022-07-12T18:21:18.708Z
Local: 7/12/2022 11:21:18 AM
Local time half day ago:
7/11/2022 11:21:18 PM
Local time half day later:
7/12/2022 11:21:18 PM
Local time three hour go:
7/12/2022 8:21:18 AM
Local time three hour later:
7/12/2022 2:21:18 PM
```

## Reference
* https://www.twilio.com/blog/how-to-build-a-cli-with-node-js
* https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs
* https://blog.logrocket.com/creating-a-cli-tool-with-node-js/



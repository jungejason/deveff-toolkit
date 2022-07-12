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

## Reference
* https://www.twilio.com/blog/how-to-build-a-cli-with-node-js
* https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs
* https://blog.logrocket.com/creating-a-cli-tool-with-node-js/


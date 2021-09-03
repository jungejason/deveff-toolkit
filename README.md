
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

https://www.twilio.com/blog/how-to-build-a-cli-with-node-js

https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs

https://blog.logrocket.com/creating-a-cli-tool-with-node-js/


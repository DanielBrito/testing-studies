# Notes

_James reviews code coverage, which is a measure used to describe the degree to which the source code of a program is tested by a particular test suite. After talking about abstract syntax trees (AST), which is a data structure representation of a program, James shows how to use a transform to check for code coverage with coverify. Then James illustrates how to use nyc, which is Istanbul's command line interface for test coverage._

- Using [coverify](https://github.com/substack/coverify): _code coverage browserify transform_

- Using [nyc](https://github.com/istanbuljs/nyc): _the Istanbul command line interface_

- Running:

  - In Node: `browserify -t coverify test/*.js --node | node | coverify`
  - In the browser: `browserify -t coverify test/*.js | browser-run -b chrome | coverify`

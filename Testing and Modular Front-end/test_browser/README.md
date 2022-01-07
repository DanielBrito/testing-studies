# Notes

- Using [tape](https://github.com/substack/tape): _tap-producing test harness for node and browsers_

- Using [browserify](https://browserify.org/): _browserify lets you require('modules') in the browser by bundling up all of your dependencies._

- Result:

  - Run `pwd` inside the project directory, copy the path and paste on the browser
  - Open the `index.html` and the console (which will show the result)

- Also using [browser-run](https://github.com/juliangruber/browser-run): _the easiest way of running code in a browser environment._

  - Run `browserify *.js | browser-run -b chrome`
  - The result will be showed both on the console and command line

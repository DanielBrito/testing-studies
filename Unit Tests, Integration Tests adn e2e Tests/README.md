# Unit Tests, Integration Tests and e2e Tests

## Why Test?

- Get an error if you break code
- Save time
- Think about possible issues and bugs
- Integrate into build workflow
- Break up complex dependencies
- Improve your code

## Different kinds of tests

**Top down**: Incresing complexity & **Bottom up**: Increasing frequency

- Fully isolated (e.g. testing one function): Unit Tests
- With dependencies (e.g. testing a function that calls a function): Integration Tests
- Full flow (e.g. validating the DOM after a click): End-to-End (E2E) Tests

## Testing Setup

- Test Runner: Execute your tests and summarize results (e.g. Mocha)
- Assertion Library: Define testing logic conditions (e.g. Chai)
- Headless Browser: Most used for e2e testing that simulates browser interaction (e.g. Puppeteer)

**Jest** can be used as a test runner and assertion library.


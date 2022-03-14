# japa-ts-mock

A mock library built on top of <a href="https://github.com/NagRock/ts-mockito#readme">ts-mockito</a>

## Installation

Install package from npm registry

```bash
npm i japa-ts-mock
```

## Usage

You can use this plugin with the @japa/runner.

```ts
import { mocker } from 'japa-ts-mock'
import { configure } from '@japa/runner'

configure({
  plugins: [mocker()]
})
```

In japa-types.ts write this:

```ts
import { mocker } from 'japa-ts-mock'

declare module '@japa/runner' {
  interface TestContext {
    mocker: Mocker
  }
}
```

import MockitoMocker from 'ts-mockito';
import type { PluginFn } from '@japa/runner';

/* MOCKER TYPE */
export type Mocker = typeof MockitoMocker

export function expect(): PluginFn {
  return function (_, __, { TestContext }) {
    TestContext.getter('mocker', () => MockitoMocker, true)
  }
}

declare module '@japa/runner' {
  interface TestContext {
    expect: Mocker
  }
}
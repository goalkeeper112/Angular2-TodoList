/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import {Todo} from './todo';

describe('Todo', () => {
  it('should be create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new Todo({
      title: "Hello World",
      complete: true
    });

    expect(todo.title).toEqual('Hello World');
    expect(todo.complete).toEqual(true);
  });
})

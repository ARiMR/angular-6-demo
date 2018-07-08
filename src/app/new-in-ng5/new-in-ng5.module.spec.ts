import { NewInNg5Module } from './new-in-ng5.module';

describe('NewInNg5Module', () => {
  let newInNg5Module: NewInNg5Module;

  beforeEach(() => {
    newInNg5Module = new NewInNg5Module();
  });

  it('should create an instance', () => {
    expect(newInNg5Module).toBeTruthy();
  });
});

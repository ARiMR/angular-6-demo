import { NewInNg6Module } from './new-in-ng6.module';

describe('NewInNg6Module', () => {
  let newInNg6Module: NewInNg6Module;

  beforeEach(() => {
    newInNg6Module = new NewInNg6Module();
  });

  it('should create an instance', () => {
    expect(newInNg6Module).toBeTruthy();
  });
});

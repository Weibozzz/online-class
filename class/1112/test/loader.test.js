import compiler from './compiler.js';

test('Inserts name and outputs JavaScript', () => {
  compiler('example.html').then(stats => {
    const output = stats.toJson().modules[0].source;
    expect(output).toBe('Hey Alice!');
  })
});

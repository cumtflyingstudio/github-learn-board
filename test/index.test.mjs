import FastGlob from 'fast-glob';
import { describe, expect, it } from 'vitest';
describe('ci', () => {
  it('vitest works well', () => {
    expect(1 + 1).toBe(2);
  });

  it('the commit should be txt', async () => {
    const arr = await FastGlob(['../*.*']);

    arr.forEach(item => {
      expect(item.endsWith('.txt') || item.endsWith('README.md')).toBe(true);
    });
  });

  it('txt document should increase', async () => {
    const arr = await FastGlob(['../*.txt']);
    arr.forEach(i => {
      expect(i.endsWith('.txt'));
    });
    const nums = arr
      .map(i => {
        const num = /(\d+)\.txt/.exec(i)?.[1];
        expect(num).toBeDefined();
        return parseInt(num);
      })
      .sort((a, b) => a - b);
    nums.sort().reduce((prev, curr) => {
      expect(curr).toBe(prev + 1);
      return curr;
    });
  });
});

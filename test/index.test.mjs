import fg from 'fast-glob';
import { readFileSync } from 'fs';
import { describe, expect, it } from 'vitest';
describe('ci', () => {
  it('vitest works normally', () => {
    expect(1 + 1).toBe(2);
  });

  it('the commit should be txt', async () => {
    const arr = await fg(['../*.*']);

    arr.forEach(item => {
      expect(item.endsWith('.txt') || item.endsWith('README.md')).toBe(true);
    });
  });

  it('txt document should increase', async () => {
    const arr = await fg(['../*.txt']);
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

  it('actions should not be modified', async () => {
    const arr = await fg(['../.github/**/*.yml'], { dot: true });
    expect(arr).toMatchInlineSnapshot(`
      [
        "../.github/workflows/auto-merge.yml",
        "../.github/workflows/issue-close.yml",
        "../.github/workflows/issue-reply.yml",
      ]
    `);
    expect(
      arr.map(path => {
        return readFileSync(path, 'utf-8');
      }),
    ).toMatchInlineSnapshot(`
      [
        "name: automerge
      on:
        pull_request:
          branches:
            - main
          types:
            - opened

      jobs:
        automerge:
          runs-on: ubuntu-latest

          steps:
            - name: Checkout 🛎️
              uses: actions/checkout@v3

            - name: Setup @antfu/ni
              run: npm i -g @antfu/ni

            - name: Set node
              uses: actions/setup-node@v3
              with:
                node-version: 16.x

            - name: pnpm run intall, build, and test-doc-name
              run: |
                cd ./test
                nci
                nr test

            - name: auto-merge
              uses: 'pascalgn/automerge-action@v0.15.3'
              env:
                GITHUB_TOKEN: '\${{ secrets.GITHUB_TOKEN }}'
                MERGE_LABELS: ''
                UPDATE_METHOD: 'rebase'
      ",
        "name: Issue Close Require

      on:
        schedule:
          - cron: '0 0 */7 * *'

      jobs:
        close-issues:
          runs-on: ubuntu-latest
          steps:
            - name: close
              uses: actions-cool/issues-helper@v1.7
              with:
                actions: 'close-issues'
                inactive-day: 3
                body: |
                  自动清理不活跃issue
      ",
        "name: Issue Reply

      on:
        issues:
          types: [labeled]

      jobs:
        reply-helper:
          runs-on: ubuntu-latest
          steps:
            - name: auto-comment
              if: github.event.label.name == '打个招呼'
              uses: actions-cool/issues-helper@v1.2
              with:
                actions: 'create-comment'
                issue-number: \${{ github.event.issue.number }}
                body: |
                  你好 @\${{ github.event.issue.user.login }}, 欢迎来到翔工作室

            - name: Lock issue
              if: github.event.label.name == '打个招呼'
              uses: actions-cool/issues-helper@v3
              with:
                actions: 'lock-issue'
                token: \${{ secrets.GITHUB_TOKEN }}
                issue-number: \${{ github.event.issue.number }}
      ",
      ]
    `);
  });
});

# github-learn-board

为成员们使用 github 进行学习的签到板。
学习 issue 和 Pull Request 的使用

##  TODO:使用方法

### 1. 使用 issue

在 issues 里的总签到板里签到 （回复该 issue）（在最顶部！）

![图片显示不出来，请开加速器，科学上网1](./imgs/%E6%80%BB%E7%AD%BE%E5%88%B0%E6%9D%BF.png)

在 issues 里 New issue，选择 打个招呼 label, 提出人生第一个 issue，最好附上个人信息，方便工作室之后的学弟学妹们浏览。

在 issues 里 New issue，选择 签到 label。

要分清issues里的tag 标签

### 2. 使用 Pull Request，

a. fork 分支，之后git clone 到本地，可以使用Github Desktop（官方客户端，与VScode兼容性最好）

b. 新建自己的 branch 分支，命名为 "dev\_你的名字"

c. 新建文件 `（你的名字缩写）.txt`，写入自己的个人简介，（可以不用vscode，记事本也行！）
commit ，commit message 为 "feat: 9.txt"，数字为你的txt名字

d. 进入个人仓库，提人生第一个 pull Request

![图片显示不出来，请开加速器，科学上网2](./imgs/%E7%AC%AC%E4%B8%80%E4%B8%AApr.jpg)

⚠️ 要求：pull request 关联 issue, 使用`#`引用自己打招呼的 issue

之后 ci 后会自动 merge（经测试无法使用，就放着吧，不会自动merge）（正常情况下 项目 leader 会 review 你的更改，在决定是否 merge 到 main）

## 本仓库集成了 CI 和分支保护，不要修改除txt之外的其他文件

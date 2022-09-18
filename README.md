# github-learn-board

为成员们使用 github 进行学习的签到板。
该仓库权限时 all，通过 issue 和 Pull Request 进行贡献

##  TODO:使用方法

### 1. 使用 issue

在 issues 里的总签到板里签到 （回复该 issue）（在最顶部！）

![图片显示不出来，请开加速器，科学上网](./imgs/%E6%80%BB%E7%AD%BE%E5%88%B0%E6%9D%BF.png)

在 issues 里 New issue，选择 打个招呼 label, 提出人生第一个 issue

在 issues 里 New issue，选择 签到 label, 创建一个留言板, 之后的每次会议签到也可将 issues 当作留言板， 采用回复的方式(注意关闭通知提醒)

### 2. 使用 Pull Request，

a. fork 或者 clone Main 分支

b. 新建自己的 branch 分支，命名为 "dev\_你的名字"

c. 第一个人新建 1.txt 并写入自己的名字，第二个人新建 2.txt 并写入自己名字，以此类推, 顺序递增，commit 之后提人生中第一个 pull Request

⚠️ 要求：pull request 关联 issue, 使用`#`引用自己打招呼的 issue

d. 之后 ci 后会自动 merge（正常情况下 项目 leader 的 review 再 merge）

## 本仓库集成了 CI 和分支保护，不要修改除txt之外的其他文件，按步骤的 pull request 会 auto merge

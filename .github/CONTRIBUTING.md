# 贡献指南

感谢您对 UniKu 项目的关注！我们欢迎任何形式的贡献。

## 如何贡献

### 报告问题

如果您发现了 bug 或有功能建议，请通过 [GitHub Issues](https://github.com/uni-ku/website/issues) 提交问题。

在提交问题前，请确保：

1. 搜索现有的问题，避免重复提交。
2. 提供清晰的问题描述，包括复现步骤。
3. 如果可能，提供相关的截图或代码片段。

### 提交代码

#### 开发环境设置

1. Fork 此仓库
2. 克隆您的 fork 到本地

```bash
git clone https://github.com/您的用户名/website.git
cd website
```

3. 添加上游仓库

```bash
git remote add upstream https://github.com/uni-ku/website.git
```

4. 安装依赖

```bash
pnpm install
```

#### 创建分支

为您的贡献创建一个新的分支：

```bash
git checkout -b feature/您的功能名称
```

或

```bash
git checkout -b fix/修复的问题
```

#### 提交更改

1. 进行您的更改
2. 提交您的更改

```bash
git add .
git commit -m "描述您的更改"
```

请遵循 [常规提交](https://www.conventionalcommits.org/) 规范：

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更改
- `style`: 不影响代码含义的更改（格式、空格等）
- `refactor`: 既不修复 bug 也不添加功能的代码更改
- `perf`: 性能优化
- `test`: 添加缺失的测试
- `chore`: 构建过程或辅助工具的变动

#### 推送分支

```bash
git push origin feature/您的功能名称
```

#### 创建 Pull Request

1. 在 GitHub 上访问您的 fork
2. 点击 "New Pull Request"
3. 确保将目标仓库设置为 `uni-ku/website`
4. 填写 PR 描述，解释您的更改
5. 提交 PR

## 代码风格

请遵循项目中已有的代码风格：

- 使用 TypeScript
- 使用 ESLint 进行代码检查
- 遵循 Vue 3 和 Nuxt 3 的最佳实践

## 文档贡献

如果您想改进文档：

1. 文档位于 `content` 目录下
2. 使用 Markdown 格式
3. 确保链接有效且图片路径正确

## 行为准则

请阅读并遵守我们的[行为准则](CODE_OF_CONDUCT.md)。

## 许可

通过贡献您的代码，您同意您的贡献将在 [MIT 许可证](../LICENSE) 下发布。

有任何问题，请随时联系我们。
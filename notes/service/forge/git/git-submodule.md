---
title: Git Submodule
---

# Git Submodule

- 参考
  - https://git-scm.com/book/en/v2/Git-Tools-Submodules
  - https://news.ycombinator.com/item?id=31792303

```bash
# 推荐
git config --global submodule.recurse true

# 添加
git submodule add https://example.com/submodule-repo.git path/to/submodule
# 已有
git submodule init
git submodule update
# clone 包含 submodule
git clone --recurse-submodules http://example.com/repo.git
# 全部更新
git submodule update --remote --recursive
```

## .gitmodules

---
title: eslint
---

# eslint

```bash
npx eslint "src/**" --ext .ts --ext .tsx
```

## 配置
- .eslintrc.{js,yml,json}

```js
module.exports = {
  root: true,
  // 扩展现有配置 - 可以是绝对路径，可以是包/模块
  // 缩写逻辑:
  //   custom -> eslint-config-custom
  //   @wener -> @wener/eslint-config
  extends: ["@wener/eslint-config-custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"]
    }
  }
};

```

## disable/false positive

```js
// 忽略单个规则
/*eslint eqeqeq:0*/

// 忽略单行
// eslint-disable-next-line

// 忽略范围
/*eslint-disable */
alert('foo');
/*eslint-enable */
```
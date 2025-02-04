---
tags:
  - FAQ
---

# HTML FAQ

## 响应式 {responsive-meta-tag}

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

- width - 设置宽度
  - 支持数字 - 单位 px
  - device-width=100vw,100%
- height
  - device-height
- initial-scale=1
- minimum-scale=0.1
- maximum-scale=10
- user-scalable=1
  - 0/1, yes/no

---

- https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag

## inert

- 性能优化
- polyfill wicg-inert
- Temporarily offscreen/hidden content
- On-screen but non-interactive content - pointer-events: none，user-select: none
- jsx `inert={i !== tab ? '' : null}`
- 参考
  - https://developer.chrome.com/articles/inert/
  - [WICG/inert](https://github.com/WICG/inert)

```tsx
const TabContainer = () => {
  // 非当前 tab inert 并隐藏
  return (
    <div className="[&>[inert]]:hidden">
      {Tabs.map(({ content }, i) => (
        <div key={i} inert={i !== tab ? '' : null}>
          {content}
        </div>
      ))}
    </div>
  );
};
```

**inert.d.ts**

```ts
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    inert?: any;
  }
}
```

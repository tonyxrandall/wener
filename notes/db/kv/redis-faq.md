---
title: Redis FAQ
tags:
  - FAQ
---

# Redis FAQ

## List vs PubSub vs Stream

- List
  - 存储数据
  - 不能重复消费 - POP 后久不存在了
- Pub/Sub
  - 不存储数据 - 用于传递信息 - 实现异步/同步通讯
    - at-most-once, fire & forget, fan-out
  - 没有 Sub 时 Pub 是无意义的
- Stream
  - 存储数据 - 有消费者、消费组概念
  - 能重复消费 - at-most-once 或 at-least-once
  - 有更多消息队列的概念 - 例如: 消息ID、时间戳, ACK
  - 能实现 List 和 Pub/Sub 的所有语义
  - 可以不阻塞
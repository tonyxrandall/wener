---
title: Redis
---

# Redis

- [redis/redis](https://github.com/redis/redis)
  - BSD-3, C
- 支持的数据类型: string, bitmap, hll, list, pub/sub, hash, set, sorted set, stream
- Redis Stack 扩展: bloom, cuckoo, count-min, graph, json, suggest, search, t-digest, timeserial, top-k
- [redis.conf](http://download.redis.io/redis-stable/redis.conf)
- 参考
  - [5 Key Takeaways for Developing with Redis](https://redislabs.com/blog/5-key-takeaways-for-developing-with-redis)
    1. Keep Track of Your Keys
    2. Keep Track of the Length of Your Key Names
    3. Use the Right Data Structures
    4. Use SCAN, Never Use KEYS
    5. Use Server-Side Lua Scripts
  - [Redis configuration for production](https://scaleyourcode.com/blog/article/15)
    - [YouTube](https://www.youtube.com/watch?v=X01gn5a2WQ0)
- [RedisGraph](https://github.com/RedisLabsModules/redis-graph/)
  - A graph database as a Redis module

```bash
# 使用配置文件启动
wget http://download.redis.io/redis-stable/redis.conf
redis-server redis.conf
# macOS 安装
brew install redis
# 通过 docker 启动
# 数据存储于 ~/data/redis
docker run --rm -it -v $PWD/data:/data -p 6379:6379 --name redis redis redis-server --appendonly ye

redis-server --bind=0.0.0.0
```

:::info

- HASH Key 不支持 TTL [#6620](https://github.com/redis/redis/issues/6620)
  - [keydb] 可以 - 但是没有事件
- Redis Cluster V2 project [redis#8948](https://github.com/redis/redis/issues/8948)
- HSETEX, HMSETEX [redis#2905](https://github.com/redis/redis/issues/2905)
- 批量删除 key [redis#4153](https://github.com/redis/redis/issues/4153)

:::

[keydb]: ./keydb.md

```
# 获取 key 数量 - 可能失效的也包含
dbsize
# 获取 key 信息
info keyspace

# 扫描 key - SCAN,SSCAN,HSCAN,ZSCAN
# SCAN cursor [MATCH pattern] [COUNT count] [TYPE type]
scan 0
```

## Stream

- redis [api](https://gist.github.com/antirez/4e7049ce4fce4aa61bf0cfbc3672e64d)
- 参考
  - [Redis Streams: consumer groups v2 specification document](https://gist.github.com/antirez/68e67f3251d10f026861be2d0fe0d2f4)
  - [An update on Redis Streams development](http://antirez.com/news/116)

## 命令

- L - List
- H - Hash
- Z - SortedSet
- S - Set
- X - Stream
- Channel - SUBSCRIBE,PUBLISH,UNSUBSCRIBE
  - P - Pattern - PSUBSCRIBE,PUNSUBSCRIBE
  - S - Shared - 集群 channel

## Module

- [写 Redis 模块的教程](https://redislabs.com/blog/writing-redis-modules)
- [Redis 模块仓库](http://redismodules.com/)
- [Antirez 关于 Redis 模块的博客](http://antirez.com/news/106)
- [wenerme/go-rm](https://github.com/wenerme/go-rm)
  - 使用 Golang 写 Redis 模块

## ACL

:::caution

ACL 是配置，不是数据，因此不会同步。 [#7988](https://github.com/redis/redis/issues/7988)

:::

- 客户端 `AUTH <username> <password>`
- 默认用户 `AUTH <password>`

```pre title="默认配置"
user default on nopass ~* &* +@all
```

- 密码设置
  - `nopass`
  - `>密码`/`<密码` - 设置/移除 明文密码
  - `#<hash>`/`!<hash>` - 设置/移除 SHA-256 密码
  - resetpass 重置
- 命令权限
  - `+<command>`,`-<command>`,`+@<category>`,`-@<category>`
    - v7.0 支持禁止子命令 - 例如 `-config|set`
    - `ACL CAT` 所有分类
  - `+<command>|arg`
    - 例如: `-SELECT|1` 禁止 select 1 DB
  - `allcommands` -> `+@all`
  - `nocommands` -> `-@all`
- Key 权限限定
  - `~<pattern>`
  - `allkeys` -> `~*`
  - resetkeys - 重置
  - `%R~<pattern>`,`%W~<pattern>`,`%RW~<pattern>` - v7.0+ 限定 读写
- Pub/Sub 限定
  - `&<pattern>` - v6.2+
  - `allchannels` -> `&*`
  - resetchannels - 重置
- reset - 重置所有规则
- selector - v7.0+
  - `(<rule list>)`
  - `clearselectors`

```ini
# user default on nopass ~* &* +@all

# 为默认用户设置密码
ACL SETUSER default >PASSWD

# 客户端 测试密码是否正确
HELLO 3 AUTH default PASSWD

# 关闭默认用户 - 如果加了其他用户
ACL SETUSER default off

# 重新设置
ACL SETUSER admin reset on ~* >ADMIN &* +@all
# 重新认证为 admin
AUTH admin ADMIN
# 修改默认用户权限
ACL SETUSER default reset on nopass ~* &* +@all -@admin
```

```bash
# 输出 密码 和 sha-256
uuidgen | tee /dev/fd/2 | tr -d '\n' | sha256sum
```

**sentinel**

```
ACL SETUSER sentinel-user on >somepassword allchannels +multi +slaveof +ping +exec +subscribe +config|rewrite +role +publish +info +client|setname +client|kill +script|kill
```

**replica**

```
ACL setuser replica-user on >somepassword +psync +replconf +ping
```

**命令类目**

- keyspace
- read
- write
- set
- sortedset
- list
- hash
- string
- bitmap
- hyperloglog
- geo
- stream
- pubsub
- admin
- fast - O(1)
- slow
- blocking
- dangerous - FLUSHALL, MIGRATE, RESTORE, SORT, KEYS, CLIENT, DEBUG, INFO, CONFIG, SAVE, REPLICAOF
- connection
- transaction - WATCH, MULTI, EXEC
- scripting
- replication
  - keydb
  - 命令: ping, replconf, sync, replping, psync,

---

- [ACL](https://redis.io/topics/acl)

## 键变化通知

- 配置 `notify-keyspace-events`
  - 默认为 空 - 无事件产生
  - 可配置为 KEA 产生大多数事件
- `__keyspace@<db>__:<key> event`
  - key 变化
  - key -> event
- `__keyevent@<db>__:<key> event`
  - 事件
  - event -> key

| flag |
| ---- | ----------------------------------- |
| K    | `__keyspace@<db>__` 前缀            |
| E    | `__keyevent@<db>__` 前缀            |
| g    | 通用命令 - DEL, EXPIRE, RENAME, ... |
| $    | string                              |
| l    | list                                |
| s    | set                                 |
| h    | hash                                |
| z    | Sorted set                          |
| t    | stream                              |
| d    | module key type                     |
| x    | expired events                      |
| e    | evicted events                      |
| m    | key miss events - 访问不存在的 KEY  |
| n    | new key events - A 不包含           |
| A    | `g$lshztxed` - 除了 mn 的所有事件   |

| evennt                | command                    |
| --------------------- | -------------------------- |
| del                   | DEL,MIGRATE,RPOP,LPOP      |
| rename_from,rename_to | RENAME                     |
| move_from,move_to     | MOVE                       |
| copy_to               | COPY                       |
| restore               | RESTORE                    |
| expire                | EXPIRE,SETEX               |
| sortstore             | SORT STORE                 |
| set                   | SET,MSET                   |
| setrange              | SETRANG                    |
| incrby                | INCR, DECR, INCRBY, DECRBY |
| incrbyfloat           | INCRBYFLOAT                |
| append                |
| lpush                 |
| rpush                 |
| rpop                  |
| lpop                  |
| linsert               |
| lrem                  |
| ltrim                 |
| hset                  | HSET, HSETNX, HMSET        |
| hincrby               |
| hincrbyfloat          |
| hdel                  |
| sadd                  | SADD,SMOVE                 |
| srem                  | SREM,SMOVE                 |
| spop                  |
| sinterstore           |
| sunionstore           |
| sdiffstore            |
| zincr                 |
| zadd                  |
| zrem                  |
| zrembyscore           |
| zrembyrank            |
| zdiffstore            |
| zinterstore           |
| zunionstore           |
| xadd                  |
| xdel                  |
| xgroup-create         |
| xgroup-destroy        |
| xgroup-setid          |
| xgroup-setid          |
| xsetid                |
| xtrim                 |
| xgroup-createconsumer |
| xgroup-delconsumer    |
| persist               |

- `{l,r}{pop,push}`
  - RPOPLPUSH, BRPOPLPUSH
  - LMOVE, BLMOVE
- expired
- evicted
- new

```bash
# 所有事件
redis-cli --csv psubscribe '__key*__:*'
```

## redic.conf

- https://redis.io/docs/manual/config/

## redis-benchmark

```bash
redis-benchmark -q -n 100000
redis-benchmark -q -n 100000 -t set,get -P 16
```

- https://redis.io/docs/reference/optimization/benchmarks/


## Inside

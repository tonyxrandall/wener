---
title: dragonflydb
---

# dragonflydb

- [dragonflydb/dragonfly](https://github.com/dragonflydb/dragonfly)
  - BSL 1.1, C++,C
  - 兼容 Redis, Memcached 接口
  - 多线程
- https://github.com/dragonflydb/dragonfly/blob/main/docs/api_status.md
- 6379
  - http://127.0.0.1:6379
  - `:6379/metrics`

```bash
# http://127.0.0.1:6379
docker run -it --rm \
  -p 6379:6379 \
  --ulimit memlock=-1 \
  --name dragonfly docker.dragonflydb.io/dragonflydb/dragonfly

redis-cli PING
```

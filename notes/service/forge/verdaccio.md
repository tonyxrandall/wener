---
title: Verdaccio
---

# verdaccio

- [verdaccio/verdaccio](https://github.com/verdaccio/verdaccio)
  - MIT, TS, JS
  - NPM 私有仓库
- 插件
  - https://github.com/verdaccio/monorepo/tree/9.x/plugins
  - [Alexandre-io/verdaccio-ldap](https://github.com/Alexandre-io/verdaccio-ldap)
  - [verdaccio-aws-s3-storage](https://www.npmjs.com/package/verdaccio-aws-s3-storage)
    - 支持 minio
    - https://github.com/verdaccio/verdaccio/blob/master/docker-examples/v4/amazon-s3-docker-example/s3Plugin/Dockerfile
  - [verdaccio-minio](https://www.npmjs.com/package/verdaccio-minio)
    - 基于 Minio SDK
    - https://github.com/barolab/verdaccio-minio/blob/master/Dockerfile
- 默认端口 4873
- 参考
  - [Verdaccio 私仓搭建](https://juejin.cn/post/6844904193501691917)
- Endpoint
  - Tarball `:pkg/-/:name-:ver.tgz`
  - Web
    - `/-/web/detail/:pkg`
    - `/-/web/detail/:pkg/v/:version`

## config.yaml

- 内置分组 $all, $anonymous
- $authenticated

## docker

- /verdaccio/storage/htpasswd
- /verdaccio/conf/config.yaml
- 如果出现地址异常，可尝试设置 env VERDACCIO_PORT

```bash
htpasswd -bc htpasswd admin admin
```

```yaml
auth:
  htpasswd:
    file: ./htpasswd

uplinks:
  npmjs:
    url: https://registry.npmjs.org/
```

## minio

- barolab/verdaccio

```Dockerfile
FROM verdaccio/verdaccio:4
USER root
ENV NODE_ENV=production
RUN yarn global add verdaccio-minio && \
  ln -s /usr/local/share/.config/yarn/global/node_modules/verdaccio-minio /verdaccio/plugins/verdaccio-minio  && \
  chown -R 10001 /usr/local/share/.config/yarn/global/node_modules/verdaccio-minio && \
  chown -R 10001 /verdaccio/plugins

USER verdaccio
```

**/verdaccio/conf/config.yaml**

```yaml
# This points to the plugin folder above
plugins: /verdaccio/plugins
# This is mandatory, otherwise verdaccio won't boot
storage: /verdaccio/storage/data

store:
  minio:
    port: 9000
    endPoint: minio.minio.svc.cluster.local
    accessKey: this-is-not-so-secret
    secretKey: this-is-not-so-secret
    useSSL: false
    region: eu-west-1
    bucket: 'npm'
    retries: 3
    delay: 50
```

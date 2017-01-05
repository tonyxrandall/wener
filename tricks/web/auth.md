# 验证授权

授权验证是一个很敏感的话题,在一个大型企业里往往需要一个专门的团队来负责,这里整理一些和授权验证相关的基本内容.

## 基础
不管是采用何种方式,都要首先保证链接安全,即至少是使用 HTTPS,为了简化开发和快速使用可使用 [letsencrypt](https://letsencrypt.org/) 提供的证书来提供安全链接.

出于安全考虑,也可以选择在客户端加密,即用户提交到服务器的的密码已经是加密过的,例如 sha1 用户的密码,这样也能避免用户密码的直接泄露.

## bcrypt
* 在线测试和生成工具 https://www.dailycred.com/article/bcrypt-calculator

## Auth 2.0
[Auth 2](http://oauth.net/2/)

* 是一套认证框架
* 规范复杂且庞大
* 主要用于对外提供用户认证服务

__强项__

* 快速开发
* 只需要少量的代码即可实现
* 减少管理

__限制__

* 授权交由第三方


## JWT
[JWT](http://jwt.io/)

* 是一套认证协议
* 协议简单且易于实现
* 主要用于分布式的无状态接口调用
* 国际标准 [RFC 7519](https://tools.ietf.org/html/rfc7519)

* [jws rfc](https://tools.ietf.org/html/rfc7515)
* [jwe rfc](https://tools.ietf.org/html/rfc7516)
* [jwt rfc](https://tools.ietf.org/html/rfc7519)

__强项__

* 快速开发
* 不需要 Cookie
* JSON 相对友好
* 不依赖社交登陆
* 概念简单易于理解

__限制__
* Token 有大小限制
* Token 不能被回收
* 需要 Token 有个较短的失效周期


字段|全称|含义
----|----|----
iss | Issuer | 发出者
sub | Subject | 一般为用户 id
aud | Audience | 接受者
exp | Expiration time | 失效时间
nbf | Not before | 在这之前不生效
iat | Issued at | 发出时间
jti | JWT ID
typ | Type | 类型,由用户扩展

常见算法

* HMAC + SHA256
* RSASSA-PKCS1-v1_5 + SHA256
* ECDSA + P-256 + SHA256
* RSA vs ECDSA
  * 同等安全度下
    * RSA 更长, 签名验证更快
    * ECDSA 更短, 生成签名和密钥时快得多

__字段含义__

```js
{
  "iss": "http://example.org",
  "aud": "http://example.com",
  "iat": 1356999524,
  "nbf": 1357000000
}
```

### Resources
* [Auth 2.0 vs JWT](http://www.seedbox.com/en/blog/2015/06/05/oauth-2-vs-json-web-tokens-comment-securiser-un-api/)
* [JWT 验证](https://www.jsonwebtoken.io/)

## AAA
* Authentication
* Authorization
* Accounting


## LADP
http://searchsecurity.techtarget.com/definition/Kerberos

Kerberos 5
https://en.wikipedia.org/wiki/Authentication_server
Change Password Protocol
http://projects.spring.io/spring-ldap/
http://directory.apache.org/


ApacheDS 端口为
 10389 unencrypted or StartTLS
 10636 SSL

LDAP 端口为
389

默认用户
uid=admin,ou=system
secret

https://www.ldap.com/basic-ldap-concepts
http://archive.oreilly.com/pub/a/perl/excerpts/system-admin-with-perl/ten-minute-ldap-utorial.html


https://www.manageengine.com/products/ad-manager/help/csv-import-management/active-directory-ldap-attributes.html
http://www.kouti.com/tables/userattributes.htm

字段|全称|含义
----|----|----
dn| distinguished name |
cn| name | 全名
sn| surname | 姓
dc| domain component |
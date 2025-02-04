---
title: Rancher Version
tags:
  - Version
---

# Rancher Version

| version     | date       |
| ----------- | ---------- |
| Rancher 2.6 | 2021-08-31 |

## 2.6

- 自定义 UI
- New cluster explorer navigation
- New home page
- New global navigation
- New cluster manager navigation
- [v2.6.0](https://github.com/rancher/rancher/releases/tag/v2.6.0)

## 2.5

- 集群浏览器
  - 管理所有集群
  - 部署和管理应用市场中的 Helm 应用
  - kubectl shell
- Prometheus 监控告警 - 可管理自定义 Grafana 面板
- FluentBit/Fluentd [Banzai](https://banzaicloud.com/docs/one-eye/logging-operator/) [banzaicloud/logging-operator](https://github.com/banzaicloud/logging-operator)
- kube-bench CIS 扫描
- Istio 1.7+ - 支持多 ingress, egress 网关
- Fleet CI/CD - GitOps
  - Kubernetes 资源部署 - manifests, kustomize, Helm
  - 部署扩容
  - 集群分组
  - 映射 Git 仓库到集群分组目标
- 备份
  - 支持通过 UI 备份
  - 支持恢复任意集群

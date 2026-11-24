---
name: Kubernetes AI Remediation
tools: [Python, FastAPI, Kubernetes, RBAC, Kustomize]
image: ""
description: A constrained remediation service built around allowlisted runbooks and safe defaults.
---

A remediation service designed around a clear security boundary: the model can select from predefined runbooks, but cannot invent arbitrary commands to execute in a cluster.

The project includes policy modes, scoped RBAC and dry-run defaults. Cluster deployment, approval integration and chaos verification are treated as separate future work.

[View source code](https://github.com/sunkaradp/k3s-ai-remediation)

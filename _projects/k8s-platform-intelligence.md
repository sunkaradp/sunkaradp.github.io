---
name: Kubernetes Platform Intelligence
tools: [Kubernetes, Prometheus, Python, Helm]
image: ""
description: An observe-only operator experiment for early node memory pressure signals.
---

An operator experiment that uses Prometheus memory metrics and a simple trend estimate to identify possible node memory pressure, then emits a Kubernetes Warning Event for investigation.

The project includes a Custom Resource Definition, Helm chart, namespace-scoped RBAC and a hardened security context. It has been tested on Minikube; the prediction is an investigation signal, not a guarantee.

[View source code](https://github.com/sunkaradp/k8s-platform-intelligence)

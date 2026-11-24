---
name: Kubernetes Platform Intelligence
weight: 4
tools: [Kubernetes, Prometheus, Python, Helm, CRD]
description: An observe-only operator experiment that estimates node memory pressure from Prometheus metrics and emits Kubernetes Warning Events.
repo: https://github.com/sunkaradp/k8s-platform-intelligence
preview_label: NODE HEALTH SIGNAL
preview: "Prometheus metrics|Trend estimate|Kubernetes Event"
preview_note: "Observe-only · Minikube tested"
---
An operator experiment that uses Prometheus memory metrics and a simple trend estimate to identify possible node memory pressure, then emits a Kubernetes Warning Event for investigation.

The project includes a Custom Resource Definition, Helm chart, namespace-scoped RBAC and a hardened security context. It has been tested on Minikube; the prediction is an investigation signal, not a guarantee.

---
name: Kubernetes AI Remediation
weight: 3
tools: [Python, FastAPI, Kubernetes, RBAC, Kustomize, Prometheus, Loki]
description: A constrained remediation service built around allowlisted runbooks, policy gates and safe defaults.
repo: https://github.com/sunkaradp/k3s-ai-remediation
preview_label: POLICY-GATED REMEDIATION
preview: "Alert context|Policy gate|Allowlisted runbook"
preview_note: "OBSERVE by default · dry-run enabled"
---
A remediation service designed around a clear security boundary: the model can select from predefined runbooks, but cannot invent arbitrary commands to execute in a cluster.

The project includes OBSERVE, APPROVAL and AUTO policy modes, scoped RBAC, dry-run defaults, fallback diagnosis and a small set of predefined runbooks. Medium-risk actions require approval; automatic execution is restricted to eligible low-risk actions.

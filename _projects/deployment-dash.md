---
name: Deployment Dash Intelligence
tools: [Kubernetes, YAML, Python, FastAPI, React, TypeScript, Kubescape]
description: Read-only Kubernetes manifest analysis that explains deployment and container-security risks before release.
repo: https://github.com/sunkaradp/deployment-dash-intelligence
preview_label: MANIFEST REVIEW
preview: "Kubernetes YAML|Policy checks|Risk findings"
preview_note: "Deterministic checks · advisory only"
---
Deployment Dash analyzes Kubernetes manifests before release and reports explainable findings with severity, evidence paths and remediation guidance.

The browser performs deterministic checks locally; an optional FastAPI endpoint provides API-backed analysis. It can also import Kubescape SARIF reports from a GitHub Actions scan. It does not connect to or modify a live cluster.

[Source code and setup](https://github.com/sunkaradp/deployment-dash-intelligence)

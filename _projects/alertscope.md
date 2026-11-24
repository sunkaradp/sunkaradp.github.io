---
name: AlertScope
tools: [Python, FastAPI, Prometheus, Loki, Kubernetes, Alertmanager, Slack]
description: Collects metrics, logs and Kubernetes context around an alert to produce an evidence-based first-pass incident investigation.
repo: https://github.com/sunkaradp/alertscope
image: /assets/images/projects/alertscope.webp
preview_label: INCIDENT INVESTIGATION
preview: "Alertmanager|Context collection|AI-assisted analysis"
preview_note: "Prometheus · Loki · Kubernetes · Slack"
---
AlertScope is an Alertmanager webhook service that gathers Prometheus metrics, Loki logs and Kubernetes pod context, then produces a first-pass diagnosis for Slack.

The local demonstration includes a failure-injection service and an observability stack. The public GitHub Pages console is a static frontend; the FastAPI service and supporting infrastructure must be deployed separately. The README documents this boundary and the connection steps.

[Source code and architecture](https://github.com/sunkaradp/alertscope)

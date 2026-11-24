---
name: AlertScope
tools: [Python, Prometheus, Loki, Kubernetes, Alertmanager]
image: ""
description: Incident investigation context from metrics, logs and Kubernetes state.
---

AlertScope collects context around an alert from Prometheus, Loki and Kubernetes, then prepares a first-pass incident summary for Slack.

The project focuses on helping an engineer start an investigation with relevant evidence rather than scattered dashboards. It includes a local failure demonstration and cloud identity configuration.

[View source code](https://github.com/sunkaradp/alertscope)

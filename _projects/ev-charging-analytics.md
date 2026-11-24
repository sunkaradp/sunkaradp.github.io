---
name: EV Charging Analytics
weight: 7
tools: [Kafka, Python, Apache Airflow, Docker, Data Engineering]
description: Collaborative streaming and batch pipeline for synthetic EV charging-session data, with documented individual contributions.
repo: https://github.com/sunkaradp/ev-charging-sessions
demo: https://sunkaradp.github.io/ev-charging-analytics-demo/
preview_label: DATA PIPELINE
preview: "Event generator|Kafka stream|Airflow batch"
preview_note: "Implemented repository flow"
---
A collaborative data-engineering project. The current repository implements synthetic event generation and Kafka ingestion, a streaming consumer with rolling summaries, and an Airflow batch workflow for cleaning and aggregation.

My documented contributions include Kafka producer reliability improvements, reusable batch transformation functions, automated tests and Python CI. Cloud warehousing and forecasting appear in the broader project materials, but are not presented here as verified implementations in the current repository.

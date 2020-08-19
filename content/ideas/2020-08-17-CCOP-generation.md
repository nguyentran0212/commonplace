---
date: 2020-08-15
title: "CCOP-Fuse: An automated security metric fusion framework for executive decision making"
cover: "https://unsplash.it/400/300/?random?BigTest"
categories: 
    - Ideas
slug: "ccop-fuse"
tags:
    - proposal
---

## Overview

Cyber Security health of an organization is a reflection of multiple indicators, which are measured by security systems such as Intrusion Detection System (IDS), Security Information and Event Management (SIEM), as well as human processes such as phishing awareness campaigns. The agglomeration of these security metrics forms the Common Cyber Operating Picture (CCOP) of the organization. From this shared data entity, multiple views can be instantiated corresponding to the requirements of the stakeholders. For instance, executives require strategy-level metrics for decision making, security officers require full details of operation-level metrics, while normal staffs would need to know the security stance of the organization to adjust their behaviours. 

In general, organizations have their own security indicators, sources, and models of how indicators are fused into a CCOP. These models must be implemented as software programs in practice. This process can be error-prone and inefficient, especially if it has to be repeated in multiple organizations. This project aims to design, develop, and evaluate an automation framework called CCOP-Fuse to automate the process of fusing security metrics into CCOP. 

## Background

### CCOP

A CCOP can be considered an *n-dimensional vector that changes with time*. Each dimension is a security metric. We distinguish *elementary metrics*, which comes directly from the data sources, such as SIEM, IDS, and *calculated metrics*, which are derived from elementary ones. The function that calculate calculated metrics from elementary metrics is the fusion function that needs to be implemented as software programs. 

Formally:
$$
\mathcal{CCOP}={\mathcal{Metrics}_t | t\in T} \\
\mathcal{Metrics} = \left(\mathcal{E}, \mathcal{C}\right), \mathcal{E} \in \R^n, \mathcal{C} \in \R^m \\
\mathcal{C} = f(\mathcal{E})
$$


### CCOP Model

A CCOP model formalizes the relationship between metrics. In other words, it describe the calculation taken within the fusion function $\mathcal{f}(\mathcal{E})$. Formally, a CCOP model is a Directed Acyclic Graph (DAG) whose vertices are metrics and calculation:
$$
\mathcal{CM} = G\left(\{\mathcal{Metrics}, \mathcal{Ops}\}, \{(m, o) | m \in \mathcal{Metrics}, o \in \mathcal{Ops}\}\right)
$$
Each edge can carry addition information for the calculation, such as the weight of the metric in a weighted sum operation. 

### Metric Sources

Metric sources map data generator in the real world, such as IDS and SIEM, to the elementary metrics. Formally, each data source can be considered a statistica; model $\left(\mathcal{S}, \mathcal{P}\right)$ where $\mathcal{S}$ is the set of possible values and $\mathcal{P}$ is a set of probability distributions on $\mathcal{S}$. Thus:
$$
\mathcal{Source}:\left(\mathcal{S}, \mathcal{P}\right)^n \mapsto \mathcal{E}
$$


## Problem Statement

Given $\mathcal{CM}$ and $\mathcal{Source}$, generate $f(\mathcal{E})$. 
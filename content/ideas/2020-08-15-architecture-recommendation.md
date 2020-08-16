---
date: 2020-08-15
title: "Blockchain Network Architecture Recommendation with Reasoning"
cover: "https://unsplash.it/400/300/?random?BigTest"
categories: 
    - Ideas
slug: "architecture-recommendation"
tags:
    - proposal
---

## Background
This section introduces the concepts necessary to understand the proposed method, including blockchain nodes, blockchain networks, blockchain channels, participants, processes, computing nodes, and networks.

A blockchain network is a peer-to-peer system comprising of peer nodes connected via computer networks. Each peer node, also known as a blockchain node, runs a software client that implements blockchain protocols such as Ethereum and Bitcoin. These protocols dictate how blockchain nodes store and manage the data, also known as the distributed ledger. Blockchain nodes sharing the the same configurations can talk to each other, thus forming the blockchain network. Some interprise blockchain applications use multiple distributed ledgers at the same time for different subsets of blockchain nodes in order to hide the data from unrelated participants. In this case, each subset of the blockchain nodes maintains a blockchain channel which contains one distributed ledger. A blockchain network can have more than one channel.

From a high-level perspective, blockchain networks allow participants to participate in some processes. For example, the Bitcoin network allows participants, which are most internet users, to take part in the process of gaining and exchanging the cryptocurrency bitcoin. Participants can also be autonomous systems in the case of Internet of Things systems. Each participant has access to at least one computing node, which it uses to host its blockchain nodes. Computing nodes link with each other via networks. Both computing nodes and networks have varying capacity, which influence the type of blockchain nodes and channels that can be used.

## Problem Statement
Given the following inputs:
- A set of participants
- A set of processes
- A set of computing nodes
- A set of networks
- Relations between participants and processes 
- Relations between participants and computing nodes 
- Relations between participants and networks
         
Infer the following information:
- A set of blockchain nodes
- A set of channels
- Relations between participants and blockchain nodes (i.e., who owns what node)
- Relations between blockchain nodes and computing nodes (i.e., where to deploy blockchain nodes)

Based on a set of rules, such as:
- Every participant in a process must have a blockchain node (i.e., a owning relationship must exist between a participant and a blockchain node)
- A blockchain channel must exist and link all blockchain nodes belonging to participants that participate in the same process
- A deployment relationship must exist between a blockchain node and a computing node which belong to the participant that owns the blockchain node
- Computing nodes that host blockchain nodes of a blockchain channel must be able to reach eachother via a network link

The stated rules can be extended to model more complex properties such as the authorization level of a participant in a process and the capability of computing nodes and networks.

## Proposed Solution

- Provide a graphical user interface to collect the input from the architects in an intuitive way.
- Feed the input to a reasoner preloaded with the rules
- Infer the outputs
- Feed the outputs back to the interface to form a complete architecture specification of the network User can use a provided service to deploy the architecture on hardware nodes
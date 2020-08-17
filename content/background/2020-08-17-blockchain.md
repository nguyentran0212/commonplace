---
date: 2020-08-17
title: "Blockchain Definitions and Properties"
cover: "https://source.unsplash.com/random"
categories: 
    - Background
slug: "blockchain"
tags:
    - background
    - blockchain
---

## Definitions

> Blockchains are emerging digital technology that combines cryptography, data management, networking, and incentive mechanisms to support the checking, execution, and recording of transactions between parties[^1].

> Distributed Ledger: A distributed ledger is an append-only store of transactions which is distributed across many machines [^1]

> Blockchain: A blockchain is a distributed ledger that is structured into a linked list of blocks. Each block contains an ordered set of transactions. Typical solutions use cryptographic hashes to secure the link from a block to its predecessor.

> Blockchain system: A blockchain system consists of: [^1]
>
> - a blockchain network of machines, also called nodes;
> - a blockchain data structure, for the ledger that is replicated across the blockchain network. Nodes that hold a full replica of this ledger are referred to as full nodes;
> - a network protocol that defines rights, responsibilities, and means of communication, verification, validation, and consensus across the nodes in the network. This includes ensuring authorization and authentication of new transactions, mechanisms for appending new blocks, incentive mechanisms (if needed), and similar aspects

> Public blockchain: A public blockchain is a blockchain system that has the following characteristics [^1]
>
> - it has an open network where nodes can join and leave as they please without requiring permission from anyone;
> - all full nodes in the network can verify each new piece of data added to the data structure, including blocks, transactions, and effects of transactions;
> - its protocol includes an incentive mechanism that aims to ensure the correct operation of the blockchain system including that valid transactions are processed and included in the ledger and that invalid transactions are rejected.

> Blockchain platform: A blockchain platform is the technology needed to operate a blockchain. This comprises[^1]:
>
> - The blockchain client software for processing nodes
> - The local data store for nodes
> - Any alternative clients to access the blockchain network

> Smart contract: smart contracts are programs deployed as data in the blockchain ledger and executed in transactions on the blockchain. Smart contracts can hold and transfer digital assets managed by the blockchain and can invoke other smart contracts stored on the blockchain. Smart contract code is deterministic and immutable once deployed [^1]. 
>
> Due to smart contracts, blockchains can be a general computational platform, albeit with severe practical limitations on computational complexity. 

>Blockchain-based applications are applications that make significant use of blockchains [^1]. 
>
>Decentralized applications or dapps are applications designed to provide their main functionality through smart contracts. 



## Elements of Blockchain Success

"The successful operation of a blockchain system relies on several key elements, including:"[^1]

- Appropriate integrity criteria to be checked for each transaction and block
- The correctness of the system's software and technical protocols
- Strong cryptographic mechanisms to identify parties and check their authority to add new transactions
- A suite of incentive mechanisms to motivate processing nodes to participate in the community and behave honestly, in their interests



[^1]:  [Architecture for Blockchain Applications](https://link.springer.com/content/pdf/10.1007/978-3-030-03035-3.pdf)
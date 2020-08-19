---
date: 2020-08-17
title: "Blockchain-based Service Network"
cover: "https://source.unsplash.com/random"
categories: 
    - Background
slug: "software-architecture"
tags:
    - background
    - blockhchain
---

Sources: [^1][^2]

## Definition

The blockchain-based service network (BSN) is a cross-cloud, cross-portal, cross-framework global infrastructure network used to deploy and operate all types of blockchain applications. 

BSN is not a chain.

## Motivations

BSN aims to reduce the cost of developing and deploying blockchain applications by providing public blockchain resource environments to developers.

In traditional consortium blockchain applications, all participating organizations need to individually create, operate, and maintain their own dedicated peer nodes and a corresponding consensus mechanism. These nodes require a physical server or cloud service, and all the nodes are linked via the Internet or the cloud service's internal network, thereby forming an isolated blockchain application similar to that of a local area network. Limitations:

- Excessive burden on participants
- Server resources are not always optimal

Because there is no uniform technical standard for the underlying frameworks used by each local area network-style blockchain applications, cross-chain and cross-framework data transmission becomes difficult and expensive. Thus, there is a need for creating a public infrastructure network that is commonly recognized by all organizations. 

> According to the current mainstream cloud service provider quotations in China, the lowest annual cost to build a traditional three-peer consortium blockchain local area network-style environment is approximately RMB 100,000. By using BSN, one application requires just RMB 2000 to 3000 a year to form a chain and become operational. 

## Architecture of BSN

Three types of participants exist in BSN:

1. Cloud service providers, using BSN public city node software to sell their resource (CPU, storage, bandwidth) through BSN
2. Blockchain framework provider
3. Portal operators use BSN with existing cloud service portals or developers' portals to create Blockchain-as-a-Service platforms. 

On the condition of compliance with BSN protocol standards, any cloud service provider, framework provider, or portal operator can voluntarily join or remove themselves from the BSN. 

The architecture of BSN conprises four key parts:

1. Public city nodes
2. Blockchain framework
3. BSN portals
4. BSN network operations platform

### Public City Nodes

All public city nodes on the BSN are linked via the Internet. Within BSN portals, developers choose a framework and a certain number of relevant public city nodes to publish a consortium or public blockchain. 

Public city nodes (PCN) are not blockchain nodes. Instead, they are resource pool used to allocate a portion of the computing power, storage, and bandwidth resources from the cloud service or data centre to BSN. 

The owner of public city nodes is the provider of cloud resources or data centers. These owners are responsible for installing public city node software on their server. 

An entire blockchain operating environment can be built within these resource pools, including:

- Multiple blockchain frameworks
- Shared peer nodes
- CA management
- Authority chain
- PCN gateway
- PCN manager systems

### Functional modules of PCN

#### Multiple Frameworks

Easy way to understand is to think that the PCN has already been installed with `Geth`, `Parity` and other BC client software, so that blockchain nodes can be spawn on demand. 

#### Shared Peer Nodes

Think of these as connected virtual machines running within PCN, which are cloud services or data centers. Each peer nodes can run multiple DApps (or BC networks?) at the same time, thus increasing the degree of utility. 

#### Authority Chain

The authority chain is used as one of the system-level chains and is deployed in all PCNs. This chain stores public key of DApp users and DApps's authority setting. 

When a user's off-BSN system accesses a PCN gateway, the gateway will verify the user's identity and authorize access based on the information stored on the authority chain. In other words, this authority chain maintains access control policies. 

#### CA Management

Each PCN deploys a uniform CA management system, used for the full life cycle management of all DApp user transaction keys within that PCN.

#### PCN gateways

These are the only entry point for data interaction between business sytems outside the BSN and DApps deployed on the network.

Each PCN has one gateway. If a DApp spans multiple cities, then gateway at any of those cities can access the DApps.

#### PCN manager

The PCN manager system is a function module responsible for connecting between PCNs and the BSN NOC platform. Essentially, it carries out the instruction by the NOC platform to deploy smart contracts, configure peer nodes, manage key certificates, configure application authorities, and obtaining operational information. 

### Blockchain framework

These frameworks can be considered operating systems of blockchain applications. 

Frameworks already supported by BSN:

- Fabric with Chinese SM2/SM3 encryption algorithm
- FISCO
- BCOS
- CITA
- XuperChain
- WutongChain
- BroChain
- Ethereum
- EOS

### BSN Portals

Portals allow developers to purchase cloud resources and publish applications. 

BSN portals are autonomous and independent. They are responsible for user registration and management, billing and payment systems, and developer communities. Each portal collects its own fees and pay the balance to a settlement company, which then distribute the fees to cloud service provider, framework provider, and BSN operation team. 

Every portal is responsible for vetting users and applications to satisfy government's regulations. 

### Interactions with the portal

Developers can use BSN portals to deploy their own DApps as follows:

1. Select a framework and upload the corresponding smart contract
2. Select PCN on which the DApps is going to be deployed
3. Select the number of peers to be deployed on each PCN
4. Submit the request
5. The DApp smart contract is vetted for security issues
6. The BSN operating and maintenance center (NOC) deploy the smart contract to the designated peer nodes in the PCN and become operational.
7. Off-BSN systems can access its DApp through gateways of any PCN on which the DApp is deployed. 

### BSN Network Operations Platform

This platform is managed by technical teams from BSN founding members, including China Mobile, China UnionPay, and Red Date Tech. 

Functionality of the network operations platform:

- Public city node management
- Application management
- Maintenance management
- Biling and settlement management
- CA management
- Supervision management

### BSN Applications

Each BSN appplication is deployed on a certain number of city nodes. These applications exist in isolated channels for transaction processing, data communication, and storage. 

## Data Security

### Key Management

When distributing a DApp on any BSN portal, developers has two options regarding the access key:

1. Key trust mode: developers entrust the BSN to generate a pair of keys to be used. The developers then download the key from the portal.
2. Public key upload mode: developers generate key pairs locally, and upload the public key via the BSN portal and user the private key to carry out a transaction signature. 



[^1]: BSN Introductory White paper (v1.05), 5/2/2020
[^2]: BSN Technical White paper (v1.0), 25/4/2020


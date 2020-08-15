---
date: 2020-08-15
title: "First Order Logic"
cover: "https://unsplash.it/400/300/?random?BigTest"
categories: 
    - Background
slug: "first-order-logic"
tags:
    - logic
---

Logic is the study of relationship between the truth of one statement and that of another. First order logic (FOL) is a form of precise and unambiguous language for representing knowledge in more detail. 

## Syntax of FOL

The syntax of a language describes the symbols and notations that are allowed to use in the language.

Lexicon of a first order language contains the following:
- Connectives and Parentheses: $\neg,\rightarrow,\leftarrow,\leftrightarrow,\wedge,\vee, ()$
- Quantifier: $\forall, \exists$
- Variables: $x,y,z, ...$ ranging over particulars (i.e., individual objects)
- Constant: $a, b, c, ...$ representing specific elements
- Functions $f(x_1, x_2, ..., x_n)$
- Relations: $R, S, ...$ with an associated arity (i..e, unary, binary, etc. )

### Definitions

> A **term** is defined by two rules:
> - Every variable and constant is a term
> - If $f$ is a m-ary function and $t_1, t_2, ... t_m$ are terms, then $f(t_1, ..., t_m)$ is also a term.

> An **atomic formula** is a formula that has the form $t_1 = t_2$ or $R(t_1, ..., t_n)$ where $t_1, ... t_m$ are terms and $R$ is an n-ary relation.

> A string of symbols is a **formula** of FOL if and only if it is constructed from atomic formulas by repeated applications of the following 3 rules:
> - If $\phi$ is a formula then so is $\neg\phi$
> - If $\phi$ and $\psi$ are formulas then so is $\phi \wedge \psi$
> - If $\phi$ is a formula then so is $\exists x \phi$ for any variable x


> A **free variable** of a formula $\phi$ is that variable occurring in $\phi$ that is not quantified. For instance, if $\phi = \forall x \left(Loves(x, y)\right)$, then y is the free variable because is it not bounded (quantified) by a quantifier (i.e., $\forall, \exists$)

> A **sentence** of FOL is a formula having no free variables.

### Examples

Some examples of translation between natural languages and FOL:
- "Each animal is an organism", "all animals are organisms", "if it is an animal, then it is an organism": $\forall x \left(Animal(x) \rightarrow Organism(x) \right)$
- Aliens exist: $\exists x \left(Alien(x)\right)$
- There are books that are heavy, meaning at least one book is heavy: $\exists x \left( Book(x) \wedge Heavy(x) \right)$
- Each student must be registered for a degree programme: 
	$\forall x \left( Student(x) \rightarrow \exists y \left( registered_for(x,y) \wedge DegreeProgramme(y) \right) \right)$.

UML class models can also be converted into FOL as follows:
- UML classes can also be converted into unary predicates in FOL (e.g., $Lion(x)$)
- Associations can be translated into binary relations (e.g., $Eats(x, y)$)
- Multiplicity constraints (i.e., 1..*) can be translated into existential quantification. 

For example, to model a that the class animal is associated with 4 objects of class limbs, FOL can be used as follows: $\forall x \left( Animal(x) \rightarrow \exists^{=4}y\left( part(x,y) \wedge Limb(y) \right) \right)$. 

To model subclass relationship, we do as follow: $\forall x \left( Carnivore(x) \rightarrow Animal(x) \right)$

To model disjoint, we need to show that the intersection is empty. This has the pattern $\forall x \left( A(x) \wedge B(x) \rightarrow \bot \right)$ where $\bot$ is the bottom concept, which is a unary predicate that is always false. 

To model completeness, we do as follow: 
$\forall x \left( Animal(x) \rightarrow Omnivore(x) \vee Herbivore(x) \vee Carnivore(x) \right)$

## Semantics of FOL

The truth of a FOL sentence depends on the underlying set and the interpretation of functions, constants, and relation symbols. The combination of the underlying set and the interpretation forms a structure. Given a sentence $\phi$ and a structure $\mathrm{M}$, $\mathrm{M}$ models $\phi$ means that the sentence $\phi$ is true with respect to $\mathrm{M}$. 

> A **vocabulary** $\mathcal{V}$ is a set of functions, relations, and constant symbols. 

> A $\mathcal{V}$-structure consists of a non-empty underlying set $\Delta$ along with an interpretation of $\mathcal{V}$. An interpretation of $\mathcal{V}$ assigns:
> - An element of $\Delta$ to each constant in $\mathcal{V}$
> - A function $\Delta^n$ to each n-ary function in $\mathcal{V}$,
> - A subset of $\Delta^n$ to each n-ary relation in $\mathcal{V}$,
>
> $\mathrm{M}$ is a structure if it is a $\mathcal{V}$-structure of some vocabulary $\mathcal{V}$.

> Let $\mathcal{V}$ be a vocabulary. A $\mathcal{V}$-formula is a formula in which every function, relation, and constant is in $\mathcal{V}$. Correspondingly, a $\mathcal{V}$-sentence is a  $\mathcal{V}$-formula that is a sentence.

Model theory is about the interplay between M and a set of first-order sentences $\mathcal{T}(M)$, which is called the theory of M, and its ``inverse'' from a set of sentences $\Gamma$ to a class of structures called models. **In other words, structure-to-sentence interplay is theory. Sentence-to-structures is model.**

> For any $\mathcal{V}$-structure M (i.e., underlying set plus interpretation of a vocabulary $\mathcal{V}$), the theory of M is the set of all $\mathcal{V}$-sentence $\phi$ that are true with respect to $\mathrm{M}$. This relation between a sentence and a model is denoted as $M \models \phi$. The theory of $\mathrm{M}$ is denoted as $\mathcal{T}(M)$.

> For any set of $\mathcal{V}$-sentences $\Gamma$, the model of this set is a $\mathcal{V}$-structure such as all sentences in $\Gamma$ are true with respect to the structure. The class of all models of $\Gamma$ is denoted by $\mathcal{M}(\Gamma)$.

The following definitions apply the aforementioned concepts in the context of logic:

> Let $\Gamma$ be a set of $\mathcal{V}$-sentences (i.e., sentences written in the vocabulary $\mathcal{V}$). Then $\Gamma$ is a complete $\mathcal{V}$-theory if, for any $\mathcal{V}$-sentence $\phi$, either $\phi$ OR $\neg\phi$ is in $\Gamma$ and it is NOT the case that both $\phi$ AND $\neg\phi$ are in $\Gamma$.

> A set of sentences $\Gamma$ is said to be consistent if no contradiction can be derived from $\Gamma$.

> A theory is a consistent set of sentences.

*My understanding here is that a logical theory is a set of sentences that are true in their structure and contains no contradiction.*

### Examples

Consider the following conceptual data model:
- Each Student attends exactly one DegreeProgramme
- It is possible that more than one Student attends the same DegreeProgramme

Based on these, we have the following FOL sentences. As they do not contain any contradiction, they form a theory, and thus can be modelled with a model.
$$
\begin{aligned}
\forall x,y &\left(attends(x,y) \rightarrow Student(x) \wedge DegreeProgram(y)\right) \\
\forall x  & \left(Student(x) \rightarrow \exists^{=1}y(attends(x,y)))\right)
\end{aligned}
$$

Vocabulary: $\mathcal{V}=\left\{ attends, Student, DegreeProgramme \right\}$

The structure is the mapping of an underlying set of objects, such as $\Delta = \left\{ John, Mary, CS, Biology \right\}$ to the vocabulary. John and Mary would be instances of the Student, and CS and Biology would be instances of DegreeProgramme. 

## Logical Equivalences

Commutativity:
$$
\begin{aligned}
\phi \wedge \psi & \equiv \psi \wedge \phi \\
\phi \vee \psi & \equiv \psi \vee \phi \\
\phi \leftrightarrow \psi & \equiv \psi \leftrightarrow \phi \\
\end{aligned}
$$

Associativity:
$$
\begin{aligned}
\left( \phi \wedge \psi \right) \wedge \chi & \equiv \phi \wedge \left( \psi \wedge \chi \right) \\
\left( \phi \vee \psi \right) \vee \chi & \equiv \phi \vee \left( \psi \vee \chi \right) 
\end{aligned}
$$

Idempotence:
$$
\begin{aligned}
\phi \wedge \phi & \equiv \phi \\
\phi \vee \phi & \equiv \phi
\end{aligned}
$$

Absorption: (This one can be proven by truth table)
$$
\begin{aligned}
\phi \wedge \left( \phi \vee \psi \right) & \equiv \phi \\
\phi \vee \left( \phi \wedge \psi \right) & \equiv \phi
\end{aligned}
$$

Distributivity:
$$
\begin{aligned}
\phi \vee \left(\psi \wedge \chi \right) & \equiv \left(\phi \vee \psi\right) \wedge \left(\phi \vee \chi \right)\\
\phi \wedge \left(\psi \vee \chi \right) & \equiv \left(\phi \wedge \psi\right) \vee \left(\phi \wedge \chi \right)
\end{aligned}
$$

Double negation:
$$
\begin{aligned}
\neg\neg\phi = \phi
\end{aligned}
$$

De Morgan:
$$
\begin{aligned}
\neg\left(\phi \wedge \psi\right) & \equiv \neg\phi \vee \neg\psi \\
\neg\left(\phi \vee \psi\right) & \equiv \neg\phi \wedge \neg\psi
\end{aligned}
$$

Implication: (This one is important. I couldn't recall learning this one)
$$
\begin{aligned}
\phi \rightarrow \psi \equiv \neg\phi \vee \psi
\end{aligned}
$$

Tautology:
$$
\begin{aligned}
\phi \vee \top \equiv \top
\end{aligned}
$$

Unsatisfiability:
$$
\begin{aligned}
\phi \wedge \bot \equiv \bot
\end{aligned}
$$

Negation:
$$
\begin{aligned}
\phi \wedge \neg \phi & \equiv \bot \\
\phi \vee \neg \phi & \equiv \top
\end{aligned}
$$

Quantifiers:
$$
\begin{aligned}
\neg\forall x (\phi) & \equiv \exists x (\neg \phi) \\
\neg \exists x (\phi) & \equiv \forall x (\neg \phi) \\
\forall x (\phi) \wedge \forall x (\psi) & \equiv \forall x (\phi \wedge \psi) \\
\exists x (\phi) \vee \exists x (\psi) & \equiv \exists x (\phi \vee \psi)
\end{aligned}
$$
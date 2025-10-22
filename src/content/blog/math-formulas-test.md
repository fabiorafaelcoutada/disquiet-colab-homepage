---
title: 'Testing Mathematical Formulas (KaTeX)'
date: '2025-10-20'
description: 'Testing inline and block-level mathematical formulas.'
---

This post tests the `remark-math` and `rehype-katex` plugins.

## Inline Math
The famous inline equation $E = mc^2$ shows the relation between energy and mass.
Another one is the Pythagorean theorem: $a^2 + b^2 = c^2$.

## Block-Level Math
Block-level formulas are displayed on their own line and centered.

### The Quadratic Formula
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

### Taylor Series Expansion of $e^x$
$$
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots
$$

### Maxwell's Equations
$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0 \left( \mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} \right)
\end{aligned}
$$
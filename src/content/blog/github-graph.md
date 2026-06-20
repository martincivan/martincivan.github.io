---
title: "What 387 GitHub contributions don't tell you"
date: 2026-06-19
lang: en
tags: ["devops", "platform", "career"]
description: "Most of the infrastructure I'm proudest of will never show up on a public contribution graph — and that's true for a lot of platform engineers."
---

If you judged my last year by my public GitHub graph, you'd see a few hundred contributions and conclude I had a quiet one. The reality is the opposite: it was the most intense engineering year I've had. The gap is the whole point of this post.

I work on the platform behind a national e-government system. Almost all of that work — Terraform that provisions OpenShift clusters across bare metal and private cloud, a GitOps repository that deploys forty-something operators and services, custom Kubernetes controllers, CI templates with supply-chain security baked in — lives on a self-hosted GitLab behind a firewall. None of it counts toward a green square.

This is normal for platform and infrastructure engineers, and it quietly distorts how we get evaluated:

- **Recruiters screen on the graph.** A sparse public profile reads as "not very active," when the truth is "active somewhere you can't see."
- **The most valuable work is often the least visible.** Nobody open-sources their employer's cluster topology. The harder and more consequential the system, the more likely it lives in private.
- **Output ≠ commits anyway.** A single well-designed `ApplicationSet` that replaces a hundred manual steps is worth more than a thousand noisy commits, and shows up as almost nothing.

I'm not arguing the graph is useless — it's a fine signal for open-source habits. I'm arguing it's a terrible proxy for impact, and we lean on it because it's easy to read.

So this site exists partly to fill that gap: to describe the work that the graph structurally can't show. If you're a platform engineer whose best year looks quiet in green squares, you probably need a place like this too.

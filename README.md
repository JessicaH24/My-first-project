# FocusFlow

An all-round productivity and time management application that helps people **plan, prioritize, journal, and actually achieve their goals**.

Built for busy professionals who are already busy but cannot say what moved forward this week.

## The Problem

Busy professionals own calendars, to-do lists, habit trackers, and journals. None of them talk to each other:

- **Tasks are disconnected from ambition** — a list of 40 items says nothing about whether any of it matters
- **Time is planned on a flat canvas** — calendars treat a 40-minute report and a 5-minute email as equivalent
- **Planning is manual and repetitive** — most people stop rebuilding tomorrow and drift into reactive mode
- **Reflection is missing** — no tool asks what worked, why things slipped, or whether the plan still makes sense
- **Failure is punishing** — one bad week triggers abandonment at the moment support is most needed
- **Insight is missing** — months of behavioural data, and the user learns nothing from it

## The Idea

FocusFlow closes the loop end to end:

```
Set goals → Capture everything → App prioritizes → App builds the day
    ↑                                                        ↓
Coach corrects ← Weekly review ← Daily review ← Focus & adapt
```

Three choices define the product:

1. **Goals are the spine** — every task traces to a goal. If it does not, the system asks whether it should exist.
2. **Plans account for energy, not just hours** — difficult work is scheduled where the user is sharp.
3. **Failure is designed for** — missed days are normal input, never punished.

## Key Features

| Area | Capability |
|---|---|
| Goal hierarchy | Goals → Projects → Tasks, with progress and health checks |
| Smart capture | Voice and text capture parsed into a single inbox |
| Prioritization | Customizable frameworks, automatic ranking with visible reasoning |
| Auto-scheduled day | Energy-aware scheduling with two-way calendar sync |
| Daily loop | 5-minute morning plan, evening review, forgiving auto-replan |
| Focus mode | One-tap sessions with distraction blocking |
| Routines | Flexible recurring work scheduled inside the planner |
| Journaling | Day-linked entries with guided prompts and coach follow-ups |
| Progress | Goal progress view, automatic insight feed, weekly course correction |
| AI coach | Proactive morning briefings, overload detection, pattern recognition |
| Motivation | Consistency scoring, strengths and weaknesses, optional top-20 leaderboard |

Full detail in [FEATURES.md](FEATURES.md).

## Product Principles

These are the decision criteria. When requirements conflict, these resolve them.

1. **Goals are the spine** — nothing exists without a reason
2. **Protect attention, not just time** — friction is the real enemy
3. **Plan for the human, not the ideal** — an impossible plan is worse than none
4. **Forgiving by design** — a missed task is input to re-plan, not a failure
5. **Reflection is part of the work** — review lives in the daily flow
6. **Right or silent** — the coach speaks only when it has something to say
7. **Show the reasoning** — every automated suggestion explains itself
8. **Small surface, deep habit** — five core screens beat thirty features

## Documents

| File | Description |
|---|---|
| [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) | **Start here to build** — begin with **Section 1A: Fast Track**, a 10-day prototype. Then Section 1B for the roadmap, and the 13 detailed phases after that |
| [FocusFlow_PRD_v2.pdf](FocusFlow_PRD_v2.pdf) | Product Requirements Document, 38 pages — the full specification |
| [FocusFlow_PRD_v2.docx](FocusFlow_PRD_v2.docx) | Same document, editable in Word |
| [FocusFlow_PRD_v2.html](FocusFlow_PRD_v2.html) | Same document, viewable in a browser |
| [PRD.md](PRD.md) | PRD v1 draft in Markdown (superseded by v2) |
| [FEATURES.md](FEATURES.md) | Feature inventory from user interviews |

### PRD at a glance

The PRD contains 19 sections and 3 appendices, covering:

- Problem analysis, product vision, and 8 product principles
- Primary and secondary personas
- North Star metric and 5 metric groups with targets, plus explicit counter-metrics
- 7 end-to-end user journeys with measurable success conditions
- **122 functional requirements** across 12 capability areas, each with priority and acceptance criterion
- 14 non-functional requirements
- Interaction rules, notification policy, and AI guardrails
- 16 release success criteria
- 14 risks with early warning signals, 10 open questions
- Requirement traceability matrix and screen inventory

### Implementation plan at a glance

**Two ways to start:**

| Route | For |
|---|---|
| **Fast Track** (Section 1A) | Getting something real running fast. A 10-day prototype you can test with a few people, designed to become the foundation rather than be thrown away. Plain language, no assumed experience. |
| **Full plan** (Phases 0–12 below) | Building the complete product with design system, architecture, and beta validation. Roughly 22 to 27 weeks. |

**Recommended:** start with the Fast Track. It validates the core idea cheaply and everything it skips can be added afterwards without starting over. Section 1B explains how.

#### The Fast Track in brief

Ten days to a working app that builds your day and explains its choices. The whole product in miniature.

Three decisions on day one make everything else cheap to add later instead of a rewrite:

1. Every task gets an empty slot for a goal, even though goals do not exist yet
2. Meetings are stored the same way as blocks, with a label saying where they came from
3. Reasoning is saved as separate facts, not as finished sentences

Then: days 2–4 scheduler, days 5–6 day view, day 7 moving things, day 8 replanning, day 9 not falling over, day 10 testing.

The prototype cannot tell you whether people will keep using this. It tells you whether the core idea lands. Those are different questions and it is worth keeping them apart.

#### The full 13 phases

| Phase | Name | Est. | Delivers |
|---|---|---|---|
| 0 | Resolve Blockers | 3–5d | Decisions that prevent building from starting |
| 1 | Thesis Validation | 5–7d | Manual test of whether energy-aware scheduling is perceptible |
| 2 | Design System | 10–15d | Tokens, components, accessibility baseline |
| 3 | Architecture | 5–8d | 11 decisions with consequences and revisit triggers |
| 4 | Foundations | 15–20d | Data model, capture, goals, projects, tasks |
| 5 | Prioritisation + Scheduling | 15–20d | Ranking, energy-aware day plan, reasoning |
| 6 | The Daily Loop | 15–20d | Morning plan, focus mode, evening review, replan |
| 7 | Routines + Reflection | 10–12d | Routines, journal, week continuity |
| 8 | Progress + Insights | 12–15d | Progress view, insight feed, weekly review |
| 9 | Coaching Layer | 10–12d | Morning briefing, overload, journal interrogation |
| 10 | Onboarding + Launch Readiness | 12–15d | Guided setup, notification policy, export, hardening |
| 11 | Beta | 4wk | Real users, measurement, iteration |
| 12 | Post-Launch | ongoing | Leaderboard decision, V2 candidates |

**Every phase ends with the same check-in:** run the exit criteria, live one real day, write friction notes before discussing them, then fix, defer, or reverse. Defects are never carried forward, and reversal is always a valid outcome.

### Where the plan is opinionated

Three positions worth knowing before you read it, because they shape everything downstream:

1. **Phase 1 tests the core thesis before automating it.** If users cannot articulate why an energy-ordered day differs from a clock-ordered one, the differentiator is decorative. Finding that out costs a week instead of a scheduler rebuild.
2. **The design system bans red entirely** — reserved for genuine input errors where the user must fix something. Overdue work reads neutral. This is a constraint that will be debated by designers, recorded here as a decision rather than a suggestion.
3. **The coach is the first thing to cut** if time runs short. Everything it does is an enhancement to work the product already does.

The plan also records three requirement discrepancies between PRD v1 and v2, with v2 marked authoritative.

## Status

Pre-build, awaiting Phase 0. Two decisions block all development:

1. **Consistency score weighting** — task completion, goal progress, or ritual adherence? A leaderboard ranked on a contested metric is unfair. The plan recommends goal progression, with ritual adherence tracked separately as a private retention metric.
2. **Energy signal sourcing** — what is the minimum viable set, and can it be learned without explicit user input? This is the core differentiator. The plan recommends declared-plus-observed: onboarding collects an energy curve to unblock the cold start, then observed completion data refines it and every adjustment is disclosed.

Both can be decided in an afternoon. Until they are, no code should be written — the scheduling engine and the score formula would both need rebuilding.

## License

Private project. All rights reserved.

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

## Status

Pre-build. The following open questions block development start:

1. **Consistency score weighting** — task completion, goal progress, or ritual adherence? A leaderboard ranked on a contested metric is unfair.
2. **Energy signal sourcing** — what is the minimum viable set, and can it be learned without explicit user input? This is the core differentiator.

## License

Private project. All rights reserved.

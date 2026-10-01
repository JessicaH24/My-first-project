# Product Requirements Document — FocusFlow

| Field | Value |
|---|---|
| Product | FocusFlow (working name) |
| Version | 1.0 — Initial Draft |
| Status | Draft for review |
| Date | 1 October 2026 |
| Primary audience | Busy professionals |

---

## 1. Document Purpose

This document defines what FocusFlow must do, why it must do it, and how we will judge whether it succeeded. It covers the experience and behaviour of the product. Technical design, architecture, and engineering specifications are documented separately.

---

## 2. Problem Statement

Busy professionals have more tools than ever and less clarity. They own to-do lists, calendars, habit trackers, and journals, but these operate in isolation:

- **Tasks are disconnected from ambition.** A list of 40 items says nothing about whether any of it matters. People stay busy without advancing.
- **Time is planned on a flat canvas.** Calendars treat a deep writing task the same as refilling the water cooler. Energy is never considered.
- **Planning is manual and repetitive.** Rebuilding tomorrow every night is a chore, so most people stop and drift into reactive mode.
- **Reflection is missing.** No tool prompts the user to ask what worked, why things slipped, or whether the plan still makes sense.
- **Failure is punishing.** Streaks break, lists grow, and overdue items accumulate until the app feels like a record of guilt.
- **Insight is missing.** Users generate months of behavioural data and learn nothing from it.

Existing apps solve one of these problems well and the rest not at all. The result is a toolbelt full of apps and no coherent sense of direction.

---

## 3. Product Vision

**FocusFlow turns intention into a schedule, and a schedule into results.**

A single place where a busy professional defines what they are working toward, captures everything that crosses their mind without breaking focus, and receives a realistic, energy-aware plan for each day — then reflects honestly on how it went.

---

## 4. Product Principles

These are decision criteria. When trade-offs arise, these principles resolve them.

1. **Goals are the spine.** Nothing exists without a reason. Every task, project, and routine traces back to a goal or a stated life obligation.
2. **Protect the user's attention, not just their time.** Friction in capture and planning is the real enemy. The app must be faster than the alternative (nothing, or a notes app).
3. **Plan for the human, not the ideal.** Schedules respect energy, boundaries, and reality. An impossible plan is worse than no plan.
4. **Forgiving by design.** Plans will break. The app treats a missed task as normal input to be re-planned, never as failure to be punished.
5. **Reflection is part of the work.** A plan without reflection produces motion, not progress. Review is built into the daily flow, not left to willpower.
6. **The app is right or it is silent.** The coach speaks when it has something useful to say and stays quiet otherwise. Silence is a feature.
7. **Show the reasoning.** Every automated suggestion can explain itself. Users must be able to see why the app chose something.
8. **Small surface, deep habit.** Five core surfaces, used daily, beat thirty features used once.

---

## 5. Target Users

### Primary Persona — The Overloaded Professional

| Attribute | Detail |
|---|---|
| Role | Mid-career professional, 30–45, knowledge work |
| Context | Full calendar of meetings, family obligations, 3–5 personal ambitions |
| Skill | Knows what matters, lacks the time and structure to protect it |
| Current tools | Calendar, a to-do app, a journal app, none integrated |
| Pain | Busy all day, ends it unsure what actually moved forward |
| Motivation | Career growth, health, relationships, financial security |
| Willingness to invest | 5 minutes morning, 3–5 minutes evening, under 10 minutes onboarding |

### Secondary Personas

- **The Ambitious Planner** — Already has good habits, wants deeper insight into patterns and honest performance feedback.
- **The Overwhelmed Returner** — Tried a productivity app, quit after a bad week, needs a product that does not punish a miss.

### Explicitly Out of Scope for V1

Students as a primary market, team and shared workspaces, multi-user collaboration, and general-purpose team project management.

---

## 6. Product Goals and Success Metrics

### 6.1 Objectives

| # | Objective | Why it matters |
|---|---|---|
| O1 | Users connect daily work to stated goals | Ensures effort is directed rather than reactive |
| O2 | Users stop hand-building their day | Removes the planning chore that causes abandonment |
| O3 | Users reflect daily on what worked | Converts activity into learning and course correction |
| O4 | Users persist past setbacks | Long-term habit formation and compounding results |
| O5 | Users gain genuine insight into their own behaviour | Delivers the "it actually helps" feeling competitors fail to provide |

### 6.2 Key Success Metrics

**Activation**
- Onboarding completion rate (target: ≥ 70%)
- First day fully planned within 24 hours of signup (target: ≥ 55%)
- Three or more goals defined in first session (target: ≥ 65%)

**Engagement (the daily loop)**
- Day 7 and Day 30 retention (target: ≥ 40% / ≥ 25%)
- Morning plan completion rate (target: ≥ 65% of active days)
- Evening review completion rate (target: ≥ 55% of active days)
- Daily active users opening the app at least once (target: ≥ 45% of activated users)

**Outcome value**
- Tasks linked to a goal (target: ≥ 80% of all created tasks)
- Weekly review completion rate (target: ≥ 50% of active users)
- Goals that reach their target date or are deliberately revised, versus abandoned (target: ≥ 60% resolved rather than dropped)
- Users reporting the app surfaced an insight they found useful (target: ≥ 50% of weekly active users)

**Forgiveness**
- Users recovering from a missed day within 24 hours (target: ≥ 65%)
- Notifiable churn immediately following a broken streak (target: ≤ 10%)

**Quality**
- Auto-schedule accepted without manual rearrangement (target: ≥ 70% of blocks)
- Task estimate accuracy within 20% after four weeks of use (target: ≥ 60% of tasks)
- Reminder dismissal rate (target: ≤ 20% — a proxy for notification relevance)

### 6.3 Counter-Metrics (guard against gaming the work)

- **Task-creation volume** — monitored but explicitly not a success signal. A user who creates 10 tasks and completes 2 is failing, not succeeding.
- **Session length** — not a success signal. Short, frequent, purposeful sessions are the goal.
- **Notification engagement** — high open rates on reminders indicate a poorly tuned product, not an engaged one.

---

## 7. Scope

### 7.1 In Scope for V1

- Goal → Project → Task hierarchy with progress tracking
- Voice and text quick capture with intelligent parsing
- Customizable prioritization frameworks
- Energy-aware automatic daily scheduling
- Two-way calendar sync (Google, Outlook, Apple)
- Morning plan and evening review daily loop
- Automatic replan with user consent
- Focus mode with distraction blocking
- Flexible routines inside the planner
- Day-linked journaling with guided prompts
- Goal progress view and automatic insight feed
- Consistency scoring, streaks, and an optional weekly top-20 leaderboard
- Proactive AI coach for briefing, overload detection, and reflection
- Smart, user-controlled reminders
- Guided onboarding

### 7.2 Out of Scope for V1

| Excluded | Rationale |
|---|---|
| Team workspaces and shared projects | Changes the product from personal to collaborative; different architecture and moderation needs |
| Real-time collaboration | Premature without team features |
| File and document management | Not a productivity gap; storage tools already exist |
| Built-in communication (chat, email) | Massive scope, low differentiation |
| Third-party app marketplace | Requires a mature core first |
| Habit tracking as a separate system | Contradicts the single-system principle; routines cover this |
| Custom automation and rule builder | Valuable but confusing; revisit after users understand the core loop |
| Cross-platform desktop apps | Mobile-first and web; desktop is a later phase |

### 7.3 Explicit Design Rejections

- **No rigid habit tracker.** A second parallel system competes with the planner and fragments attention.
- **No points, badges, or achievement unlockables.** These convert meaningful work into a game and undermine intrinsic motivation.
- **No guilt-inducing language.** No red overdue walls, no "you failed" messaging, no punitive streak resets.
- **No real-name leaderboard.** Public rankings expose personal productivity data and invite comparison that damages the target user.

---

## 8. Core User Journeys

### 8.1 First Run — Onboarding to First Plan

1. User sees a three-step setup: goals, schedule, framework.
2. User names 3 goals with target dates and adds a target outcome for each.
3. User defines working hours, commute, protected personal time, and energy pattern.
4. User selects a prioritization framework.
5. User connects a calendar.
6. The app generates a realistic first week and the user lands on today's plan.

**Success condition:** User is looking at a populated, believable day within 10 minutes.

### 8.2 Capture During Work

1. User is interrupted mid-task with something on their mind.
2. User speaks or types a fragment, e.g. "Email Sarah about the contract tomorrow at 3pm, urgent".
3. The app parses action, time, and priority, and files it to the inbox.
4. User continues working. No further decision required.

**Success condition:** Capture takes under five seconds and one interaction.

### 8.3 Morning Plan

1. User receives a morning prompt at their chosen time.
2. The app presents today's schedule and the Top 3 priorities with reasoning.
3. User accepts, or makes quick adjustments.
4. User logs current energy with one tap.
5. The day is locked and confirmed.

**Success condition:** Under 5 minutes, ending with clear intent for the day.

### 8.4 Executing with Focus

1. User opens a scheduled block and starts focus mode.
2. Notifications are silenced and distracting apps blocked for the session.
3. User completes the work; breaks are suggested based on their energy curve.
4. On finish, the user logs what was accomplished and whether the estimate was accurate.

**Success condition:** A protected, uninterrupted block with accurate future estimates.

### 8.5 Evening Review

1. User receives an evening prompt.
2. The coach asks 3–5 questions: what was completed, what was not, what worked, what got in the way, energy and mood, one win, one lesson.
3. User answers and optionally writes a journal entry.
4. The coach offers one observation or question based on the answers.
5. The app proposes tomorrow's plan.

**Success condition:** Under 5 minutes, ending with a lesson and a plan.

### 8.6 Recovery from a Missed Day

1. User did not complete yesterday's plan and has not opened the app.
2. The app opens without shame, streak warnings, or a backlog wall.
3. It explains what shifted and proposes a realistic new plan.
4. User accepts with one tap, or adjusts.

**Success condition:** The user is back in the loop the same day with a plan they believe.

### 8.7 Weekly Review and Course Correction

1. User receives a weekly summary.
2. The app shows what advanced, what stalled, and the consistency score.
3. The insight feed surfaces observed patterns.
4. The coach recommends specific actions: continue, adjust, or drop.
5. User revises goals and the following week is regenerated.

**Success condition:** The user makes at least one deliberate decision about direction.

---

## 9. Functional Requirements

Requirements are ordered by priority within each area: **Must** (V1 required), **Should** (V1 desirable), **Could** (post-V1 candidate).

### 9.1 Goals, Projects and Tasks

| ID | Requirement | Priority |
|---|---|---|
| G1 | Users can create goals with a title, target date, and target outcome | Must |
| G2 | The system limits active goals to a recommended maximum of 5 and warns above it | Must |
| G3 | Users can create projects nested under a goal | Must |
| G4 | Users can create tasks nested under a project, with an estimated duration, difficulty, optional deadline, and priority | Must |
| G5 | Tasks can also be created without a project when the user has not decided where they belong | Should |
| G6 | The goal progress view shows completion percentage, next actions, and current blockers | Must |
| G7 | The system flags goals with no recent activity and prompts the user to act or cut them | Must |
| G8 | The system warns when goals compete for the same limited time in a period | Should |
| G9 | Users can complete, delete, or archive any goal, project, or task | Must |
| G10 | Every task is traceable to a goal through its project | Must |
| G11 | Users can see a full list of all tasks belonging to a goal across projects | Should |
| G12 | Users can define a life obligation outside the goal system (e.g. parenting) as a fixed time commitment | Could |

### 9.2 Quick Capture

| ID | Requirement | Priority |
|---|---|---|
| C1 | Users can capture by voice without leaving the current screen | Must |
| C2 | Voice capture is transcribed and converted into a task, note, or journal line | Must |
| C3 | Users can type naturally and the system extracts action, date, time, priority, and goal context | Must |
| C4 | All captured items land in a single inbox for later triage | Must |
| C5 | When parsing is ambiguous, the system asks exactly one short clarifying question | Must |
| C6 | Capture is reachable from anywhere in the app in at most one interaction | Must |
| C7 | The system prompts the user to clear the inbox daily | Should |
| C8 | Inbox items can be filed, merged, or discarded in bulk | Should |
| C9 | Users can dictate a journal entry rather than a task from the same capture surface | Should |
| C10 | Users can capture a rough idea and have the system break it into concrete next actions | Could |

### 9.3 Prioritization

| ID | Requirement | Priority |
|---|---|---|
| P1 | Users can select from at least three frameworks: Eisenhower matrix, Impact vs Effort, and a custom model | Must |
| P2 | The selected framework scores every task and produces a ranked order | Must |
| P3 | Every ranking displays the reasoning that produced it | Must |
| P4 | The system identifies the Top 3 priorities for the day | Must |
| P5 | The system actively suggests what to drop, defer, or delegate | Must |
| P6 | Users can weight goals so the system can arbitrate between them | Should |
| P7 | Users can define custom prioritization criteria beyond the built-in frameworks | Should |
| P8 | Users can override any ranking and have the system respect that choice going forward | Must |

### 9.4 Auto-Scheduled Day

| ID | Requirement | Priority |
|---|---|---|
| S1 | The system builds a day plan automatically from prioritized tasks, routines, and fixed commitments | Must |
| S2 | The system matches task difficulty to time of day using the user's defined energy pattern | Must |
| S3 | The system places deadline-critical and high-impact work in the most favorable available slots | Must |
| S4 | Planning respects working hours, commute, and protected personal time | Must |
| S5 | Focus sessions and recovery breaks are included in the generated plan | Must |
| S6 | Users can drag, resize, move, or reject any block; the system absorbs the change and re-plans the remainder | Must |
| S7 | The system explains why each block was placed where it was | Must |
| S8 | Two-way calendar sync with Google, Outlook, and Apple Calendar; external events block time | Must |
| S9 | The system avoids scheduling tasks in conflict with synced calendar events | Must |
| S10 | The user can regenerate a day's plan without losing completed work | Should |
| S11 | The system keeps a buffer for overruns and unexpected work | Should |
| S12 | The system accounts for historical actual time versus estimated time | Should |
| S13 | Plans can be generated several days ahead | Could |

### 9.5 The Daily Loop

| ID | Requirement | Priority |
|---|---|---|
| D1 | A morning plan prompt appears at a user-chosen time | Must |
| D2 | The morning plan presents the schedule, Top 3, and a one-tap energy log | Must |
| D3 | The user can accept or adjust the morning plan quickly | Must |
| D4 | An evening review prompt appears at a user-chosen time | Must |
| D5 | The evening review asks 3–5 questions covering completion, obstacles, energy, mood, one win, and one lesson | Must |
| D6 | The evening review is completable in under 5 minutes | Must |
| D7 | The system proposes a revised plan when the day is not completed, showing what was cut, what was pushed, and why | Must |
| D8 | The proposed replan is accepted with one tap or adjustable before acceptance | Must |
| D9 | Missed work never results in punishment, warnings, or streak loss on unrelated tasks | Must |
| D10 | The morning and evening rituals can be scheduled, snoozed, or skipped without penalty | Should |
| D11 | The evening review feeds the next day's scheduling and prioritization | Must |

### 9.6 Focus Mode

| ID | Requirement | Priority |
|---|---|---|
| F1 | A focus session can be started from any scheduled block with one action | Must |
| F2 | Focus mode silences notifications for the session duration | Must |
| F3 | Focus mode can block user-configured distracting apps | Must |
| F4 | Breaks are suggested based on the user's energy curve rather than fixed intervals | Should |
| F5 | On completion, the user logs what was accomplished and whether the estimate was accurate | Must |
| F6 | Focus session data improves future task estimates | Must |
| F7 | Users can choose a session length or let the system pick from the estimate | Should |
| F8 | An ambient session mode that plays a focus sound is available | Could |

### 9.7 Routines

| ID | Requirement | Priority |
|---|---|---|
| R1 | Users can create routines with a name, cadence, and preferred time | Must |
| R2 | Cadence options include daily, weekdays, a selected set of days, and a custom weekly count | Must |
| R3 | Routines are scheduled into the day plan like any other task | Must |
| R4 | Consistency is tracked per routine | Must |
| R5 | Slippage is surfaced gently, without shaming | Must |
| R6 | Routines can be paused without losing history | Must |
| R7 | Routines can be linked to a goal | Should |
| R8 | Routines can auto-suggest a streak after consistent completion | Should |

### 9.8 Journaling

| ID | Requirement | Priority |
|---|---|---|
| J1 | Every journal entry is attached to a specific date | Must |
| J2 | Entries can reference the tasks and goals of that day | Must |
| J3 | The coach offers guided prompts relevant to that day's work | Must |
| J4 | Users can write free-form entries with mood and gratitude capture | Must |
| J5 | Entries are searchable and filterable by date, mood, goal, and text | Must |
| J6 | Entries are grouped into weeks and months to reveal patterns | Should |
| J7 | The coach asks follow-up questions that probe the user's reasoning | Must |
| J8 | Users can export their journal entries | Should |
| J9 | Users can attach images to entries | Could |

### 9.9 Progress, Insights and Motivation

| ID | Requirement | Priority |
|---|---|---|
| I1 | A goal progress view shows how far along each goal is, in a simple and scannable format | Must |
| I2 | An insight feed surfaces patterns automatically without user effort | Must |
| I3 | Insights cite the behavior they are based on | Must |
| I4 | A weekly review shows what advanced, what stalled, and the consistency score | Must |
| I5 | The weekly review supports course correction — continue, adjust, or drop | Must |
| I6 | A consistency score is calculated each week from completed versus uncompleted tasks | Must |
| I7 | A strengths and weaknesses breakdown shows where the user excels and where they fall short | Must |
| I8 | Streaks exist for the daily rituals and routines | Should |
| I9 | Streak framing is compassionate and does not punish a single break | Must |
| I10 | An optional weekly leaderboard ranks the 20 most consistent users by display name only | Should |
| I11 | Users can opt out of the leaderboard and remain fully functional | Must |
| I12 | The leaderboard shows a user's own rank even when opted out | Could |
| I13 | Users can see their history across any past week | Should |

### 9.10 Proactive AI Coach

| ID | Requirement | Priority |
|---|---|---|
| A1 | The coach delivers a short morning briefing on the day ahead | Must |
| A2 | The coach detects over-committed days and recommends specific removals | Must |
| A3 | The coach asks probing follow-up questions during journaling | Must |
| A4 | The coach recognizes patterns across weeks, such as task types that consistently slip | Must |
| A5 | The coach recommends dropping or rewriting goals that no longer serve the user | Must |
| A6 | The coach breaks vague captured ideas into concrete next actions | Should |
| A7 | The coach stays silent when it has nothing useful to contribute | Must |
| A8 | All coach output can be dismissed or acted on | Must |
| A9 | The coach can be muted except for essential alerts | Should |
| A10 | The coach explains the basis for any recommendation it makes | Must |

### 9.11 Reminders

| ID | Requirement | Priority |
|---|---|---|
| N1 | A nudge when a scheduled block begins | Must |
| N2 | A gentle alert when the day is falling significantly behind | Must |
| N3 | Prompts for the morning plan and evening review at chosen times | Must |
| N4 | Every reminder category can be adjusted, snoozed, or silenced | Must |
| N5 | Default notification volume is low | Must |
| N6 | No notification uses guilt-inducing or shame-based language | Must |
| N7 | Reminder timing adapts to observed user behavior | Should |

### 9.12 Onboarding

| ID | Requirement | Priority |
|---|---|---|
| B1 | The user sets up to 3 goals with target dates | Must |
| B2 | The user defines working hours, boundaries, and an energy pattern | Must |
| B3 | The user selects a prioritization framework | Must |
| B4 | The user can connect a calendar, and can skip this step | Must |
| B5 | The app generates the first week automatically | Must |
| B6 | Onboarding completes in under 10 minutes | Must |
| B7 | Onboarding can be skipped and resumed later, retaining partial setup | Should |
| B8 | The user can import existing goals and tasks from another service | Could |

---

## 10. Non-Functional Requirements

*These describe quality expectations for the experience, not technical specifications.*

| ID | Requirement | Priority |
|---|---|---|
| Q1 | **Responsiveness** — The app opens instantly and every core action completes without perceptible delay. Any wait shows meaningful progress, never a frozen screen. | Must |
| Q2 | **Interruption safety** — No user input is ever lost. A user who is interrupted mid-capture or mid-journal returns to exactly where they were. | Must |
| Q3 | **Accessible by default** — Full support for screen readers, keyboard-only navigation, adjustable text size, and colour choices that do not rely on colour alone. Meets WCAG AA. | Must |
| Q4 | **Available when needed** — The app remains fully usable for capture, planning, and review without an internet connection, and syncs when connectivity returns. | Must |
| Q5 | **Low cognitive load** — Any screen presents a clear single next action. No screen requires reading more than a short paragraph to understand what to do. | Must |
| Q6 | **Data ownership** — Users can export everything: tasks, goals, journal entries, and insights. Export is complete, readable, and not gated behind a paid tier. | Must |
| Q7 | **Privacy by default** — Personal journal content is private unless explicitly shared. Leaderboard participation is opt-in. No personal productivity data is sold. | Must |
| Q7a | **Transparent AI** — Users are told when AI is involved, can correct it, and can turn off AI features that are not essential to core function. | Must |
| Q8 | **Durability** — Unsent work is saved continuously, not on demand. | Must |
| Q9 | **Learnable in one session** — A first-time user can complete their first day without instruction. | Must |
| Q10 | **Consistent cross-device experience** — Progress and data are consistent across all devices the user owns. | Must |
| Q11 | **Bounded battery and data use** — Background activity is proportionate, and focus mode does not drain the device faster than the session length justifies. | Should |
| Q12 | **Right language throughout** — Calm, direct, and non-judgmental. The app never implies the user has failed. | Must |

---

## 11. Success Criteria for V1

The release is considered successful when:

1. **Users reach a usable plan fast.** ≥ 70% complete onboarding; ≥ 55% have a fully planned first day within 24 hours.
2. **The daily loop sticks.** ≥ 40% Day 7 and ≥ 25% Day 30 retention; ≥ 65% morning plan and ≥ 55% evening review completion on active days.
3. **Plans are believed.** ≥ 70% of auto-scheduled blocks are accepted without manual rearrangement.
4. **Effort reaches goals.** ≥ 80% of tasks are linked to a goal; ≥ 60% of goals reach their date or are deliberately revised rather than abandoned.
5. **Users recover from setbacks.** ≥ 65% of users return within 24 hours of a missed day.
6. **Insight is real.** ≥ 50% of weekly active users report finding a useful surfaced insight.
7. **Nobody is punished.** Churn immediately following a broken streak stays ≤ 10%; reminder dismissal stays ≤ 20%.
8. **Quality is non-negotiable.** No data loss, no lost entries, WCAG AA met, full export available.

---

## 12. Risks and Mitigations

| # | Risk | Severity | Mitigation |
|---|---|---|---|
| 1 | **The daily loop feels like homework.** Two rituals per day may be too much. | High | Keep morning under 5 minutes and evening under 5. Progression is the reward, not the app's features. |
| 2 | **Auto-scheduling feels wrong on first contact.** A wrong plan destroys trust faster than no plan. | High | Show reasoning for every block, make the first week easy to correct, and learn from every acceptance and rejection. |
| 3 | **Capture friction loses the user mid-thought.** | High | One interaction from anywhere, and treat capture as the highest-polished flow in the product. |
| 4 | **The leaderboard backfires.** Public productivity ranking may demotivate or expose users. | High | Opt-in only, display names, persistent opt-out, and no ranking of users who have opted out. |
| 5 | **AI output undermines credibility.** One bad recommendation erases a hundred good ones. | High | Every suggestion explains itself and is correctable. The coach stays silent rather than speculative. |
| 6 | **Energy patterns do not generalize.** Users' energy shifts week to week. | High | Treat the pattern as a starting assumption the user revises, and adapt from observed data. |
| 7 | **Goal sprawl.** Users define twelve goals and achieve none. | Medium | Recommend a 5-goal maximum, warn on competition for time, and push course correction in the weekly review. |
| 8 | **Journaling is abandoned in week two.** | Medium | Tie entries to the day's real work, keep prompts to 3–5, and surface past entries in the insight feed. |
| 9 | **Reminder fatigue.** | Medium | Default to minimal. Measure dismissal rate as a quality signal, not an engagement one. |
| 10 | **Scope dilution.** V1 attempts everything and ships nothing usable. | High | Protect the Must requirements. The daily loop, auto-scheduling, and reflection are non-negotiable; the rest can follow. |

---

## 13. Open Questions

| # | Question | Owner | Needed By |
|---|---|---|---|
| 1 | Should the leaderboard be a launch feature or introduced after retention is proven? Risk 4 suggests later. | Product | Before build |
| 2 | How are consistency scores weighted — task completion, goal progress, or ritual adherence? | Product + User | Before build |
| 3 | What is the minimum viable set of energy signals, and can it be learned without explicit user input? | Product | Before build |
| 4 | Should long-running goals be annual or quarterly by default? | Product | Before build |
| 5 | How are AI coach features communicated to users who are sceptical of AI? | Product + Design | Before design |
| 6 | Does distraction blocking need to be native, or is user-side assistance acceptable at launch? | Product | Before build |
| 7 | What is the plan for users whose working hours are irregular or shift-based? | Product | Before design |
| 8 | Is there a free tier, and if so, which features gate access? | Business | Before build |

---

## 14. Related Documents

- `FEATURES.md` — Feature inventory derived from user interviews
- Product design specification — *not yet written*
- Screen-by-screen application structure — *not yet written*
- Prioritised build roadmap — *not yet written*
- Technical architecture — *not yet written, out of scope for this document*

---

## 15. Sign-Off

| Role | Name | Date | Status |
|---|---|---|---|
| Product Owner | | | Pending |
| Design Lead | | | Pending |
| Engineering Lead | | | Pending |

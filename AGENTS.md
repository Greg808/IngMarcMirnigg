# AGENTS.md

## Purpose

This document defines the engineering principles for this project.

All implementation decisions should follow these principles unless `docs/PRD.md` explicitly states otherwise.

---

# Core Principles

## KISS

Choose the simplest solution that completely satisfies the requirement.

Avoid unnecessary abstractions, overengineering and complexity.

---

## Principle of Least Power

Always prefer the least powerful technology capable of solving the problem.

Decision order:

1. HTML
2. CSS
3. Astro
4. TypeScript
5. Client-side JavaScript (only if absolutely necessary)

---

## Progressive Enhancement

The website must remain fully usable without client-side JavaScript.

JavaScript may improve the experience but must never be required for core functionality.

---

## Accessibility First

Accessibility is a core requirement.

Always prefer semantic HTML over ARIA.

Use native HTML controls whenever possible.

Support:

- keyboard navigation
- visible focus states
- screen readers
- reduced motion
- sufficient contrast

---

## Performance First

Every dependency has a cost.

Before adding a dependency ask:

- Can HTML solve this?
- Can CSS solve this?
- Can Astro solve this?

Only introduce additional JavaScript or libraries when there is a clear benefit.

---

## Content over Technology

The website exists to communicate the client's business.

Technology must never become the focus.

Always optimise for:

- clarity
- readability
- usability
- maintainability

---

# Code Quality

- TypeScript strict mode
- Keep files small
- Keep components focused
- Prefer composition over inheritance
- Avoid premature abstraction
- Remove dead code immediately
- Use descriptive names
- Keep business logic separate from presentation

---

# Styling

- Mobile First
- Modern CSS
- CSS Grid
- Flexbox
- CSS Custom Properties
- Respect `prefers-reduced-motion`
- Keep animations subtle and meaningful
- Avoid unnecessary utility classes

---

# Components

Components should:

- have one responsibility
- receive structured data via props
- avoid business logic
- avoid hidden side effects
- avoid hardcoded company content
- stay reusable without becoming generic frameworks

---

# Content

Business data must have a single source of truth.

Never duplicate:

- company name
- phone number
- email
- address
- services
- navigation
- SEO data

UI renders data.

UI never owns business data.

---

# SEO

Prefer:

- semantic HTML
- correct heading hierarchy
- descriptive links
- descriptive image alt texts
- meaningful metadata
- structured data when appropriate

Never optimise for search engines at the expense of usability.

---

# Review Checklist

Before considering a task complete verify:

- Project builds successfully
- No TypeScript errors
- No console errors
- Responsive layout works
- Keyboard navigation works
- Semantic HTML is used
- No unnecessary dependencies
- Business data is not duplicated
- Implementation follows `docs/PRD.md`

---

# Decision Rule

When multiple solutions are correct choose the one that is:

1. Easier to understand
2. Easier to maintain
3. More accessible
4. More performant
5. Simpler

Only choose a more complex solution if there is a documented benefit.

---

# Workflow

For every implementation task:

1. Read `docs/PRD.md`.
2. Identify affected files.
3. Create a short implementation plan.
4. Implement the smallest working solution.
5. Verify TypeScript.
6. Verify accessibility.
7. Verify responsive behaviour.
8. Self-review the implementation.

If requirements are ambiguous:

- Stop implementation.
- Explain what is unclear.
- Ask focused questions.
- Wait for clarification.

Never guess.

---

# Anti-Patterns

Avoid:

- unnecessary dependencies
- overengineering
- premature abstraction
- duplicated business data
- deeply nested components
- magic numbers
- hardcoded strings
- unnecessary client-side JavaScript
- unnecessary animations
- unnecessary state management

Always prefer simple, explicit and maintainable solutions.


⸻

# Engineering Principles

Simplicity First

Wähle die einfachste Lösung, welche die konkrete Anforderung vollständig erfüllt.

Principle of Least Power

Verwende die am wenigsten mächtige Technologie, die zur Lösung ausreicht.

Bevorzugte Reihenfolge:

1. HTML
2. CSS
3. Astro zur Strukturierung und statischen Generierung
4. JavaScript nur bei tatsächlichem Bedarf

Content over Technology

Die Technik dient dem Inhalt und darf nicht vom Unternehmen oder dessen Leistungen ablenken.

Progressive Enhancement

Die Grundfunktionen müssen ohne JavaScript verfügbar sein.

Accessibility is not optional

Barrierefreiheit ist Teil der Implementierung und nicht nur eine abschließende Optimierung.

Honest Design

Keine unbelegbaren Aussagen, künstliche Verknappung, Fake-Bewertungen oder irreführenden Nachhaltigkeitsversprechen.

Real Content First

Verwende frühzeitig echte Unternehmensinhalte. Platzhaltertexte sollen nur eingesetzt werden, wenn Informationen tatsächlich noch fehlen.

Avoid Premature Abstraction

Erstelle keine generischen Systeme oder Abstraktionen, solange dafür kein konkreter Wiederverwendungsbedarf besteht.

Dependencies

Eine neue Dependency darf nur eingeführt werden, wenn ihr konkreter Nutzen die zusätzliche Komplexität rechtfertigt.

Vor der Installation muss geprüft werden, ob die Anforderung mit Astro, HTML oder CSS lösbar ist.

⸻

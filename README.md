# BeetleX Hackathon Platform

A modern frontend-only Hackathon Management Platform built as part of the BeetleX Frontend Developer Assignment.

The platform enables participants, judges, and organizers to manage hackathons through dedicated dashboards, event discovery, registration flows, and project submissions.

---

## Live Features

### Landing Page

* Hero Section
* Animated Mascot
* Floating Ecosystem Cards
* Sponsors Marquee
* About Section
* Event Timeline
* Prize Tracks
* FAQ Section
* Leaderboard Preview
* CTA Section
* Responsive Glassmorphism Navbar
* Dark / Light Theme Support

---

### Event Discovery

#### Event Listing Page

* Event Search
* Track Filters
* Status Filters
* Mode Filters
* Responsive Event Grid
* Empty States

#### Event Details Page

* Event Overview
* Tracks & Categories
* Timeline
* FAQ
* Dynamic Route Support

---

### Registration Flow

* Multi-Step Registration
* Personal Information
* Team Information
* Review & Confirmation
* Success Screen
* Zustand State Management

---

### Team Dashboard

* Team Statistics
* Joined Events
* Team Members
* Upcoming Deadlines
* Submission Progress
* Dashboard Analytics

---

### Judge Dashboard

* Assigned Projects
* Evaluation Queue
* Recent Scores
* Review Progress
* Project Status Tracking

---

### Organizer Dashboard

* Total Participants
* Registered Teams
* Active Judges
* Submissions Received
* Event Analytics
* Submission Monitoring
* Judge Assignment Tracking

---

### Project Submission

* Project Details
* GitHub Repository Link
* Demo Link
* Tech Stack Selection
* File Upload Section
* Submission Confirmation

---

### Additional Features

* Custom 404 Page
* Responsive Design
* Smooth Navigation
* Glassmorphism UI
* Neon Accent Design System
* Reusable Component Architecture

---

## Tech Stack

### Core

* React 19
* TypeScript
* Vite

### Routing

* React Router DOM

### State Management

* Zustand

### Data Layer

* React Query
* Mock Service Worker (MSW)

### Styling

* Tailwind CSS v4

### Animations

* Framer Motion

### Icons

* Lucide React

---

## Project Structure

```txt
src
│
├── app
│   ├── layouts
│   └── router
│
├── components
│   ├── landing
│   ├── events
│   ├── registration
│   ├── dashboard
│   │   ├── team
│   │   ├── judge
│   │   └── organizer
│   ├── submission
│   ├── shared
│   └── ui
│
├── pages
│   ├── events
│   ├── dashboard
│   ├── register
│   └── submission
│
├── mocks
├── store
├── types
└── utils
```

---

## Routes

### Public Routes

```txt
/
/events
/events/:slug
/register/:eventId
```

### Dashboard Routes

```txt
/dashboard/team
/dashboard/judge
/dashboard/organizer
```

### Submission Routes

```txt
/submit/:eventId
```

### Utility Routes

```txt
*
```

(404 Page)

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd beetlex-hackathon-platform
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build production bundle:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Design System

### Colors

Primary

```txt
#d7ff00
```

Secondary

```txt
#8a2eff
```

Background

```txt
#050505
```

### Theme

* Developer First
* AI Inspired
* Web3 Inspired
* Premium Startup Aesthetic
* Dark First Experience
* Glassmorphism
* Neon Glow Effects

---

## Assignment Highlights

* Fully Responsive
* Component-Driven Architecture
* Type-Safe TypeScript Implementation
* Reusable UI System
* Multiple User Dashboards
* Smooth User Experience
* Modern Frontend Best Practices

---

Built with React, TypeScript, Tailwind CSS and Framer Motion.

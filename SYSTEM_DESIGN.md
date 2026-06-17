# SYSTEM_DESIGN.md

# Q1. Real-Time Leaderboard

## Architecture

I would use WebSockets for real-time leaderboard updates because participants should see ranking changes immediately after judges submit scores.

Flow:

```text
Judge --> Scoring API --> Database --> Leaderboard Service --> Redis Pub/Sub --> WebSocket Gateway --> Participants
```

Process:

1. A judge submits a score.
2. The scoring API stores the score in the database.
3. The leaderboard service updates the participant's score in Redis.
4. An event is published through Redis Pub/Sub.
5. WebSocket servers broadcast the update to all connected participants.

I would keep leaderboard rankings in Redis Sorted Sets because ranking lookups and score updates are very fast compared to calculating rankings directly from the database every time.

## Handling Out-of-Order Updates

Network delays can cause events to arrive in the wrong order.

To avoid stale data replacing newer data, every leaderboard update should contain a version number.

Example:

```json
{
  "eventId": "hack-ai-2026",
  "version": 105
}
```

Frontend logic:

1. Store the latest version received.
2. Ignore any update with a lower version number.
3. Apply only the newest update.

## Frontend State Updates

I would use Zustand for leaderboard state management.

To keep rendering efficient:

1. Store participants in a normalized structure.
2. Update only changed entries.
3. Memoize leaderboard row components.
4. Use virtualization if the leaderboard becomes very large.

This prevents the entire leaderboard from re-rendering when only a few rows change.

## Connection Failure Handling

If the WebSocket connection drops:

1. Show a connection status indicator.
2. Retry using exponential backoff.
3. Fetch the latest leaderboard snapshot after reconnecting.
4. Fall back to polling if reconnection repeatedly fails.

This ensures users still see recent leaderboard data even during temporary network issues.

---

# Q2. Handling 50,000 Registrations in One Day

## Preventing API Hammering

Before scaling infrastructure, I would reduce unnecessary requests from the frontend.

Steps:

1. Perform client-side validation whenever possible.
2. Debounce email validation requests by around 500ms.
3. Disable the submit button while a request is processing.
4. Ignore repeated clicks until a response is received.

These small improvements can significantly reduce backend traffic during peak hours.

## Scaling the Registration Service

Flow:

```text
User --> Load Balancer --> Registration API --> Database
```

My approach would be:

1. Run multiple API instances behind a load balancer.
2. Keep application servers stateless.
3. Scale API instances horizontally when traffic increases.
4. Monitor response times and error rates.

This allows the platform to handle large traffic spikes without relying on a single server.

## Queue-Based Processing

Some operations do not need to happen before the user receives a response.

Flow:

```text
Registration --> Database --> Success Response
                    |
                    v
             Background Queue
                    |
         Email / Analytics / Notifications
```

I would move tasks such as:

1. Sending confirmation emails.
2. Analytics tracking.
3. Notification creation.

into a background queue so the registration API remains fast.

## CDN Strategy

All static assets should be served through a CDN.

Additional optimizations:

1. Compress images.
2. Enable browser caching.
3. Use code splitting.
4. Lazy load routes where possible.
5. Enable Brotli or Gzip compression.

This reduces load on the application servers.

## Handling 503 Errors

If the registration service becomes overloaded:

1. Preserve form data locally.
2. Show a clear error message.
3. Allow users to retry.
4. Optionally retry automatically after a short delay.

Example:

```text
Registration service is temporarily unavailable.

Your form data has been preserved.
Please try again in a few moments.
```

This provides a better experience than forcing users to re-enter information.

---

# Q3. Duplicate Registration Prevention

## Frontend Protection

Frontend checks improve user experience but should not be trusted as the final safeguard.

I would:

1. Disable the submit button after submission.
2. Prevent multiple clicks.
3. Check local registration state if available.

These steps reduce accidental duplicate requests.

## Backend Protection

The backend must be the source of truth.

I would enforce a unique database constraint:

```text
Unique(eventId, email)
```

This guarantees that a participant cannot register twice for the same event even if multiple requests reach the server.

## Two Tabs Scenario

Consider the following situation:

```text
Tab A --> Submit
Tab B --> Submit
```

Both requests may reach the backend almost simultaneously.

Expected result:

1. One request succeeds.
2. The second request violates the unique constraint.
3. The backend returns an error response.

This approach works even when multiple API servers are running.

## API Response Design

Instead of returning a generic error, I would return useful information.

Example:

```json
{
  "code": "ALREADY_REGISTERED",
  "registrationId": "reg_123",
  "eventId": "hack-ai-2026"
}
```

The frontend can then redirect the participant directly to their existing registration.

---

# Q4. Notification System for Announcements

## Architecture

I would use WebSockets because announcements should reach participants immediately.

Flow:

```text
Admin Dashboard --> Announcement Service --> Redis Pub/Sub --> WebSocket Gateway --> Participants
```

Whenever an organizer publishes an announcement:

1. The announcement is saved.
2. A notification event is published.
3. Connected users receive it instantly.

## Notification Types

I would use three notification surfaces.

### 1. Banner

Used for critical information.

Examples:

* Submission deadline changes
* Platform outages

### 2. Toast

Used for temporary updates.

Examples:

* Judging progress
* Submission reminders

### 3. Notification Center

Used for storing historical notifications that users may want to revisit later.

## Priority Levels

### Critical

Examples:

1. Deadline extensions.
2. Platform downtime.
3. Emergency announcements.

These should remain visible until acknowledged.

### High

Examples:

1. Judging updates.
2. Event schedule changes.

These can appear as banners and toasts.

### Informational

Examples:

1. General announcements.
2. Community updates.

These can appear inside the notification center.

## Persistence

Users should not lose notifications after refreshing the page.

I would:

1. Store notifications in the database.
2. Fetch unread notifications on login.
3. Cache recent notifications locally.

This ensures important announcements remain accessible.

## Multiple Browser Tabs

To keep notifications synchronized across tabs, I would use:

```text
BroadcastChannel API
```

Flow:

```text
Tab 1 <--> BroadcastChannel <--> Tab 2 <--> Tab 3
```

This avoids unnecessary duplicate state management between tabs.

---

# Q5. Scaling Project Submissions During the Final Hour

## Architecture

The final hour is likely to generate the highest traffic and largest uploads.

Instead of uploading files through the application server, I would use direct uploads to object storage.

Flow:

```text
Participant --> Object Storage --> Submission API --> Database
```

Benefits:

1. Reduces backend load.
2. Handles large files more efficiently.
3. Improves scalability.

## User Experience During Upload

As soon as submission begins:

1. Disable additional submissions.
2. Show upload progress.
3. Display current upload status.

Example:

```text
Uploading files...
Verifying submission...
Finalizing project...
```

This reassures users that the process is still running.

## Retry Logic

Temporary failures should be retried automatically.

Example:

```text
Attempt 1 --> Immediate
Attempt 2 --> 1 second
Attempt 3 --> 2 seconds
Attempt 4 --> 4 seconds
```

I would use exponential backoff to avoid creating additional traffic during peak load.

## Save Draft vs Final Submit

I would separate these actions clearly.

Save Draft:

1. Stores work in progress.
2. Allows editing later.
3. Does not lock the submission.

Final Submit:

1. Marks the project ready for judging.
2. Prevents further edits.
3. Records the final submission timestamp.

This reduces accidental submissions and gives participants more confidence.

## Connectivity Loss Near Deadline

If a participant loses connection shortly before the deadline:

1. Auto-save drafts regularly.
2. Store temporary data in IndexedDB.
3. Restore data after reconnecting.
4. Resume unfinished uploads when possible.

This minimizes the risk of losing work.

## Post-Deadline Behavior

The frontend should continuously monitor the event deadline.

After the deadline:

1. Disable submission actions.
2. Stop the countdown timer.
3. Switch the form to read-only mode.
4. Display a clear message indicating that submissions are closed.

Example:

```text
Submission window closed.

Thank you for participating.
```

If an upload started before the deadline, whether it is allowed to complete should depend on the event rules enforced by the backend.

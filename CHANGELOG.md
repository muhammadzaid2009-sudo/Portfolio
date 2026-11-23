# Design decisions

- Chose a quiet “case file” visual direction. The identity rail and one explicitly synthetic alert make the security subject legible without turning the page into a terminal cliché.
- Used slate paper, navy ink, steel text, cobalt links, and semantic amber only on the sample alert. The system type stack avoids remote font requests; monospace is reserved for alert and metadata fields.
- Kept the left rail on wide screens and converted it to a compact horizontal navigation on mobile. Projects use two detailed proof-of-work rows followed by three compact entries, rather than five identical cards.
- Built the home lab as a labelled SVG workflow with a text alternative. No employer data, private telemetry, photos, trackers, contact form, or remote embeds are included.
- The only automatic motion is the short alert reveal; `prefers-reduced-motion` disables it. The page remains useful if JavaScript is unavailable.
- Added a skills section with honest Hands-on, Learning now, and Planned next tiers, plus the user-provided TryHackMe progress figures.
- Added two TryHackMe learning-path certificates and the LetsDefend SOC Member badge with course summaries and completion dates from their public credential pages.
- Did not add framework dependencies, analytics, made-up metrics, ratings, testimonials, dates, or project features absent from supplied/repository content.

---
"@project44-manifest/react": minor
---

Add `rangeDisplayMode` and `onRangeSelect` props to `DateRangePicker`.

`rangeDisplayMode` controls what the closed trigger shows after picking an item from the ranges rail:

- `'range'` (default) — unchanged original behavior, always the resolved date range.
- `'preset'` — just the preset label, e.g. "Last 7 Days".
- `'presetWithRange'` — the preset label plus the resolved range, e.g. "Last 7 Days (Jun 1, 2026 - Jun 7, 2026)".

Falls back to the resolved date-range text as soon as the user edits the calendar manually. Fully backward compatible — both props are optional and default to the original behavior when omitted.

`onRangeSelect` (also added to `CalendarRange`) fires with the picked `DefinedRange` before `onChange` for the same pick (not called for manual day-by-day selection), letting consumers persist which preset produced a given range without re-deriving it by comparing dates against their own preset list.

Also exports `DefinedRange` and `CalendarRangesProps` types from the package root.

---
'@project44-manifest/react': minor
---

feat(DateRangePicker): add optional `group` to `DefinedRange` and an optional `scrollableRanges`
prop. Consecutive ranges that share a `group` render as a list section, with a separator between
groups. `scrollableRanges` caps the ranges rail at the calendar height and scrolls it. Without
either, the rail renders exactly as before.

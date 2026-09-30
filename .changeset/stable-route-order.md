---
"filesystem-routing": patch
---

Keep the manifest in scan order during dev: every added or changed route is placed by its source file, so an edited route stays put and a new one lands where a fresh scan would put it. `buildRouteTree` now breaks ties by code unit instead of `localeCompare`, so its order no longer depends on the locale.

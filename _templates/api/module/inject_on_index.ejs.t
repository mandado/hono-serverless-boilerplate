---
inject: true
to: api/index.ts
before: end of module imports
skip_if: import "./<%= name %>/module";
---
import "./<%= name %>/module";

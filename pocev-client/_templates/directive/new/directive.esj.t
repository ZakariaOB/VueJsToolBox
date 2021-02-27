---
inject: true
to: src/directives.ts
skip_if: <%= name %>
append: true
---
import '@/directives/<%= name %>.directive';
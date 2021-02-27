---
to: src/components/<%= directory %>/<%= name %>/<%= name %>.ts
---
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class <%= h.inflection.camelize(name.replace(/-/g, '_')) %> extends Vue {
}

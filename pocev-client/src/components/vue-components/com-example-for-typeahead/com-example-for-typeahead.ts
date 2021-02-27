import ComExChild from '@/components/vue-components/com-example-for-typeahead/com-ex-child/com-ex-child.vue';
import { Component, Vue } from 'vue-property-decorator';
import { LazyHandler } from './com-ex-child/com-ex-child';

@Component({
  components: {
    ComExChild,
  },
})
export default class ComExampleForTypeAhead extends Vue {
  get el(): ComExChild {
    return this.$refs.comEx as ComExChild;
  }

  public onLazy(query: string, next: LazyHandler<string>): void {
    console.log('ComExampleForTypeAhead ' + query);
    // next(["Oussam", "Zakaria", "Amina"]);

    // Or use the ref
    (this.el as any).couldUseRef(['Oussam', 'Zakaria', 'Amina']);
  }
}

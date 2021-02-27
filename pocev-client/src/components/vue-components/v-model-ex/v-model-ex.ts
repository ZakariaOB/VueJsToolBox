import EvCollapsible from '@/components/custom-components/ev-collapsible/ev-collapsible.vue';
import VModelExChild from '@/components/vue-components/v-model-ex/v-model-ex-child/v-model-ex-child.vue';
import { Component, Vue } from 'vue-property-decorator';
import { IPerson } from './types/person';

@Component({
  components: {
    VModelExChild,
    EvCollapsible,
  },
})
export default class VModelEx extends Vue {
  // You always need to init such properties for reactivity reasons
  person: IPerson = { name: 'Oussama', address: 'Boukhris' };

  get Name(): string {
    return this.person?.name;
  }

  get Address(): string {
    return this.person?.address;
  }

  mounted(): void {
    this.person = { name: 'Adam', address: 'Saleh' } as IPerson;
  }
}

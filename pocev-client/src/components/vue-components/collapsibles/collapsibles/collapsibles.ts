import  EvCollapsibleChk  from '@/components/custom-components/ev-collapsible-chk/ev-collapsible-chk.vue';
import EvCollapsible from '@/components/custom-components/ev-collapsible/ev-collapsible.vue';
import Collapsing from '@/components/custom-components/ev-collapsible/collapsing/collapsing.vue';

import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { EvCollapsibleChk, EvCollapsible, Collapsing }
})
export default class Collapsibles extends Vue {
  get title(): string {
    return 'Collapsible test checkbox';
  }
}

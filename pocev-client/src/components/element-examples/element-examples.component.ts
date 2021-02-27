import Collapsing from '@/components/custom-components/ev-collapsible/collapsing/collapsing.vue';
import { Button, Radio, Select } from 'element-ui';
import { Component, Vue } from 'vue-property-decorator';

interface ItemOption {
  label: string;
  value: string;
}

@Component({
  components: {
    Button,
    Radio,
    Collapsing,
    Select,
  },
})
export default class ElementExamples extends Vue {
  /**Select element */
  options: ItemOption[] = [];
  value: ItemOption[] = [];
  list: ItemOption[] = [];
  loading = false;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  /**End select element */

  cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

  get checkboxGroup1(): any[] {
    return ['Shanghai'];
  }

  get checkboxGroup2(): any[] {
    return ['Shanghai'];
  }

  get checkboxGroup3(): any[] {
    return ['Shanghai'];
  }

  get checkboxGroup4(): any[] {
    return ['Shanghai'];
  }

  get cities(): any[] {
    return this.cityOptions;
  }

  mounted(): void {
    this.list = this.states.map((item) => {
      return { value: `value:${item}`, label: item } as ItemOption;
    });
  }

  remoteMethod(query: string) {
    if (query !== '') {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.options = this.list.filter((item) => {
          return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
        });
      }, 2000);
    } else {
      this.options = [];
    }
  }
}

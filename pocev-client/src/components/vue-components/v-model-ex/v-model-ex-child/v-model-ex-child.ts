import { Component, Prop, Vue } from 'vue-property-decorator';
import { IPerson } from '../types/person';

@Component
export default class VModelExChild extends Vue {
  @Prop()
  value: IPerson;

  get Name(): string {
    return this.value?.name;
  }

  get Address(): string {
    return this.value?.address;
  }

  onChangeName(event: any): void {
    this.value.name = event.target.value as string;
    this.$emit('input', this.value);
  }

  onChangeAddress(event: any): void {
    this.value.address = event.target.value as string;
    this.$emit('input', this.value);
  }
}

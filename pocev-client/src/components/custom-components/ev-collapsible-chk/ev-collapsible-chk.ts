import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class EvCollapsibleChk extends Vue {
  
  @Prop({ default: '' })
  title!: string;
}

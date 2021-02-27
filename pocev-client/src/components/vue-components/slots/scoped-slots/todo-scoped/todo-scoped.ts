import { Component, Vue, Prop } from 'vue-property-decorator';
import { ITodo } from './i-todo';

@Component
export default class TodoScoped extends Vue {
    @Prop({ default: [] })
    todoList!: ITodo[];

} 
import { Component, Vue } from 'vue-property-decorator';
import UserExample from '@/components/vue-components/slots/scoped-slots/user-example/user-example.vue';
import TodoScoped from '@/components/vue-components/slots/scoped-slots/todo-scoped/todo-scoped.vue';
import { ITodo } from './scoped-slots/todo-scoped/i-todo';

@Component({
  components: {
    UserExample,
    TodoScoped,
  },
})
export default class PeSlots extends Vue {
  get title(): string {
    return 'SLOTS';
  }

  get todoList(): ITodo[] {
    return [
      {
        id: 12,
        isComplete: true,
        text: 'Slots ',
      } as ITodo,
      {
        id: 13,
        isComplete: false,
        text: 'Directives ',
      } as ITodo,
      {
        id: 14,
        isComplete: true,
        text: 'watchers',
      } as ITodo,
    ];
  }
}

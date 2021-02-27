import { Component, Vue } from 'vue-property-decorator';
import { Person } from './utill/person';

@Component
export default class TsDecorators extends Vue {
    get result(): string {
        return 'CONSOLE TEXT';
    }

    doHook(): void {
        console.log('Call do hook');
        const p = new Person();
    }
}

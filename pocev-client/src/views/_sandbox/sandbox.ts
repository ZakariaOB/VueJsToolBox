import { Component, Vue, Emit } from 'vue-property-decorator';

export default class Sandbox extends Vue {

    get title(): string {
        return 'EV POC SANDBOX';
    }
    created(): void {
        //this.currentMode = (this.$route.query.mode as string) || '';
    }

    @Emit()
    sendValue(): number {
        return 10;
    }
}
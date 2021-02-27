import { Component, Vue } from 'vue-property-decorator';


export type LazyHandler<T> = (result: T[]) => void;

@Component
export default class ComExChild extends Vue {
    id = 'com-chilf';
    onFireEvent(): void {
        // this.$emit('lazy', 'toPass', this.anotherHandleResponse);
        this.$emit('lazy', 'toPass');
    }

    private handleResponse(id: string, arr: string[]): void {
        console.log('Just show Id');
        console.log(id);
        console.log('In a magic way inside the hanlde response');
        console.log(arr);
    }

    private anotherHandleResponse(arr: string[]): void {
        console.log('MAGIC ----------------------');
        console.log(arr);
        console.log('MAGIC ----------------------');
    }

    public couldUseRef(arr: string[]): void {
        console.log('CouldUseRef ----------------------');
        console.log(arr);
        console.log('CouldUseRef ----------------------');
    }
}
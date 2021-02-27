import { cloneDeep } from 'lodash';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RandomTest extends Vue {
    resultTestSpreadOperatorMergingTwoObjects: string = '';
    resultAfterObjectMerge: string = '';

    mounted(): void {
        this.testSpreadOperator();
    }

    private testSpreadOperator(): void {
        const objOne = {
            name: 'Zakaria',
            age: '25'
        };
        const objTwo = {
            name: 'Adam',
            age: '20',
            height: 20
        };
        const objX = {
            name: 'Takata',
            age: '29'
        };
        const objY = {
            name: 'Obri',
            age: '33'
        };
        this.resultAfterObjectMerge = JSON.stringify({ ...objOne, ...objX, ...objY });
        this.resultTestSpreadOperatorMergingTwoObjects = JSON.stringify(cloneDeep({ ...objOne, ...objTwo }));
    }
}

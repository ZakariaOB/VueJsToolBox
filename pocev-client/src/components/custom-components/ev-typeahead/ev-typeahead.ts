import { isNullOrEmpty } from '@/utils/isNullOrEmpty';
import { isNullOrUndefined } from '@/utils/isNullOrUndefined';
import { Select } from 'element-ui';
import ts from 'typescript';
import { Component, Prop, Vue } from 'vue-property-decorator';

export type dataLoaderHandler<T> = (result: T[]) => void;

interface ItemOption {
    label: string;
    value: string;
}

@Component({
    components: {
        Select
    }
})
export default class EvTypeahead<T> extends Vue {
    @Prop({ default: false })
    isMultiple: boolean;

    @Prop()
    labelParseAttribute: string;

    @Prop()
    valueParseAttribute: string;

    @Prop()
    value: T | T[];

    loading = false;
    options: ItemOption[] = [];

    remoteData: T[] = [];

    model: ItemOption[] = [];

    public onLoadData(query: string): void {
        this.$emit('onLoadData', query, this.handleLoadData);
    }

    onSelection(selected: string[]): void {
        if (isNullOrEmpty(selected)) {
            return;
        }
        const selectedValues = this.remoteData.filter((r) => selected.some((v) => this.isMatch(v, r)));
        this.$emit('input', selectedValues);
    }

    private handleLoadData(remoteData: T[]) {
        if (isNullOrEmpty(remoteData)) {
            return;
        }
        this.remoteData = remoteData;
        this.options = this.remoteData.map((el) => this.convertToOption(el));
    }

    private convertToOption(el: T): ItemOption {
        if (isNullOrUndefined(el)) {
            return null;
        }
        return {
            label: eval(ts.transpile(`el.${this.labelParseAttribute}`)),
            value: eval(ts.transpile(`el.${this.valueParseAttribute}`))
        } as ItemOption;
    }

    private isMatch(optionValue: string, element: T): boolean {
        if (isNullOrUndefined(optionValue) || isNullOrUndefined(element)) {
            return false;
        }
        return optionValue == (eval(ts.transpile(`element.${this.valueParseAttribute}`)) as string);
    }
}

import { Guid } from '@/utils/guid';
import { isNullOrUndefined } from '@/utils/isNullOrUndefined';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

declare const $: any;

@Component
export default class Collapsing extends Vue {
    @Prop({ default: 'collapsing-component' })
    id: string;

    @Prop({ default: '' })
    title: string;

    @Prop({ default: true })
    collapsed: boolean;

    @Prop({ default: false })
    small: boolean;

    isCollapsed = true;
    isHide = true;

    private collapseId: string = Guid.create();

    get collapseContentSelector(): string {
        return `#${this.collapseContentId}`;
    }

    get collapseContentId(): string {
        return `${this.id}-collapse-content-${this.collapseId}`;
    }

    get collapseHeaderId(): string {
        return `${this.id}-collapse-header-${this.collapseId}`;
    }

    created(): void {
        this.isCollapsed = this.collapsed;
        this.isHide = this.collapsed;
    }

    mounted(): void {
        $(this.collapseContentSelector).on('show.bs.collapse', this.onCollapseShow.bind(this));
        $(this.collapseContentSelector).on('shown.bs.collapse', this.onCollapseShown.bind(this));
        $(this.collapseContentSelector).on('hide.bs.collapse', this.onCollapseHide.bind(this));
        $(this.collapseContentSelector).on('hidden.bs.collapse', this.onCollapseHidden.bind(this));

        console.log(this.collapsed);
        this.toggleCollapse(true);
    }

    toggleCollapse(show: boolean = null): void {
        if (isNullOrUndefined(show)) {
            $(this.collapseContentSelector).collapse('toggle');
        } else {
            $(this.collapseContentSelector).collapse(show ? 'show' : 'hide');
        }
        console.log('Toggle collapse');
    }

    @Watch('collapsed')
    onCollapseChange(newCollapsed: boolean): void {
        console.log(this.isCollapsed);
        this.toggleCollapse(newCollapsed);
    }

    private onCollapseShow(event: Event): void {
        event.stopImmediatePropagation();
        this.$emit('show');
        this.isCollapsed = false;
        this.isHide = false;
    }

    private onCollapseShown(event: Event): void {
        event.stopImmediatePropagation();
        this.$emit('shown');
    }

    private onCollapseHide(event: Event): void {
        event.stopImmediatePropagation();
        this.$emit('hide');
        this.isHide = true;
    }

    private onCollapseHidden(event: Event): void {
        event.stopImmediatePropagation();
        this.$emit('hidden');
        this.isCollapsed = true;
    }
}

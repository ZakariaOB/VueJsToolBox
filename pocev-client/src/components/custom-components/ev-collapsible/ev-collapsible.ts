import { Guid } from '@/utils/guid';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

declare const $: any;

@Component
export default class EvCollapsible extends Vue {
    @Prop({ default: 'collapsing-component' })
    id: string;

    @Prop({ default: true })
    collapsed: boolean;

    @Prop()
    title!: boolean;

    isCollapsed = false;

    private collapseId: string = Guid.create();

    get collapseContentSelector(): string {
        return `#${this.collapseContentId}`;
    }

    get collapseContentId(): string {
        return `${this.collapseContentOneId}-${this.collapseId}`;
    }

    get collapseContentOneId(): string {
        return 'CollapseOne';
    }

    get collapseHeaderId(): string {
        return `${this.id}-collapse-header-${this.collapseId}`;
    }

    mounted(): void {
        $(this.collapseContentSelector).on('show.bs.collapse', this.onCollapseShow.bind(this));
        $(this.collapseContentSelector).on('shown.bs.collapse', this.onCollapseShown.bind(this));
        $(this.collapseContentSelector).on('hide.bs.collapse', this.onCollapseHide.bind(this));
        $(this.collapseContentSelector).on('hidden.bs.collapse', this.onCollapseHidden.bind(this));
        this.toggleCollapse(this.collapsed);
    }

    toggleCollapse(show = false): void {
        if (!show) {
            $(this.collapseContentSelector).collapse('toggle');
        } else {
            $(this.collapseContentSelector).collapse(show ? 'show' : 'hide');
        }
    }

    @Watch('collapsed')
    onCollapseChange(newCollapsed: boolean): void {
        this.toggleCollapse(newCollapsed);
    }

    private onCollapseShow(event: Event): void {
        event.stopImmediatePropagation();
        this.$emit('show');
        this.isCollapsed = false;
    }

    private onCollapseShown(event: Event): void {
        event.stopImmediatePropagation();
        this.$emit('shown');
    }

    private onCollapseHide(event: Event): void {
        event.stopImmediatePropagation();
        this.$emit('hide');
    }

    private onCollapseHidden(event: Event): void {
        event.stopImmediatePropagation();
        this.$emit('hidden');
        this.isCollapsed = true;
    }
}

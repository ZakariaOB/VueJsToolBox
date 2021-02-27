import { MenuItem } from '@/models/menu-item';
import { MenuSubItem } from '@/models/menu-sub-item';
import { Component, Vue } from 'vue-property-decorator';

/*@Component({
  components: {
    PeSlots
  }
})*/
@Component
export default class PeSlidingMenu extends Vue {
    isMenuVueActive = true;
    defaultSubItem: MenuItem = {
        title: 'Vue JS',
        subItems: [
            {
                title: 'Slots',
                componentProps: null,
                description: 'Slots tutorial and pocs',
                componentName: 'PeSlots'
            } as MenuSubItem
        ]
    } as MenuItem;

    activeMenuItem: MenuItem = this.defaultSubItem;
    currentComponent?: string = '';
    menuActiveIndex = 0;

    get menuItems(): MenuItem[] {
        return [
            {
                title: 'VueJS General',
                subItems: [
                    {
                        title: 'Slots',
                        componentProps: null,
                        description: 'Slots tutorial and pocs',
                        componentName: 'PeSlots'
                    } as MenuSubItem,
                    {
                        title: 'Example for typeahead',
                        componentProps: null,
                        description: 'Example for typeahead',
                        componentName: 'ComExampleForTypeAhead'
                    } as MenuSubItem,
                    {
                        title: 'V-model directive',
                        componentProps: null,
                        description: 'V-model on custom component',
                        componentName: 'VModelEx'
                    } as MenuSubItem,
                    {
                        title: 'Typeahead Sandbox',
                        componentProps: null,
                        description: 'Typeahead various examples',
                        componentName: 'TypeAheadSandbox'
                    } as MenuSubItem
                ]
            } as MenuItem,
            {
                title: 'TypeScript',
                subItems: [
                    {
                        title: 'TypeScript',
                        componentProps: null,
                        description: 'Typescript Decorators tutorial',
                        componentName: 'TsDecorators'
                    } as MenuSubItem
                ]
            } as MenuItem,
            {
                title: 'ELement examples',
                subItems: [
                    {
                        title: 'ELement examples',
                        componentProps: null,
                        description: 'ELement examples',
                        componentName: 'ElementExamples'
                    } as MenuSubItem
                ]
            } as MenuItem,
            {
                title: 'ToolBox',
                subItems: [
                    {
                        title: 'Collapsibles',
                        componentProps: null,
                        description: 'Collapsibles',
                        componentName: 'Collapsibles'
                    } as MenuSubItem
                ]
            } as MenuItem,
            {
                title: 'RxJs',
                subItems: [
                    {
                        title: 'RxJs create observable',
                        componentProps: null,
                        description: 'First examples',
                        componentName: 'RxjsCreate'
                    } as MenuSubItem,
                    {
                        title: 'Map operators',
                        componentProps: null,
                        description: 'Map, MergeMap, ConcatMap, exaustMap',
                        componentName: 'RxJsMap'
                    } as MenuSubItem
                ]
            } as MenuItem,
            {
                title: 'Algos && Dts',
                subItems: [
                    {
                        title: 'LinkedList',
                        componentProps: null,
                        description: 'Linked list samples',
                        componentName: 'LinkedList'
                    },
                    {
                        title: 'Stacks and queues',
                        componentProps: null,
                        description: 'Stack && Queues',
                        componentName: 'StackQueue'
                    }
                ]
            } as MenuItem,
            {
                title: 'Random tests all and nothing !',
                subItems: [
                    {
                        title: 'RandomTest',
                        componentProps: null,
                        description: 'Random testes',
                        componentName: 'RandomTest'
                    }
                ]
            } as MenuItem
        ];
    }

    onMenuItemClick(item: MenuItem, index: number): void {
        if (item) {
            this.menuActiveIndex = index;
            this.isMenuVueActive = true;
            this.activeMenuItem = item;
        }
    }

    onSubMenuItemClick(item: MenuSubItem): void {
        if (item) {
            this.isMenuVueActive = false;
            this.currentComponent = item.componentName;
        }
    }
}

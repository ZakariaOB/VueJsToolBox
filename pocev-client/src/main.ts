import '@/element-ui';
import Vue from 'vue';
import App from './App.vue';
import LinkedList from './components/algo-js-components/linked-list/linked-list.vue';
import StackQueue from './components/algo-js-components/StackQueues/stack-queue.vue';
import ElementExamples from './components/element-examples/element-examples.component.vue';
import RandomTest from './components/random-test/random-test.vue';
import RxJsMap from './components/rxjs-components/operators/rx-js-map/rx-js-map.vue';
import RxjsCreate from './components/rxjs-components/rx-js-create-observable/rxjs-create.vue';
import TsDecorators from './components/typescript-components/decorators/ts-decorators.vue';
import Collapsibles from './components/vue-components/collapsibles/collapsibles/collapsibles.vue';
import ComExampleForTypeAhead from './components/vue-components/com-example-for-typeahead/com-example-for-typeahead.vue';
import PeSlots from './components/vue-components/slots/pe-slots.vue';
import TypeAheadSandbox from './components/vue-components/typeahead-sandbox/typeahead-sandbox.vue';
import VModelEx from './components/vue-components/v-model-ex/v-model-ex.vue';
import router from './router';
import store from './store';

// Entry components : Dynamically instanciated
Vue.component('PeSlots', PeSlots);
Vue.component('TsDecorators', TsDecorators);
Vue.component('ElementExamples', ElementExamples);
Vue.component('Collapsibles', Collapsibles);
Vue.component('RxjsCreate', RxjsCreate);
Vue.component('RxJsMap', RxJsMap);
Vue.component('ComExampleForTypeAhead', ComExampleForTypeAhead);
Vue.component('VModelEx', VModelEx);
Vue.component('TypeAheadSandbox', TypeAheadSandbox);
Vue.component('LinkedList', LinkedList);
Vue.component('StackQueue', StackQueue);
Vue.component('RandomTest', RandomTest);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');

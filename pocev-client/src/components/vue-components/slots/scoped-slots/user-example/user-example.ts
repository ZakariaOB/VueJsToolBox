import { Component, Vue } from 'vue-property-decorator';

@Component
export default class UserExample extends Vue {
    user: any = {
        lastName: 'Zakaria',
        firstName : 'Boukhris'
    }
}
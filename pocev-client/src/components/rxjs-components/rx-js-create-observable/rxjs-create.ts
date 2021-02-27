import EvCollapsible from '@/components/custom-components/ev-collapsible/ev-collapsible.vue';
import { concat, interval, Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Component, Vue } from 'vue-property-decorator';
import { Course } from '../utils/course';
import { RxJsHelper } from '../utils/rx-js-helper';

@Component({
    components: { EvCollapsible }
})
export default class RxjsCreate extends Vue {
    beginnerCourses: Course[] = [];
    advancedCourses: Course[] = [];

    $beginnerCourses: Observable<Course[]>;
    $advancedCourses: Observable<Course[]>;

    $coursesObservable: any;

    mounted() {
        // this.notRecommendedWay();
        this.$coursesObservable = RxJsHelper.CreateHttpObservable('/api/evpoc').pipe(
            map((res) => Object.values(res)),
            shareReplay()
        );

        // Always use operator instead of logic inside subscriptions
        this.goodWayToUseObservables();

        // Concat
        this.concatExample();

        // Concat with an observable that will not complete
        // this.concatExamplesWithOneObservableThatDoesNotComplete();
    }

    // Not recommended way
    private notRecommendedWay(): void {
        this.$coursesObservable.subscribe((courses: Course[]) => {
            this.advancedCourses = courses.filter((el) => el.category == 'Advanced');
            this.beginnerCourses = courses.filter((el) => el.category == 'Beginner');
        });
    }

    // Using the map operator
    private goodWayToUseObservables(): void {
        this.$beginnerCourses = this.$coursesObservable.pipe(
            map((courses: any) => courses.filter((el: any) => el.category == 'Beginner'))
        );
        this.$advancedCourses = this.$coursesObservable.pipe(
            map((courses: any) => courses.filter((el: any) => el.category == 'Advanced'))
        );

        this.$beginnerCourses.subscribe((elements) => (this.beginnerCourses = elements));
        this.$advancedCourses.subscribe((elements) => (this.advancedCourses = elements));
    }

    private concatExample(): void {
        var $values_1 = of(20, 30, 40);
        var $values_2 = of(70, 80, 100);
        var $values_3 = of(120, 1200, 12000);

        var $valuesObs = concat($values_1, $values_2, $values_3);
        $valuesObs.subscribe((item) => console.log(item));
    }

    private concatExamplesWithOneObservableThatDoesNotComplete(): void {
        var $values1 = interval(1000);
        var $values2 = of(70, 80, 100);
        var $values3 = of(120, 1200, 12000);

        var $valuesObs = concat($values1, $values2, $values3);
        $valuesObs.subscribe((item) => console.log(item));
    }
}

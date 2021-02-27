import EvCollapsible from '@/components/custom-components/ev-collapsible/ev-collapsible.vue';
import { RadioGroup } from 'element-ui';
import {
    EMPTY,
    fromEvent,
    interval,
    Observable,
    ObservableInput,
    ObservedValueOf,
    OperatorFunction,
    Subscription
} from 'rxjs';
import {
    concatMap,
    debounceTime,
    distinctUntilChanged,
    exhaustMap,
    map,
    mergeMap,
    switchMap,
    take
} from 'rxjs/operators';
import { Component, Vue } from 'vue-property-decorator';

export type mapOperator<T, O extends ObservableInput<any>> = (
    project: (value: T, index: number) => O,
    concurrent?: number
) => OperatorFunction<T, ObservedValueOf<O>>;

@Component({
    components: { EvCollapsible, RadioGroup }
})
export default class RxJsMap extends Vue {
    resultsMap: string[] = [];
    resultsMergeMap: string[] = [];
    resultsConcatMap: string[] = [];
    resultsExaustMap: string[] = [];
    resultsSwitchMap: string[] = [];

    labelRadio = '';
    times$: Observable<number> = interval(5000).pipe(take(10));
    inputObservable$: Observable<Event>;
    textInput = '';

    currentSubscriptions: Subscription[] = [];

    get resutMapConsole(): string {
        return this.formatResult(this.resultsMap);
    }

    get resutMergeMapConsole(): string {
        return this.formatResult(this.resultsMergeMap);
    }

    get resutMergeConcatConsole(): string {
        return this.formatResult(this.resultsConcatMap);
    }

    get resutExaustConcatConsole(): string {
        return this.formatResult(this.resultsExaustMap);
    }

    get resultSwitchMapConsole(): string {
        return this.formatResult(this.resultsSwitchMap);
    }

    get map(): string {
        return 'map';
    }

    get mergemap(): string {
        return 'mergemap';
    }

    get concatmap(): string {
        return 'concatmap';
    }

    get exhaustMap(): string {
        return 'exhaustmap';
    }

    get switchMap(): string {
        return 'switchmap';
    }

    mounted(): void {
        const obsText = document.querySelector('#obs-text');
        this.inputObservable$ = fromEvent(obsText, 'input');
    }

    public clear(): void {
        this.resultsMap = this.resultsMergeMap = this.resultsConcatMap = this.resultsExaustMap = this.resultsSwitchMap = [];
        this.textInput = '';
    }

    public changeOperator(): void {
        console.log(this.labelRadio);
        switch (this.labelRadio) {
            case this.map:
                this.prepareDemoMapForSubscription();
                break;
            case this.mergemap:
                this.prepareDemoMergeMap();
                break;
            case this.concatmap:
                this.prepareDemoConcatMap();
                break;
            case this.exhaustMap:
                this.prepareExaustMap();
                break;
            case this.switchMap:
                this.prepareSwitchMap();
                break;
        }
    }

    /**
     * The map function will convert an observable to another one
     * without any execution of the map result unlink for example : mergeMap
     * YOU NEED ALWAYS TO SUBSCRIBE TO THE MAP RESULT
     */
    public prepareDemoMapForSubscription(): void {
        this.currentSubscriptions.forEach((obs) => obs.unsubscribe());
        this.resultsMap = [];
        const obsMMap$ = this.inputObservable$.pipe(
            map((el) => (el.target as HTMLInputElement).value + ' 1'),
            map((el) => el + ' 2 '),
            map((el) => el + ' 3')
        );
        const subscription = obsMMap$.subscribe((o) => {
            this.resultsMap.push(o);
        });
        this.currentSubscriptions.push(subscription);
    }

    /*
     * The merge map method will run all the available observables in asynchronous way
     * If you tap something a call to the api is scheduled and will not wait until the current call
     * is done . Unlike the concatMap
     */
    public prepareDemoMergeMap(): void {
        this.resultsMergeMap = [];

        const mMap: mapOperator<Event, Observable<string>> = (
            project: (value: Event, index: number) => Observable<string>,
            concurrent?: number
        ) => mergeMap(project, concurrent);

        this.prepareDemoMapOperator(mMap, this.mergemap);
    }

    /*
     * The concat map operator will not run any observable until the previous one is completed
     */
    public prepareDemoConcatMap(): void {
        this.resultsConcatMap = [];

        const cMap: mapOperator<Event, Observable<string>> = (
            project: (value: Event, index: number) => Observable<string>
        ) => concatMap(project);

        this.prepareDemoMapOperator(cMap, this.concatmap);
    }

    /*
     * Projects each source value to an Observable which is merged in the output
     * Observable only if the previous projected Observable has completed.
     * Button : Multiple clicks example is a good use case here .
     */
    public prepareExaustMap(): void {
        this.resultsExaustMap = [];

        const eMap: mapOperator<Event, Observable<string>> = (
            project: (value: Event, index: number) => Observable<string>
        ) => exhaustMap(project);

        this.prepareDemoMapOperator(eMap, this.exhaustMap);
    }

    /* Projects each source value to an Observable which is merged in the output Observable, emitting
     * values only from the most recently projected Observable.
     */
    public prepareSwitchMap(): void {
        this.resultsSwitchMap = [];

        const eMap: mapOperator<Event, Observable<string>> = (
            project: (value: Event, index: number) => Observable<string>
        ) => switchMap(project);

        this.prepareDemoMapOperator(eMap, this.switchMap);
    }

    /* This uses debounceTime
  /* debounceTime : Discard emitted values that take less than the specified time between output
                    Preferred value : 400
     distinctUntilChanged : Returns an Observable that emits all items emitted by the source
                          Observable that are distinct by comparison from the previous item.
  */
    private prepareDemoMapOperator(operator: mapOperator<Event, Observable<string>>, op: string) {
        // Used to relase all the current observables
        this.currentSubscriptions.forEach((obs) => obs.unsubscribe());
        const result: string[] = [];
        const obs$ = this.inputObservable$.pipe(
            operator((el) => {
                const value = (el.target as HTMLInputElement).value;
                if (value === '') {
                    return EMPTY;
                }
                return this.getObsCourseByName((el.target as HTMLInputElement).value);
            }),
            debounceTime(400),
            distinctUntilChanged()
        );
        const subscription = obs$.subscribe((o) => {
            if (o) {
                result.push(o);
            }
        });
        switch (op) {
            case this.mergemap:
                this.resultsMergeMap = result;
                break;
            case this.concatmap:
                this.resultsConcatMap = result;
                break;
            case this.exhaustMap:
                this.resultsExaustMap = result;
                break;
            case this.switchMap:
                this.resultsSwitchMap = result;
                break;
        }
        this.currentSubscriptions.push(subscription);
    }

    /*
     * Always think about commenting your code
     * We can also abort this observable if we unsubscibe from it
     */
    private getObsCourseByName(courseName: string): Observable<string> {
        const url = '/api/evpoc/get-by-name/' + courseName;
        const $http = Observable.create(
            (observer: {
                next: (arg0: string) => string;
                console: { error: (arg0: any) => any };
                complete: () => void;
            }) => {
                const controller = new AbortController();
                const signal = controller.signal;

                fetch(url, { signal })
                    .then((res) => res.text())
                    .then((response) => observer.next(response))
                    .then(() => observer.complete())
                    // tslint:disable-next-line:no-console
                    .catch((err) => console.log(err));

                return () => controller.abort();
            }
        );
        return $http;
    }

    private formatResult(result: string[]): string {
        if (result.length > 0) {
            return result.join('\n');
        }
        return '';
    }
}

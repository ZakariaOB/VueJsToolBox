import { dataLoaderHandler } from '@/components/custom-components/ev-typeahead/ev-typeahead';
import EvTypeahead from '@/components/custom-components/ev-typeahead/ev-typeahead.vue';
import { Observable } from 'rxjs';
import { Component, Vue } from 'vue-property-decorator';
import { City } from './util/city';

const nameof = <T>(name: keyof T) => name;

@Component({
    components: {
        EvTypeahead
    }
})
export default class TypeAheadSandbox extends Vue {
    cities: City[] = [];

    public onLoadCities(query: string, next: dataLoaderHandler<City>) {
        this.getCities(query).subscribe((data) => next(data));
    }

    public get cityName(): string {
        return nameof<City>('CityName');
    }

    public get idCity(): string {
        return nameof<City>('Id');
    }

    public get consoleResult(): string {
        const arr = this.cities.map((c) => c.CityName);
        return arr.join(' | ');
    }

    private getCities(query: string): Observable<City[]> {
        const url = '/api/evpoc/city/' + query;
        const $http = Observable.create(
            (observer: { next: (arg0: any) => City; console: { error: (arg0: any) => any }; complete: () => void }) => {
                const controller = new AbortController();
                const signal = controller.signal;

                fetch(url, { signal })
                    .then((res) => res.json())
                    .then((response) => observer.next(this.convertToCities(response)))
                    .then(() => observer.complete())
                    .catch((err) => console.log(err));

                return () => controller.abort();
            }
        );
        return $http;
    }

    private convertToCities(response: any): City[] {
        const citiesJson: any[] = Array.of(response);
        console.log(citiesJson);
        return citiesJson[0].map((el: any) => {
            return new City(el.id, el.cityName);
        });
    }
}

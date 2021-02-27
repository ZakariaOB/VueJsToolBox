import { groupBy, uniq } from 'lodash';
import ServiceScheme from './general-classes/service-scheme';

export default class GeneralMethod {
    static testGrouping(serviceSchemes: ServiceScheme[]) {
        var grouped = groupBy(serviceSchemes, 'serviceName');
        var result = Object.keys(grouped).map((name) => {
            const schemes = grouped[name].flatMap((el) => el.schemes);
            return <ServiceScheme>{ serviceName: name, schemes: uniq(schemes) };
        });
        return result;
    }
}

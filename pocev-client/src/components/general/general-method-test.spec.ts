import 'jest';
import ServiceScheme from './general-classes/service-scheme';
import GeneralMethod from './general-methods';

describe('TEST GENERAL METHODS', () => {
    test('TEST GROUP BY USING LOADASH', () => {
        var data = [
            <ServiceScheme>{ serviceName: 'Service 1', schemes: ['Scheme 1', 'Scheme 43'] },
            <ServiceScheme>{ serviceName: 'Service 2', schemes: ['Scheme 88', 'Scheme 5'] },
            <ServiceScheme>{ serviceName: 'Service 1', schemes: ['Scheme 1', 'Scheme 88'] }
        ];
        const result = GeneralMethod.testGrouping(data);
        console.log(result);
    });
});

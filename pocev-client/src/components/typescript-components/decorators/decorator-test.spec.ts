import 'jest';
import { Greeter } from './utill/doc-typescript/class-deco';

describe('TEST DECORATORS', () => {
    /*test('TS decorator example', () => {
        const decoComponent = new TsDecorators();
        decoComponent.doHook();
        expect(decoComponent).toBeDefined();
    });*/

    /*
    test('Decorator composition official docs', () => {
        const c = new C();
        expect(c).toBeDefined();
    });*/

    test('Decorator TEST Greeter', () => {
        const c = new Greeter('HI');
        delete c.greeting;
        expect(c).toBeDefined();
    });
});
